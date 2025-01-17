import { useState } from "react"
import SignUpInput from "../Common-input"
import ErrorIconSvg from './icon/icon-error.svg'


export default function SignUpForm() {

  const [SignUpFormData, setSignUpFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState(false)

  function ErrorTest() {
    const { firstName, lastName, email, password } = SignUpFormData;

    let img1 = document.querySelector('.error-sms1-img');
    let img2 = document.querySelector('.error-sms2-img');
    let img3 = document.querySelector('.error-sms3-img');
    let img4 = document.querySelector('.error-sms4-img');

    let sms1 = document.querySelector('.error-sms1-txt');
    let sms2 = document.querySelector('.error-sms2-txt');
    let sms3 = document.querySelector('.error-sms3-txt');
    let sms4 = document.querySelector('.error-sms4-txt');

    let inputstyle1 = document.querySelector('.Row-item #first--Name');
    let inputstyle2 = document.querySelector('.Row-item #last--Name');
    let inputstyle3 = document.querySelector('.Row-item #email');
    let inputstyle4 = document.querySelector('.Row-item #password');

    if (firstName === '' && lastName === '' && email === '' && password === '') {
      inputstyle1.style.borderColor = 'red'
      inputstyle2.style.borderColor = 'red'
      inputstyle3.style.borderColor = 'red'
      inputstyle4.style.borderColor = 'red'
    }

    
    if (firstName === '') {
      
      inputstyle1.style.borderColor = 'red'
      img1.style.display = 'block'
      sms1.style.display = 'block'
    } else {
      
      inputstyle1.style.borderColor = '#b9b6d3'
      img1.style.display = 'none'
      sms1.style.display = 'none'
    }

    if (lastName === '') {
      inputstyle2.style.borderColor = 'red'
      img2.style.display = 'block'
      sms2.style.display = 'block'
    } else {
      inputstyle2.style.borderColor = '#b9b6d3'
      img2.style.display = 'none'
      sms2.style.display = 'none'
    }


    if (email === '') {
      inputstyle3.style.borderColor = 'red'
      img3.style.display = 'block'
      sms3.style.display = 'block'
    } else {
      inputstyle3.style.borderColor = '#b9b6d3'
      img3.style.display = 'none'
      sms3.style.display = 'none'
    }

    if (password === '') {
      inputstyle4.style.borderColor = 'red'
      img4.style.display = 'block'
      sms4.style.display = 'block'
    } else {
      inputstyle4.style.borderColor = '#b9b6d3'
      img4.style.display = 'none'
      sms4.style.display = 'none'
    }





  }


  function hundleChange(event) {

    setSignUpFormData({
      ...SignUpFormData,
      [event.target.name]: event.target.value
    })
  }

  function hundleSignUpSubmit(event) {
    event.preventDefault()
    setError(true)
    error ? ErrorTest() : null
  }

  return (

    <div id='container'>
      <article id="row-item">
        <h2 id="sub--title"> <strong>Try it free 7 days</strong> then $20/mo. thereafter</h2>
      </article>
      <form onSubmit={hundleSignUpSubmit} id='form--container'>

        <div className="Row-item">
          <SignUpInput name={'firstName'} inputTxt={'First Name'} id={'first--Name'} type={'text'}
            value={SignUpFormData.firstName} onChange={hundleChange}
          />
          {error ? <><img className='error-sms1-img' src={ErrorIconSvg} />
            <p className='error-sms1-txt'>First name cannot be empty </p></> : <></>}
        </div>

        <div className="Row-item">
          <SignUpInput name={'lastName'} inputTxt={'Last Name'} id={'last--Name'} type={'text'}
            value={SignUpFormData.lastName} onChange={hundleChange}
          />
          {error ? <><img className='error-sms2-img' src={ErrorIconSvg} />
            <p className='error-sms2-txt'>Last name cannot be empty </p></> : null}
        </div>

        <div className="Row-item">
          <SignUpInput name={'email'} inputTxt={'Email'} id={'email'} type={'email'}
            value={SignUpFormData.email} onChange={hundleChange}
          />
          {error ? <><img className='error-sms3-img' src={ErrorIconSvg} />
            <p className='error-sms3-txt'>Email cannot be empty </p></> : null}
        </div>

        <div className="Row-item">
          <SignUpInput name={'password'} inputTxt={'Password'} id={'password'} type={'password'}
            value={SignUpFormData.password} onChange={hundleChange}
          />
          {error ? <><img className='error-sms4-img' src={ErrorIconSvg} />
            <p className='error-sms4-txt'>password cannot be empty </p></> : null}
        </div>

        <button type="submit" id="submit-btn"> Claim your free trial </button>
        <div id="final-txt">
          <p id="Services">By clicking the button, you are agreeing to our <strong className="red-txt">Terms and Services</strong> </p>
        </div>
      </form>
    </div>
  )
}