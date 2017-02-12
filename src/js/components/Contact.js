import React from "react";

import Sort from "./Sort";

import Add from "./Add";

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

    render() {
        return (
            <div className="row">
                <div class="col-lg-8">

                    <table class="table table-striped">
                        <Sort contacts={this.props.contacts} sortBy={this.sortBy}/>

                        <tbody>
                        {this.props.contacts.map(function(contact) {
                            return <tr class="flex-center" key={contact.name}>
                                <td class="item">{contact.name}</td>
                                <td class="item">{contact.email}</td>
                                <td class="item">{contact.phone}</td>
                                <td class="item">
                                    Remove
                                </td>
                            </tr>;
                        })}
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