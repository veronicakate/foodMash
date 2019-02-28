const { analyseImage, findRecipes } = require("../model/model.js");
const axios = require("axios");

exports.getImageInfo = (req, res) => {
  //console.log(req.body);

  analyseImage(req.body.url).then(imageInfo => {
    // console.log(imageInfo);
    // console.log(typeof imageInfo);
    let result = JSON.parse(imageInfo);
    let foodItem = result.images[0].classifiers[0].classes[0].class;
    console.log(foodItem)
    //console.log(imageInfo["classfiers"]);
    
    axios.get(`https://www.food2fork.com/api/search?key=58c867b3492af887ca4aaf0c7f19edea&q=${foodItem}&page=1`)
  .then(function (response) {
    //console.log(response.data);
    let recipes = response.data;
   // console.log(recipes);
    res.render('views', recipes)
    // res.send(response.data);

    // <%= console.log(recipes[0].source_url) %>

  })
  .catch(function (error) {
    console.log(error);
  });
    //sync
    //return promise
  });
};
