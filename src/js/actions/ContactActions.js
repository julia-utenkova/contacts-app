import dispatcher from "../dispatcher";

import axios from 'axios';

export function getContacts(state) {
    axios.get('/data.json').then(res => {

        const contacts = res.data;
        // console.log(state.contacts)
        return contacts;
        // dispatcher.dispatch({type: "RECEIVE_CONTACTS", contacts: res.data});
    });
}