const {Router} = require('express')
const router = Router();

const {getCities} = require('../controllers/cities.controller')

router.route('/')
    .get(getCities)

module.exports = router