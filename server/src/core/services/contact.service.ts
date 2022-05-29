import * as contactDao from "../daos/contact.dao";

export async function getContacts() {
  const contacts = await contactDao.find();
  return contacts;
}
