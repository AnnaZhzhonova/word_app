import React from 'react';
import style from '../WordsTable.module.scss';

export default function TRow(props) {
    const {eng,transcr, rus} = props;
  return (
    <div className={style.tableBox}>
        <tr className={style.tableRow}>
            <td>{eng}</td>
            <td>{transcr}</td>
            <td>{rus}</td>
        </tr>
    </div>
  )
}
