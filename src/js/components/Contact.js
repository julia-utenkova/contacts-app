import React from "react";

import update from 'react-addons-update';

import Sort from "./Sort";

import Add from "./Add";

import * as ContactActions from "../actions/ContactActions";

export default class Contact extends React.Component {

    sortBy = (field, contacts) => {
        // Sorting ...
        this.asc = !this.asc;
        var sortedContacts = contacts.sort( (a, b) => {

            if (a[field] > b[field]) {
                return this.asc ? 1 : -1;
            }
            if (a[field] < b[field]) {
                return this.asc ? -1 : 1;
            }
            return 0;
        });

        // Then call setState
        this.setState({'contacts': sortedContacts});
    };

    removeContact = (e) => {
        e.preventDefault();
        let event_id = parseInt(e.target.getAttribute('data-id'));
        ContactActions.removeContact(event_id)
    }

    render() {
        return (
            <div className="row">
                <div class="col-lg-8">

                    <table class="table table-striped">
                        <Sort contacts={this.props.contacts} sortBy={this.sortBy}/>

                        <tbody>
                        {this.props.contacts.map(function(contact) {
                            return <tr class="flex-center" key={contact.id} contact-id={contact.id}>
                                <td class="item">{contact.name} ({contact.id})</td>
                                <td class="item">{contact.email}</td>
                                <td class="item">{contact.phone}</td>
                                <td class="item">
                                    <a href="" data-id={contact.id} onClick={this.removeContact}>X</a>
                                </td>
                            </tr>;
                        }, this)}
                        </tbody>
                    </table>

                </div>

                <div className="col-lg-4">
                    <Add contacts={this.props.contacts}/>
                </div>
            </div>
        );
    }
}