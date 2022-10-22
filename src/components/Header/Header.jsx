import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();
    let name = '';
    if(user?.username){
        name = user?.username;
    } else {
        name = 'User'
    }

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                Hello, <span>{name}</span>
            </span>
        </div>
    );
};

export default Header;
