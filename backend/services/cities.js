const City = require('../models/City');
const Itinerary = require('../models/Itinerary');

class CitiesServices {
	async getCities() {
		try {
			const cities = await City.find();
			return cities || [];
		} catch (err) {
			return err;
		}
	}
	async getCity(CityId) {
		try {
			const city = await City.findById(CityId);
			return city || [];
		} catch (err) {
			return err;
		}
	}
	async createCity(city) {
		try {
			const cityCreated = await City.create(city);
			return cityCreated || [];
		} catch (err) {
			return err;
		}
	}
	async updateCity(cityId, city) {
		try {
			const cityUpdated = await City.findByIdAndUpdate(cityId, city);
			return cityUpdated || [];
		} catch (err) {
			return err;
		}
	}
	async deleteCity(cityId) {
		try {
			const itinerariesDeleted = await Itinerary.deleteMany({
				city_id: cityId
			});
			const cityCreated = await City.findByIdAndDelete(cityId);
			const CityAndItinerariesDeleted = [cityCreated, itinerariesDeleted];
			return CityAndItinerariesDeleted || [];
		} catch (err) {
			return err;
		}
	}
}

module.exports = CitiesServices;
