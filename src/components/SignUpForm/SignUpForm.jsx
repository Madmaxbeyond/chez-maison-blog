import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            // Passing setUser through App, AuthPage and SignUpForm
            this.props.setUser(user);            
        } catch {
            // If an error occured 
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        const { name, email, password, confirm, error} = this.state;
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={this.handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={confirm} onChange={this.handleChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
          </div>
        );
      }
}