import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import Profile from './Pages/Profile/Profile';
import UrlShortner from './Pages/UrlShortener/UrlShortener';
import MyUrls from './Pages/MyUrls/MyUrls';


function App() {
  return (
    <Router>
        <HeaderMegaMenu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/urlshortner' element={<UrlShortner/>} />
            <Route path='/MyUrls' element={<MyUrls/>} />
            </Route>
        </Routes>
    </Router>
  )
}

export default App