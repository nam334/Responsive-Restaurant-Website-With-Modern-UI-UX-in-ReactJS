import React from 'react';
import { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import  {images} from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05]

const Gallery = () => {
  const scollRef = useRef(null)

  const scroll = (direction) => {
    const {current} = scollRef;

    if(direction === 'left'){
      current.scollLeft -= 300;
    }
    else {
      current.scrollLeft += 300
    }
  }
  return(
    <div className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title="Instagram"/>
      <h1 className="headtext__cormorant">
        Photo Gallery
      </h1>
      <p className="p__opensans" style={{color:"#AAA", marginTop:'2rem'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat ex incidunt rem dolore aut esse vitae, minima aperiam facere quaerat in. Debitis iusto voluptate ipsam eius. Laboriosam, inventore ab.
      </p>
      <button type='button' className='custom__button'>View More</button>
    </div>

      <div className="app__gallery-images">
        <div ref={scollRef} className="app__gallery-images_container">
          {
            galleryImages.map((galleryImg, index) => (
              <div className='app__gallery-images_card flex__center' key={`gallery-image-${index+1}`}>
                  <img src={galleryImg} alt="gallery" />
                  <BsInstagram className='gallery__image-icon' />
              </div>
            ))
          }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' 
          onClick={()=>{scroll('left')}}
          />

          <BsArrowRightShort className='gallery__arrow-icon' 
          onClick={()=>{scroll('right')}}
          />
        </div>
      </div>

  </div>
  )
}

export default Gallery;
