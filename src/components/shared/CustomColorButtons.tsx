import { Button, withStyles } from "@material-ui/core";

const CustomPinkBtn = withStyles((props) => ({
  root: {
    color: "white",
    backgroundColor: "#FCA5A5",
    "&:hover": {
      backgroundColor: "#F87171",
    },
  },
}))(Button);

const CustomOutlinePinkBtn = withStyles(() => ({
  root: {
    color: "#FCA5A5",
    backgroundColor: "transparent",
    borderColor: "#FCA5A5",
    "&:hover": {
      backgroundColor: "#F3F4F6",
    },
  },
}))(Button);

export { CustomPinkBtn, CustomOutlinePinkBtn };
