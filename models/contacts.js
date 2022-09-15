const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./contacts.json");

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((el) => el.id === id);
  return result || null;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = {
    id: (Number(contacts[contacts.length - 1].id) + 1).toString(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  updateContacts(contacts);
  return newContact;
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);

  if (index === -1) {
    return null;
  }

  const [result] = contacts.splice(index, 1);
  updateContacts(contacts);
  return result;
};

const updateContact = async (id, { name, email, phone }) => {
  console.log(id);
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  console.log(index);

  if (index === -1) {
    return null;
  }

  contacts[index] = { id, name, email, phone };
  updateContacts(contacts);
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
