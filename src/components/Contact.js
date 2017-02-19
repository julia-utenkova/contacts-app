import React from "react";

import Sort from "./Sort";

import Add from "./Add";

import GenderChart from "./GenderChart";

import * as ContactActions from "../actions/ContactActions";

export default class Contact extends React.Component {

    sortBy = (field, contacts) => {
        var sortedContacts = ContactActions.sortBy(field, contacts);
        this.setState({'contacts': sortedContacts});
    };

    removeContact = (e) => {
        e.preventDefault();
        let event_id = parseInt(e.target.getAttribute('data-id'));
        var id = {
            id: event_id
        };
        ContactActions.removeContact(id);
        
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-8">

                    <table className="table table-striped">
                        <Sort contacts={this.props.contacts} sortBy={this.sortBy}/>

                        <tbody>
                        {this.props.contacts.map(function(contact) {
                            return <tr className="flex-center" key={contact.id}>
                                <td className="item">{contact.name} ({contact.id})</td>
                                <td className="item">{contact.gender}</td>
                                <td className="item">{contact.email}</td>
                                <td className="item">{contact.phone}</td>
                                <td className="item">
                                    <a href="" data-id={contact.id} onClick={this.removeContact}>X</a>
                                </td>
                            </tr>;
                        }, this)}
                        </tbody>
                    </table>

                </div>

                <div className="col-lg-4">
                    <h2>Add new contact</h2>
                    <Add contacts={this.props.contacts}/>
                    <GenderChart contacts={this.props.contacts}/>
                </div>
            </div>
        );
    }
}