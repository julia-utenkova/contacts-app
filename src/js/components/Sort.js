import React from "react";

export default class Sort extends React.Component {

    sort(field){
        var contacts = this.props.contacts;
        this.props.sortBy(field, contacts);
    }

    render() {
        return (
            <thead>
                <tr>
                    <td class="item" onClick={this.sort.bind(this,'name')}>
                        <b>Name</b>
                        <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
                    </td>
                    <td class="item" onClick={this.sort.bind(this,'email')}>
                        <b>Email</b>
                        <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
                    </td>
                    <td class="item" onClick={this.sort.bind(this,'phone')}>
                        <b>Phone</b>
                        <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
                    </td>
                    <td class="item">
                        <b>Actions</b>
                    </td>
                </tr>
            </thead>
        );
    }
}