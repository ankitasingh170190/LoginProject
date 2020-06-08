import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import JwtContext from "../JwtContext";

export default () => {
  const { email } = useContext(JwtContext) || {};
  return (
    <Grid container component="main">
       <h1>{email}</h1>
    </Grid>
  );
};
