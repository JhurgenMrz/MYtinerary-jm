const citiesCtrl = {}
const City = require('../models/City');


citiesCtrl.getCities = async (req, res) => {
    const cities = await City.find()
    res.json(cities)
}


module.exports = citiesCtrl