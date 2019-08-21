import React, { useState } from "react";
import PhoneBookForm from "./PhoneBookForm";
import PhoneBookDisplay from "./PhoneBookDisplay";

const PhoneBook = () => {
  const [contacts, updateContacts] = useState([]);
  return (
    <div>
      <PhoneBookForm add={updateContacts} contacts={contacts} />
      <PhoneBookDisplay contacts={contacts} />
    </div>
  );
};

export default PhoneBook;
