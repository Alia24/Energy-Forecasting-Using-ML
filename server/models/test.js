// const fs = require('fs');
// const { Panel } = require('./Panel');
//
// const panel = new Panel(20, 85, 2000, 20, 0.2, 233);
//
// // Convert the object to JSON
// const panel_json = JSON.stringify(panel, null, 2);
//
// // Save the JSON to a file
// fs.writeFileSync('panel.json', panel_json);

const fs = require('fs');
const path = require('path');

const { FuelPriceCalculator } = require('./FuelPriceCalculator');
const { OldSystemCostCalculator } = require('./OldSystemCostCalculator');
const { Panel } = require('./Panel');
// const {Inverter} = require("./Inverter");
const {Battery} = require("./Battery");
const { Inverter } = require('./Inverter');
const {DieselGenerator} = require("./DieselGenerator");

function save_json(object){
    const jsonString = JSON.stringify(object, null, 2);

    fs.writeFile('Panel.json', jsonString, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      }
    });
}

function encodeImageToBase64(filePath) {
    const imageData = fs.readFileSync(filePath);  // Read image file as binary data
    return imageData.toString('base64');         // Convert binary data to Base64 string
}

let panel_image_string = encodeImageToBase64("C:\\Users\\Khaled Al-Shaer\\PycharmProjects\\Energy-Forecasting-Using-ML\\images\\maxeon_solar.jpeg")
// let inverter_image_string = encodeImageToBase64("C:\\Users\\Khaled Al-Shaer\\PycharmProjects\\Energy-Forecasting-Using-ML\\images\\Inverter_image.jpeg");
// let battery_image = encodeImageToBase64("C:\\Users\\Khaled Al-Shaer\\PycharmProjects\\Energy-Forecasting-Using-ML\\images\\powerwall2.jpg");
// let generator_image = encodeImageToBase64("C:\\Users\\Khaled Al-Shaer\\PycharmProjects\\Energy-Forecasting-Using-ML\\images\\generator.jpeg")


let panel = new Panel(panel_image_string, "Maxeon 6 AC Black 415W", 415, 600, 30, 1, 100, 6_000);
// let inverter = new Inverter("SolarEdge HD Wave SE10000H-US", inverter_image_string, 2600, 0.99, 13, 100, 2000);
// let battery = new Battery("Tesla Powerwall 2", battery_image, 10_000, 13.5, 1, 200, 13, 7000);
// let generator = new DieselGenerator("Generac XD5000E", generator_image, 1650, 5000, 800, 13, 2000, 67.3);

save_json(panel);