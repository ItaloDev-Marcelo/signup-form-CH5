import errorSvgIcon from '../assets/images/icon-error.svg';

// eslint-disable-next-line react/prop-types
const Input = ({errors,register,errorPlaceholder,errorSms,name,id,inputType}) => {


  return (
     <div className='Row-item'>
             <label htmlFor={id}>
               <input className={errors[name] == 'email' ?'placeholder-red' : ''} 
                style={{borderColor: errors[name]? 'red' : 'gray'}}  {...register(name, {
                required: true
               })} id={id}
                placeholder={errors[name] 
                   ? '' :  errorPlaceholder} type={inputType} />
               {
              // eslint-disable-next-line react/prop-types
              errors[name] && errors[name].type === 'required' ? <img src={errorSvgIcon} alt='error-icon' 
              className='error-sms1-img' /> : null  
             }
             </label>
             {
                // eslint-disable-next-line react/prop-types
                errors[name] && errors[name].type === 'required' ? <p className='error-sms1-txt'>{errorSms}</p> : null
             }
             </div>
  )
}

export default Input