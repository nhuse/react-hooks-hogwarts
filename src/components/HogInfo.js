import { useState } from "react"

function HogInfo({ hog }){
    console.log(hog)
    const [isClicked, setIsClicked] = useState(false)
    
    const handleClick = () => {
        console.log(hog)
        setIsClicked(!isClicked)
    }
    return (
        <div onClick={handleClick}>
            <h3>{hog.name}</h3>
            <p> {isClicked ? `Specialty: ${hog.specialty}` : null} </p>
            <p> {isClicked ? `Greased: ${hog.greased}` : null}</p>
            <p> {isClicked ? `Weight: ${hog.weight}` : null}</p>
            <p> {isClicked ? `Best Medal: ${hog["highest medal achieved"]}` : null}</p>
            <img src={hog.image}/>  
        </div>
    )        
}    

export default HogInfo;