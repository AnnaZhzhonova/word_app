import React, { useState } from 'react';
import style from '../WordsTable.module.scss';

export default function THead() {

  return (
    <div className={style.tableBox}>
            <tr className={style.tableRow}>
                <td className={style.header}>Слово</td>
                <td className={style.header}>Транскрипция</td>
                <td className={style.header}>Перевод</td>
            </tr>
    </div>
  )
}
