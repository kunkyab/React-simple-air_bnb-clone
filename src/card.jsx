import React from 'react'
import Star from '/images/Star.png'

const card = (props) => {
  //console.log(props.openSpots);

  let badgeText
  if(props.element.openSpots===0){
    badgeText =" SOLD OUT"
  } else if(props.element.location==="Online"){
    badgeText="ONLINE"
  }
  return (

    <>
    
    <div className='card'>
      

       { badgeText && <div className='card-badge'>{badgeText}</div>}
      
      <img src={props.element.coverImg} className='card-image' alt="wedding" />

      <div className='card-stat'>
        <img src={Star} alt=""  className='card-star'/>
      <span>{props.element.rating}</span>
                <span className="gray">({props.element.stats.reviewCount}) </span>
                <span className="gray">{props.element.location}</span>
                </div>
                <p className='card-title'>{props.element.title}</p>
            <p><span className='card-price'>From $ {props.element.price} </span>/ person</p>     
    </div>
  
    </>
  )
}

export default card
