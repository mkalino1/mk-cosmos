import React from 'react'

export default function Tile(props) {

    const setModal = () => {
        props.setModalVisible(true)
        props.setModalText(props.text)
    };

    return (
        <div className={props.className} onClick={setModal} >
            <p className="Tile__text">{props.text}</p>
        </div>
    )
}
