import React from 'react';
import THead from './THead';
import TRow from './TRow';
import data from '../../wordsList.json'



export default function WordsTable() {
  return (
    <div>
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
  )
}
