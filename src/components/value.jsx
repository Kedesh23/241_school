import React from 'react';

export default function Value(props){
      return(
            <div className="flex items-center">
                  <img src={props.src}/>
                  <p class="mt-[.70em] ml-[1em] font-bold">{props.title} <br/> {props.title_two} <br/> {props.title_three}</p>
            </div>
      )
}