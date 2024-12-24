import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = [
      { email: 'admin@example.com', role: 'admin' },
      { email: 'staff@example.com', role: 'staff' },
      { email: 'student@example.com', role: 'student' }
    ];

    const user = users.find((u) => u.email === email);

    if (user) {
      if (user.role === 'admin') navigate('/admin');
      if (user.role === 'staff') navigate('/staff');
      if (user.role === 'student') navigate('/student');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    // <div className="p-8 bg-white shadow-md rounded-lg w-96">
    //   <h2 className="text-2xl mb-6">Login</h2>
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     className="w-full p-2 border mb-4"
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     className="w-full p-2 border mb-6"
    //   />
    //   <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
    //     Login
    //   </button>
    // </div>
    

<form class="max-w-sm mx-auto p-10 bg-white shadow-lg rounded-lg w-96">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input value={email}  onChange={(e) => setEmail(e.target.value)}   type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input value={password}  onChange={(e) => setPassword(e.target.value)} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
 
  <button onClick={handleLogin} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  );
}
