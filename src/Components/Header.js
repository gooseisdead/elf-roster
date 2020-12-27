import React from 'react' 
import ElfName from '../Components/ElfName'

class Header extends React.Component {

    state = { color: "blue" }

    elfRoster = () => {
        return this.props.elves.map(function (elf_name) { return <ElfName name={elf_name} /> })
    }

    render () {
        return (
            <div> 
                <h1 style={{ "border-style": "dashed", "border-color": this.state.color }}>ELF ROSTER</h1>
                {this.elfRoster()}
            </div>
        )
    }
}

export default Header