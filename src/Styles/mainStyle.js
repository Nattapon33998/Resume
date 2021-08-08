const mainStyle = {
  mainBg: {
    backgroundSize: "cover",
  },
  cover: {
    background: "#ffffff",
    position: "relative",
    zIndex: "3",
    margin: "-400px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14)",
  },
  textOnBg: {
    position: "relative",
    zIndex: "5",
    margin: "-100px 30px 0px",
    // borderRadius: "6px",
    // boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14)",
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto",
  },
  imgRoundedCircle: {
    borderRadius: "50% !important",
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "230px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  nameA: {
    marginTop: "-110px",
  },
  description: {
    margin: "auto",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
    // padding: "10px",
  },
};

export default mainStyle;
