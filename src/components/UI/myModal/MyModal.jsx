import React from 'react';
import style from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootStyle = [style.modal]

    if (visible) {
        rootStyle.push(style.active);
    }

    return (
        <div className={rootStyle.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.modalContent} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;