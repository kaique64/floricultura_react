import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Historia.css';

const photos = [
  {
    id: 1,
    name: 'Flor 1',
    url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Flor 2',
    url: 'https://images.unsplash.com/photo-1579548098283-41170f818334?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYXRpbmclMjBmbG93ZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Flor 3',
    url: 'https://images.unsplash.com/photo-1485395578879-6ba080c9cdba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGZsb3JlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
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
      <div className = 'container'>
        <Slider {...settings}>
        {photos.map( (item) => {
          return(
            <div>
              <img 
              src = {item.url}
              width = '100%'
              height = '480px'
              />
            </div>
          );
        })
        }
        </Slider>

        <div className = 'txtHistory'>
          <h1> História </h1>
          <article>
          Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. 
          Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. 
          Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, 
          procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, 
          e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem. 
          Lorem Ipsum vem das secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" 
          (Os Extremos do Bem e do Mal), por Cícero, escrito a 45AC. 
          Este livro é um tratado na teoria da ética, muito popular durante a Renascença. 
          A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet..." aparece de uma linha na secção 1.10.32.
          O pedaço mais habitual do Lorem Ipsum usado desde os anos 1500 é reproduzido abaixo para os interessados. 
          As secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" do Cícero também estão reproduzidos na sua forma original, 
          acompanhados pela sua tradução em Inglês, versões da tradução de 1914 por H. Rackham.
          </article>
        </div>
      </div>
    );
  }
}
