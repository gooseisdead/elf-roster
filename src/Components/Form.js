import React from 'react'

class Form extends React.Component {

    state = {
        name: ""
    }

    changeHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.submitHandler({name: event.target[0].value })
            }}>
                <input type="text" placeholder="Elf Name" value={this.state.name} onChange={this.changeHandler} />
                <br></br>
                <input type="submit" value="Add New Elf" />
            </form>
        )
    }
}

export default Form