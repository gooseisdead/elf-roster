import React from 'react'
import ElfName from '../Components/ElfName'

function NaughtyList(props) {
    let elves = props.elves.map(elfObj => <ElfName elf={elfObj} /> )
    return (
        <>
        {elves}
        </> 
    )
}

export default NaughtyList