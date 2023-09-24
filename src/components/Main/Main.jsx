import React from 'react';
import style from './Main.module.scss'
import Card from '../Card/Card';

export default function Main() {
  return (
      <div className={style.container}>
        <Card></Card>
      </div>
  )
}
