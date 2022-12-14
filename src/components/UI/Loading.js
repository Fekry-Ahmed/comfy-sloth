import React from 'react';

import classes from './Loading.module.css';

const Loading = () => {
  return (
    <section className={classes.loading}>
      <div className={classes.loading__spinner}></div>;
    </section>
  );
};

export default Loading;
