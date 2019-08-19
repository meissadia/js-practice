import React, { useState } from "react";
import "./App.css";

const PhoneBookForm = props => {
  const [first, updateFirst] = useState("");
  const [last, updateLast] = useState("");
  const [phone, updatePhone] = useState("");

  const clearStates = () => {
    updateFirst("");
    updateLast("");
    updatePhone("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContacts = [...props.contacts, [first, last, phone]];
    props.add(newContacts.sort((x, y) => (x[1] < y[1] ? -1 : 1)));
    clearStates();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        name="fname"
        type="text"
        value={first}
        onChange={e => updateFirst(e.target.value)}
      />
      <input
        required
        name="lname"
        type="text"
        value={last}
        onChange={e => updateLast(e.target.value)}
      />
      <input
        required
        name="phone"
        type="tel"
        value={phone}
        onChange={e => updatePhone(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const PhoneBookDisplay = props => {
  return (
    <table>
      <thead>
        <tr>
          <td>First</td>
          <td>Last</td>
          <td>Phone</td>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact, i) => (
          <tr key={i}>
            <td>{contact[0]}</td>
            <td>{contact[1]}</td>
            <td>{contact[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  const [contacts, updateContacts] = useState([]);

  return (
    <div>
      <PhoneBookForm add={updateContacts} contacts={contacts} />
      <PhoneBookDisplay contacts={contacts} />
    </div>
  );
}

export default App;
