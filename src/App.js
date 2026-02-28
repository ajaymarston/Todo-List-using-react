import Header from "./components/Header"
import Card from "./components/Card"
import TodoContainer from "./components/TodoContainer"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import {useState} from "react"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Landing from "./pages/Landing"
 
  
function App()
{
   const [users,setusers] = useState(
    [
       {
        username:"john",
        password:"123"
       }
    ]
)
  return(
<div>
  <BrowserRouter>
  <Routes>
<Route path='/' element = {<Login users={users} setusers={setusers} />}/>
<Route path='/signup' element={<SignUp users={users} setusers={setusers}/>}/>
<Route path='/landing' element={<Landing/>}/>
</Routes>
</BrowserRouter>
</div>
  )
}
  


export default App;
