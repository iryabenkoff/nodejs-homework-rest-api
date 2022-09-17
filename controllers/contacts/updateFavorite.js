const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const updateFavorite = async (req, res) => {
  if (!req.body) {
    throw RequestError(400, "missing field favorite");
  }

  const { contactId } = req.params;
  const updatedFavorite = await Contact.findByIdAndUpdate(contactId, req.body);

  if (!updatedFavorite) {
    throw RequestError(404, "Not found");
  }

  res.json(updatedFavorite);
};

module.exports = updateFavorite;
