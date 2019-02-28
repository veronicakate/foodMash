const { analyseImage, findRecipes } = require("../model/model.js");
const axios = require("axios");

exports.getImageInfo = (req, res) => {
  //console.log(req.body);

  analyseImage(req.body.url).then(imageInfo => {
    // console.log(imageInfo.images.classifiers.classes.class);
    // console.log(typeof imageInfo);
    let result = JSON.parse(imageInfo);
    console.log(result.images);
    //findRecipes(imageInfo);
    //sync
    //return promise
  });
};
