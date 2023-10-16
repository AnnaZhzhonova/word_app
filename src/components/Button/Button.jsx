import React from 'react';
import style from './Button.module.scss';

export default function Button(props) {
    const {text, func} = props;
  return (
    <>
    <button className={style.button} onClick={func}>{text}</button>
    </>
  )
}
