import { render } from '@testing-library/react'
import React from 'react'
import ElfName from '../Components/ElfName'
import Form from '../Components/Form'

class ElfContainer extends React.Component {

    state = {
        elves: [ {id: 1, name: "Jingo", job: "stockings"}, {id: 2, name: "Jango", job: "wooden toys"}, {id: 3, name: "Jumbo", job: "electronics"}, {id: 4, name: "Jerry", job: "clean-up"} ]
    }

    submitHandler = (obj) => {
        let newArray = [...this.state.elves, obj]
        this.setState({ elves: newArray})
    }


    render() {
        let elves = this.state.elves.map(elfObj => <ElfName key={elfObj.id} elf={elfObj} appClickHandler={this.props.appClickHandler}/> )
        return (
            <>
                {elves}
                <Form submitHandler={this.submitHandler}/>
            </>
        )   
    }
}

export default ElfContainer