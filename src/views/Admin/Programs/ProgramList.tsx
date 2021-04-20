import * as React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../../components/Card/Card";
import { getPrograms } from "../../../context/actions/actions";
import { GET_ALL_PROGRAMS } from "../../../context/actions/actionTypes";
import { ProgramContext } from "../../../context/contexts/Programs/Program";
import { thArrayPrograms } from "../../../variables/Variables";

import SkeletonTableRows from "../../../components/Skeletons/SkeletonTableRows";

const ProgramList: React.FC = () => {
  const { programs, dispatch } = React.useContext(ProgramContext);
  React.useEffect(() => {
    getPrograms({ dispatch, action_type: GET_ALL_PROGRAMS });
    console.log({ allprograms: programs.all_programs });
  }, [dispatch]);
  return (
    <div className="content">
      <Container fluid>
        <Col md={12}>
          <h2 className="page-heading">Programs List</h2>
        </Col>
        <Row>
          <Col md={12}>
            <Card
              plain
              content={
                <>
                  <Row className="search-add">
                    <Col md={8}>
                      {" "}
                      <Link
                        to="/programs/forms/summary"
                        className="btn btn-primary"
                      >
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
                            {thArrayPrograms.map((prop, key) => {
                              return <th key={key}>{prop}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {typeof programs !== "undefined" &&
                          Object.keys(programs.all_programs.programs).length ===
                            0 ? (
                            <SkeletonTableRows columns={thArrayPrograms} />
                          ) : (
                            programs.all_programs.programs.map(
                              (program: any, key: number) => (
                                <tr key={key}>
                                  <td>{key + 1}</td>
                                  <td>{program.title}</td>
                                  <td>{program.country}</td>
                                  <td>{program.goal}</td>
                                  <td>{program.end_date}</td>
                                  <td>Active</td>
                                </tr>
                              )
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

export default ProgramList;
