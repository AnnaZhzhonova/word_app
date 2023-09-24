import React from 'react';
import THead from './ui/THead';
import TRow from './ui/TRow';
import style from './WordsTable.module.scss';
import data from '../../wordsList.json'



export default function WordsTable() {
  return (
    <div className={style.container}>
    <div className={style.WordsTable}>
      <THead></THead>
      {data.map((item) =>
        <TRow
        eng={item.english}
        transcr={item.transcription}
        rus={item.russian}
        ></TRow>
      )
      }
    </div>
    </div>
  )
}
