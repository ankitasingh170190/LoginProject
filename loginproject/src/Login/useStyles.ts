import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    height: "100vh",
    overscrollBehavior: "auto",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.up("md")]: {
      backgroundImage: "url(img/pic.jpg)",
      backgroundSize: "cover",
      height: "100vh",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70vw",
    },
  },
  button: {
    margin: theme.spacing(1, 0, 2),
  },
  paperContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textField: {
    paddingTop: theme.spacing(1),
  },
  inputProps: {
    display: "flex",
    height: theme.typography.pxToRem(28),
    padding: 0,
    marginLeft: theme.spacing(0.5),
  },
}));

export default useStyles;
