import React from 'react'

class ElfName extends React.Component {

    elfClickHandler = () => {
        this.props.appClickHandler(this.props.elf)
    }

    componentDidMount() {
        console.log("cdm elf")
    }

    render() {
        return (
            <>
                <h2 onClick={this.elfClickHandler}>{this.props.elf.name} </h2>
            </>
        )
    }
}

export default ElfName  