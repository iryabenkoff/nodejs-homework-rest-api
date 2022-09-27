const { Contact } = require("../../models/contact");
const RequestError = require("../../helpers/RequestError");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;

  const removedContact = await Contact.findOneAndDelete({
    contactId,
    owner: _id,
  });

  if (!removedContact) {
    throw RequestError(404, "Not Found");
  }

  res.status(200).json(removedContact);
};

module.exports = removeContact;
