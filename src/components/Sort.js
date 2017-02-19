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
                    <td className="item" onClick={this.sort.bind(this,'name')}>
                        <b>Name</b>
                        <span className="glyphicon glyphicon-sort-by-attributes-alt"></span>
                    </td>
                    <td className="item">
                        <b>Gender</b>
                    </td>
                    <td className="item" onClick={this.sort.bind(this,'email')}>
                        <b>Email</b>
                        <span className="glyphicon glyphicon-sort-by-attributes-alt"></span>
                    </td>
                    <td className="item" onClick={this.sort.bind(this,'phone')}>
                        <b>Phone</b>
                        <span className="glyphicon glyphicon-sort-by-attributes-alt"></span>
                    </td>
                    <td className="item">
                        <b>Actions</b>
                    </td>
                </tr>
            </thead>
        );
    }
}