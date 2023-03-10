import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from '../store/actions/user-actions';
import { useLocation, useNavigate } from 'react-router-dom';

interface useLoginFormProps {
	isLogin: boolean;
}
export const useLoginForm = ({ isLogin }: useLoginFormProps) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [email, setEmail] = useState('');

	const { pathname } = useLocation();

	const [errors, setErrors] = useState({
		username: '',
		password: '',
		email: '',
		confirmPassword: '',
	});

	const dispatch: any = useDispatch();
	const navigate = useNavigate();

	const validateInput = (name: string, value: string) => {
		let errorMessage = '';

		if (name === 'username') {
			if (value.length < 8) {
				errorMessage = 'Username must be at least 8 characters long.';
			}
		} else if (name === 'password') {
			if (value.length < 8) {
				errorMessage = 'Password must be at least 8 characters long.';
			} else if (!/\d/.test(value)) {
				errorMessage = 'Password must contain at least one number.';
			} else if (!/[!@#$%^&*]/.test(value)) {
				errorMessage = 'Password must contain at least one special character.';
			} else if (!/[A-Z]/.test(value)) {
				errorMessage = 'Password must contain at least one uppercase letter.';
			}
		} else if (name === 'confirmPassword') {
			if (value !== password) {
				errorMessage = 'Passwords do not match.';
			}
		} else if (name === 'email') {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(value)) {
				errorMessage = 'Email is not valid.';
			}
		}

		setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		validateInput('username', username);
		validateInput('password', password);

		// Validate inputs
		if (!isLogin) {
			validateInput('confirmPassword', confirmPassword);
			validateInput('email', email);
		}

		// Check if there are any errors
		if (Object.values(errors).every((val: string) => val === '')) {

			const userToLogin: any = { password };
			userToLogin[username !== '' ? 'username' : 'email'] =
				username !== '' ? username : email;

			if (pathname == '/signup') {
				dispatch(signup({ username, password, email }));
			} else {
				dispatch(login({ ...userToLogin }));
			}

			navigate('/home');
			setUsername('');
			setPassword('');
			setEmail('');
			setErrors({ username: '', password: '', email: '', confirmPassword: '' });
		}
	};

	return {
		username,
		setUsername,
		password,
		setPassword,
		email,
		setEmail,
		errors,
		handleSubmit,
		validateInput,
		confirmPassword,
		setConfirmPassword,
	};
};
