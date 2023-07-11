import React from 'react';
import Button from './button';

export default function Cohorte(props){
      return(
            <div className="bg-gray-300 w-[40%] rounded-[5px] p-[2em]">
                  <div className="flex justify-between items-center">
                        <h1 className="font-bold text-xl text-black">{props.title}</h1>
                        <img src={props.src}/>
                  </div>
                  <div className="mt-[1em]">
                        <p>
                              Le développeur web mobile a pour mission de créer et de <br/>mettre en œuvre des applications mobiles exploitables sur
                              <br/>smartphone et tablette.
                        </p>
                        <br/>
                        <p>
                              Dans le cadre de son travail, il code et élabore des logiciels pour <br/>traiter les données. Il est aussi chargé de construire des sites
                              <br/>web, des applications en ligne, des outils interactifs et autres <br/>produits accomplis selon les demandes du client.
                        </p>
                        <br/>
                        <Button className='bg-red-600 p-[1em] text-white rounded-[5px] hover:text-white hover:bg-black' title='En savoir plus'/>
                  </div>

            </div>
      );
}