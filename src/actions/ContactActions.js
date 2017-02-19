import dispatcher from "../dispatcher";

import axios from 'axios';

export function getContacts() {
    axios.get('/api/data').then(res => {
        const contacts = res.data;
        dispatcher.dispatch({
            type: "RECEIVE_CONTACTS",
            contacts: contacts
        });
    });
}

export function addContacts(contact) {
    axios.post('/api/add-contact', contact).then(res => {
        dispatcher.dispatch({
            type: "ADD_CONTACT",
            contact: contact
        });
    });
}

export function removeContact(contact_id) {
    console.log(contact_id)
    axios.post('/api/remove-contact', contact_id).then(res => {
        dispatcher.dispatch({
            type: "REMOVE_CONTACT",
            contact_id: contact_id
        });
    });
}