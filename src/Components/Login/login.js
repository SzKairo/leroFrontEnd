import React from "react";
import makeStyles from "./styles";
import { Input, Button, Box, } from '@material-ui/core';
import { Link } from "react-router-dom";

const Login = () => {
  const classes = makeStyles();

  return (

  <Box className={classes.Login}>
       <Input fullWidth label name="email"/>
       <Input fullWidth name="password"/>
       <Link to="/home"><Button>Logar</Button></Link>
  </Box>
  
  )
};

export default Login;
