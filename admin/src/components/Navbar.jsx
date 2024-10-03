import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from "react-router-dom";
import { AdminContext } from '../context/AdminContext'


const Navbar = () => {

    const { aToken, setAtoken } = useContext(AdminContext)
    
    const navigate = useNavigate();

    const logout = () => {
        navigate('/')
        aToken && setAtoken('')
        aToken && localStorage.removeItem('aToken')
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                {/* <img className='w-20 h-20 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" /> */}
                <div className="flex items-center space-x-1 cursor-pointer ml-2" onClick={() => navigate("/")}>
                    <img
                        className="w-[50px] h-[50px] "
                        src={assets.admin_logo}
                        alt=""
                        width={10}
                        height={10}
                    />
                    <span className="font-bold text-primary text-xl">MediCare</span>
                </div>
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
            </div>
            <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
        </div>
    )
}

export default Navbar