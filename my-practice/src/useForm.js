import { useState } from "react";

const useForm = (data) => {
  const [values, setValues] = useState(data.initialValues);
  const [errors, setErrors] = useState({});

  let handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    if(name === "rememberMe"){
      val = e.target.checked;
    };
    setValues({
      ...values,
      [name]: val,
    });
  }

  let handleSubmit = ()=>{
    const validResult = data.validation(values);
    if(Object.keys(validResult).length === 0){
      data.onSubmit(values);
      setErrors(validResult);
    }else{
      setErrors(validResult);
    }
  };

  return {handleChange, handleSubmit, values, errors};
}

export default useForm;