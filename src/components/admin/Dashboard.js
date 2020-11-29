import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import AdminUsers from './AdminUsers';
import ComplaintsTable from './ComplaintsTable';
import GroupsTable from './GroupsTable';
import QuestionsTable from './QuestionsTable';
import UsersTable from './UsersTable';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardActive: 1,
    };
  }

  dataUsers = [
    ["bob", "bob@gmail.com", "1"],
    ["jack", "jack@gmail.com", "1"],
    ["mouni", "mouni@gmail.com", "2"],
  ];

  dataAdmins = [["admin", "admin@gmail.com", "1"]];

  dataGroups = [
    ["JS-group", "3", "3", "1"],
    ["Python-Group", "2", "0", "1"],
    ["HTML-Group", "2", "0", "1"],
    ["New - LEarners", "2", "1", "1"],
  ];

  dataQuestions = [
    [
      "mouni",
      "How can I use a local variable after it has been returned?",
      "0",
      "1",
    ],
    ["mouni", "List Comprehension with sum of elements in a list", "3", "1"],
    [
      "Bob",
      "python - how would I put an if else statement in a function for abstraction?",
      "0",
      "1",
    ],
    ["Bob", "Format JavaScript date as yyyy-mm-dd", "1", "0"],
    ["jack", "How to uninstall npm modules in node js?", "0", "1"],
    ["jack", "Get String in YYYYMMDD format from JS date object?", "1", "1"],
    [
      "mouni",
      "javascript date object different in the console and browser",
      "0",
      "1",
    ],
  ];

  dataComplaints = [["Bob", "Feedback", "1"],["jack", "Feedback", "1"]]

  handleChange1 = () => {
    this.setState({ cardActive: 1 });
  };
  handleChange2 = () => {
    this.setState({ cardActive: 2 });
  };
  handleChange3 = () => {
    this.setState({ cardActive: 3 });
  };
  handleChange4 = () => {
    this.setState({ cardActive: 4 });
  };

  render() {
    return (
      <MDBContainer fluid className="py-2">
        <MDBRow>
          <MDBCol>
            <MDBCard
              className={`${
                this.state.cardActive === 1
                  ? "winter-neva-gradient pointer"
                  : "cloudy-knoxville-gradient pointer"
              }`}
              onClick={this.handleChange1}
            >
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="badge badge-dark badge-pill">4</span> Users{" "}
                  </div>
                  <div>
                    {/* <MDBBtn onClick={this.handleChange} color="white">
                      view
                    </MDBBtn> */}
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard
              className={`${
                this.state.cardActive === 2
                  ? "winter-neva-gradient pointer"
                  : "cloudy-knoxville-gradient pointer"
              }`}
              onClick={this.handleChange2}
            >
              <MDBCardBody>
                {" "}
                <span className="badge badge-secondary badge-pill">7</span>{" "}
                Questions{" "}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard
              className={`${
                this.state.cardActive === 3
                  ? "winter-neva-gradient pointer"
                  : "cloudy-knoxville-gradient pointer"
              }`}
              onClick={this.handleChange3}
            >
              <MDBCardBody>
                {" "}
                <span className="badge badge-primary badge-pill">4</span>{" "}
                Groups{" "}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard
              className={`${
                this.state.cardActive === 4
                  ? "winter-neva-gradient pointer"
                  : "cloudy-knoxville-gradient pointer"
              }`}
              onClick={this.handleChange4}
            >
              <MDBCardBody>
                {" "}
                <span className="badge badge-pill badge-default">2</span>{" "}
                Complaints
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <hr />
        {this.state.cardActive === 1 ? (
          <div>
            <h2>Users</h2>
            <div className="container mb-5">
              <h4>Normal Users</h4>
              <UsersTable data={this.dataUsers} />
            </div>
            <div className="container mb-5">
              <h4>Admin Users</h4>
              <AdminUsers data={this.dataAdmins} />
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.cardActive === 2 ? (
          <div>
            <h2>Questions</h2>
            <div className="container mb-5">
              <QuestionsTable data={this.dataQuestions} />
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.cardActive === 3 ? (
          <div>
            <h2>Groups</h2>
            <div className="container mb-5">

            <GroupsTable data={this.dataGroups} />
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.cardActive === 4 ? (
          <div>
            <h2>Complaints</h2>
            <div className="container">
            <ComplaintsTable data={this.dataComplaints} />
            </div>
          </div>
        ) : (
          ""
        )}
      </MDBContainer>
    );
  }
}

export default Dashboard;