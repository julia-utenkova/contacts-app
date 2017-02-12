import React from "react";

import Contact from "./Contact";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Contacts Book",
            contacts: [
                {
                    name: "Josh",
                    surname: "Williams",
                    phone: "555-333-123"
                },
                {
                    name: "Mia",
                    surname: "Williams",
                    phone: "555-344-123"
                },
                {
                    name: "Michael",
                    surname: "Doe",
                    phone: "123-344-123"
                }
            ]
        };
    }

    render() {
        return (
            <div class="container">
                <h1>{this.state.title}</h1>
                <div class="row">
                    <Contact contacts={this.state.contacts}/>
                </div>
            </div>
        );
    }
}