const {Contact} = require("../../models/contact");
const RequestError = require("../../helpers/RequestError");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const removedContact = await Contact.findByIdAndRemove(contactId);

  if (!removedContact) {
    throw RequestError(404, "Not Found");
  }

  res.status(200).json(removedContact);
};

module.exports = removeContact;
