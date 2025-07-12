import errorSvgIcon from '../assets/images/icon-error.svg';

const Input = ({errors,register,errorPlaceholder,errorSms,name,id,inputType}) => {
  return (
     <div className='Row-item'>
             <label htmlFor={id}>
               <input className={errors[name] == 'email' ?'placeholder-red' : ''}  style={{borderColor: errors[name]? 'red' : 'gray'}}  {...register(name, {
                required: true
               })} id={id}
                placeholder={errors[name] === 'email' ?  'email@exemplo/com' : errors[name] 
                   ?  '' : errorPlaceholder} type={inputType} />
               {
              errors[name] && errors[name].type === 'required' ? <img src={errorSvgIcon} alt='error-icon' 
              className='error-sms1-img' /> : null  
             }
             </label>
             {
                errors[name] && errors[name].type === 'required' ? <p className='error-sms1-txt'>{errorSms}</p> : null
             }
             </div>
  )
}

export default Input