import { render } from '@testing-library/react'
import React from 'react'
import ElfName from '../Components/ElfName'
import Form from '../Components/Form'
import SearchForm from '../Components/SearchForm'

class ElfContainer extends React.Component {

    constructor(props) {
        super(props)
        console.log("container const")
    }

    componentDidMount() {
        console.log("cdm cont")
    }

    state = {
        elves: [ {id: 1, name: "Jingo", job: "stockings"}, {id: 2, name: "Jango", job: "wooden toys"}, {id: 3, name: "Jumbo", job: "electronics"}, {id: 4, name: "Jerry", job: "clean-up"} ],
        searchValue: ""
    }

    searchHandler = (event) => {
        console.log(event.target.value)
        this.setState({ searchValue: event.target.value })
    }

    filteredElves = () => {
        return this.state.elves.filter(elf => elf.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }

    submitHandler = (obj) => {
        let newArray = [...this.state.elves, obj]
        this.setState({ elves: newArray})
    }


    render() {
        let elves = this.filteredElves().map(elfObj => <ElfName key={elfObj.id} elf={elfObj} appClickHandler={this.props.appClickHandler}/> )
        return (
            <>
                <Form submitHandler={this.submitHandler} />
                <SearchForm searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
                {elves}
            </>
        )   
    }
}

export default ElfContainer