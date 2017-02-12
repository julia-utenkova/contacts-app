import React from "react";

import axios from 'axios';

import ContactStore from "../stores/ContactStore";

import * as ContactActions from "../actions/ContactActions";

import Contact from "./Contact";


export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Contacts Book",
            contacts: []
        };
    }

    componentDidMount() {
        // var contacts = ContactActions.getContacts();
        // // const contacts = ContactActions.getContacts()
        // this.setState({ contacts });

        axios.get('/data.json').then(res => {

            const contacts = res.data;
            // console.log(state.contacts)
            this.setState({ contacts });
            // dispatcher.dispatch({type: "RECEIVE_CONTACTS", contacts: res.data});
        });
    }

    render() {
        // const { contacts } = this.state;
        // console.log(this.state)
        return (
            <div class="container">
                <h1>{this.state.title}</h1>
                <Contact contacts={this.state.contacts}/>
            </div>
        );
    }
}
