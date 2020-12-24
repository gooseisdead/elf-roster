import React from 'react' 
import ElfName from '../Components/ElfName'

// function Header(props) {

//     let elf_roster = props.elves.map(function (elf_name) { return <ElfName name={elf_name} /> })

//     return <div> 
//                 <h1>ELF ROSTER</h1>
//                 {elf_roster}
//             </div>
// }

class Header extends React.Component {
    render () {

        let elf_roster = this.props.elves.map(function (elf_name) { return <ElfName name={elf_name} /> })
        return <div> 
                    <h1>ELF ROSTER</h1>
                    {elf_roster}
                </div>
        }
}

export default Header