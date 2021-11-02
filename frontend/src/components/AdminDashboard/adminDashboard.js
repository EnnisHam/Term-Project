import TopNavigation from "../topNavigation/topNavigation";
import React from "react";
import { Table, Form, FormControl, Button } from "react-bootstrap";
import "../AdminDashboard/adminDashboard.css";
import axios from "axios";

export class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
   

    // State variables
    this.state = {
      // Controls table rendering
      text: false,
      attendance: [],
      searchQuery: "",
    };
  }

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  render() {
    const shoot = (id) => {
      axios.get(`https://jsonplaceholder.typicode.com/users`,{
        params: {
            id: id
        }
     }).then((res) => {
        const attendance = res.data;
        this.setState({ attendance });
        this.setState({
          text: true,
        });
      });
    };

   
    //     const contents = this.state.persons.forEach(item => {
    //       // change the title and location key based on your API
    //       console.log(item)
    //       return <tr>
    //         <td>{item.id}</td>
    //         <td>{item.name}</td>
    //         <td>{item.email}</td>
    //         <td>{item.username}</td>
    //       </tr>
    //  })
    return (
      <div>
        <TopNavigation />
        <div style={{ display: "flex", paddingTop: "30px" }}>
          <div style={{ paddingLeft: "7%" }}>
            <Form className="d-flex">
              <FormControl
                id="search"
                type="search"
                placeholder="Enter Employee Id"
                className="me-2"
                aria-label="Search"
                value={this.state.searchQuery} 
                onChange={this.handleInputChanged.bind(this)}
              />
              <Button variant="outline-success" onClick={() => shoot(this.state.searchQuery)}>
                Search
              </Button>
            </Form>
          </div>
          <div style={{ paddingLeft: "50.5%" }}>
            <Button variant="success">Download Overall Report</Button>
          </div>
        </div>
        {this.state.text ? (
          <div id="table">
            <Table striped bordered hover>
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th rowSpan="2">Date</th>
                  <th rowSpan="2">Day</th>
                  <th>Time-in</th>
                  <th>Time-out</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {this.state.attendance.map(event => {
                  console.log(event.id);
                  return (
                    <tr>
                      <td>{event.id}</td>
                      <td>{event.name}</td>
                      <td>{event.email}</td>
                      <td>{event.username}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <hr/>
          </div>
        ) : (
          ""
        )}
        <div id="table">
          <Table striped bordered hover>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th rowSpan="2">Date</th>
                <th rowSpan="2">Day</th>
                <th>Present Count</th>
                <th>Absent Count</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              <tr>
                <td>10/29/2021</td>
                <td>Friday</td>
                <td>100</td>
                <td>10</td>
              </tr>
              <tr>
                <td>10/28/2021</td>
                <td>Thursday</td>
                <td>80</td>
                <td>30</td>
              </tr>
              <tr>
                <td>10/27/2021</td>
                <td>Wednesday</td>
                <td>100</td>
                <td>10</td>
              </tr>
              <tr>
                <td>10/26/2021</td>
                <td>Tuesday</td>
                <td>110</td>
                <td>0</td>
              </tr>
              <tr>
                <td>10/25/2021</td>
                <td>Monday</td>
                <td>109</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
// export default AdminDashboard;
