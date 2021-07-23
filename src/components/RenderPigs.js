import HogInfo from "./HogInfo"
import { useState } from "react"
import Filter from "./Filter"
import Sort from "./Sort"

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
            <Filter filterFunction={handleFilter}/>
            <Sort sortFunction={handleSort} />
            {pigsToDisplay.map(currentHog => {
            return(
                <HogInfo hog={currentHog}/>
            )}
            )}
        </div>
    )
}

export default RenderPigs;