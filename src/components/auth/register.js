import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../actions/authActions'
import classnames from 'classnames'

class Register extends Component {
  state = {
    name: '',
    password: '',
    passwordConfirm: '',
    errors: {},
  }

  componentWillReceiveProps(nextProps) {
    return nextProps.errors ? this.setState({ errors: nextProps.errors }) : null
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  onChange = e => this.setState({ [e.target.id]: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
    }
    console.log(newUser)
    this.props.registerUser(newUser, this.props.history)
  }
  render() {
    const { errors } = this.state
    return (
      <div className='container' id='container'>
        <Link to='/' className='btn-flat waves-effect'>
          <i className='material-icons left'>keyboard_backspace</i> Back to home
        </Link>
        <div className='col s12' style={{ paddingLeft: '11.250px' }}>
          <h4>
            <b>Register</b> below
          </h4>
          <p className='grey-text text-darken-1'>
            Already have an account? <Link to='/login'>Log in</Link>
          </p>
        </div>
        <form noValidate onSubmit={this.onSubmit}>
          <div className='field'>
            <label htmlFor='name' className='label'>
              Name
            </label>
            <div className='control has-icons-left'>
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id='name'
                type='text'
                className='input is-danger'
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-user' />
              </span>
            </div>
            <p className='help is-danger'>{errors.name}</p>
          </div>
          <div className='input-field col s12'>
            <label htmlFor='password'>Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id='password'
              type='password'
              className={classnames('', { invalid: errors.password })}
            />
            <span className='red-text'>{errors.password}</span>
          </div>
          <div className='input-field col s12'>
            <label htmlFor='passwordConfirm'>Confirm Password</label>
            <input
              onChange={this.onChange}
              value={this.state.passwordConfirm}
              error={errors.passwordConfirm}
              id='passwordConfirm'
              type='password'
              className={classnames('', { invalid: errors.passwordConfirm })}
            />
            <span className='red-text'>{errors.passwordConfirm}</span>
          </div>
          <div className='col s12 center-align' style={{ paddingLeft: '11.250px', alignContent: 'center' }}>
            <button
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
                alignContent: 'center',
              }}
              type='submit'
              className='btn btn-large waves-effect waves-light hoverable blue accent-3'>
              Sign up
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth, errors: state.errors })

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))
