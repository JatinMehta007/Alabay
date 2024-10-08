
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './assets/components/home'
import { Discovers } from './assets/components/discover2';
import { Discover } from './assets/components/discover1';


function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>

      <Route path='/discover1' element={<Discover/>}></Route>

      <Route path='/discover2' element={<Discovers/>}></Route>
      

     </Routes>
     </BrowserRouter>
   )
}

export default App;