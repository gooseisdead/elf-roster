import React from 'react'
import ElfName from '../Components/ElfName'

function NaughtyList(props) {
    
    return (
        <>
        <h1>NaughtyList</h1>
        <ElfName elf={props.elf} />
        </> 
    )
}

export default NaughtyList