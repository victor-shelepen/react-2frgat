import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Grid,
  Box,
  Button,
} from '@mui/material';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Success from './Success';
import JSONPretty from 'react-json-pretty';

export default function App() {
  const labels = ['Personal', 'Phones', 'Processing'];
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState();

  function next() {
    if (current < steps.length - 1) {
      setCurrent((c) => c + 1);
    }

    return current;
  }

  function prev() {
    if (current > 0) {
      setCurrent((c) => c - 1);
    }

    return current;
  }

  const helpers = {
    next,
    prev,
    data,
    setData,
  };

  const steps = [
    <StepOne {...helpers} />,
    <StepTwo {...helpers} />,
    <StepThree {...helpers} />,
    <Success {...helpers} />,
  ];

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography color="white">MUI multistep form</Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        <Box padding={2}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Stepper activeStep={current}>
                {labels.map((label, index) => (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item padding={2}>
              {steps[current]}
            </Grid>
            <Grid item container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button
                  disabled={current == 0}
                  variant="contained"
                  onClick={() => {
                    prev();
                  }}
                >
                  Previous
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={current == steps.length - 1}
                  variant="contained"
                  onClick={() => next()}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
            <Grid>
              <JSONPretty data={data} />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
