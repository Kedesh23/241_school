import React from 'react';
import Button from '../components/button.jsx';

export default function Nav(){
      return(
            <div className='bg-black flex py-[1em] justify-between px-[2em]'>
                  <img src='./assets/logo.png'/>
                  <div className='flex w-[80%] justify-around items-center text-white'>
                        <ul className='flex gap-10 mx-[.5em]'>
                              <li className='text-red-800 hover:text-white'><a href='#'>Acceuil</a></li>
                              <li className='hover:text-red-800'><a href='#'>Nos formations</a></li>
                              <li className='hover:text-red-800'><a href='#'>Nos campus</a></li>
                              <li className='hover:text-red-800'><a href='#'>A propos de nous</a></li>
                              <li className='hover:text-red-800'><a href='#'>Blog</a></li>
                              <li className='hover:text-red-800'><a href='#'>Contact</a></li>
                        </ul>
                        <Button className='text-red-800 text-sm border-red-800 border-2 p-[.5em] w-[13em] font-bold rounded-[5px] hover:border-white hover:text-white' title='Postuler sur Libreville'/>
                  </div>
                  
            </div>
      )
}