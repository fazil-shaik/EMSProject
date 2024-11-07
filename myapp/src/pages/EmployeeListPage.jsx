// // src/pages/EmployeeListPage.jsx
// import  { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Header } from '../Component/Header';
// import { Button } from '../components/ui/button';
// import axios from 'axios';

// export function EmployeeListPage() {
//   const [employees, setEmployees] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/employees');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/employees/${id}`);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   const filteredEmployees = employees.filter(employee =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     employee.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <Header />
//       <main className="p-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Employee List</h1>
//           <Link to="/employees/create">
//             <Button>Create Employee</Button>
//           </Link>
//         </div>
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search employees..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Mobile No
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Designation
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Gender
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Courses
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredEmployees.map((employee) => (
//                 <tr key={employee._id}>
//                   <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
//                     {employee.name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
//                     {employee.email}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
//                     {employee.mobile}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
//                     {employee.designation}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
//                     {employee.gender}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
//                     {employee.courses.join(', ')}
//                   </td>
//                   <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
//                     <Link to={`/employees/edit/${employee._id}`}>
//                       <Button variant="outline" size="sm" className="mr-2">Edit</Button>
//                     </Link>
//                     <Button variant="destructive" size="sm" onClick={() => handleDelete(employee._id)}>Delete</Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }

// src/pages/EmployeeListPage.jsx
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Component/Header';
import { Button } from '../components/ui/button';
import axios from 'axios';

export function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/employees/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <main className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Employee List</h1>
          <Link to="/employees/create">
            <Button>Create Employee</Button>
          </Link>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Mobile No
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Designation
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Courses
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    {employee.image && (
                      <img
                        src={`http://localhost:8000/${employee.image}`}
                        alt={`${employee.name}'s profile`}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    {employee.name}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    {employee.email}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    {employee.mobile}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    {employee.designation}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    {employee.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    {employee.courses.join(', ')}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <Link to={`/employees/edit/${employee._id}`}>
                      <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                    </Link>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(employee._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}