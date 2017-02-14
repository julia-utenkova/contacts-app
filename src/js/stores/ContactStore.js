import { EventEmitter } from "events";

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

        this.emit("change");
    }

    handleActions(action){
        switch (action.type){
            case "ADD_CONTACT": {
                this.addContact(action.contact);
                break;
            }
            case "RECEIVE_CONTACTS": {
                this.contacts = action.contacts;
                this.emit("change");
                break;
            }
        }
    }
}

const contactStore = new ContactStore;

dispatcher.register(contactStore.handleActions.bind(contactStore));

export default contactStore;

