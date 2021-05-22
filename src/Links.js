import React from 'react'
import Tile from './Tile'

export default function Links( {setModalVisible, setModalText} ) {
    return (
        <div className="Links">
            <Tile className="Tile Tile--1" text="Capsules" setModalVisible={setModalVisible} setModalText={setModalText}/>
            <Tile className="Tile Tile--2" text="Crew" setModalVisible={setModalVisible} setModalText={setModalText}/>
            <Tile className="Tile Tile--3" text="Rockets" setModalVisible={setModalVisible} setModalText={setModalText}/>
            <Tile className="Tile Tile--4" text="Starlink" setModalVisible={setModalVisible} setModalText={setModalText}/>
        </div>
    )
}
