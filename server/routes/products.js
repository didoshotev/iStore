const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.products.get);

router.get('/:category/:id', controllers.products.getById);

router.get('/:iphone', controllers.products.getIphones);

router.get('/:ipad', controllers.products.getIpads);

router.get('/:mac', controllers.products.getMacs);

router.get('/:accessory', controllers.products.getAccessories);

router.post('/', auth(), controllers.products.post);

router.put('/:id', auth(), controllers.products.put);

router.delete('/:id', auth(), controllers.products.delete);

module.exports = router;