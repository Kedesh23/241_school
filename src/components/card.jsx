import Image from 'next/image'
import React from 'react';



export default function Card(props){
      const students = [
            {
            id: 1,
            firstname: 'Sevan',
            lastname: 'Kedesh',
            picture: '',
            reference: 'Front-End Devloper'
            },
            {
            id: 2,
            firstname: 'Diboty',
            lastname: 'Hans',
            reference: 'Back-End Developer'
             },
            {
            id: 3,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Full-stack Developer'
            },
            {
            id: 4,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Communty manager'
            },
            {
            id: 5,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Designer UI/UX'
            },
            {
            id: 6,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Full-stack Developer'
      },
      {
            id: 6,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Full-stack Developer'
      },
      {
            id: 6,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Communty manager'
      },
      {
            id: 6,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Communty manager'
      },
      {
            id: 6,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Ergonome web'
      },
      {
            id: 6,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Technicien Wordpress'
      },
      {
            id: 6,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Integrateur Web'
      },
      {
            id: 6,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Software Developer'
      },
      {
            id: 6,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Cloud Ingeneer'
      },
      {
            id: 6,
            firstname: 'Julius',
            lastname: 'Bibalou',
            reference: 'Technicien Wordpress'
      },
      
]
      return(
            <>
                  <div className='gap-10 h-full m-[3em] grid grid-cols-3'>
                              {students.map(student => {
                                    return(
                                          <div className='h-[25em] w-[20em] border-[2px] border-black rounded-[1em] bg-[#F8F7F3]' key={students.id}>
                                                <div className='h-1/2 w-full bg-gray-300 rounded-[1em]'></div>
                                                <div className='h-full w-full font-bold text-black text-lg text-center pt-[2em]'>
                                                      <h4>{student.lastname}</h4>
                                                      <h4>{student.firstname}</h4>
                                                      <h4>{student.reference}</h4>
                                                      <div className='flex justify-around pt-[1em]'>
                                                            <a href='#'><img src="./assets/linkedin.png" alt="linkedin"/></a>
                                                            <a href='#'><img src="./assets/facebook.png" alt="facebook"/></a>
                                                            <a href='#'><img src="./assets/linkedin.png" alt="Picture of the author"/></a>
                                                      </div>
                                                </div>
                                          </div>
                                    );
                              })}
                  </div>
                 
            </>
           
      )
            
}