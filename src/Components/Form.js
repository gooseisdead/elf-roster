import React from 'react'

class Form extends React.Component {

    state = {
        name: "",
        job: ""
    }

    changeHandler = (event) => {

        if (event.target.name === "name") {
            this.setState({ name: event.target.value })
        } else {
            this.setState({ job: event.target.value })
        }
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.submitHandler({name: event.target[0].value }, {job: event.target[0].value})
                this.setState({name: "", job: ""})
            }}>
                <input type="text" name="name" placeholder="Elf Name" value={this.state.name} onChange={this.changeHandler} />
                <br></br>
                <input type="text" name="job" placeholder="Job" value={this.state.job} onChange={this.changeHandler} />
                <br></br>
                <input type="submit" value="Add New Elf" />
            </form>
        )
    }
}

export default Form