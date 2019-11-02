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
    router.post('/', async function(req, res){
        const {body: city} = req
        const cityCreated = await citiesServices.createCity(city)
        res.status(201).json({
            data: cityCreated,
            message: 'City Created'
        })
    })
    router.delete('/:CityId', async function(req, res){
        const {CityId} = req.params
        const cityDeleted = await citiesServices.deleteCity(CityId)
        res.status(201).json({
            data: cityDeleted,
            message: 'City Deleted'
        })
    })

}


module.exports = citiesApi