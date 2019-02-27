const {analyseImage} = require('../model/model.js');

exports.getImageInfo = (req, res) => {
    console.log(req.body);

    analyseImage(req.body.url, (err, imageInfo) =>{
        if (err)console.log(err)
        else {
        res.send(imageInfo)
        }
    });
}