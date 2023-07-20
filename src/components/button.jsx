import React from 'react';
import Link from 'next/link';

export default function Button(props){
      return (
            <div>
                  <button className={props.className}><a href={props.href}>{props.title}</a></button>
            </div>
      )
}