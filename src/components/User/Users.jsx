import React from 'react'
import { Data_three } from "../../data/Data";

const Users = () => {
  return (
    <div>
      <div className="text-center px-12 mt-10">
        <h1 className="uppercase text-Grayish-blue tracking-[4px]">Client  testimonials</h1>
        <div className="md:flex md:flex-row md:gap-8">
        {Data_three.map((item) => {
          return (
            <div key={item.id} className="flex flex-col">
              <div className="my-8">
                <img src={item.userImage} alt="/" className="mx-auto w-20 rounded-full"/>
                  <div className="my-4">
                    <h4 className="font-barlow text-lg text-Very-dark-grayish-blue">{item.userInfo}</h4>
                  </div>
                  <div className="my-8">
                    <h4 className='my-1'>{item.userName}</h4>
                    <p className="font-barlow text-Grayish-blue">{item.userProfession}</p>
                  </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  )
}

export default Users