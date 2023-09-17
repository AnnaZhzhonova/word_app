import React from 'react';

export default function WordsTable(props) {
    const {eng,transcription, rus} = props;
  return (
    <React.Component>
        <div>{eng}</div>
        <div>{transcription}</div>
        <div>{rus}</div>
    </React.Component>
  )
}
