import React from 'react';

export default function Program(props){
      return(
            <div className="flex">
                  <img src ={props.src}/>
                  <div className="mt-[1em] pl-[0.5em]">
                        <p>{props.one}</p>
                        <p>{props.two}</p>
                  </div>
            </div>
      )
}