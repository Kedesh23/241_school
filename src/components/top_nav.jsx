import React from "react";
import Button from "../components/button.jsx";

export default function TopNav(){
      return(
            <div className="h-full flex justify-between items-center">
                  <div className="h-full w-[50%]">
                       <div className="flex justify-around p-[.5em]">
                             <div className="flex items-center w-[30%] border-[1px] border-black p-[.5em] my-auto">
                                    <img src="./assets/edu.png" class="h-[15px] mr-[.5em]"/>
                                    <select>
                                          <option><a href="#">Alumni 2018</a></option>
                                          <option><a href="#">Alumni 2019</a></option>
                                          <option><a href="#">Alumni 2021</a></option>
                                          <option><a href="#">Alumni 2022</a></option>
                                    </select>
                             </div>
                              <button className="flex items-center border-2  border-black p-[.5em]">
                                    <img src='./assets/meeting.png'  className="h-[15px] mr-[.5em]"/>
                                    Participer au reunion d'information en ligne
                              </button>
                       </div>
                  </div>
                  <div className="h-full w-[20%] h-full p-[1em] flex justify-between">
                        <div className=" flex gap-5 p-[.5em]">
                              <a href='#'><img src='./assets/facebook.png'/></a>
                              <a href='#'><img src='./assets/twitter.png'/></a>
                              <a href='#'><img src='./assets/linkedin.png'/></a>

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