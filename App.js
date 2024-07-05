import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './navbar';
import Home from './home';
import  SearchProjects from './seach';
import Login from './login';

import Todo from './home';








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
<Route  path="/" element={<Layout/>}>
  <Route path='/home' element={<Todo/>}>
  </Route>
  <Route path='/search'element={< SearchProjects/>}></Route>
  <Route path='/login' element={<Login/>}></Route>



</Route>


</Routes>



</BrowserRouter>


       </>
  );
}

export default App;




