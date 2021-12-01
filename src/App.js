import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import MainView from './views/Mainview';
import FavoritesView from './views/FavoritesView';
import NewFavoriteView from './views/NewFavoriteView';
import SignUpView from './views/SignUpView';
import { isAuthenticated } from './services/authService';
import LoginView from './views/LoginView';
import AuthRoute from './components/AuthRoute';

function App() {
  
  const user = isAuthenticated()

  return (
    <>
    {user && <NavBar/>}
      <Routes>
      <Route path="/signUp" element={<SignUpView/>}/>
      <Route path="/login" element={<LoginView/>}/>
        <Route element={<AuthRoute/>}> 
          <Route path="/favorites" element={<FavoritesView/>}/>
          <Route path="/addFavorite" element={<NewFavoriteView/>}/>
          <Route path="/" element={<MainView/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
