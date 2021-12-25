import React, { useState, useEffect } from 'react'
import "./styles.css"
import Form from './Form'
import List from './List'

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullname: "Can Selek", phone_number: "123123" },
        { fullname: "Umut", phone_number: "9876" },
        { fullname: "Ata", phone_number: "456334" }
    ])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])
    return (
        <div id='container'>
            <h1>dcselek's Contacts</h1>
            <List contacts={contacts} />
            <h2>Contacts Length = {contacts.length}</h2>
            <Form setContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
