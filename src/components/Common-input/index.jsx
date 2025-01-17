



export default function SignUpInput({id,name,type,value,onChange, inputTxt}) {
 
    return (
          <label htmlFor={id} >
         
          <input name={name}
           id={id} 
           type={type} 
           value={value} 
           onChange={onChange}
           placeholder={inputTxt}
           />
          </label>
    )
}