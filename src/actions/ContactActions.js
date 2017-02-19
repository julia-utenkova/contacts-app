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
    axios.post('/api/add-contact', contact).then(response => {
        dispatcher.dispatch({
            type: "ADD_CONTACT",
            contact: contact
        });
        return response;
    }).then(response => {
        dispatcher.dispatch({
            type: "RETRIEVE_ADDED_ID",
            id: response.data.id
        });
    })
}

export function removeContact(contact_id) {
    axios.post('/api/remove-contact', contact_id).then(response => {
        dispatcher.dispatch({
            type: "REMOVE_CONTACT",
            contact_id: contact_id
        });
    }).then(response => {
        this.getContacts()
    })
}

export function sortBy(field, contacts) {
    // Sorting ...
    this.asc = !this.asc;
    var sortedContacts = contacts.sort( (a, b) => {

        if (a[field] > b[field]) {
            return this.asc ? 1 : -1;
        }
        if (a[field] < b[field]) {
            return this.asc ? -1 : 1;
        }
        return 0;
    });

    return sortedContacts;
}