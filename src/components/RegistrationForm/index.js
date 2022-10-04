// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    firstnameErrorMsg: false,
    lastnameErrorMsg: false,
    isSubmitted: false,
  }

  firstNameValue = e => {
    this.setState({firstname: e.target.value})
  }

  lastNameValue = e => {
    this.setState({lastname: e.target.value})
  }

  firstNameInput = () => {
    const {firstname} = this.state
    return firstname !== ''
  }

  lastNameInput = () => {
    const {lastname} = this.state
    return lastname !== ''
  }

  onBlurFirstNameInput = () => {
    const isValidFirstName = this.firstNameInput()
    this.setState({firstnameErrorMsg: !isValidFirstName})
  }

  onBlurLastNameInput = () => {
    const isValidLastName = this.lastNameInput()
    this.setState({lastnameErrorMsg: !isValidLastName})
  }

  onFormSubmit = e => {
    e.preventDefault()

    const isValidateFirstName = this.firstNameInput()
    const isValidateLastName = this.lastNameInput()

    if (isValidateFirstName && isValidateLastName) {
      this.setState({isSubmitted: true})
    } else {
      this.setState({
        firstnameErrorMsg: !isValidateFirstName,
        lastnameErrorMsg: !isValidateLastName,
        isSubmitted: false,
      })
    }
  }

  onClickReSubmitForm = () => {
    this.setState({isSubmitted: false, firstname: '', lastname: ''})
  }

  render() {
    const {
      firstname,
      lastname,
      firstnameErrorMsg,
      lastnameErrorMsg,
      isSubmitted,
    } = this.state
    return (
      <div className="registration-container">
        <h1 className="title">Registration</h1>
        {isSubmitted ? (
          <div className="success-msg-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
              alt="success"
              className="success-img"
            />
            <p className="note">Submitted Successfully</p>
            <div className="response-btn-container">
              <button
                type="button"
                className="submitBtn"
                onClick={this.onClickReSubmitForm}
              >
                Submit Another Response
              </button>
            </div>
          </div>
        ) : (
          <form
            className="register-form-container"
            onSubmit={this.onFormSubmit}
          >
            <div className="first-name-container">
              <label className="input-label" htmlFor="firstname">
                FIRST NAME
              </label>
              <input
                type="text"
                id="firstname"
                className="input-field"
                value={firstname}
                placeholder="First name"
                onChange={this.firstNameValue}
                onBlur={this.onBlurFirstNameInput}
              />
            </div>
            {firstnameErrorMsg && <p className="err-msg">Required</p>}
            <div className="last-name-container">
              <label className="input-label" htmlFor="lastname">
                LAST NAME
              </label>
              <input
                type="text"
                id="lastname"
                className="input-field"
                value={lastname}
                placeholder="Last name"
                onChange={this.lastNameValue}
                onBlur={this.onBlurLastNameInput}
              />
            </div>
            {lastnameErrorMsg && <p className="err-msg">Required</p>}
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}
export default RegistrationForm
