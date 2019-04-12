import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../actions/authActions'

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
    this.props.registerUser(newUser, this.props.history)
  }
  render() {
    return (
      <div class='wrapperz fadeInDown has-text-centered'>
        <div id='formContent'>
          <h2 class='active title active-title'> Register </h2>

          <form noValidate onSubmit={this.onSubmit}>
            <div className='field'>
              <div className='control center has-text-centered'>
                <input
                  className='input-styles text-styles fadeIn second'
                  onChange={this.onChange}
                  type='text'
                  id='name'
                  placeholder='Username'
                />
              </div>
            </div>
            <div className='field'>
              <div className='control has-text-centered'>
                <input
                  className='input-styles text-styles fadeIn third'
                  onChange={this.onChange}
                  type='text'
                  id='password'
                  placeholder='Password'
                />
              </div>
            </div>
            <div className='field'>
              <div className='control center has-text-centered'>
                <input
                  className='input-styles text-styles fadeIn second'
                  onChange={this.onChange}
                  type='text'
                  id='passwordConfirm'
                  placeholder='Confirm Password'
                />
              </div>
            </div>
            <div className='field bottom-padding'>
              <div className='control has-text-centered'>
                <button className='fadeIn fourth button' type='submit'>
                  Create Account
                </button>
              </div>
            </div>
          </form>

          <div id='formFooter'>
            <Link to='/' className='underlineHover colored-anchor'>
              <i className='material-icons left'>keyboard_backspace</i> Back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth, errors: state.errors })

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))
