import { useMsal } from '@azure/msal-react';
import { useDispatch, useSelector } from 'react-redux'
import { loginRequest } from '../config/msalconfig';
import { updateusername } from '../reducers/loginreducer';
import store from '../store/store';
import { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from 'react-router';

export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { instance } = useMsal();
    const [loggedIn, setloggedIn] = useState(false);
    const [ssologin, setssologin] = useState(false);
    const [show, setshow] = useState(false);
    const [cssclassname, setcssclassname] = useState('hidden');

    const loginclickhandler = () => {
        instance.loginPopup(loginRequest).then(res => {
            dispatch(updateusername(res.account?.username));
            setssologin(true);
        }).catch(err => console.log(err));
    }

    const logoutclickhandler=()=>{
        dispatch(updateusername(''));
        instance.logoutRedirect().catch(err => { console.log(err) });
    }

    useEffect(() => {
        let storedvalue = store.getState().login;
        if (storedvalue.username != '') {
            setloggedIn(true);
            navigate('/Menu/UserList')
        }
    }, [ssologin]);

    return (
        <div className='min-w-full max-w-screen-lg h-16 min-h-8 bg-indigo-700'>
            <div className="grid grid-cols-2 items-center">
                <div>
                    <div className='m-2 mt-4 text-lg text-white'>T E S T</div>
                </div>
                <div className="min-h-full mt-4 grid justify-items-end text-white">
                    <div className='min-h-full w-64 grid grid-cols-3 gap-3 justify-items-center items-center'>
                        {loggedIn ?
                            <div className='col-span-3 ml-40 '>
                                <div className='w-30 h-8 rounded-md grid grid-cols-2' onClick={() => { setshow(!show); 
                                setcssclassname('slow-bounce transition-all ease-in w-11/12 mt-2 ml-24 grid justify-items-end');}}>
                                    <h2 className='text-center m-1 cursor-pointer'>Profile</h2>
                                    {show ? <span className='m-3'> <FaChevronUp size={12} /></span> : <span className='m-2.5'> <FaChevronDown size={12} /></span>}
                                </div>
                            </div> :
                            <div className='col-span-3 items-end ml-36'>
                                <button className='w-24 h-8  text-white' onClick={loginclickhandler}>Login</button>
                            </div>
                        }

                    </div>
                </div>
            </div>
            {show ?
                <div className={cssclassname}>
                    <div className='border-2 w-28 h-14 rounded-md'>
                        <div className='h-full mt-3 text-center cursor-pointer' onClick={logoutclickhandler}>Signout</div>
                    </div>
                </div> : ''}
        </div>
    )
}