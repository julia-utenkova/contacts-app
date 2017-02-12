import React from "react";

import Sort from "./Sort";

export default class Contact extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         title: "Welcome LALALAL",
    //     };
    // }
    //
    // changeTitle(title) {
    //     this.setState({title});
    // }

    sortBy = (field, contacts) => {
        // Sorting ...
        var sortedContacts = contacts.sort( (a, b) => {
            if (a[field] > b[field]) {
                return 1;
            }
            if (a[field] < b[field]) {
                return -1;
            }
            return 0;
        });

        // Then call setState
        this.setState({'contacts': sortedContacts});
    }

    render() {
        return (
            <div class="col-lg-6">
                <Sort contacts={this.props.contacts} sortBy={this.sortBy}/>
                {this.props.contacts.map(function(contact) {
                    return <div class="flex-center" key={contact.name}>
                        <div class="item">{contact.name}</div>
                        <div class="item">{contact.surname}</div>
                        <div class="item">{contact.phone}</div>
                    </div>;
                })}
            </div>
        );
    }
}