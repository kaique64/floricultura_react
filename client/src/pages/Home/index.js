import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import Slider from "react-slick";

const photos = [
  {
    id: 1,
    name: 'Flor 1',
    url: 'https://images.unsplash.com/photo-1533907650686-70576141c030?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },

  {
    id: 2,
    name: 'Flor 2',
    url:  'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },

  {
    id: 3,
    name: 'Flor 3',
    url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
]

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
          {photos.map( (item) => {
            return(
            <div>
              <img 
              src = {item.url} 
              className = 'imgs' 
              width = '100%'
              />
            </div>
            )
          })}
        </Slider>

        <div className = 'imgsCompras'>
          <button>
            Comprar
            <img
            src = 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            />
          </button>

          <button>
            Comprar
            <img
            src = 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            />
          </button>

        </div>
      </div>
    );
  }
}