import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	// Validation before submit
	const onSubmit = async (e) => {
		e.preventDefault();
		// Check if password match
		if (password !== password2) {
			console.log('Passwords do not match');
		} else {
			const newUser = {
				name,
				email,
				password,
			};
			try {
				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				};
				const body = JSON.stringify(newUser);
				// eslint-disable-next-line
				const res = await axios.post('/api/users', body, config);
			} catch (err) {
				console.log(err.response.data);
			}
		}
	};

	return (
		<Fragment>
			<h1 className='large text-primary'>Sign Up</h1>
			<p className='lead'>
				<i className='fas fa-user'></i>Create Your Account
			</p>
			<form className='form' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Name'
						name='name'
						value={name}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
					<small className='form-text'>
						This site use gravatar, so if you want a profile image, use a
						gravatar email
					</small>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={(e) => onChange(e)}
						minlength='8'
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Confirm Password'
						name='password2'
						value={password2}
						onChange={(e) => onChange(e)}
						minlength='8'
					/>
				</div>
				<input type='submit' value='Register' className='btn btn-primary' />
			</form>
			<p className='my-1'>
				Already have an account? <a href='login.html'>Sign In</a>
			</p>
		</Fragment>
	);
};

export default Register;
