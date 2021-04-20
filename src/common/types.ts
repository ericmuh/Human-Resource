export interface IKeyable {
  [key: string]: any;
}


// ==== need to fix any type to object ...
export interface IPublications {
publications:Array<any>;
}

export interface IOperations {
  locations: Array<any>;
  donors: Array<any>;
  vendors: Array<any>;
}
export interface IAllprograms {
  programs: Array<object>;
  programmatic_approaches: Array<object>;
  management_approaches: Array<object>;
  indicators: Array<object>;
  milestones: Array<object>;
}
export interface IProgram {
  all_programs: IAllprograms;

  program_milestones: Array<object>;
  program_indicators: Array<object>;

  program_summary: object;
  programmatic_approach: object;
  management_approach: object;
}
export interface IReducerAction {
  type: string;
  payload: Object;
}

export interface IAllProjects {
  projects: Array<object>;
  workplans: Array<object>;
  supplys: Array<object>;
  teams: Array<object>;
  movements: Array<object>;
}

export interface IProjects {
  all_projects: IAllProjects;
  project_summary: object;
  project_workplan: object;
  project_milestones: Array<object>;
  project_supply: Array<object>;
  project_team: Array<object>;
  project_movement: object;
}
