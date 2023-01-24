import './App.css';
import { SignInPage } from './pages/signin/SignInPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/route/ProtectedRoute';
import { Button } from '@chakra-ui/react';
import { useAuth } from './contexts/AuthContext';

function App() {
  const auth = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<div>Home</div>} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={
              <div>
                Dashboard
                <Button onClick={auth.signOut}>Sign Out</Button>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
