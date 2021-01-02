import '../App.css';
import React from 'react'
import Header from '../Components/Header'
import ElfContainer from '../Containers/ElfContainer'
import NaughtyList from '../Containers/NaughtyList'

class App extends React.Component {

  appClickHandler = () => {
    console.log("in app")
  }

  render() {

  return (
      <>
        <Header />
        <ElfContainer appClickHandler={this.appClickHandler} />
        <NaughtyList />
      </>
    );
  }
}

export default App;
