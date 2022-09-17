// const contacts = require("../../models/contacts");
const {Contact} = require("../../models/contact");

const listContacts = async (_, res) => {
  // const listOfContacts = await contacts.listContacts();
  const listOfContacts = await Contact.find({});
  res.status(200).json(listOfContacts);
};

module.exports = listContacts;
