const contacts = require("../../models/contacts");
const RequestError = require("../../helpers/RequestError");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const removedContact = await contacts.removeContact(contactId);

  if (!removedContact) {
    throw RequestError(404, "Not Found");
  }

  res.status(200).json(removedContact);
};

module.exports = removeContact;
