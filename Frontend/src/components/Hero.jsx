import React from 'react'

const Hero = ({title,imgUrl}) => {
  return (
    <div className='hero container'>
     <div className='banner'>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aperiam perferendis. Doloremque, dolores numquam. Assumenda in saepe similique illo, rem consequuntur cum. Veritatis autem est deserunt ea vitae totam accusantium fugiat nesciunt sequi dolores illo, facilis iste natus et quis consectetur nihil eum quidem porro fuga quam consequuntur odio. Magnam, odit amet!
      </p>
 
     </div>
     <div className="banner">
      <img src={imgUrl} alt="hero" className='animated-image' />
      <span>
        <img src="/Vector.png" alt="vector" />
      </span>
     </div>
    </div>
  )
}

export default Hero
