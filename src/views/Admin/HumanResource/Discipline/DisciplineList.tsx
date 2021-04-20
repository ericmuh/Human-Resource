import * as React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card/Card";
import SkeletonTableRows from "../../../../components/Skeletons/SkeletonTableRows";
import { getProjects } from "../../../../context/actions/actions";
import { GET_ALL_PROJECTS } from "../../../../context/actions/actionTypes";
import { thArrayProject } from "../../../../variables/Variables";

const DisciplineList = () => {

  React.useEffect(() => {
  }, []);
  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className="page-heading">CaseList</h2>
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
                      {" "}
                      <Link
                        to="/human-resource/discipline/forms"
                        className="btn btn-primary">
                        {" "}
                        Add New Case{" "}
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
                            {thArrayProject.map((prop, key) => {
                              return <th key={key}>{prop}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          
                            <SkeletonTableRows
                              columns={thArrayProject}
                     
                         />
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

export default DisciplineList;
