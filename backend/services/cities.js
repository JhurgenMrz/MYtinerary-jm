const City = require('../models/City');


class CitiesServices {
    async getCities(){

        try{
            const cities = await City.find()
            return cities || []
        }catch (err){
            return err
        }
        
    }
    async createCity(city){

        try{
            const cityCreated = await City.create(city)
            return cityCreated || []
        }catch (err){
            return err
        }
        
    }
    async deleteCity(cityId){
        // console.log(cityId)
        try{
            const cityCreated = await City.findByIdAndDelete(cityId)
            return cityCreated || []
        }catch (err){
            return err
        }
        
    }
}



module.exports = CitiesServices