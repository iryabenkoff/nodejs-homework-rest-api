const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { schemes } = require("../../models/contact");

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemes.addScheme), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemes.addScheme),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemes.updateFovirteScheme),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
