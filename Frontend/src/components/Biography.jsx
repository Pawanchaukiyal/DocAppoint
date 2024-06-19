import React from 'react'

const Biography = ({imgUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imgUrl} alt="about" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod sit doloremque atque molestiae, iure nisi eius nostrum asperiores natus delectus minus laboriosam sint commodi autem repellendus error dicta, laudantium reiciendis distinctio consectetur. Esse, ipsam. Velit perferendis nulla cumque ipsa adipisci officiis! Tempora ratione adipisci est esse, officiis laborum minima temporibus vero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis soluta nesciunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laudantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta necessitatibus animi molestiae consequuntur, vitae harum voluptas expedita ipsa reiciendis iure.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, beatae?</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography
