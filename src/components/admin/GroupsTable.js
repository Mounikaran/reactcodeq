import React, { Component } from "react";

const $ = require("jquery");
$.DataTable = require("datatables.net");

class GroupsTable extends Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.props.data,
      columns: [{ title: "Name" }, { title: "Members" }, { title: "Questions" }, {title:"action"}],
    });
  }

  render() {
    return (
      <div className="card card-body">
        <table
          className="display table table-active"
          width="100%"
          ref={(el) => (this.el = el)}
        ></table>
      </div>
    );
  }
}

export default GroupsTable;
