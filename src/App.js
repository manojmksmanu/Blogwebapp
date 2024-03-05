import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Detail';
import Auth from './pages/Auth';
import AddEditBlog from './pages/AddEditBlog';
import NotFound from './pages/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import Header from './components/Header';
import { auth } from "./firebase"
import { signOut } from 'firebase/auth';
function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);
//  const navigate = useNavigate(); gives an error not solved yet .......😭😭


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      }
    })
  });
  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive('login');
      toast.success("logout successfully")
      // navigate("/auth")
    })
  }
 

  return (
    <div className="App">
    <Header setActive={setActive} active={active} user={user} handleLogout={handleLogout} />
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      // transition: Bounce
      />
      <BrowserRouter>
      
    
        <Routes>
    
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/auth" element={<Auth setActive={setActive} />} />
          <Route path="/create" element={<AddEditBlog />} />
          <Route path="/update/:id" element={<AddEditBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
