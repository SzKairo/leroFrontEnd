import React from "react";
import makeStyles from "./styles";
import { Link } from "react-router-dom";
import { TextField, Button, Paper, Box } from "@material-ui/core";
import Screenshot_1 from "../Images/Screenshot_1.png";

const home = () => {
  const classes = makeStyles();

  return (
    <div className={classes.fundo}>
      <Box>
        <img src={Screenshot_1} alt="Excel" height="300px" />
      </Box>
      <input
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        id="icon-button-file"
        type="file"
      />
      <TextField
        fullWidth
        id="message"
        label="Sua Mensagem"
        color="secondary"
      />
      <Button variant="contained">Enviar Sua Mensagem</Button>
      <Paper className={classes.qrcode} elevation="5">
        <h1>QRCODE</h1>
      </Paper>
    </div>
  );
};

export default home;
