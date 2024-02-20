import './App.css'
import SideNavbar from './components/SideNavbar/SideNavbar'
import SideChat from './components/SideChat/SideChat'
import MainChat from './components/MainChat/MainChat'
import SideOptions from './components/SideOptions/SideOptions'

function App() {

return (
    <div className='main-body'> 
      <div className='row'> 
        <div className='col'><SideNavbar/></div>
        <div className='col'><SideChat/></div>
        <div className='col'><MainChat/></div>
        <div className='col'><SideOptions/></div>
      </div>
    </div>
  )
}

export default App
