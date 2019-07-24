import {
  addNewContact,
  getContactById,
  getAllContacts,
  updateContact,
  deleteContact
} from "../controllers/crmController";

export const routes = app => {
  app
    .route("/contact")
    .get(getAllContacts)
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact);
};
