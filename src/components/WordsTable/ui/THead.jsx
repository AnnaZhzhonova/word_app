import React, { useState } from 'react';
import style from '../WordsTable.module.scss';
import addIcon from '../../../assets/images/add.svg';

export default function THead() {
  const [inputEng, inputTransc, inputRis, addBtn] = useState(false);


  return (
    <div className={style.tableBox}>
            <tr className={style.tableRow}>
                <td className={style.header}>Слово</td>
                <td className={style.header}>Транскрипция</td>
                <td className={style.header}>Перевод</td>
            </tr>
            <tr className={style.tableRow}>
              <td className={style.header}><input className={style.input} type='text'/></td>
              <td className={style.header}><input className={style.input} type='text'/></td>
              <td className={style.header}><input className={style.input} type='text'/></td>
              <td className={style.header}><button><img className={style.changes} src={addIcon} alt='pencil'></img></button></td>
            </tr>
    </div>
  )
}
