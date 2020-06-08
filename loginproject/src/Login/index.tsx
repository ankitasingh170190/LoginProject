import React, { useState, MouseEvent, Dispatch, SetStateAction } from "react";
// External Components
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import jwtDecode from "jwt-decode";
import { useForm } from "react-hook-form";
import useStyles from "./useStyles";
import { JwtInfo } from "../JwtContext";

export default ({ setJwtInfo }: LoginProps) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<Credentials>();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSignIn = async ({ email, password }: Credentials) => {
    const result = await fetch("/authenticationApi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password,
      }),
    });
    if (result.ok) {
      const promiseData = await result.json();
      const { jwtToken } = promiseData;
      const { sub, "header": decoded } = jwtDecode<Token>(
        jwtToken,
      );
      const jwtInfo: JwtInfo = {
        id: "",
        email: "",
   };
      jwtInfo.id = decoded["id"];
      jwtInfo.email = sub;
      setJwtInfo(jwtInfo);
    } else {
      console.log("Access is not allowed");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        md={5}
        component={Paper}
        elevation={6}
        className={classes.paperContainer}
      >
        <Box marginLeft={4} marginRight={4}>
          <Box
            paddingTop={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h3">Login Page</Typography>
          </Box>
          <form onSubmit={handleSubmit(onSignIn)}>
            <Typography variant="h6" className={classes.textField}>
              Email Address
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={register}
              InputProps={{
                inputProps: {
                  className: classes.inputProps,
                },
              }}
            />
            <Typography variant="h6" className={classes.textField}>
              Password
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              type={showPassword ? "text" : "password"}
              fullWidth
              required
              id="password"
              name="password"
              autoComplete="password"
              inputRef={register}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="visibilityIcon"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                inputProps: {
                  className: classes.inputProps,
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

interface Token {
    sub: string;
    "header": {
      "id": string;
    };
  }

interface Credentials {
  email: string;
  password: string;
}

interface LoginProps {
  setJwtInfo: Dispatch<SetStateAction<JwtInfo | null>>;
}
