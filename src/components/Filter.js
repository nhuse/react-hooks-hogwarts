export default function Filter( {filterFunction} ){
    return (
        <select name="filter" onChange={filterFunction}>
            <option value="all">Greased or Not</option>
            <option value="true">Greased</option>
            <option value="false">Not Greased</option>
        </select>
    )
}