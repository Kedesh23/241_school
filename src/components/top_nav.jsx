import React from "react";
import Link from 'next/link'
import Button from "./button";

export default function TopNav(){
      return(
            <div className="h-full flex justify-between items-center">
                  <div className="h-full w-[50%]">
                       <div className="flex justify-around p-[.5em]">
                             <Button title="Alumni" className="p-[1em] w-[10em] border-2 border-black" href='../cvtech'/>
                              <button className="flex items-center border-2  border-black p-[.5em] w-[25em] text-center">
                                    <img src='./assets/meeting.png'  className="h-[15px] mr-[.5em]"/>
                                    Participer au reunion d'information en ligne
                              </button>
                       </div>
                  </div>
                  <div className="h-full w-[20%] h-full p-[1em] flex justify-between">
                        <div className=" flex gap-5 p-[.5em]">
                              <a href='https://www.facebook.com/Ecole241/' target="_blank"><img src='./assets/facebook.png'/></a>
                              <a href='https://www.twitter.com/ecole241_lbv' target="_blank"><img src='./assets/twitter.png'/></a>
                              <a href='https://www.linkedin.com/company/ecole-241' target="_blank"><img src='./assets/linkedin.png'/></a>

                        </div>
                        <div className=" my-auto">
                              <select className="border:none">
                                    <option>EN</option>
                                    <option>FR</option>
                              </select>
                        </div>
                  </div>
            </div>
      )
}