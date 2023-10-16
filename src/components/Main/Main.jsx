import React, {useState} from 'react';
import style from './Main.module.scss';
import Button from '../Button/Button';
import WordsTable from '../WordsTable/WordsTable';
import CardsSlider from '../CardsSlider/CardsSlider';

export default function Main() {
const [learn, setLearn] = useState(false);
const handleblockChange = () => {
  setLearn(!learn);
}
if(learn)
  return (
    <>
     <div>
      <div className={style.buttonContainer}><Button text='учить слова' func={handleblockChange} style={style.btn}></Button></div>
      <WordsTable></WordsTable>
      </div>
      </>
  )
  return (
    <>
     <div>
     <div className={style.buttonContainer}><Button text='к списку слов' func={handleblockChange}></Button></div>
      <div className={style.sliderContainer}><CardsSlider></CardsSlider></div>
    </div>
      </>
  )
}
