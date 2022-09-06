const model = require("../model/user");


exports.createuser = async(req, res) => {
    try {
        const newuser = await new model(req.body).save();
        res.json(newuser);
    } catch (err) {
        res.json(err);
    }

}
exports.getall = async(req, res) => {
    try {
        const user = await model.find();
        res.json(user);
    } catch (err) {
        res.json(err);
    }

}