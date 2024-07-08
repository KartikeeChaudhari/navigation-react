
import AboutUs from './Components/AboutUs';
import Features from './Components/Features';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


function App() {
  const router=createBrowserRouter([{
    path:"/",
    element:<Navbar></Navbar>,
    children:[
      {path:"/home",element:<Home></Home>},
      {path:"/features",element:<Features></Features>},
      {path:"/aboutus",element:<AboutUs></AboutUs>}
    ]
  }])
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
    
  );
}

export default App;
