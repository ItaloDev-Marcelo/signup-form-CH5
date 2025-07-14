import { useForm } from "react-hook-form";
import Input from '../components/Input'
import Service from '../components/Services-sms/index'

export default function Form(){

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const onFormSubmit = () => reset();
   
    return (
      <div id='container'>
      <div id='row-item'>
       <p id='sub--title'> <strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
      </div>
      <form id='form--container' onSubmit={handleSubmit(onFormSubmit)}>
         
         <Input errors={errors} register={register} errorPlaceholder='First Name' errorDefault=''
         errorSms='First Name cannot be empty' name='firstname' id='firstname' inputType='text' />
   
         <Input errors={errors} register={register} errorPlaceholder='Last Name' errorDefault=''
         errorSms='Last Name cannot be empty' name='lastname' id='lastname' inputType='text'/>
 

         <Input errors={errors} register={register} errorPlaceholder='Email' errorDefault='SomeEmail@gmail.com'
         errorSms='Email cannot be empty' name='email' id='email' inputType='email' />
        
        <Input errors={errors} register={register} errorPlaceholder='Password' errorDefault=''
         errorSms='Password cannot be empty' name='password' id='password' inputType='password' />

         <button id='submit-btn' type="submit">claim your free trial</button>

         <Service/>
         
      </form>
      </div>
      
    )
}