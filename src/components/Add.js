import React from "react";

import ContactStore from "../stores/ContactStore";

import * as ContactActions from "../actions/ContactActions";

export default class Add extends React.Component {

    constructor() {
        super();
        this.addContact = this.addContact.bind(this)
    }

    addContact = () => {
        var name = this.form_name.value;
        var email = this.form_email.value;
        var phone = this.form_phone.value;
        var gender = this.gender.value;

        // var newID = ContactStore.retrieveID;

        var contact = {
            // id: newID,
            name: name,
            email: email,
            phone: phone,
            gender: gender
        };

        ContactActions.addContacts(contact);

    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="name" className="form-control" id="name" placeholder="Name" ref={(c) => this.form_name = c}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" ref={(c) => this.form_email = c}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" className="form-control" id="phone" placeholder="Phone number" ref={(c) => this.form_phone = c}/>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Gender" ref={(c) => this.gender = c}/>
                </div>
                <button type="button" className="btn btn-default" onClick={this.addContact}>Add person</button>
            </form>
        );
    }
}