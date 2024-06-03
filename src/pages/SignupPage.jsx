import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SignupPage = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: ''
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

    if (formValues.fullName.trim() === '') {
      newErrors.fullName = 'Full Name is required.';
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

    if (formValues.confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Confirm Password is required.';
      valid = false;
    } else if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      valid = false;
    }

    if (formValues.contactNumber.trim() === '') {
      newErrors.contactNumber = 'Contact Number is required.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Perform registration logic here
      console.log('Registration successful!');
    }
  };

  return (
    <form className="flex flex-col items-start p-6 max-w-md mx-auto bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Register</h2>
      {errors.fullName && (
        <span className="text-red-500 text-sm mb-1">{errors.fullName}</span>
      )}
      <input
        type="text"
        name="fullName"
        value={formValues.fullName}
        onChange={handleInputChange}
        className={`w-full p-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder="Full Name"
      />
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
        {errors.contactNumber && (
        <span className="text-red-500 text-sm mb-1">{errors.contactNumber}</span>
      )}
      <input
        type="text"
        name="contactNumber"
        value={formValues.contactNumber}
        onChange={handleInputChange}
        className={`w-full p-3 border ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'} rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder="Contact Number"
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
      {errors.confirmPassword && (
        <span className="text-red-500 text-sm mb-1">{errors.confirmPassword}</span>
      )}
      <input
        type="password"
        name="confirmPassword"
        value={formValues.confirmPassword}
        onChange={handleInputChange}
        className={`w-full p-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder="Confirm Password"
      />
 
      <div className='flex items-center justify-center flex-row gap-6 mb-12 mt-8'>
      <p className='text-xl text-black font-bold truncate'>Don't have an account?</p><Link to="/register" target="_blank" className="text-blue-800 text-xl font-bold underline hover:no-underline truncate"> Go to Signup Page</Link>
      </div>
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">Register</button>
    </form>
  );
};

export default SignupPage;






