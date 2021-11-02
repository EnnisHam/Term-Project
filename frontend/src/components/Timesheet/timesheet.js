import TopNavigation from "../topNavigation/topNavigation";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import "./timesheet.css";
import React from "react";
import axios from "axios";


export class Timesheet extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();

    // State variables
    this.state = {
      // Controls table rendering
      text: false,
      attendance: [],
      searchQuery: "",
      date:
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear(),
      time: today.getHours() + ":" + today.getMinutes(),
      success: false,
    };
  }

  render() {
    const checkin = () => {
      const user = {
        name: "Aishu",
      };
      this.setState({ success: true });
      console.log(this.state.date);
      // axios
      //   .post(`https://jsonplaceholder.typicode.com/users`, { user })
      //   .then((res) => {
      //     console.log(res);
      //     console.log(res.data);
      //     console.log(this.state.date);
      //     this.setState({ success: true });
      //   });
    };

    console.log(this.state.time);
    return (
      <div>
        <TopNavigation></TopNavigation>
        {/* <h1>Check In</h1> */}
        <div
          style={{ paddingTop: "100px", paddingLeft: "10%", display: "flex" }}
        >
          <div style={{ paddingRight: "100px" }}>
            <Card style={{ width: "20rem", border: "5px solid black" }}>
              <Card.Body>
                <Card.Title style={{ paddingBottom: "10px" }}>
                  Welcome!
                </Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Enter your Employee ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="EmployeeID (EX:A123B345)"
                    />
                  </Form.Group>
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: "30%" }}>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={() => checkin()}
                        style={{
                          backgroundColor: "rgb(144, 192, 0)",
                          alignSelf: "center",
                        }}
                      >
                        Check In
                      </Button>
                    </div>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{
                        backgroundColor: "rgb(144, 192, 0)",
                        alignSelf: "center",
                      }}
                    >
                      Check Out
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "45rem", border: "5px solid black" }}>
              <Card.Body>
                <Card.Title style={{ color: "red" }}>Instructions</Card.Title>
                <Card.Text>
                  1. Please enter the employee Id.
                  <br />
                  2. If you are unaware of your ID , please contact admin at
                  admin@adp.com
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
          {this.state.success ? (
            <p>Successful</p>
          ) : (
            ""
          )}
        
        </div>
      </div>
    );
  }
}
