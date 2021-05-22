import React, {useState, useEffect} from 'react'

export default function Header( {column_labels, data, setData}) {
    const [buttonState, setButtonState] = useState(0);
    const [leftColumnActive, setLeftColumnActive] = useState(true);


    const handleButtonLeft = () => {
        setButtonState((buttonState+1) % 3)
        setLeftColumnActive(true)
    };

    const handleButtonRight = () => {
        setButtonState((buttonState+1) % 3)
        setLeftColumnActive(false)
    };

    useEffect( () => {
        const property_name = leftColumnActive ? "first" : "second";

        if(buttonState === 0){
            setData([...data].sort( (a, b) => Math.random() - 0.5 ))
        }
        if(buttonState === 1){
            setData([...data].sort( (a, b) => a[property_name].localeCompare(b[property_name]) ))
        }
        if(buttonState === 2){
            setData([...data].sort( (b, a) => a[property_name].localeCompare(b[property_name]) ))
        }
    }, [buttonState, leftColumnActive]);

    const buttonClassName = "Header__Button " + ["Header__Button--Both", "Header__Button--Up", "Header__Button--Down"][buttonState]

    return (
        <div className="Header">
            <div className={leftColumnActive ? "Header__Cell" : "Header__Cell Header__Cell--active"}>
                <p>{column_labels[0]}</p>
                <div className={buttonClassName} onClick={handleButtonLeft}/>
            </div>
            <div className={!leftColumnActive ? "Header__Cell" : "Header__Cell Header__Cell--active"}>
                <p>{column_labels[1]}</p>
                <div className={buttonClassName} onClick={handleButtonRight}/>
            </div>
        </div>
    )
}
