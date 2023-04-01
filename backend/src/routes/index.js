const router = require('express').Router();
const vCard = require('vcards-js');
const presentationServices = require("../services/presentation-services")

router.use('/user-management', require('./user-routes'))
router.use('/card-management', require('./card-routes'))
router.use('/action-management', require('./action-routes'))

router.get('/:cardLink', presentationServices.presentAction)
router.get('/card/:cardLink', presentationServices.presentAction)
router.get('/action/:actionId', presentationServices.presentSelectedAction)

module.exports = router;