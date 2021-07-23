import HogInfo from "./HogInfo"
import { useState } from "react"

function RenderPigs({ hog }) {
    const [isFiltered, setIsFiltered] = useState("all")
    const [sort, setSort] = useState("none")

    function handleFilter(event){
        console.log(event);
        setIsFiltered(event.target.value)
    }

    function handleSort(event) {
        setSort(event.target.value)
    }

    const pigsToDisplay = hog.filter((pig) => {
        if(isFiltered === "all"){
            return true;
        }
        else{
            return `${pig.greased}` === isFiltered;
        }
    })

    if(sort === "name"){
        pigsToDisplay.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }else if(sort === "weight"){
        pigsToDisplay.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    }

    return (
        <div>
            <select name="filter" onChange={handleFilter}>
                <option value="all">Greased or Not</option>
                <option value="true">Greased</option>
                <option value="false">Not Greased</option>
            </select>
            <select name="sort" onChange={handleSort}>
                <option value="none">Sort By</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
            {pigsToDisplay.map(currentHog => {
            return(
                <HogInfo hog={currentHog}/>
            )}
            )}
        </div>
    )
}

export default RenderPigs;