import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { ...errors };
    if (formValues.username.trim() === '') {
      newErrors.username = 'Username is required.';
      valid = false;
    }

    if (formValues.email.trim() === '') {
      newErrors.email = 'Email is required.';
      valid = false;
    }

    if (formValues.password.trim() === '') {
      newErrors.password = 'Password is required.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Perform login logic here
      console.log('Login successful!');
    }
  };

  return (
    <form className="flex flex-col items-start p-6 max-w-md mx-auto bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
      {errors.username && (
        <span className="text-red-500 text-sm mb-1">{errors.username}</span>
      )}
      <input
        type="text"
        name="username"
        value={formValues.username}
        onChange={handleInputChange}
        className={`w-full p-3 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder="Username"
      />
      {errors.email && (
        <span className="text-red-500 text-sm mb-1">{errors.email}</span>
      )}
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder="Email"
      />
      {errors.password && (
        <span className="text-red-500 text-sm mb-1">{errors.password}</span>
      )}
      <input
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleInputChange}
        className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder="Password"
      />
      <div className='flex items-center justify-center flex-row gap-6 mb-12 mt-8'>
      <p className='text-xl text-black font-bold truncate'>Don't have an account?</p><Link to="/register" target="_blank" className="text-blue-800 text-xl font-bold underline hover:no-underline truncate"> Go to Signup Page</Link>
      </div>
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">Login</button>
    </form>
  );
};

export default Login;




