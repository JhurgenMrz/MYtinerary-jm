const express = require('express')

const CitiesServices = require('../../services/cities')

function citiesApi(app){
    const router = express.Router()
    const citiesServices = new CitiesServices()
    app.use('/api/cities', router)


    router.get('/', async function(req, res){
        const cities = await citiesServices.getCities()

        res.status(200).json({
            data: cities,
            message: 'Cities Listed'
        })
    })

}

// router.post('/add',async (req,res)=>{
//         const {city_name, country} = req.body
//         console.log(city_name,country);
//         const newCity = new City({country, city_name})
//         await newCity.save()
//         res.send(newCity);
//     })

// router.delete('/:idCity',async (req,res)=>{
//     const {idCity} = req.params;
//     await City.findByIdAndDelete(idCity)
//     res.json({message:'City Deleted'});
// })

module.exports = citiesApi