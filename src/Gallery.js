import React from 'react';
import { render } from "react-dom";
import Modal from './Modal.js';
import ImageGallery1 from './ImageGalleries/ImageGallery1.js';
import ImageGallery2 from './ImageGalleries/ImageGallery2.js';
import ImageGallery3 from './ImageGalleries/ImageGallery3.js';
import ImageGallery4 from './ImageGalleries/ImageGallery4.js';
import ImageGallery5 from './ImageGalleries/ImageGallery5.js';
import ImageGallery6 from './ImageGalleries/ImageGallery6.js';
import ImageGallery7 from './ImageGalleries/ImageGallery7.js';
import ImageGallery8 from './ImageGalleries/ImageGallery8.js';
import ImageGallery9 from './ImageGalleries/ImageGallery9.js';
import ImageGallery10 from './ImageGalleries/ImageGallery10.js';
import ImageGallery11 from './ImageGalleries/ImageGallery11.js';
import ImageGallery12 from './ImageGalleries/ImageGallery12.js';
import ImageGallery13 from './ImageGalleries/ImageGallery13.js';
import ImageGallery14 from './ImageGalleries/ImageGallery14.js';
import ImageGallery15 from './ImageGalleries/ImageGallery15.js';
import ImageGallery16 from './ImageGalleries/ImageGallery16.js';
import Car from './Car.js';

require('./gallery.css');

class Gallery extends React.Component {
state = {
    post: [
      { id1: "1", id: "Mercedes A160 AMG Line", name: <ImageGallery1 /> },
      { id1: "2", id: "Volkswagen Polo R-Line", name: <ImageGallery2 /> },
      { id1: "3", id: "Ford Fiesta ST", name: <ImageGallery3 /> },
      { id1: "4", id: "Audi A1 S-Line", name: <ImageGallery4 /> },
      { id1: "5", id: "Opel Corsa GS-Line", name: <ImageGallery5 />  },
      { id1: "6", id: "Hyundai i-30 N", name: <ImageGallery6 /> },
      { id1: "7", id: "Abarth 595 Competizione", name: <ImageGallery7 />  },
      { id1: "8", id: "Volkswagen Golf Style", name: <ImageGallery8 /> },
      { id1: "9", id: "Hyundai i-30 N Line", name: <ImageGallery9 />  },
      { id1: "10", id: "Hyundai i-20 N Line", name: <ImageGallery10 /> },
      { id1: "11", id: "Toyota Yaris Chic", name: <ImageGallery11 /> },
      { id1: "12", id: "BMW 116i M Sport", name: <ImageGallery12 /> },
      { id1: "13", id: "Citroen C1 Shine", name: <ImageGallery13 /> }, 
      { id1: "14", id: "Peugeot 208 GT Line", name: <ImageGallery14 /> },
      { id1: "15,17", id: "Ford Focus ST Line", name: <ImageGallery15 /> }, 
      { id1: "16,18", id: "Ford Focus ST-X Line", name: <ImageGallery16 /> },
    ]
  };

  render() {
    return (
      <div className="holder">
        <Car data={this.state.post} />
      </div>
    );
  }
}


export default Gallery;