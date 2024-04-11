
import Login from './pages/login/Login'
import Signup from "./pages/signup/Signup"
import './App.css'

import Home from "./pages/home/Home"
// import Conversation from './components/sidebar/Conversation'
function App() {
 
  return  (
   <>
  <div className='p-4 h-screen flex items-center justify-center'>
    {/* <Login/> */}
    {/* <Signup/> */}
   
    <Home/>
  </div>
  </>
  )
}

export default App
