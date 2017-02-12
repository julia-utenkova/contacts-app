import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

import * as ContactActions from "../actions/ContactActions";

class ContactStore extends EventEmitter {
    // constructor() {
    //     super()
    //     this.contacts = this.getAll()
    // }

    getAll() {
        return ContactActions.getContacts();
    }

    handleActions(action){
        switch (action.type){
            case "RECEIVE_CONTACTS": {
                return action.contacts;
                // this.emit("change");
                // break;
            }
        }
    }
}

//
const contactStore = new ContactStore;

dispatcher.register(contactStore.handleActions.bind(contactStore));
//
export default contactStore;