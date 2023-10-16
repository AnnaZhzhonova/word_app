import React, { useState } from 'react';
import style from '../WordsTable.module.scss';
import pencil from '../../../assets/images/pencil.svg';
import save from '../../../assets/images/save.svg';

export default function TRow(props) {
    const {eng,transcr, rus} = props;
    const [ isDisabled, setIsDisabled ] = useState(true);
    const handleButtonClick = () => {
      setIsDisabled(!isDisabled)
    }
  return (
    <div className={style.tableBox}>
        <tr className={style.tableRow}>
            <td><input className={style.input} type='text' value={eng} disabled={isDisabled}></input></td>
            <td><input className={style.input}  type='text' value={transcr} disabled={isDisabled}></input></td>
            <td><input className={style.input} type='text' value={rus} disabled={isDisabled}></input></td>
            <td className={style.header}><button onClick={handleButtonClick}><img className={style.changes} src={isDisabled ? pencil : save} alt='pencil'></img></button></td>
        </tr>
    </div>
  )
}
