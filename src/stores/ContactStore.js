import { EventEmitter } from "events";

import update from 'react-addons-update';

import dispatcher from "../dispatcher";

import * as ContactActions from "../actions/ContactActions";

class ContactStore extends EventEmitter {
    constructor() {
        super();
        this.contacts = ContactActions.getContacts();
    }

    getAll() {
        return this.contacts;
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    removeContact(contact_id) {
        this.contacts = update(this.contacts, {$splice: [[contact_id, 1]]});
    }

    retrieveID(id) {
        return id;
    }

    handleActions(action){
        switch (action.type){
            case "ADD_CONTACT": {
                this.addContact(action.contact);
                this.emit("change");
                break;
            }
            case "REMOVE_CONTACT": {
                this.removeContact(action.contact_id);
                this.emit("change");
                break;
            }
            case "RECEIVE_CONTACTS": {
                this.contacts = action.contacts;
                this.emit("change");
                break;
            }
            case "RETRIEVE_ADDED_ID": {
                // this.id = action.id;
                console.log(action.id)
                this.retrieveID(action.id);
                this.emit("change");
                break;
            }
        }
    }
}

const contactStore = new ContactStore;

dispatcher.register(contactStore.handleActions.bind(contactStore));

export default contactStore;

