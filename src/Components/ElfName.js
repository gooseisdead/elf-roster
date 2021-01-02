import React from 'react'

function ElfName(props) {
    return <p onClick={props.appClickHandler}>{props.elf.name}</p>
}

export default ElfName 