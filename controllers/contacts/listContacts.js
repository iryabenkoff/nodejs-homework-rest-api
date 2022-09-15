const contacts = require("../../models/contacts");

const listContacts = async (_, res) => {
  const listOfContacts = await contacts.listContacts();
  res.status(200).json(listOfContacts);
};

module.exports = listContacts;
