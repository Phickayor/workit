import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGlobe, faUser, faChartSimple, faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    var home = <FontAwesomeIcon icon={faHome} />
    var explore = <FontAwesomeIcon icon={faGlobe} />
    var exit = <FontAwesomeIcon icon={faRightFromBracket} />
    var progress = <FontAwesomeIcon icon={faChartSimple} />
    var pic = <FontAwesomeIcon icon={faUserCircle} />
    return (
        <div className='bg-slate-700 text-slate-200 p-4 flex'>
            <div className='flex w-1/2 self-center '>
                <h1 className=' text-5xl font-semibold text-white font-mono'>Work <i className="text-green-500">It!</i></h1>
                <input type="search" className='bg-slate-900 mx-5 p-2 w-1/3 lg:focus:w-1/2 border rounded-lg font-mono' placeholder='Search for a workout...' />
            </div>
            <div className='justify-between self-center  flex w-1/2'>
                <ul className='flex self-center space-x-10 text-lg font-mono'>
                    <li className='hover:text-white cursor-pointer'>{home} Home</li>
                    <li className='hover:text-white cursor-pointer'>{explore} Explore</li>
                    <li className='hover:text-white cursor-pointer'>{progress} Your Progress</li>
                </ul>
                <div className='flex space-x-10 self-center'>
                    <h1 className='hover:text-white cursor-pointer text-green-300 font-semibold text-xl text-white'><i className='text-white text-2xl'>{pic}&nbsp;</i> Olufikayomi</h1>
                    <button className='border-2 px-5 self-center rounded-lg hover:bg-red-400 hover:border-none text-white font-semibold py-2 duration-[1s]'>{exit} Log out</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar