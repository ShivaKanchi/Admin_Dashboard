import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';

import avatar from '../data/avatar.jpg';

import { Cart, Chat, Notification, UserProfile } from '.';

import { useStateContext } from '../contexts/ContextProvider';
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button type='button' onClick={customFunc} style={{ color }} className="relativetext-xl rounded-full p-3 hover:bg-light-gray">
            <span style={{ background: { dotColor } }} className=' inline-flex rounded-full h-2 w-2 right-2 top-2'>
                {icon}
            </span>
        </button>
    </TooltipComponent>
)
const Navbar = () => {
    const { activeMenu, setActiveMenu } = useStateContext();
    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />} />
            <div className='flex'>
                <NavButton
                    title="Cart"
                    customFunc={() => handleClick('cart')}
                    color="blue"
                    icon={<FiShoppingCart />}
                />
                <NavButton
                    title="Chat"
                    dotColor="#03C9D7"
                    customFunc={() => handleClick('chat')}
                    color="blue"
                    icon={<BsChatLeft />}
                />
                <NavButton
                    title="Notification"
                    dotColor="#03C9D7"
                    customFunc={() => handleClick('notification')}
                    color="blue"
                    icon={<RiNotification3Line />}
                />
            </div>
        </div>
    )
}

export default Navbar