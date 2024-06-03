// MyComponent.js
import React from 'react';
import useResolvedPath from './hooks';
import Login from '../pages/Login';
import SignupPage from '../pages/SignupPage';

const MyComponent = () => {
    const resolvedPath = useResolvedPath();

    return (
        <div>
        <Login/>
        <SignupPage/>
        </div>
    );
};

export default MyComponent;
