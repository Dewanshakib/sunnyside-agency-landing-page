import React from 'react'
import { footerData } from '../../data/Data'

const FooterItem = () => {
  return (
    <div className='mt-6'>
        <div className="grid grid-cols-2 md:grid-cols-4">
        {footerData.map((item) => {
            return (
                <div className="">
                    <img src={item.image} alt="/" />
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default FooterItem