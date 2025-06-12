import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import item0 from '../assets/Menu/Main Page.avif'
import item1 from '../assets/Menu/page_1.avif'
import item2 from '../assets/Menu/page_2.avif'
import item3 from '../assets/Menu/page_3.avif'
import item4 from '../assets/Menu/page_4.avif'
import item5 from '../assets/Menu/page_5.avif'
import item6 from '../assets/Menu/page_6.avif'
import item7 from '../assets/Menu/page_7.avif'
import item8 from '../assets/Menu/page_8.avif'
import room_item_1 from '../assets/Menu/room_menu_1.avif'
import room_item_2 from '../assets/Menu/room_menu_2.avif'

const images = [item0, item1,item2,item3, item4,item5, item6, item7, item8]
const room_images = [room_item_1, room_item_2]
const Menu = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-full min-h-[calc(100vh-60px)] bg-[#161616] ">
        <div className='flex flex-col items-center gap-4 pt-8 pb-10'>
          <h2 className="text-3xl text-white font-bold text-center mb-4">Restaurant Menu</h2>
          {
            images.map((img,idx)=>(
              <div key={idx} className=''>
                <img src={img} alt="" className='h-[45vh]' />
              </div>
            ))
          }
        </div>
        <div className='flex flex-col items-center gap-4 pt-8 pb-10'>
          <h2 className="text-3xl text-white font-bold text-center mb-4">Room Menu</h2>
          {
            room_images.map((img,idx)=>(
              <div key={idx} className='h-2/5'>
                <img src={img} alt="" className='h-[45vh]' />
              </div>
            ))
          }
        </div>
        <div></div>
      </div>
      <Footer/>
    </div>
  )
}

export default Menu
