import React, { useState, useEffect } from 'react';
import { LinearProgress, Typography } from '@mui/material';

function sleep() {
  return new Promise((res) => {
    setTimeout(res, 3000);
  });
}

export default function ({ data, next }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    await sleep();
    setLoading(false);
    next();
  }, [data]);

  return (
    <>
      {isLoading && <LinearProgress />}
      <Typography>Data is beeing processed...</Typography>
    </>
  );
}
