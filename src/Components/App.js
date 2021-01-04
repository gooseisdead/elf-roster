import '../App.css';
import React from 'react'
import Header from '../Components/Header'
import ElfContainer from '../Containers/ElfContainer'
import NaughtyList from '../Containers/NaughtyList'

class App extends React.Component {

  state = { elf: {} }

  appClickHandler = (elf_obj) => {
    this.setState( { elf: elf_obj })
  }

  render() {

  return (
      <>
        <Header />
        <ElfContainer appClickHandler={this.appClickHandler} />
        <NaughtyList elf={this.state.elf} /> 
      </>
    );
  }
}

export default App;
