import React from 'react';
import THead from './ui/THead';
import TRow from './ui/TRow';
import style from './WordsTable.module.scss';
import data from '../../wordsList.json'



export default function WordsTable() {
  const wordsData = data.map((item) => item);
  return (
    <div className={style.container}>
    <div className={style.WordsTable}>
      <THead></THead>
      {wordsData.map((item) =>
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
