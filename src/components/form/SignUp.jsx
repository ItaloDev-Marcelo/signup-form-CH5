import { useEffect, useState } from "react"
import SignUpInput from "../Common-input"
import ErrorIconSvg from './icon/icon-error.svg'


export default function SignUpForm() {
 
   const [SignUpFormData, setSignUpFormData] = useState({
    firstName: '',
    lastName: '', 
    email: '', 
    password: ''
   })

   function ErrorTest() {
     const {firstName, lastName, email, password} = SignUpFormData;

     let img1 = document.querySelector('.error-sms1-img'); 
     let img2 = document.querySelector('.error-sms2-img');
     let img3 = document.querySelector('.error-sms3-img');
     let img4 = document.querySelector('.error-sms4-img');



     if(firstName === '') {
      img1.style.display = 'block'
     }else {
      img1.style.display = 'none'
     }

     if(lastName === '' ){
      img2.style.display = 'block'
     }else {
      img2.style.display = 'none'
     }


     if(email === '' ){
      img3.style.display = 'block'
     }else {
      img3.style.display = 'none'
     }

     if(password === '' ){
      img4.style.display = 'block'
     }else {
      img4.style.display = 'none'
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
     useEffect(() => {
       ErrorTest()
     })
   }



    return (

     <div>
        <article id="row-item">
          <h2> <strong>Try it free 7 days</strong> then $20/mo. thereafter</h2>
        </article>
         <form onSubmit={hundleSignUpSubmit}>

<div className="Row-item">
<SignUpInput name={'firstName'}  id={'first Name'} type={'text'} 
 value={SignUpFormData.firstName} onChange={hundleChange} 
  />
 <img  className='error-sms1-img' src={ErrorIconSvg}/> 
 <p className='error-sms1-txt'>First name cannot be empty </p>
</div>

<div className="Row-item">
<SignUpInput name={'lastName'}    id={'last Name'} type={'text'} 
 value={SignUpFormData.lastName} onChange={hundleChange} 
 />
<img  className='error-sms2-img' src={ErrorIconSvg}/>
<p className='error-sms2-txt'>Last name cannot be empty </p>
</div>

<div className="Row-item">
<SignUpInput name={'email'}   id={'email'} type={'email'} 
 value={SignUpFormData.email} onChange={hundleChange} 
/>
<img  className='error-sms3-img' src={ErrorIconSvg}/>
<p className='error-sms3-txt'>email cannot be empty </p>
</div>

<div className="Row-item">
<SignUpInput name={'password'}  id={'password'} type={'password'} 
 value={SignUpFormData.password} onChange={hundleChange} 
  />
    <img  className='error-sms4-img' src={ErrorIconSvg}/> 
  <p className='error-sms4-txt'>password cannot be empty </p>
</div>

<button type="submit" id="submit-btn"> Claim your free trial </button>
<div>
  <p>By clicking the button, you are agreeing to our <strong>Terms and Services</strong> </p>
</div>
</form>
     </div>
    )
}