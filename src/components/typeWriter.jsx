import React, { useEffect } from 'react';
import style from '../modules/typeWriter.module.css';
import Typewriter from 'typewriter-effect/dist/core';

function TypeWriter() {
  useEffect(() => {
    var app = document.getElementById("text");

    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 75,
    });

    typewriter
      .typeString("< Welcome to my portfolio<br> ")
      .typeString("<span style=margin-left:400px >Karsten Verherstraeten</span> >")
      .start();
  }, []);

  return (
    <div id='text' className={style.Text}></div>
  );
}

export default TypeWriter;