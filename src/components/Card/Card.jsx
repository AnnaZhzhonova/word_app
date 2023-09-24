import React, { useState } from 'react';
import style from './Card.module.scss';

export default function Card(props) {
  const {eng, transcr, rus} = props;
  const [translate, setTranslate] = useState(false);

  const handleChange = () => {
    setTranslate(!translate)
  }

  return (
    <>
      <div className={style.cardBody}>
      <p className={style.eng}>{eng}</p>
      <p className={style.transcr}>{transcr}</p>
      <button className={translate ? style.buttonHidden : style.button} onClick={handleChange}>Перевод</button>
      <p className={translate ? style.rus : style.rusHidden}>{rus}</p>
      </div>
    </>

  )
}

Card.defaultProps = {
  eng: 'Hello',
  transcr: '[həˈləʊ]',
  rus: 'Привет'
};