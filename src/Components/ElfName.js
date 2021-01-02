import React from 'react'

class ElfName extends React.Component {

    elfClickHandler = () => {
        this.props.appClickHandler(this.props.elf)
    }
    render() {
        return <p onClick={this.elfClickHandler}>{this.props.elf.name}</p>
    }
}

export default ElfName  