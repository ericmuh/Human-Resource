interface IData {
  name: string;
  values: Object;
}

export const saveToLocalStorage = (data: IData) => {
  let datalocal = localStorage.getItem(data.name);
  if (datalocal === null) {
    localStorage.setItem(data.name, JSON.stringify([data.values]));
  } else {
    let dataarray = JSON.parse(datalocal);
    console.log(dataarray);
    console.log(typeof dataarray);
    if (typeof dataarray === "object") {
      dataarray.push(data.values);
      localStorage.setItem(data.name, JSON.stringify(dataarray));
    }
  }
};

export const retrieveFromLocalStorage = (data_name: string): Array<any> => {
  let dataObj: Array<any>;

  let data = localStorage.getItem(data_name);

  if (typeof data === "string" && data !== null) {
    dataObj = JSON.parse(data);
    if (typeof dataObj !== undefined) {
      return dataObj;
    } else {
      return [];
    }
  }
  return [];
};
