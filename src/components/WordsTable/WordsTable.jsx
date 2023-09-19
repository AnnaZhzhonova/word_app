import React from 'react';

export default function WordsTable(props) {
    const {eng,transcription, rus} = props;
  return (
    <div>
        <div>{eng}</div>
        <div>{transcription}</div>
        <div>{rus}</div>
    </div>
  )
}
