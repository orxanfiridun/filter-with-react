import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contact() {
  const [contacts, setContacts] = useState([
    {
      fullName: "lorem",
      phoneNumber: "381",
    },
    {
      fullName: "ipsum",
      phoneNumber: "349",
    },
    {
      fullName: "dolor",
      phoneNumber: "145",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contact;
