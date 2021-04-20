import * as React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../../components/Card/Card";
import SkeletonTableRows from "../../../components/Skeletons/SkeletonTableRows";
import { getProjects } from "../../../context/actions/actions";
import { GET_ALL_PROJECTS } from "../../../context/actions/actionTypes";
import { ProjectContext } from "../../../context/contexts/Projects/Project";
import { thArrayProject } from "../../../variables/Variables";

const ProjectList = () => {
  const { projects, dispatch } = React.useContext(ProjectContext);

  React.useEffect(() => {
    getProjects({ dispatch, action_type: GET_ALL_PROJECTS });
    console.log({ PROJECTS: projects.all_projects });
  }, []);
  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className="page-heading">Project List</h2>
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
                        to="/projects/forms"
                        className="btn btn-primary">
                        {" "}
                        Add New Project{" "}
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
                          {typeof projects !== "undefined" &&
                          Object.keys(projects.all_projects.projects).length ===
                            0 ? (
                            <SkeletonTableRows
                              columns={thArrayProject}
                            />
                          ) : (
                            projects.all_projects.projects.map(
                              (project: any, key: number) => (
                                <tr key={key}>
                                  <td>{project.name}</td>
                                  <td>{project.donor_name}</td>
                                  <td>{project.amount}</td>
                                  <td>{project.end_date}</td>
                                  <td>{project.status}</td>
                                  <td>
                                    <button className="btn btn-sm btn-success">
                                      Edit
                                    </button>{" "}
                                    <button className="btn btn-sm btn-danger">
                                      Delete
                                    </button>
                                  </td>
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

export default ProjectList;
