import React from 'react'

class ElfName extends React.Component {

    elfClickHandler = () => {
        this.props.appClickHandler(this.props.elf)
    }
    render() {
        return (
            <>
                <h2 onClick={this.elfClickHandler}>{this.props.elf.name} </h2>
                <p>{this.props.elf.job}</p>
                
            </>
        )
    }
}

export default ElfName  