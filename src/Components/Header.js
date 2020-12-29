import React from 'react' 
import ElfName from '../Components/ElfName'

class Header extends React.Component {

    state = { color: "black" }

    elfRoster = () => {
        return this.props.elves.map(function (elf_name) { return <ElfName name={elf_name} /> })
    }

    clickHandler = () => {
        this.setState({ color: "blue" })
    }

    render () {
        return (
            <div> 
                <h1 onClick={this.clickHandler} style={{ "border-style": "dashed", "border-color": this.state.color }}>ELF ROSTER</h1>
                {this.elfRoster()}
            </div>
        )
    }
}

export default Header