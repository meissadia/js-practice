import React from "react";

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

export default PhoneBookDisplay;
