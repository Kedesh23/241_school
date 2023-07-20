import React from 'react';
import Card from '@/components/card';
import Button from '@/components/button';

export default function Cv(){
      return(
            <div>
                  <div className='font-bold'>
                        <div className='flex pt-[3em] justify-center gap-10'>
                              <select className='border:none'>
                                    <option>Promo 1</option>
                                    <option>Promo 2</option>
                                    <option>Promo 3</option>
                                    <option>Promo 4</option>
                              </select>
                              <select>
                                    <option>Developpeur Web & Mobile</option>
                                    <option>Referent Digital</option>
                              </select>
                              <div className='flex gap-5  items-center'>
                                    <input type='search' placeholder='Cherchez un profil' className="w-[20em] border-[2px] h-[3em] rounded-[.5em] right text-center " id='search'/>
                                    <Button title="search" className="bg-red-600 w-[8em] hover:bg-black hover:text-white p-[.7em] rounded-[1em]"/>
                               </div>
                        </div>
                  </div>
                  <Card id=''/>
            </div>
      )
}