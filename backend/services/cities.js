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
}



module.exports = CitiesServices