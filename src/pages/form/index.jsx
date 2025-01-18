import errorSvgIcon from './icon/icon-error.svg';
import { useForm } from "react-hook-form";



export default function UseFormHook(){

    const {register, handleSubmit, formState: {errors}, reset} = useForm()


    function onFormSubmit(formData) {
        console.log(formData)
        reset()
        
    }
    return (
      <div id='container'>
      <form id='form--container' onSubmit={handleSubmit(onFormSubmit)}>
         <div className='Row-item'>
         <label htmlFor="firstname">
           <input style={{borderColor: errors.firstName ? 'red' : 'gray'}}  {...register('firstName', {
            required: true
           })} name='firstName' id='firstname' placeholder="First Name" type="text" />
           {
          errors.firstName && errors.firstName.type === 'required' ? <img src={errorSvgIcon} alt='error-icon' className='error-sms1-img' /> : null  
         }
         </label>
         {
            errors.firstName && errors.firstName.type === 'required' ? <p className='error-sms1-txt'>First Name cannot be empty</p> : null
         }
         </div>
         
         <div  className='Row-item'>
         <label htmlFor="lastname">
           <input  style={{borderColor: errors.lastName ? 'red' : 'gray'}} {...register('lastName', {
            required: true
           })}  name='lastName' id='lastname' placeholder="Last Name" type="text" />
            {
          errors.lasttName && errors.lastName.type === 'required' ? <img src={errorSvgIcon} alt='error-icon' className='error-sms2-img'/> : null  
         }
         </label>
         {
            errors.lastName && errors.lastName.type === 'required' ? <p className='error-sms2-txt'>Last Name cannot be empty</p> : null
         }
         </div>
 
        <div  className='Row-item'>
        <label htmlFor="email">
           <input  style={{borderColor: errors.email ? 'red' : 'gray'}}  {...register('email', {
            required: true
           })}  name='email' id='email' placeholder="Email" type="email" />
               {
          errors.email && errors.email.type === 'required' ? <img src={errorSvgIcon} alt='error-icon'  className='error-sms3-img' /> : null  
         }
         </label>
         {
            errors.email && errors.email.type === 'required' ? <p className='error-sms3-txt'>Email cannot be empty</p> : null      
             }
        </div>
        
        <div  className='Row-item'>
        <label htmlFor="password">
           <input  style={{borderColor: errors.password ? 'red' : 'gray'}}  {...register('password', {
            required: true
           })}  name='password' id='password' placeholder="Password" type="password" />
                  {
          errors.password && errors.password.type === 'required' ? <img src={errorSvgIcon} alt='error-icon' className='error-sms4-img'/> : null  
         }
         </label>
         {
            errors.password && errors.password.type === 'required' ? <p className='error-sms4-txt'>Email cannot be empty</p> : null      
             }
        </div>


         <button id='submit-btn' type="submit">Submit form</button>
      </form>
      </div>
      
    )
}