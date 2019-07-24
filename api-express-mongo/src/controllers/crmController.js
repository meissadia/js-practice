import { Contact } from "../models/crmModel";

export const addNewContact = (req, res, _next) => {
  const newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) res.send(err);

    res.json(contact);
  });
};

export const getContactById = (req, res, _next) => {
  console.log(`Finding: ${req.params.contactId}`);
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) res.send(err);

    if (contact) res.json(contact);
    else res.send(`Unable to resolve ${req.params.contactId}`);
  });
};

export const getAllContacts = (req, res) => {
  Contact.find((err, contacts) => {
    if (err) res.send(err);

    res.json(contacts);
  });
};

export const updateContact = (req, res) => {
  Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) res.send(err);

      res.json(contact);
    }
  );
};

export const deleteContact = (req, res) => {
  Contact.deleteOne({ _id: req.params.contactId }, err => {
    if (err) res.send(err);

    res.json({ message: `Contact deleted: ${req.params.contactId}` });
  });
};
