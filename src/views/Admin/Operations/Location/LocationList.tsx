import * as React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from "../../../../components/Card/Card";
import { GET_LOCATION } from "../../../../context/actions/actionTypes";

import { thArrayLocation } from "../../../../variables/Variables";
import { getData } from "../../../../context/actions/actions";
import { OperationContext } from "../../../../context/contexts/Operations/Operations";
import SkeletonTableRows from "../../../../components/Skeletons/SkeletonTableRows";

const LocationList = () => {
  const { operations, dispatch } = React.useContext(OperationContext);
  React.useEffect(() => {
    getData({
      dispatch,
      url: "operations/locations",
      action_type: GET_LOCATION,
    });
  }, []);

  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className="page-heading">Location List</h2>
          </Col>

          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <Row className="search-add">
                    <Col md={8}>
                      {" "}
                      <Link to="/esop/addLocation" className="btn btn-primary">
                        {" "}
                        Add New{" "}
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
                      <Table hover>
                        <thead>
                          <tr>
                            {thArrayLocation.map((prop, key) => {
                              return <th key={key}>{prop}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {operations.locations.length === 0 ? (
                            <SkeletonTableRows columns={thArrayLocation} />
                          ) : (
                            operations.locations.map(
                              (location: any, key: any) => {
                                return (
                                  <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{location.name}</td>
                                    <td>{location.contact_person}</td>
                                    <td>{location.category}</td>
                                    <td>{location.gps}</td>
                                    <td>active</td>
                                  </tr>
                                );
                              }
                            )
                          )}
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

export default LocationList;
