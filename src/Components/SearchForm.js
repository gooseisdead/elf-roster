import React from 'react'

function SearchForm (props) {
    return (
        <form>
            <input placeholder="Find An Elf" value={props.searchValue} onChange={props.searchHandler} />
        </form>
    )
}

export default SearchForm