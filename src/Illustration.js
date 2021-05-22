import React, {useState} from 'react'

export default function Illustration() {

    const [flying, setFlying] = useState(false)

    return (
        <>
            <div className="Illustration">
                <div className={flying ? "Rocket Rocket--fly" : "Rocket"} onAnimationEnd={() => setFlying(false)}/>
                <div className="LandingGear"/>
                <div className="Planet"/>
                <div className="SmokeLeft"/>
                <div className="SmokeRight"/>
            </div>

            <button className="LaunchButton" onClick={() => setFlying(true)}>Launch Rocket!</button>
        </>
    )
}
