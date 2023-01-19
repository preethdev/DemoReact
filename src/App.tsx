import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import HomeScreen from './pages/Home';
import { ProtectedRoute } from './components/protectedroutes';
import UserList from './pages/users/userlist';
import Dashboard from './pages/Dashboard/dashboard';
import LoginScreen from './pages/login/landingPage';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/Menu" element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          } >
            <Route path='UserList' element={<UserList />}></Route>
          </Route>
          <Route path="/*" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
