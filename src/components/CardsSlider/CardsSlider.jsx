import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../Card/Card';
import data from '../../wordsList.json';
import style from './CardsSlider.module.scss';

export default function CardsSlider() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveWisth: true
  }
    return (
    <>
    <Slider {...settings} className={style.slider}>
      {data.map((item) =>
      <Card eng={item.english}
            transcr={item.transcription}
            rus={item.russian}
      ></Card>)}
    </Slider>
    </>
  )
}
