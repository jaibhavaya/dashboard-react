import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import routeMap from './lib/routeMap';
import UserManagement from './components/user/user_management/UserManagement';

// Example page components
const Home = () => <h1>Home Page</h1>;
const NotFound = () => <h1>404 - Page Not Found</h1>;

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={routeMap.userManagement}>User Management</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routeMap.userManagement} element={<UserManagement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
