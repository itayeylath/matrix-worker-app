import React from 'react';

interface UsernameProps {
	errors: any;
	setUsername: (name: string) => void;
	validateInput: (name: string, value: string) => void;
	username: string;
}

export const Username = ({ errors, setUsername, validateInput, username }: UsernameProps) => {
	return (
		<>
			<h1 className="form-title">Login</h1>
			<div className="form-group">
				<label className="form-label" htmlFor="username">
					Username
				</label>
				<input
					className={`form-input ${errors.username && 'error'}`}
					type="text"
					id="username"
					name="username"
					value={username}
					onChange={(e: any) => setUsername(e.target.value)}
					onBlur={(e: any) => validateInput('username', e.target.value)}
				/>
				{errors.username && <span className="error-message">{errors.username}</span>}
			</div>
		</>
	);
};
