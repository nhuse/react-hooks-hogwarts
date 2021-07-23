export default function Sort({ sortFunction }) {
    return (
        <select name="sort" onChange={sortFunction}>
            <option value="none">Sort By</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    );
}
