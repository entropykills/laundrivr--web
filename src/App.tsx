import './App.css';
import { SignInPage } from './pages/signin/SignInPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/route/ProtectedRoute';
import { NavigationBar } from './components/navigation/NavigationBar';
import { Footer } from './components/footer/Footer';
import { Flex } from '@chakra-ui/react';
import { FourOhFourPage } from './pages/404/404Page';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { DefaultDashboardPage } from './pages/dashboard/default/DefaultDashboardPage';
import { AdminProtectedRoute } from './components/route/AdminProtectedRoute';
import { AdminDashboardPage } from './pages/dashboard/admin/AdminDashboardPage';

function App() {
  return (
    <Flex direction="column" h={'100vh'} w={'100vw'} backgroundColor={'#f7fafc'}>
      <BrowserRouter>
        <NavigationBar />
        <Flex direction="column" flex={1}>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="dashboard" element={<ProtectedRoute />}>
              <Route path="*" element={<DashboardPage />}>
                <Route path="*" element={<DefaultDashboardPage />} />
                <Route path="admin" element={<AdminProtectedRoute />}>
                  <Route path="*" element={<AdminDashboardPage />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<FourOhFourPage />} />
          </Routes>
        </Flex>
        <Footer />
      </BrowserRouter>
    </Flex>
  );
}

export default App;
