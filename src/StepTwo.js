import React from 'react';
import * as yup from 'yup';
import { Grid, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

export default function ({ prev, next, data, setData }) {
  const initialValues = {
    personal: '',
  };

  function onSubmit(values) {
    const newData = {
      ...data,
      ...values,
    };
    setData(newData);
    next();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isValid }) => (
        <Form>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Field
                label="Personal"
                name="personal"
                component={TextField}
                fullWidth
              />
            </Grid>
            <Grid item>
              <Field label="Home" name="home" component={TextField} fullWidth />
            </Grid>
            <Grid item container spacing={2}>
              <Grid item>
                <Button variant="contained" onClick={() => prev()}>
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" type="submit" disabled={!isValid}>
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
