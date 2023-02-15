import React from 'react';
import './AboutUs.css';
import images from '../../constants/images';
const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dicta assumenda saepe iste magnam. Corporis optio doloremque atque aliquam sit vitae ut distinctio? Eaque dolore quasi sit, ducimus eveniet explicabo!</p>
        <button type='button' className='custom__button'></button>
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="about_spoon" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dicta assumenda saepe iste magnam. Corporis optio doloremque atque aliquam sit vitae ut distinctio? Eaque dolore quasi sit, ducimus eveniet explicabo!</p>
        <button type='button' className='custom__button'></button>
      </div>


    </div>
  </div>
);

export default AboutUs;
 