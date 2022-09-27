const { Contact } = require("../../models/contact");
const RequestError = require("../../helpers/RequestError");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;

  const updatedContact = await Contact.findOneAndUpdate(
    { contactId, owner: _id },
    req.body
  );

  if (!updatedContact) {
    throw RequestError(404, "Not found");
  }

  res.status(200).json(updatedContact);
};

module.exports = updateContact;
