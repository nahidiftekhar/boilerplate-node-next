const router = require("express").Router();
const cardServices = require("../services/card-services");

//Create new card link
router.get("/create-card-link", cardServices.createCardLink);

//Add new card
router.post("/add-card", cardServices.addCard);

//Get list of cards of a single user
router.post("/list-cards", cardServices.listCards);

//Block a single card
router.post("/block-card", cardServices.blockCard);

//Unlock a single card
router.post("/unblock-card", cardServices.unblockCard);

//Enable pro services a single card
router.post("/pro-card", cardServices.proCard);

//Disable pro services a single card
router.post("/unpro-card", cardServices.unproCard);

//Activate a single card
router.post("/activate-card", cardServices.activateCard);

//Edit a single Card
router.post("/edit-single-card", cardServices.editSingleCard);

//Get stat for a card
router.post("/get-card-stat", cardServices.getStatByCardId);

//Get day-wise stat for a card
router.post("/get-daily-stat", cardServices.dailyStatByCardId);

//Get action stat for a card
router.post("/get-action-stat", cardServices.actionStatByCardId);

//List all cards
router.get("/list-all-cards", cardServices.listAllCards)

//Get details of a single card by card ID
router.get("/:cardId", cardServices.getCardDetail);

//Get details of a single card by card Link for Admin
router.get("/getCardInfoByCardLink/:cardLink", cardServices.getCardInfoByCardLink);

//Resend activation code by cardLink
router.get("/resendActivationCode/:cardLink", cardServices.resendActivationCode);

module.exports = router;
