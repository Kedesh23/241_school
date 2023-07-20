"use client"
import React from 'react';
import Map from '@/components/map'

export default function Contact(){
      const handleSubmit = function handleSubmit(){
            document.getElementById('form').addEventListener('submit', function(e){
                  e.preventDefault();
                  const name = document.getElementById('name').value;
                  alert("I validate the datas");
            })
      }
      
      return(
            <div className='h-full w-full px-[5em]  py-[3em]'>
                  <h1 className='text-5xl text-black mb-[1em] font-bold text-center'>Contactez nous</h1>
                  <div className='flex p-[2em] w-full justify-center mb-[3em] bg-gray-200'>
                        <div className='w-[30%] flex-end'>
                              <form id='form' className='flex flex-col right-0 text-end gap'>
                                    <input type='text' id='name' placeholder='Entrer votre nom' className='border-2 border-black rounded-[5px] p-[.5em]'/>
                                    <br/>
                                    <input type='email' id='email' placeholder='Entrer votre email' className='border-2 border-black rounded-[5px] p-[.5em]'/>
                                    <br/>
                                    <textarea className='border-2 border-black rounded-[5px] p-[1em] w-[20em]' minLength={200} maxLength={1000} placeholder='Entrer votre message'></textarea>
                                    <br/>
                                    <input type="submit" value="submit" onClick={handleSubmit} className='p-[1em] bg-red-600 text-white text-center w-[10em] rounded-[10px] hover:bg-black self-end'/>
                              </form>
                        </div>
                        <div className='w-1/2 bg flex flex-col text-black justify-between px-[3em] text-center'>
                              <div>
                                    <p className='font-bold text-black'>Email</p>
                                    <p>pendysevan11@gmail.com</p>
                              </div>

                              <div>
                                    <p className='font-bold text-black'>Phone</p>
                                    <p>+241 77777777</p>
                              </div>

                              <div>
                                    <p className='font-bold text-black'>Reseaux</p>
                                    <div className='flex justify-center'>
                                          <div className=" flex gap-5 p-[.5em]">
                                                <a href='https://www.facebook.com/Ecole241/' target='_blank'><img src='./assets/facebook.png'/></a>
                                                <a href=''><img src='./assets/twitter.png'/></a>
                                                <a href='#'><img src='./assets/linkedin.png'/></a>

                                          </div>
                                    </div>
                              </div>

                              <div>
                                    <p className='font-bold text-black'>Visitez nous</p>
                                    <p>Ancien Sobraga, Rue du coq de Belinga</p>
                              </div>
                        </div>
                  </div>
                  <div className='h-[25em] w-full bg-gray-200 mb-[3em]'>
                        <Map className=" h-[25em]"/>
                  </div>
                  <div>
                        <h1 className='text-5xl text-black font-bold text-center p-[1em] text-center'>F.A.Q</h1>
                        <div className='flex justify-between'>
                              <div className='h-[10em] w-1/2 text-black'>
                                    <div>
                                          <p className='font-bold text-xl'>Qu'est ce que Ecole 241?</p>
                                          <p>Reponse</p>
                                    </div>
                                    <div>
                                          <p className='font-bold text-xl'>Qu'est ce qu'un Developpeur Web?</p>
                                          <p>Reponse</p>
                                    </div>
                                    <div>
                                          <p className='font-bold text-xl'>Qu'est ce qu'un Referent Digital?</p>
                                          <p>Reponse</p>
                                    </div>
                              </div>
                              <div className='h-[10em] w-1/2'>
                              <div>
                                          <p className='font-bold text-xl'>Quels sont les debouches?</p>
                                          <p>Reponse</p>
                                    </div>
                                    <div>
                                          <p className='font-bold text-xl'>Quel est le deroulement de la formation?</p>
                                          <p>Reponse</p>
                                    </div>
                                    <div>
                                          <p className='font-bold text-xl'>Lorem ipsum van el die?</p>
                                          <p>Reponse</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}