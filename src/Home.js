import React from "react";
import {useState} from "react";

function Home(){
    // let name = 'mario'
    const [name, setName] = useState('mario')

    const handleClick = () => {
        setName('luigi')
    }

    return (
        <div className='home'>
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Home;