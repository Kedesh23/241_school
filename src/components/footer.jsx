import React from 'react';

export default function Footer(){
      let width= 205;
      return(
            <div className='bg-black py-[1em] h-full flex justify-around items-center'>
                  <div>
                        <img src='./assets/logo.png' alt='logo' width={width}px/>
                        <p className='text-sm text-white'>plus qu'une formation, un metier</p>
                  </div>
                  <div className="w-[15%] h-[100%]">
				<ul className="text-sm text-white">
					<li className='hover:text-red-600'><a href="#" target="_blank">A propos de nous</a></li>
					<li className='hover:text-red-600'><a href="#" target="_blank">Contact</a></li>
					<li className='hover:text-red-600'><a href="#" target="_blank">Notre impact</a></li>
				</ul>
			</div>
                  <div className="w-[15%] h-[100%]">
                        <ul class="text-sm text-white">
					<li className='hover:text-red-600'><a href="#" target="_blank">Devenir Formateur</a></li>
					<li className='hover:text-red-600'><a href="#" target="_blank">Devenir Partenaire</a></li>
                              <li></li>
				</ul>
			</div>
                  <div className="w-[15%] h-[100%]">
				<ul className="text-sm text-white">
					<li className='hover:text-red-600'><a href="#" target="_blank">Formation Referent Digital</a></li>
					<li className='hover:text-red-600'><a href="#" target="_blank">Formation Developpeur Web</a></li>
                              <li></li>
				</ul>
			</div>
                  <div className="w-[15%] h-[100%]">
				<ul className="text-sm text-white">
					<li className='hover:text-red-600'><a href="#" target="_blank">Campus de Libreville</a></li>
					<li className='hover:text-red-600'><a href="#" target="_blank">Campus de Port-Gentil</a></li>
					<li className='hover:text-red-600'><a href="#" target="_blank">Campus de Moanda</a></li>
				</ul>
			</div>
            </div>
      );
}