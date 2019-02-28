const VisualRecognitionV3 = require("watson-developer-cloud/visual-recognition/v3");
// const fs = require("fs");
const apiKey = require("../config");

const visualRecognition = new VisualRecognitionV3({
  version: "2018-03-19",
  iam_apikey: apiKey
});

exports.analyseImage = url => {
  return new Promise((resolve, reject) => {
    const images_file = url;
    const owners = ["IBM"];
    const threshold = 0.6;

    const params = {
      url: images_file,
      owners: owners,
      threshold: threshold
    };

    visualRecognition.classify(params, function(err, response) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.stringify(response, null, 2));
      }
    });
  });
};

// exports.findRecipes = (foodItem, cb) => {
//   return new Promise((resolve, reject) => {});
// };
