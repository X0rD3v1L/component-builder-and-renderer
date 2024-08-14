import {useState} from 'react';
import './search-bar-autocomplete.css'

function SearchBarAutoComplete({data,handleSelect,isClicked}) {
    const [filteredData,setFilterdData] = useState([]);
    const [wordEntered,setWordEntered] = useState("");
    const [selectedCustomUIElement,setSelectedCustomUIElement] = useState("");
    const handleFilter = (e) => {
        setSelectedCustomUIElement("")
        let searchWord = e.target.value;
        setWordEntered(searchWord);
        handleSelect(searchWord);
        const newFilter = data.filter((value) => {
            return value.toLowerCase().includes(searchWord.toLowerCase());
        })

        searchWord === "" ? setFilterdData([]) : setFilterdData(newFilter);
    }

    const handleWordSelected = (selectedElement) => {
        setSelectedCustomUIElement(selectedElement);
        setWordEntered(selectedElement);
    }
    return(
        <>
            <input type="search" className="search-input-custom" placeholder="Search"
                value={wordEntered} onChange={handleFilter}
            />
            {!selectedCustomUIElement && !isClicked &&filteredData.length !== 0 && (
                <div className="dataResult">
                {filteredData.slice(0,8).map((value,index) => {
                    return (
                        <a className="dataItem" onClick={event => {handleSelect(event.target.outerText);handleWordSelected(event.target.outerText)}} key ={index} value={value}>
                            <p>{value} </p>
                        </a>
                    );
                })}
                </div>
            )}
        </>
    )
}

export default SearchBarAutoComplete;