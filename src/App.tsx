import './App.css';
import { SignInPage } from './pages/signin/SignInPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/route/ProtectedRoute';
import { NavigationBar } from './components/navigation/NavigationBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/" element={<div>Home</div>} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<div>Dashboard</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
