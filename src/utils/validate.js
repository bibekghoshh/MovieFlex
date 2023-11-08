const validate=(email,password)=>{
    const isEmailVaild=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordVaild=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailVaild) return "Enter a vaild Email";
    if(!isPasswordVaild) return "Enter a vaild password";

    return null;
}

export default validate;