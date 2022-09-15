const contacts = require("../../models/contacts");
const RequestError = require("../../helpers/RequestError");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await contacts.updateContact(contactId, req.body);

  if (!updatedContact) {
    throw RequestError(404, "Not found");
  }

  res.status(200).json(updatedContact);
};

module.exports = updateContact;
