const defaultWidth =
  window.screen.width > 768
    ? (window.screen.width * 1) / 3
    : window.screen.width;

const style = {
  Wrapper: {},
  Containers: {
    DefaultStyle: {
      position: "fixed",
      width: defaultWidth,
      padding: "10px 10px 10px 20px",
      zIndex: 9998,
      WebkitBoxSizing: "",
      MozBoxSizing: "",
      boxSizing: "",
      height: "auto",
      display: "inline-block",
      border: "0",
      fontSize: "14px",
      WebkitFontSmoothing: "antialiased",
      fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
      fontWeight: "400",
      color: "#FFFFFF",
    },

    tl: {
      top: "0px",
      bottom: "auto",
      left: "0px",
      right: "auto",
    },

    tr: {
      top: "0px",
      bottom: "auto",
      left: "auto",
      right: "0px",
    },

    tc: {
      top: "0px",
      bottom: "auto",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2),
    },

    bl: {
      top: "auto",
      bottom: "0px",
      left: "0px",
      right: "auto",
    },

    br: {
      top: "auto",
      bottom: "0px",
      left: "auto",
      right: "0px",
    },

    bc: {
      top: "auto",
      bottom: "0px",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2),
    },
  },

  NotificationItem: {
    DefaultStyle: {
      position: "relative",
      width: "100%",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "14px",
      margin: "10px 0 0",
      padding: "10px",
      display: "block",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      opacity: 0,
      transition: "all 0.5s ease-in-out",
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",

      isHidden: {
        opacity: 0,
      },

      isVisible: {
        opacity: 1,
      },
    },

    success: {
      borderTop: 0,
      backgroundColor: "#a1e82c",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },

    error: {
      borderTop: 0,
      backgroundColor: "#fc727a",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },

    warning: {
      borderTop: 0,
      backgroundColor: "#ffbc67",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },

    info: {
      borderTop: 0,
      backgroundColor: "#63d8f1",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },
  },

  Title: {
    DefaultStyle: {
      fontSize: "30px",
      margin: "0",
      padding: 0,
      fontWeight: "bold",
      color: "#FFFFFF",
      display: "block",
      left: "15px",
      position: "absolute",
      top: "50%",
      marginTop: "-15px",
    },
  },

  MessageWrapper: {
    DefaultStyle: {
      marginLeft: "55px",
      marginRight: "30px",
      padding: "0 12px 0 0",
      color: "#FFFFFF",
      maxWidthwidth: "89%",
    },
  },

  Dismiss: {
    DefaultStyle: {
      fontFamily: "inherit",
      fontSize: "21px",
      color: "#000",
      float: "right",
      position: "absolute",
      right: "10px",
      top: "50%",
      marginTop: "-13px",
      backgroundColor: "#FFFFFF",
      display: "block",
      borderRadius: "50%",
      opacity: ".4",
      lineHeight: "11px",
      width: "25px",
      height: "25px",
      outline: "0 !important",
      textAlign: "center",
      padding: "6px 3px 3px 3px",
      fontWeight: "300",
      marginLeft: "65px",
    },

    success: {
      // color: '#f0f5ea',
      // backgroundColor: '#a1e82c'
    },

    error: {
      // color: '#f4e9e9',
      // backgroundColor: '#fc727a'
    },

    warning: {
      // color: '#f9f6f0',
      // backgroundColor: '#ffbc67'
    },

    info: {
      // color: '#e8f0f4',
      // backgroundColor: '#63d8f1'
    },
  },

  Action: {
    DefaultStyle: {
      background: "#ffffff",
      borderRadius: "2px",
      padding: "6px 20px",
      fontWeight: "bold",
      margin: "10px 0 0 0",
      border: 0,
    },

    success: {
      backgroundColor: "#a1e82c",
      color: "#ffffff",
    },

    error: {
      backgroundColor: "#fc727a",
      color: "#ffffff",
    },

    warning: {
      backgroundColor: "#ffbc67",
      color: "#ffffff",
    },

    info: {
      backgroundColor: "#63d8f1",
      color: "#ffffff",
    },
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0,
    },
  },
};

//
// //
// // // For tables
// //
//

const thArrayDonor = [
  "ID(shortform)",
  "Name",
  "Address",
  "Contact Person",
  "Category",
  "status",
];

const thArrayLocation = [
  "Name",
  "Address",
  "Contact",
  "Category",
  "GPS(cordinate)",
  "status",
];

const thArrayProject = [
  "Project Name",
  "Donor Name",
  "Amount",
  "Duration",
  "Status",
  "Action",
];
const thArrayPrograms = [
  "ID(shortform)",
  "Title",
  "Indicator",
  "Target",
  "End Date",
  "status",
];

const thArrayUsers = [
  "Thumbnail",
  "Name",
  "Gender",
  "Catergory",
  "Location",
  "status",
  "Action",
];

const thArrayEvents = [
  "Name",
  "Location",
  "Start Date",
  "Duration",
  "Category",
  "status",
];
const thArrayPlanning = [
  "Result",
  "Planning Activities ",
  "Targets",
  "Planning Assumptions",
];
//
// //
// // // // For dashboard's charts
// //
//
// Data for Pie Chart
const dataPie = {
  labels: ["40%", "20%", "40%"],
  series: [40, 20, 40],
};
const legendPie = {
  names: ["Open", "Bounce", "Unsubscribe"],
  types: ["info", "danger", "warning"],
};

// Data for Line Chart
const dataSales = {
  labels: [
    "9:00AM",
    "12:00AM",
    "3:00PM",
    "6:00PM",
    "9:00PM",
    "12:00PM",
    "3:00AM",
    "6:00AM",
  ],
  series: [
    [287, 385, 490, 492, 554, 586, 698, 695],
    [67, 152, 143, 240, 287, 335, 435, 437],
    [23, 113, 67, 108, 190, 239, 307, 308],
  ],
};
const optionsSales = {
  low: 0,
  high: 800,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false,
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50,
  },
};
const responsiveSales = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function (value: any) {
          return value[0];
        },
      },
    },
  ],
];
const legendSales = {
  names: ["Open", "Click", "Click Second Time"],
  types: ["info", "danger", "warning"],
};

// Data for Bar Chart
const dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
  ],
};
const optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false,
  },
  height: "245px",
};
const responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value: any) {
          return value[0];
        },
      },
    },
  ],
];
const legendBar = {
  names: ["Uganda", "South Sudan"],
  types: ["info", "danger"],
};

export {
  style, // For notifications (App container and Notifications view)
  thArrayLocation,
  thArrayProject,
  thArrayEvents,
  thArrayDonor,
  thArrayPlanning,
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  thArrayUsers,
  thArrayPrograms,
  legendBar, // For charts (Dashboard view)
};
