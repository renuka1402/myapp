import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import Layout from './navbar';
import Product from './product';
import  SearchProjects from './search';
import Login from './login';


const App=()=>{



  return(
    <>
         <ToastContainer
           position="top-center"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="light"

/>

         <BrowserRouter>
            <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route  path="/" element={<Layout/>}>
            <Route path='/home' element={<Product/>}>
          </Route>
              <Route path='/search'element={< SearchProjects/>}></Route>
          
       </Route>
      </Routes>
</BrowserRouter>
       </>
  );
}

export default App;




