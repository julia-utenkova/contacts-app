import React, { Component } from 'react';

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

    componentWillMount() {
        ContactStore.on("change", () => {
            this.setState({
                contacts: ContactStore.getAll()
            })
        });
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.title}</h1>
                <Contact contacts={this.state.contacts}/>
            </div>
        );
    }
}
