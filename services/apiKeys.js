const ApiKyes = require('../models/ApiKeys');

class ApiKeyService {
  async getApiKey({ token }) {
    try {
      const apiKey = await ApiKyes.findOne({ token });
      return apiKey || [];
    } catch (err) {
      return err;
    }
  }
}

module.exports = ApiKeyService;
