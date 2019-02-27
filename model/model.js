const VisualRecognitionV3 = require("watson-developer-cloud/visual-recognition/v3");
const fs = require("fs");

const visualRecognition = new VisualRecognitionV3({
  version: "2018-03-19",
  iam_apikey: "KSeMYMk3N1F5AfCs-cpVoh82CevVJPCsjmZAGwzCKp0K"
});

const images_file = fs.createReadStream("../fruitbowl.jpg");
const owners = ["me"];
const threshold = 0.6;

const params = {
  images_file: images_file,
  owners: owners,
  threshold: threshold
};

visualRecognition.classify(
  (params,
  (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  })
);
