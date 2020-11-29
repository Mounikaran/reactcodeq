import React, { Component } from 'react';

const $ = require('jquery')
$.DataTable = require('datatables.net')



class UsersTable extends Component {

    componentDidMount(){
        this.$el = $(this.el);
        this.$el.DataTable(
            {
                data:this.props.data,
                columns:[
                    {title:"username"},
                    {title:"email"},
                    {title:"action"},
                ]
            }
        )
    }

    render() {
        return (
            <div className="card card-body">
                <table className="display table table-active" width="100%" ref={el => this.el = el}>
                </table>
            </div>
        );
    }
}

export default UsersTable;