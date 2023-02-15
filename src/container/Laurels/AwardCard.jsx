import React from 'react'

const AwardCard = ({award: {imgUrl, title, subtitle}}) => {
  return (
    <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{subtitle}</p>
    </div>
  </div>
  )
}

export default AwardCard