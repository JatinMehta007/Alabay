
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './assets/components/home'
import { Button } from './assets/components/button';
import { Discover } from './assets/components/discover1';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>

      <Route path='/base' element={<Button/>}></Route>

      <Route path='/bases' element={<Discover/>}></Route>
     </Routes>
     </BrowserRouter>
   )
}

export default App;