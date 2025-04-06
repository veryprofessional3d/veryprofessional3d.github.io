import { HeliosDevice, HeliosPoint, getHeliosDevices } from './library/helios_dac.js';

let helios = null;

async function setup() {
  createCanvas(600, 600);
  background(0);
  stroke(255);
  noFill();
  ellipse(width/2, height/2, 200);

  const devices = await getHeliosDevices();

  if (devices.length === 0) {
    console.log("Requesting Helios DAC access...");
    helios = await navigator.usb.requestDevice({
      filters: [{ vendorId: 0x1209, productId: 0xE500 }]
    }).then(device => new HeliosDevice(device));
  } else {
    helios = devices[0];
  }

  if (helios) {
    await helios.connect();
    console.log("Connected to DAC!");
    sendCircleFrame();
  }
}

function draw() {
  // just show a preview
  background(0);
  stroke(0, 255, 0);
  noFill();
  ellipse(width/2, height/2, 200);
}

async function sendCircleFrame() {
  const points = [];
  const radius = 32767 / 2; // full 16-bit DAC range
  const numPoints = 100;

  for (let i = 0; i < numPoints; i++) {
    const theta = TWO_PI * i / numPoints;
    const x = Math.round(radius * Math.cos(theta)) + radius;
    const y = Math.round(radius * Math.sin(theta)) + radius;

    points.push(new HeliosPoint(x, y, 255, 255, 255));
  }

  await helios.sendFrame(points, 30000, true);
}
