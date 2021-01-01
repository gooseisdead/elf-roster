import React from 'react'
import ElfName from '../Components/ElfName'

function ElfContainer(props) {

    const elf_names = [ {id: 1, name: "Jingo"}, {id: 2, name: "Jango"}, {id: 3, name: "Jumbo"} ]

    let elves = elf_names.map(elfObj => <ElfName elf={elfObj} /> )

    return (
        <>
            {elves}
        </>
    )
}

export default ElfContainer