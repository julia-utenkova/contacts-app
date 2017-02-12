import React from "react";

export default class Sort extends React.Component {
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

    sort(field){
        // this.props.sortBy(field);
        var contacts = this.props.contacts;
        this.props.sortBy(field, contacts);
    }

    render() {
        return (
            <div class="flex-center">
                <div class="item" onClick={this.sort.bind(this,'name')}><b>Name</b></div>
                <div class="item" onClick={this.sort.bind(this,'surname')}><b>Surname</b></div>
                <div class="item" onClick={this.sort.bind(this,'phone')}><b>Phone</b></div>
            </div>
        );
    }
}