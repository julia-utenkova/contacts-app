import dispatcher from "../dispatcher";

import axios from 'axios';

export function getContacts() {
    axios.get('/data.json').then(res => {
        const contacts = res.data;
        dispatcher.dispatch({
            type: "RECEIVE_CONTACTS",
            contacts: contacts
        });
    });
}

export function addContacts(contact) {
    dispatcher.dispatch({
        type: "ADD_CONTACT",
        contact: contact
    });
}

export function removeContact(contact_id) {
    dispatcher.dispatch({
        type: "REMOVE_CONTACT",
        contact_id: contact_id
    });
}