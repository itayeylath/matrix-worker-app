import React, { useState } from 'react';
import { ConfirmPassword } from '../components/inputs/confirm-password';
import { Email } from '../components/inputs/email';
import { Password } from '../components/inputs/password';
import { Username } from '../components/inputs/username';
import { useLoginForm } from '../hooks/useLoginForm';
export const Login = () => {
	const {
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
	} = useLoginForm();

	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<Username
					errors={errors}
					setUsername={setUsername}
					validateInput={validateInput}
					username={username}
				/>
				<Password
					errors={errors}
					setPassword={setPassword}
					validateInput={validateInput}
					password={password}
				/>
				<ConfirmPassword
					errors={errors}
					setConfirmPassword={setConfirmPassword}
					validateInput={validateInput}
					confirmPassword={confirmPassword}
				/>

				<Email
					errors={errors}
					setEmail={setEmail}
					validateInput={validateInput}
					email={email}
				/>
				<button className="form-button submit-btn" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};
