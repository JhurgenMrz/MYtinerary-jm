const citiesCtrl = {}
const City = require('../models/City');


citiesCtrl.getCities = (req, res) => {
    City.find((err, cities)=>{
        if(err) throw err;
        console.log(cities);
        res.json(cities)

    })
}


module.exports = citiesCtrl