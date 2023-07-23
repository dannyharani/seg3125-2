function Searchbar ({updateQuery}) {
    return (
        <div className="searchDiv">
            <input onChange={(e) => {updateQuery(e.target.value)}} className="mainSearch" type="text" placeholder="Search..."/>
        </div>
    );
}

export default Searchbar;