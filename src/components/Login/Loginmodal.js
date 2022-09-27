import React from 'react';
import './Modal.scss';

export default function Modal (props){
    const { open, close, header } = props;
    return (
    const { open, close, header } = props;
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                </section>
            ) : null}
        </div>
    );
};