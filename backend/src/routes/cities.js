const {Router} = require('express')
const router = Router();
let mongoose = require('../lib/mongodb')
let City = require('../models/City')

// const {getCities} = require('../controllers/cities.controller')

router.route('/all')
    .get((req, res)=>{
        City.find((err, cities)=>{
            res.json(cities)
        })
    })

router.post('/add',async (req,res)=>{
        const {city_name, country} = req.body
        console.log(city_name,country);
        const newCity = new City({country, city_name})
        await newCity.save()
        res.send(newCity);
    })

router.delete('/:idCity',async (req,res)=>{
    const {idCity} = req.params;
    await City.findByIdAndDelete(idCity)
    res.json({message:'City Deleted'});
})

module.exports = router