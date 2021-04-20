import * as React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card/Card";
import { getData } from "../../../../context/actions/actions";
import { GET_DONOR } from "../../../../context/actions/actionTypes";
import { OperationContext } from "../../../../context/contexts/Operations/Operations";
import { thArrayDonor } from "../../../../variables/Variables";
import SkeletonTableRows from "../../../../components/Skeletons/SkeletonTableRows";

const DonorList = () => {
  const { operations, dispatch } = React.useContext(OperationContext);
  React.useEffect(() => {
    getData({ dispatch, url: "operations/donors", action_type: GET_DONOR });
    console.log({ donors: operations.donors });
  }, []);
  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className="page-heading">Donor List</h2>
          </Col>

          <Col md={12}>
            <Card
              plain
              ctTableFullWidth
              ctTableResponsive={true}
              content={
                <>
                  <Row className="search-add">
                    <Col md={8}>
                      {" "}
                      <Link to="/esop/addDonor" className="btn btn-primary">
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
                      <Table hover table-responsive="true">
                        <thead>
                          <tr>
                            {thArrayDonor.map((prop, key) => {
                              return <th key={key}>{prop}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {operations.donors.length === 0 ? (
                            <SkeletonTableRows columns={thArrayDonor} />
                          ) : (
                            operations.donors.map((donor, key: number) => {
                              return (
                                <tr key={key}>
                                  <td>{key + 1}</td>
                                  <td>{donor.name}</td>
                                  <td>{donor.city}</td>
                                  <td>{donor.contact_person}</td>
                                  <td>{donor.category}</td>
                                  <td>active</td>
                                </tr>
                              );
                            })
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

export default DonorList;
