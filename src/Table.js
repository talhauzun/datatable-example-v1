
import React, {Component} from 'react'
//import App from "./App";

import $ from 'jquery';
import dt from 'datatables.net-bs4';


export class Table extends Component {
    componentDidMount() {
        console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns: [
                { title: "Name" },
                { title: "Position" },
                { title: "Office" },
                { title: "Extn." },
                { title: "Start date" },
                { title: "Salary" }
            ]
        })
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <div className="container">
                <table className="table table-striped table-bordered" width="100%" ref = {el => this.el = el }></table>
                </div>
              
            </div>
        );
    }
}