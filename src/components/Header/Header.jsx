import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import settings from '../../assets/images/settings.svg'

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.container}>
      <div className={style.logoBox}>
        <img className={style.logo} src={logo} alt='logo'></img>
        <h2 className={style.title}>WordApp</h2>
      </div>
      <ul className={style.list}>
        <li>Главная</li>
        <li>Словарь</li>
        <li>Интересное</li>
      </ul>
      <div className={style.settings} ><img src={settings} alt='set'></img></div>
      </div>
    </div>
  )
}
