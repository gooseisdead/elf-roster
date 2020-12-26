import React from 'react' 
import ElfName from '../Components/ElfName'

class Header extends React.Component {

    elfRoster = () => {
        return this.props.elves.map(function (elf_name) { return <ElfName name={elf_name} /> })
    }

    render () {
        return (
            <div> 
                <h1>ELF ROSTER</h1>
                {this.elfRoster()}
            </div>
        )
    }
}

export default Header