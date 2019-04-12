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
      <div class='wrapperz fadeInDown has-text-centered'>
        <div id='formContent'>
          <h2 class='active title active-title'> Sign In </h2>

          <form noValidate onSubmit={this.onSubmit}>
            <div className='field'>
              <div className='control center has-text-centered'>
                <input
                  className='input-styles text-styles fadeIn second'
                  onChange={this.onChange}
                  type='text'
                  id='name'
                  placeholder='login'
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
                  placeholder='password'
                />
              </div>
            </div>
            <div className='field bottom-padding'>
              <div className='control has-text-centered'>
                <button className='fadeIn fourth button' type='submit'>
                  Log In
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
      // <div className='container'>
      // <div style={{ marginTop: '4rem' }} className='row'>

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
