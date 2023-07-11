import React from 'react';

export default function Company(props){
      return(
            <div>
                  <img src={props.src} className={props.className}/>
            </div>
)
}