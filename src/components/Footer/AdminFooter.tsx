import * as React from "react";
import { Container } from "react-bootstrap";

const AdminFooter:React.FC  = ()=>{
    return (
      <footer className="footer">
        <Container fluid>
          <nav className="pull-left">
  
            <ul>
              
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="/#">Human Resource</a>
              </li>
              <li>
                <a href="/#">Updates</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="/">
             Human Resource - <span style={{color:"#0077B6"}}> </span>
            </a>
              
          </p>
        </Container>
      </footer>
    );
  }


export default AdminFooter;
