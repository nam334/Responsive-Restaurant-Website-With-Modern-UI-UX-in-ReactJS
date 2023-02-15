import React from 'react';

import './Laurels.css';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import AwardCard from './AwardCard';
const Laurels = () => (
  <div className='app__bg app__wrappr section__padding' id='awards'>

   <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels_awards'>
      {
        data.awards.map(award => <AwardCard award={award} key={award.title} />)
      }
      </div>
   </div>
   {/* <div className="app__wrapper_img"> 
      <img src={images.laurels} alt="laurels" />
   </div> */}
  </div>
);

export default Laurels;
