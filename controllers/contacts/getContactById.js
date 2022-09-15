const contacts = require("../../models/contacts");
const RequestError = require("../../helpers/RequestError");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contacts.getContactById(contactId);

  if (!contact) {
    throw RequestError(404, "Not found");
  }

  res.status(200).json(contact);
};

module.exports = getContactById;
