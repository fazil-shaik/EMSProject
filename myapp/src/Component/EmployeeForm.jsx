// // src/components/EmployeeForm.jsx
// import  { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Button } from '../components/ui/button';
// import axios from 'axios';

// export function EmployeeForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     courses: [],
//     image: null,
//   });

//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       fetchEmployee();
//     }
//   }, [id]);

//   const fetchEmployee = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/api/employees/${id}`);
//       setFormData(response.data);
//     } catch (error) {
//       console.error('Error fetching employee:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSelectChange = (e) => {
//     setFormData({ ...formData, designation: e.target.value });
//   };

//   const handleGenderChange = (e) => {
//     setFormData({ ...formData, gender: e.target.value });
//   };

//   const handleCourseChange = (e) => {
//     const course = e.target.value;
//     const updatedCourses = formData.courses.includes(course)
//       ? formData.courses.filter(c => c !== course)
//       : [...formData.courses, course];
//     setFormData({ ...formData, courses: updatedCourses });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       for (const key in formData) {
//         if (key === 'courses') {
//           formData[key].forEach((course, index) => {
//             formDataToSend.append(`courses[${index}]`, course);
//           });
//         } else if (key === 'image' && formData[key]) {
//           formDataToSend.append('image', formData[key]);
//         } else {
//           formDataToSend.append(key, formData[key]);
//         }
//       }

//       if (id) {
//         await axios.put(`http://localhost:8000/api/employees/${id}`, formDataToSend, {
//           headers: { 'Content-Type': 'multipart/form-data' }
//         });
//       } else {
//         await axios.post('http://localhost:8000/api/employees', formDataToSend, {
//           headers: { 'Content-Type': 'multipart/form-data' }
//         });
//       }
//       navigate('/employees');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       className="space-y-6 max-w-md mx-auto mt-8"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <div>
//         <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No</label>
//         <input
//           id="mobile"
//           name="mobile"
//           type="tel"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <div>
//         <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
//         <select
//           id="designation"
//           name="designation"
//           value={formData.designation}
//           onChange={handleSelectChange}
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         >
//           <option value="">Select designation</option>
//           <option value="HR">HR</option>
//           <option value="Manager">Manager</option>
//           <option value="Sales">Sales</option>
//         </select>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Gender</label>
//         <div className="mt-2 space-y-2">
//           <div className="flex items-center">
//             <input
//               id="male"
//               name="gender"
//               type="radio"
//               value="Male"
//               checked={formData.gender === 'Male'}
//               onChange={handleGenderChange}
//               className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//             />
//             <label htmlFor="male" className="ml-3 block text-sm font-medium text-gray-700">
//               Male
//             </label>
//           </div>
//           <div className="flex items-center">
//             <input
//               id="female"
//               name="gender"
//               type="radio"
//               value="Female"
//               checked={formData.gender === 'Female'}
//               onChange={handleGenderChange}
//               className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//             />
//             <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">
//               Female
//             </label>
//           </div>
//         </div>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Courses</label>
//         <div className="mt-2 space-y-2">
//           {['MCA', 'BCA', 'BSC'].map((course) => (
//             <div key={course} className="flex items-center">
//               <input
//                 id={course}
//                 name="courses"
//                 type="checkbox"
//                 value={course}
//                 checked={formData.courses.includes(course)}
//                 onChange={handleCourseChange}
//                 className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//               />
//               <label htmlFor={course} className="ml-3 block text-sm font-medium text-gray-700">
//                 {course}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
//         <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image Upload</label>
//         <input
//           id="image"
//           name="image"
//           type="file"
//           accept="image/*"
//           onChange={handleChange}
//           className="mt-1 block w-full"
//         />
//       </div>
//       <Button type="submit">{id ? 'Update' : 'Submit'}</Button>
//     </motion.form>
//   );
// }

// src/components/EmployeeForm.jsx
import  { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import axios from 'axios';

export function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    courses: [],
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchEmployee();
    }
  }, [id]);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/employees/${id}`);
      setFormData(response.data);
      if (response.data.image) {
        setImagePreview(`http://localhost:8000/${response.data.image}`);
      }
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, designation: e.target.value });
  };

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleCourseChange = (e) => {
    const course = e.target.value;
    const updatedCourses = formData.courses.includes(course)
      ? formData.courses.filter(c => c !== course)
      : [...formData.courses, course];
    setFormData({ ...formData, courses: updatedCourses });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (key === 'courses') {
          formData[key].forEach((course, index) => {
            formDataToSend.append(`courses[${index}]`, course);
          });
        } else if (key === 'image' && formData[key]) {
          formDataToSend.append('image', formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      if (id) {
        await axios.put(`http://localhost:8000/api/employees/${id}`, formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.post('http://localhost:8000/api/employees', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      navigate('/employees');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No</label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
        <select
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleSelectChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <div className="mt-2 space-y-2">
          <div className="flex items-center">
            <input
              id="male"
              name="gender"
              type="radio"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleGenderChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label htmlFor="male" className="ml-3 block text-sm font-medium text-gray-700">
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="female"
              name="gender"
              type="radio"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleGenderChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">
              Female
            </label>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Courses</label>
        <div className="mt-2 space-y-2">
          {['MCA', 'BCA', 'BSC'].map((course) => (
            <div key={course} className="flex items-center">
              <input
                id={course}
                name="courses"
                type="checkbox"
                value={course}
                checked={formData.courses.includes(course)}
                onChange={handleCourseChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor={course} className="ml-3 block text-sm font-medium text-gray-700">
                {course}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image Upload</label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="mt-1 block w-full"
        />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-md" />
        )}
      </div>
      <Button type="submit">{id ? 'Update' : 'Submit'}</Button>
    </motion.form>
  );
}