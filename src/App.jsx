import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SideNavbar from './components/SideNavbar/SideNavbar'
import SideChat from './components/SideChat/SideChat'

function App() {

return (
    <div>
        <BrowserRouter>
        <div className='main-body'>
            <div className='row'>
                <div className='col'><SideNavbar/></div>
                <div className='col ps-0'>
                    <Routes>
                        <Route path="/message" element={<SideChat />} /> 
                    </Routes>
                </div>
            </div>
        </div>
    </BrowserRouter>
    </div>
  )
}

export default App
