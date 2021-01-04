import React from 'react'

class Form extends React.Component {

    state = {
        name: ""
    }

    changeHandler = (event) => {

        this.setState({ [event.target.name]: event.target.value })
        // if (event.target.name === "name") {
        //     this.setState({ name: event.target.value })
        // } else {
        //     this.setState({ job: event.target.value })
        // }
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.submitHandler({name: event.target[0].value })
                this.setState({name: ""})
            }}>
                <input type="text" name="name" placeholder="Elf Name" value={this.state.name} onChange={this.changeHandler} />
                <br></br>
                <input type="submit" value="Add New Elf" />
            </form>
        )
    }
}

export default Form