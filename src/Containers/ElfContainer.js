import React from 'react'
import ElfName from '../Components/ElfName'

function ElfContainer(props) {

    const elf_names = [ {id: 1, name: "Jingo"}, {id: 2, name: "Jango"}, {id: 3, name: "Jumbo"} ]

    let elves = elf_names.map(elfObj => <ElfName key={elfObj.id} elf={elfObj} appClickHandler={props.appClickHandler}/> )

    return (
        <>
            {elves}
        </>
    )
}

export default ElfContainer