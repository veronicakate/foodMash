const VisualRecognitionV3 = require("watson-developer-cloud/visual-recognition/v3");
// const fs = require("fs");

const visualRecognition = new VisualRecognitionV3({
  version: "2018-03-19",
  iam_apikey: "KSeMYMk3N1F5AfCs-cpVoh82CevVJPCsjmZAGwzCKp0K"
});

exports.analyseImage = (url, cb) => {

 // return new Promise((resolve, reject) => {

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
    cb(err);
  } else {
    cb(null, response);
   // resolve(JSON.stringify(response, null, 2))
  }
});

//});

}; 
