const router = require("express").Router();
const actionServices = require("../services/action-services");

//Add some action
router.post("/add-action", actionServices.addAction);

//Modify some action
router.post("/edit-action", actionServices.editAction);

//Delete on action by action_id
router.post("/delete-action", actionServices.deleteAction)

//Get single action with card_id and action_type_id
router.post("/get-single-action", actionServices.getSingleAcion);

//Get single action with action_id 
router.post("/get-action-by-id", actionServices.getSingleAcionbyId);

//Get single action with action_id and action_type_id
router.post("/get-default-action", actionServices.getDefaultActionType);

//Get default action with card_id and action_type_id
router.post("/get-default-action-detail", actionServices.getDefaultAction);

//Set default action in cards table
router.post("/default-action", actionServices.defaultAction);

//Get all action types list
router.get("/get-action-list", actionServices.getAllActionTypes)

//Get action type by Action ID
router.post("/get-action-type", actionServices.getActionTypeById)

module.exports = router;
