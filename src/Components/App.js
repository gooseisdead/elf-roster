import '../App.css';
import Header from './Header'

function App() {

  const elf_names = ["Jingo", "Jango", "Jumbo"]
  return (
    <Header elves={elf_names}/>
  );
}

export default App;
