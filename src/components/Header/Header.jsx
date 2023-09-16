import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png'

export default function Header() {
  return (
    <div className={style.container}>
      <div>
        <img src={logo} alt='logo'></img>
        <h2>WordApp</h2>
      </div>
      <ul>
        <li>Главная</li>
        <li>Словарь</li>
        <li>Интересное</li>
      </ul>
      <div>Settings</div>
    </div>
  )
}
