import React from 'react';
import NotFound from '../modules/404.module.css'

const PageNotFound = () => {
  return (
    <div className={NotFound.container}>
      <h1 className={NotFound.header}>404</h1>
      <h2 className={NotFound.subHeader}>Page not found</h2>
      <p className={NotFound.paragraph}>
      Oops! The page you are looking for does not exist. It may have been moved or deleted.
      </p>
      <a href="/" className={NotFound.link}>Back to home</a>
    </div>
  );
};

export default PageNotFound;
