import axios from "axios";
import * as React from "react";
import { IProgram, IProjects } from "../../common/types";

const baseURL = "https://holdthechildapi.herokuapp.com/";

interface IRequest {
  dispatch: React.Dispatch<any>;
  action_type: string;
}
interface IRequestSpecial {
  dispatch: React.Dispatch<any>;
  options_type?: string;
  action_type?: string;
}
interface IGetRequestSpecial extends IRequestSpecial {
  url: string;
}
interface IGetRequest extends IRequest {
  url: string;
}
interface PostRequest extends IGetRequest {
  data: object;
}

export const getData = async ({
  dispatch,
  url,
  action_type,
  options_type,
}: IGetRequestSpecial) => {
  const response = await axios.get(`${baseURL}${url}/`);
  console.log(response, "response");
  if (action_type) {
    dispatch({
      type: action_type,
      payload: response.data,
    });
  } else if (options_type) {
    const options: Array<any> = [];
    response.data.map((option: any, key: number) =>
      options.push({
        value: option.url,
        label: `${option.name} ${option.country ? `, ${option.country}` : ""} `,
      })
    );

    dispatch({
      type: options_type,
      payload: options,
    });
  } else {
    return;
  }
};

export const postData = async ({
  dispatch,
  url,
  data,
  action_type,
}: PostRequest) => {
  try {
    const response = await axios({
      method: "post",
      url: `${baseURL}${url}/`,
      data,
    });
    dispatch({
      type: action_type,
      payload: data,
    });
    console.log(response, `from ${url}`);
  } catch (error) {
    console.log(error);
  }
};

// POST PROGRAMS
export const postPrograms = async (programs: IProgram) => {
  try {
    // program
    console.log({ programs: programs.program_summary });
    const program = await axios({
      method: "post",
      url: `${baseURL}programs/programs/`,
      headers: { "content-type": "multipart/form-data" },
      data: programs.program_summary,
    });

    // programmatic approach

    const programmatic_approach = await axios({
      method: "post",
      url: `${baseURL}programs/programmatic_approaches/`,
      data: programs.programmatic_approach,
    });

    // indicators
    programs.program_indicators.forEach(async (value) => {
      const indicator = await axios({
        method: "post",
        url: `${baseURL}programs/indicators/`,
        data: value,
      });
    });

    // management approach
    const management_approach = await axios({
      method: "post",
      url: `${baseURL}programs/management_approaches/`,
      data: programs.management_approach,
    });
    // milestone
    programs.program_milestones.forEach(async (value) => {
      const milestone = await axios({
        method: "post",
        url: `${baseURL}programs/milestones/`,
        data: value,
      });
      console.log(milestone);
    });
  } catch (error) {
    console.log(error);
  }
};

// GET PROGRAMS
export const getPrograms = async ({
  dispatch,
  action_type,
  options_type,
}: IRequestSpecial) => {
  try {
    // program

    const programs = await axios({
      method: "get",
      url: `${baseURL}programs/programs/`,
    });
    if (options_type) {
      const options: Array<any> = [];
      programs.data.map((option: any, key: number) =>
        options.push({
          value: option.url,
          label: `${option.title} ${
            option.country ? `, ${option.country}` : ""
          } `,
        })
      );

      dispatch({
        type: options_type,
        payload: options,
      });
    }
    // programmatic approach

    const programmatic_approaches = await axios({
      method: "get",
      url: `${baseURL}programs/programmatic_approaches/`,
    });

    // indicators

    const indicators = await axios({
      method: "get",
      url: `${baseURL}programs/indicators/`,
    });

    // management approach
    const management_approaches = await axios({
      method: "get",
      url: `${baseURL}programs/management_approaches/`,
    });

    // milestone

    const milestones = await axios({
      method: "get",
      url: `${baseURL}programs/milestones/`,
    });
    if (action_type) {
      dispatch({
        type: action_type,
        payload: {
          programs: programs.data,
          programmatic_approaches: programmatic_approaches.data,
          management_approaches: management_approaches.data,
          indicators: {},
          milestones: {},
        },
      });
    }

    console.log({
      programs,
      programmatic_approaches,
      management_approaches,
      indicators,
      milestones,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET PROJECTS

export const getProjects = async ({ dispatch, action_type }: IRequest) => {
  try {
    // program

    const projects = await axios({
      method: "get",
      url: `${baseURL}projects/projects/`,
    });

    // programmatic approach

    const project_supply = await axios({
      method: "get",
      url: `${baseURL}projects/supplys/`,
    });

    // indicators

    const project_movement = await axios({
      method: "get",
      url: `${baseURL}projects/travels/`,
    });

    // management approach
    const project_workplan = await axios({
      method: "get",
      url: `${baseURL}projects/workplans/`,
    });

    // milestone

    const project_milestones = await axios({
      method: "get",
      url: `${baseURL}projects/milestones/`,
    });

    dispatch({
      type: action_type,
      payload: {
        projects: projects.data,
        project_workplan: project_workplan.data,
        project_supply: project_supply.data,
        project_milestones: project_milestones.data,
        project_movement: project_movement.data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const postProjects = async (projects: IProjects) => {
  try {
    // program
    const project = await axios({
      method: "post",
      url: `${baseURL}projects/projects/`,
      headers: { "content-type": "multipart/form-data" },
      data: projects.project_summary,
    });

    // programmatic approach

    const workplan = await axios({
      method: "post",
      url: `${baseURL}projects/workplans/`,
      data: { project: project.data.url, ...projects.project_workplan },
    });

    // MILESTONES
    projects.project_milestones.forEach(async (value) => {
      const indicator = await axios({
        method: "post",
        url: `${baseURL}projects/milestones/`,
        data: {
          project: workplan.data.url,
          ...value,
        },
      });
    });

    // SUPPLYS
    projects.project_supply.forEach(async (value) => {
      const indicator = await axios({
        method: "post",
        url: `${baseURL}projects/supplys/`,
        data: {
          project: project.data.url,
          ...value,
        },
      });
    });

    // MOVEMENTS
    const movements = await axios({
      method: "post",
      url: `${baseURL}projects/travels/`,
      data: {
        project: project.data.url,
        ...projects.project_movement,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
