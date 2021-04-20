import * as React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card/Card";
import SkeletonTableRows from "../../../../components/Skeletons/SkeletonTableRows";
import { retrieveFromLocalStorage } from "../../../../Utils/LocalStorage";
import { thArrayUsers } from "../../../../variables/Variables";

const UserList = () => {
  let users = retrieveFromLocalStorage("users");

  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className="page-heading">All Users</h2>
          </Col>

          <Col md={12}>
            <Card
              plain
              ctTableFullWidth
              ctTableResponsive
              content={
                <>
                  <Row className="search-add">
                    <Col md={8}>
                      <Link
                        to="/human-resource/users/forms"
                        className="btn btn-primary"
                      >
                        {" "}
                        Add New User{" "}
                      </Link>{" "}
                    </Col>
                    <Col md={4}>
                      {" "}
                      <form className="form-inline">
                        <label className="form-label-sm"> Search</label>
                        <input
                          placeholder="....."
                          className=" form-control form-control-sm"
                          type="text"
                        />{" "}
                      </form>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>

                      <Table hover table-responsive="true">
                        <thead>
                          <tr>
                            {thArrayUsers.map((prop, key) => {
                              return <th key={key}>{prop}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user: any, key: number) => (
                            <tr key={key}>
                              <td>
                                <img
                                  src="https://picsum.photos/50"
                                  alt="thumbnail"
                                  className="img-thumbnail"
                                />
                              </td>
                              <td>{user.first_name}</td>
                              <td>{user.marital_status}</td>
                              <td>staff</td>

                              <td>{user.nationality}</td>
                              <td>pending</td>
<td>update</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserList;
