import React from 'react'
import { ConfirmPassword } from '../components/inputs/confirm-password';
import { Email } from '../components/inputs/email';
import { Password } from '../components/inputs/password';
import { Username } from '../components/inputs/username';
import { useLoginForm } from '../hooks/useLoginForm';

export const Signup = () =>{
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
	} = useLoginForm({isLogin: false});
  return (
    <div className="login-container">

			<form className="login-form" onSubmit={ handleSubmit}>
			    <h1 className="form-title">Sign Up</h1>
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
					Sign Up
				</button>
			</form>
		</div>
  )
}
