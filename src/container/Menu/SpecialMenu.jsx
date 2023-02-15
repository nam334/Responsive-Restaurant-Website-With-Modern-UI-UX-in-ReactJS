import React from 'react';

import './SpecialMenu.css';
import { images, data} from '../../constants'
import { MenuItem, SubHeading } from '../../components';
const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section_-padding' id='menu'>
    <div className='app__specialMenu_title'>
        <SubHeading title="Menu that fits your pallet" />
        <h1 className='headtext__cormorant'>Todays special</h1>
    </div>
    <div className='app__specialMenu_menu'>
        <div className="app__specialMenu_menu_wine flex__center">
          <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {
              data.wines.map((wine, index)=> (
                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}  />
              ))
            }
          </div>
        </div>

        <div className='app__specialMenu_menu_img'>
            <img src={images.menu} alt="" />
        </div>

        <div className="app__specialMenu_menu_cocktails flex__center">
          <p className='app__specialMenu_menu_heading'>Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {
              data.cocktails.map((cocktail, index)=> (
                <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}  />
              ))
            }
          </div>
        </div>


    </div>

    <div style={{marginTop:'15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>

  </div>
);

export default SpecialMenu;
