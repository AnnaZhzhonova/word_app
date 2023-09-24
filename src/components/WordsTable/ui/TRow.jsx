import React from 'react';
import addIcon from '../../../assets/images/add.svg';
import style from '../WordsTable.module.scss';

export default function TRow(props) {
    const {eng,transcr, rus} = props;
  return (
    <div className={style.tableBox}>
        <tr className={style.tableRow}>
            <td>{eng}</td>
            <td>{transcr}</td>
            <td>{rus}</td>
            <td><button><img className={style.addIcon} src={addIcon} alt='add'></img></button></td>
        </tr>
    </div>
  )
}
