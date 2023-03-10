import { mount } from 'enzyme';
import { expect, use, spy } from 'chai';
import spies from 'chai-spies';
use(spies);
import { Username } from '../../components/inputs/username';

interface UsernameProps {
	errors: any;
	setUsername: (name: string) => void;
	validateInput: (name: string, value: string) => void;
	username: string;
}

describe('Username', () => {
	const errors = { username: 'Username is required' };
	const setUsername = (name: string) => {};
	const validateInput = (name: string, value: string) => {};
	const username = '';

	const props: UsernameProps = {
		errors,
		setUsername,
		validateInput,
		username,
	};

	it('renders the component', () => {
		const wrapper = mount(<Username {...props} />);
		expect(wrapper.find('.form-title')).to.have.lengthOf(1);
		expect(wrapper.find('.form-label')).to.have.lengthOf(1);
		expect(wrapper.find('.form-input')).to.have.lengthOf(1);
		expect(wrapper.find('.error-message')).to.have.lengthOf(1);
	});

	it('calls setUsername when input value changes', () => {
		const newSpy = spy.on(props, 'setUsername');
		const wrapper = mount(<Username {...props} />);
		const input = wrapper.find('#username');
		input.simulate('change', { target: { value: 'test' } });
		expect(newSpy).to.have.been.called.with('test');
	});

	it('calls validateInput when input is blurred', () => {
		const newSpy = spy.on(props, 'validateInput');
		const wrapper = mount(<Username {...props} />);
		const input = wrapper.find('#username');
		input.simulate('blur', { target: { value: 'test' } });
		expect(newSpy).to.have.been.called.with('username', 'test');
	});

	it('renders the error message when errors.username is defined', () => {
		const wrapper = mount(<Username {...props} />);
		expect(wrapper.find('.error-message').text()).to.equal('Username is required');
	});
});
