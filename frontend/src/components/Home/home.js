import TopNavigation from "../topNavigation/topNavigation";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/trackerImage1.png";
import image2 from "../../assets/trackerImage2.jpeg";
import image3 from "../../assets/trackerImage3.png";
import image4 from "../../assets/trackerImage4.gif";
import image5 from "../../assets/trackerImage5.gif";
import "../Home/home.css";
import Button from "@restart/ui/esm/Button";
import {Nav} from 'react-bootstrap'

function Home() {
  return (
    <div>
      <TopNavigation />
      <h1 style={{ fontSize: "90px;" }}> ADP Smart Attendence Tracker</h1>
      <div style={{ width: "80%", paddingLeft: "20%", paddingTop: "20px" }}>
        <Carousel fade style={{ border: " 20px 20px solid black" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image5}
              alt="First slide"
              height="400px"
              width="auto"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="First slide"
              height="400px"
              width="50%"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image4}
              alt="First slide"
              height="400px"
              width="50%"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="Second slide"
              height="400px"
              width="50%"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
              height="400px"
              width="50%"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
      <br/>
      <div style={{ width: "90%", paddingLeft: "10%", paddingTop: "20px" , display:"flex" }}>
        <div style={{ width: "50%" }}>
          <p style={{ textAlign: "justify" }}>
            Smart attendance Tracker allows you to check IN and OUT timimgs ,
            helping to track the employee working hours which is then used to
            pay the employye on hourly basis. It also has features to allow
            admin to look at the overall report and also search and track for
            individual employee details.
          </p>
        </div>
        <div style={{ width: "50%", paddingLeft:"10%"}}>
          <h2>Check In here</h2>
          <Button
            variant="primary"
            type="submit"
            
            style={{
              backgroundColor: "rgb(144, 192, 0)",
              alignSelf: "center",
              borderRadius: "30px"
            }}
          >
             <Nav.Link href="checkin">Check In </Nav.Link>
            
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
