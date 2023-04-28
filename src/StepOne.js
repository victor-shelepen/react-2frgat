import React from 'react';
import { Grid, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { TextField } from 'formik-mui';

const validataionSchema = yup.object({
  email: yup.string().email().required(),
  fullname: yup.string().required(),
});

export default function ({ next, data, setData }) {
  const initialValues = {
    ...{
      email: 'some@email.com',
      fullname: '',
    },
    ...data,
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
    <>
      <Formik
        validationSchema={validataionSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {(props) => {
          // console.log(props);
          const { isValid } = props;
          return (
            <Form>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Field
                    name="email"
                    label="email"
                    component={TextField}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <Field
                    name="fullname"
                    label="Full name"
                    component={TextField}
                    fullWidth
                  />
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={!isValid}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
      <Grid container spacing={2}></Grid>
    </>
  );
}
