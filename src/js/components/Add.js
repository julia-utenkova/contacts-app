import React from "react";

import ContactStore from "../stores/ContactStore";

import * as ContactActions from "../actions/ContactActions";

export default class Add extends React.Component {

    addPerson = () => {
        // e.preventDefault();
        var name = this.form_name.value;
        var email = this.form_email.value;
        var phone = this.form_phone.value;

        var contact = {
            name: name,
            email: email,
            phone: phone
        };

        ContactActions.addContacts(contact)

    };

    render() {
        return (
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="name" class="form-control" id="name" placeholder="Name" ref={(c) => this.form_name = c}/>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" ref={(c) => this.form_email = c}/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone number</label>
                    <input type="text" class="form-control" id="phone" placeholder="Phone number" ref={(c) => this.form_phone = c}/>
                </div>
                <button type="button" class="btn btn-default" onClick={this.addPerson.bind(this)}>Add person</button>
            </form>
        );
    }
}