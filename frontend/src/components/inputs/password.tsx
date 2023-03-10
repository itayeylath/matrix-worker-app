import React from 'react';

interface PasswordProps {
	errors: any;
	setPassword: (password: string) => void;
	validateInput: (name: string, value: string) => void;
    password: string
}

export const Password = ({ errors, setPassword, validateInput ,password}: PasswordProps) => {
	return (
		<>
			<div className="form-group">
				<label className="form-label" htmlFor="password">
					Password
				</label>
				<input
					className={`form-input ${errors.password && 'error'}`}
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					onBlur={(e) => validateInput('password', e.target.value)}
				/>
				{errors.password && <span className="error-message">{errors.password}</span>}
			</div>
		</>
	);
};
