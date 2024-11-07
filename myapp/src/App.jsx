import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { EmployeeListPage } from './pages/EmployeeListPage';
import { EmployeeForm } from './Component/EmployeeForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/employees" element={<EmployeeListPage />} />
      <Route path="/employees/create" element={<EmployeeForm />} />
      <Route path="/employees/edit/:id" element={<EmployeeForm />} />
    </Routes>
  );
}

export default App;