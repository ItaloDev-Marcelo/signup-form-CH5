import errorSvgIcon from './icon/icon-error.svg';
import { useForm } from "react-hook-form";



export default function UseFormHook(){

    const {register, handleSubmit, formState: {errors}, reset} = useForm()


    function onFormSubmit(formData) {
        // this formData if you want to check  the data
        //console.log(formData)
        reset()
        
    }
    return (
      <div id='container'>
      <div id='row-item'>
       <p id='sub--title'> <strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
      </div>
      <form id='form--container' onSubmit={handleSubmit(onFormSubmit)}>
         <div className='Row-item'>
         <label htmlFor="firstname">
           <input style={{borderColor: errors.firstName ? 'red' : 'gray'}}  {...register('firstName', {
            required: true
           })} name='firstName' id='firstname' placeholder={errors.firstName ?  '' : 'First Name'} type="text" />
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
           })}  name='lastName' id='lastname' placeholder={errors.lastName ? '' : 'Last Name'} type="text" />
            {
          errors.lastName && errors.lastName.type === 'required' ? <img src={errorSvgIcon} alt='error-icon' className='error-sms2-img'/> : null  
         }
         </label>
         {
            errors.lastName && errors.lastName.type === 'required' ? <p className='error-sms2-txt'>Last Name cannot be empty</p> : null
         }
         </div>
 
        <div  className='Row-item'>
        <label htmlFor="email">
           <input className={ errors.email ? 'placeholder-red' : ''} style={{borderColor: errors.email ? 'red' : 'gray'}}  {...register('email', {
            required: true
           })}  name='email' id='email' placeholder={errors.email ?   'email@exemplo/com' : 'Email' } type="email" />
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
           })}  name='password' id='password' placeholder={errors.password ? '' : 'Password' } type="password" />
                  {
          errors.password && errors.password.type === 'required' ? <img src={errorSvgIcon} alt='error-icon' className='error-sms4-img'/> : null  
         }
         </label>
         {
            errors.password && errors.password.type === 'required' ? <p className='error-sms4-txt'>Password cannot be empty</p> : null      
             }
        </div>


         <button id='submit-btn' type="submit">claim your free trial</button>

       <div id='Services'>
        <p id='final-txt'>By clicking the button, you are agreeing to our <strong className='red-txt'>Terms and Services</strong> </p>
       </div>
         
      </form>
      </div>
      
    )
}