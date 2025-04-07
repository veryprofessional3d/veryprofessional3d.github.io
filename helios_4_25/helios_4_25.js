import { HeliosDevice, HeliosPoint, getHeliosDevices } from './library/helios_dac.js';

let helios;

async function setup() {
  createCanvas(400, 400);

  const devices = await getHeliosDevices();
  if (devices.length === 0) {
    console.log('No Helios DAC found. Requesting device...');
    helios = await connectHeliosDevice();
  } else {
    helios = devices[0];
  }

  await helios.connect();

  helios.onFrame = async (device) => {
    const points = createCirclePoints(200);
    await device.sendFrame(points, 30000);
  };

  helios.start();
}

function createCirclePoints(numPoints) {
  let points = [];
  for (let i = 0; i < numPoints; i++) {
    let angle = TWO_PI * (i / numPoints);
    let x = Math.round(2048 + 2047 * cos(angle));
    let y = Math.round(2048 + 2047 * sin(angle));
    points.push(new HeliosPoint(x, y, 255, 255, 255));
  }
  return points;
}
