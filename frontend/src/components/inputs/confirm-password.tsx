import React from 'react';

interface ConfirmPasswordProps {
	errors: any;
	setConfirmPassword: (password: string) => void;
	validateInput: (name: string, value: string) => void;
    confirmPassword: string
}

export const ConfirmPassword = ({ errors, setConfirmPassword, validateInput ,confirmPassword}: ConfirmPasswordProps) => {
	return (
		<>
			<div className="form-group">
				<label className="form-label" htmlFor="confirm-password">
					Confirm Password
				</label>
				<input
					className={`form-input ${errors.confirmPassword && 'error'}`}
					type="password"
					id="confirm-password"
					name="confirm-password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					onBlur={(e) => validateInput('confirmPassword', e.target.value)}
					required
				/>
				{errors.confirmPassword && (
					<p className="error-message">{errors.confirmPassword}</p>
				)}
			</div>
		</>
	);
};
