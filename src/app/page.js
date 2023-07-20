import Image from 'next/image'
import Button from '@/components/button';
import Alumni from '@/components/alumnis';
import Statut from '@/components/status';
import Cohorte from '@/components/cohorte';
import Program from '@/components/program';
import Value from '@/components/value';
import Company from '@/components/company';
//import monument from '../public/assets/monument.png';
//import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-full w-full'>
      {/* Section 1 */}
      <div className='flex'>
        <div className='w-1/2 h-full text-sm pl-[3em] mt-[2em]'>
          <div className='mb-[2em]'>
            <h1 className='text-5xl mb-[.5em] leading-[60px]'>Ecole 241, plus qu'une <br/> formation un <span className='font-bold'>metier</span></h1>
            <p>Ecole 241 formw aux metiers du numerique dans tout le Gabon. Rejoignez un reseau</p>
            <p>de plus de 25 000 apprenants et apprenantes. Vous souhaitez vous aussi integrer un</p>
            <p>parcours de formation Simplon ou etre conseille-e dans votre parcours?</p>
          </div>
          <Button title='contactez-nous' href='../contact' className="text-white text-sm text-center bg-red-600 rounded p-[1em] w-[15em] hover:text-white hover:bg-black"/>
        </div>

        <div className='bg-gray-100 w-1/2 h-full pb-[3em]'>
          <div className='flex h-[16em] w-[70%] mx-auto justify-between pt-[2em]'>
            <div className='w-[47%] h-full rounded-[10px]'>
              <div className='h-[100%] w-[100%] bg-black opacity-90 rounded-[10px]'></div>
            </div>
            <div className='w-[47%] h-full'>
              <div className='h-[47%] w-full rounded-[10px]'>
                <div className='h-[100%] w-[100%] bg-black opacity-90 rounded-[10px]'></div>
              </div>
              <div className='h-[47%] w-full mt-[.8em] rounded-[10px]'>
                <div className="h-[100%] w-[100%] bg-black opacity-90 rounded-[10px]"></div>
              </div>
            </div>
          </div>
          <p className='mt-[1em] ml-[10em] hover:text-red-600 underline'><a href='#'>Nos articles de blog</a></p>
        </div>
      </div>
      {/* End section 1 */}

      {/* Section 2 */}
      <div className='h-full w-full px-[3em] py-[2em] bg-black'>
        <div className='text-white mb-[2em]'>
          <h1 className='font-bold text-5xl mb-[.7em]'>Notre programme</h1>
          <p>Ecole 241, c'est une formation en informatique d'excelence pour tous et toutes. Au programme de cette ecole differente et</p>
          <p>innovante : une approche par projets pour progresser et developper des competences techniques et humaines</p>
          <p>recherchees sur le marche du travail.</p>
        </div>
        <div className='flex justify-between text-white'>
            <Program src='./assets/no_course.png' one='pas de cours.'  two='pas de profs.'/>
            <Program src='./assets/pedagogie.png' one='Une pedagogie par'  two='projets'/>
            <Program src='./assets/study.png' one='Un apprentissage'  two='peer-to-peer'/>
            <Program src='./assets/joy.png' one='Apprendre en'  two="S'amusant"/>
        </div>
      </div>
      {/* End section 2 */}

      {/* section 3 */}

      <div className='h-full w-full py-[3em]'>
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <div className="p-[3em]">
                <h1 className="font-bold text-5xl mb-[30px]">Nos valeurs</h1>
                <p>La position de Ecole 241 est une première et unique au Gabon , elle repose sur des
                  valeurs fortes pour une insertion professionnelle durable sur le marché de <br/> l'emploi.
                  <br/>
                  Pourquoi Ecole 241 est elle si différente ?
                </p>
                <Button title='Unique au Gabon' className='text-center bg-red-600 p-[1em] w-[11em] text-white rounded-[10px] text-sm mt-[2em] hover:text-white hover:bg-black'/>
              </div>
          </div>

          <div className='w-1/2'>
            <div className='h-[40%] w-full flex justify-between mt-[3em]'>
              <div className='w-1/2 h-full'>
                <Value src='./assets/payment.png' title='Gratuite'/>
              </div>
              <div className='w-1/2 h-full'>
              <Value src='./assets/diplome.png' title='Aucun diplome' title_two='Requis'/>
              </div>
            </div>
            <div className='h-[40%] w-full flex justify-between items-center'>
              <div className='w-1/2 h-full'>
                <Value src='./assets/diplome.png' title='Pour tous,' title_two='Pour toutes'/>
              </div>
              <div className='w-1/2 h-full'>
                <Value src='./assets/diplome.png' title='Pas besoin de savoir' title_two="Deja coder ou d'aimer" title_three='Les maths'/>
              </div>
            </div>
          </div>
        </div>
        <div className='leading-10 py-[2em] mb-[2em] px-[4em]'>
          <h1 className='text-black text-5xl font-bold'>Nos cohortes</h1>
          <p>Se former a un metier</p>
          </div>
        <div className='flex justify-around'>
          <Cohorte src='./assets/code-off.png' title='Developpeur Web et Web Mobil'/>
          <Cohorte src='./assets/clock.png' title='Referent Digital'/>
        </div>
      </div>
      {/* End section 3 */}

      {/* Section 4 */}
      <div className='bg-gray-200 h-full w-full py-[2em] px-[4em]'>
        <div className='leading-[30px] py-[1em]'>
          <h1 className='font-bold text-black text-4xl'>Status des promos formations</h1>
          <p>Nous vous listons les promtions en cours et celles avenirs</p>
        </div>
        <div className='flex justify-between gap-5'>
          <Statut city='Libreville' speciality='Developpement Web et Web Mobile'/>
          <Statut city='Moanda' speciality='Developpement Web et Web Mobile'/>
          <Statut city='Libreville' speciality='Referent Digital'/>
        </div>
      </div>
      {/* End section 4 */}

      {/* Section 5 */}
      <div className="h-full px-[5%] py-[5%] bg-white px-[5em]">
				<div className="h-[20%]">
					<h1 className="font-bold text-3xl">Nous sommes a</h1>
					<p>
						École 241 possède à nos deux campus notamment sur les villes de Libreville et Port- <br/>
						Gentil, cette année nous nous déployons du côté de la ville de Moanda.
					</p>
				</div>
				<div className="h-[100%] flex justify-between mt-[4em]">
					<div className="h-[30em] w-[44%] rounded-[10px]">
						<div className="h-[100%] w-[100%] rounded-[10px] bg-black opacity-[.8] p-[3%] text-white flex flex-col justify-between">
							<p className="text-sm font-bold ">120 ETUDIANTS FORMES A CE JOUR</p>
							<div>
								<h1 className="text-3xl font-bold">LIBREVILLE</h1>
								<p>
									qui voluptatibus natus qui repudiandae pariatur et <br/>
									quisquam aperiam qui dolorem sequi aut error omnis.
								</p>
							</div>
						</div>
						
					</div>
					<div className="h-[100%] w-[44%] rounded-[10px]">
						<div className="h-[14em] rounded-[10px]">
							<div className="h-[100%] w-[100%] rounded-[10px] p-[5%] text-white bg-black opacity-[.8] flex flex-col justify-between">
								<p className="text-sm font-bold">120 ETUDIANTS FORMES A CE JOUR</p>
                <div>
                  <h1 className="text-3xl font-bold">Port-Gentil</h1>
                  <p>
                    qui voluptatibus natus qui repudiandae pariatur et <br/>
                    quisquam aperiam qui dolorem sequi aut error omnis.
                  </p>
                </div>
								
							</div>
							
						</div>
						<div className="h-[14em] mt-[2em] rounded-[10px]">
							<div className="bg-black h-[100%] w-[100%] opacity-[.8] p-[5%] text-white rounded-[10px] flex flex-col justify-between">
								<p className="text-sm font-bold">120 ETUDIANTS FORMES A CE JOUR</p>
                <div className='flex flex-col justify-end'>
                  <h1 className="text-3xl font-bold">Moanda</h1>
                  <p>
                    qui voluptatibus natus qui repudiandae pariatur et <br/>
                    quisquam aperiam qui dolorem sequi aut error omnis.
                  </p>
                </div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
      {/* end Section 5 */}

      {/* Section 6 */}
      <div className='bg-gray-200 h-full w-full  px-[4em] py-[3em]'>
        <h1 className='font-bold text-black text-4xl pb-[1em] pl-[2.5em]'>Temoignage des alumnis</h1>
        <div className='flex gap-10 items-center'>
          <div className='h-[50px] w-[50px] bg-black'></div>
          <Alumni/>
          <Alumni/>
          <Alumni/>
        </div>
      </div>
      {/* End section 6 */}

      {/* Section 7 */}
      <div className='h-full w-full py-[3em] px-[4em] my-[2em]'>
        <div className='h-full w-full flex'>
          <div className='w-1/2 h-full'>
            <h1 className='text-5xl font-bold text-black mb-[.5em]'>Les compagnies <br/> qui nous <br/> font confiance</h1>
            <p>Vous souhaitez devenir partenaire de l'ecole cliquer <br/> sur le bouton ci dessous</p>
            <Button title='En savoir plus' className='bg-red-600 w-[10em] p-[1em] text-white hover:bg-black rounded-[5px] mt-[2em]'/>
          </div>
          <div className='w-1/2 h-full grid grid-cols-2 mb-[10em]'>
            <div className='flex justify-center items-center'>
              <Company src='./assets/cnamgs.png' className='w-[6em]'/>
            </div>
            <div className='flex justify-center items-center'>
            <Company src='./assets/comilog.png' className='w-[10em]'/>
            </div>
            <div className='flex justify-center items-center'>
              <Company src='./assets/labs.png' className='w-[13em]'/>
            </div>
            <div className='flex justify-center items-center'>
              <Company src='./assets/pnpe.jpeg' className='w-[6em]'/>
            </div>
            <div className='flex justify-center items-center'>
              <Company src='./assets/eramet.png' className='w-[10em]'/>
            </div>
            <div className='flex justify-center items-center'>
              <Company src='./assets/simplon.png' className='w-[10em]'/>
            </div>
          </div>
        </div>
        <div className='bg-gray-200 h-[15em] w-[95%] mx-auto rounded-[10px]'></div>
      </div>
      {/* End section 7 */}
    </main>
  )
}
