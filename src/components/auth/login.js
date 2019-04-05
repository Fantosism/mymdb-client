import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authActions'
import classnames from 'classnames'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: '',
      errors: {},
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.authenticated) {
      this.props.history.push('/dashboard')
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.auth.authenticated) {
      this.props.history.push('/dashboard')
    }
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: prevProps.errors })
    }
  }

  onChange = e => this.setState({ [e.target.id]: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    const userInput = {
      name: this.state.name,
      password: this.state.password,
    }
    // console.log(userInput)
    this.props.loginUser(userInput)
  }

  render() {
    const { errors } = this.state
    return (
      // <div className='container'>
      // <div style={{ marginTop: '4rem' }} className='row'>
      <div>
        <div className='container' id='container'>
          <div className='col s12'>
            <Link to='/' className='btn-flat waves-effect'>
              <i className='material-icons left'>keyboard_backspace</i> Back to home
            </Link>
            <div className='col s12' style={{ paddingLeft: '11.250px' }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className='grey-text text-darken-1'>
                Don't have an account? <Link to='/register'>Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className='input-field col s12'>
                <label htmlFor='name'>Name</label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id='name'
                  type='text'
                  className={classnames('', { invalid: errors.name })}
                />
                <span className='red-text'>{errors.name}</span>
              </div>
              <div className='input-field col s12'>
                <label htmlFor='password'>Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id='password'
                  type='password'
                  className={classnames('', {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <span className='red-text'>
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              {/* <div className='col s12' style={{ paddingLeft: '11.250px' }}> */}
              <div className='center-align'>
                <button
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem',
                    justifyContent: 'center',
                  }}
                  type='submit'
                  className='btn btn-large waves-effect waves-light hoverable blue accent-3 center-align'>
                  Login
                </button>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
      // </div>
      // </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
