import * as React from "react";
import { Container } from "react-bootstrap";

const BasicFooter:React.FC  = ()=>{
    return (
      <footer className="footer">
        <Container fluid>
          <nav className="pull-left">
  
            <ul>
              <li>
                <span  className="footer-note" >Our Action</span>
              </li>
              <li>
                <span className="footer-note" >Our Future</span>
              </li>
             
            </ul>
          </nav>
          <p className="pull-right">
         <span> <a href="/">
             www.human-resource.com 
            </a></span>
           
          </p>
        </Container>
      </footer>
    );
  }


export default BasicFooter;
