import React, { Component } from "react";

const $ = require("jquery");
$.DataTable = require("datatables.net");

class ComplaintsTable extends Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.props.data,
      columns: [
        { title: "username" },
        { title: "Type" },
        // { title: "Questions" },
        { title: "action" },
      ],
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

export default ComplaintsTable;
