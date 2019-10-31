import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles({
  card: {
    maxWidth: 690
  },
  button: {
    backgroundColor: "red",
    color: "white"
  },

  paperButton: {
    marginTop: "10px",
    marginBottom: "30px"
  }
});

//uint aadhaar;
// uint age; x
// bytes32 name; x
// bytes32 dob; x
// uint weight; x
// bytes32 allergies; x
// bytes32[] disease_history; x
// uint[] prescription_ids; x
// uint[] doctor_ids;
export default function AddressForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <Typography variant="h6" gutterBottom>
          Patient Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="Aadhar"
              name="aadhar"
              label="Aadhar"
              fullWidth
              autoComplete="aadhar"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="Age"
              name="age"
              label="Age"
              fullWidth
              autoComplete="age"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-of-birth"
                label="Date of Birth"
                value={selectedDate}
                onChange={e => setSelectedDate(e)}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="weight"
              name="weight"
              label="Patient Weight"
              fullWidth
              autoComplete="weight"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="allergies"
              name="allergies"
              label="Patient Allergies"
              fullWidth
              autoComplete="allergies"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="disease-history"
              name="disease-history"
              label="Disease History"
              fullWidth
              autoComplete="dHistory"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="prescription-ids"
              name="prescription-ids"
              label="Prescription Ids"
              fullWidth
              autoComplete="pIds"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="doctor-ids"
              name="doctor-ids"
              label="Doctor Ids"
              fullWidth
              autoComplete="dIds"
            />
          </Grid>
        </Grid>
      </Card>
      <Grid item xs={12}>
        <Paper className={classes.paperButton}>
          <Button className={classes.button} variant="extended" fullWidth>
            Submit
          </Button>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
