import React from 'react';

interface EmailProps {
	errors: any;
	setEmail: (email: string) => void;
	validateInput: (name: string, value: string) => void;
	email: string;
}

export const Email = ({ errors, setEmail, validateInput, email }: EmailProps) => {
	return (
		<>
			<div className="form-group">
				<label className="form-label" htmlFor="email">
					Email
				</label>
				<input
					className={`form-input ${errors.email && 'error'}`}
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					onBlur={(e) => validateInput('email', e.target.value)}
				/>
				{errors.email && <span className="error-message">{errors.email}</span>}
			</div>
		</>
	);
};
