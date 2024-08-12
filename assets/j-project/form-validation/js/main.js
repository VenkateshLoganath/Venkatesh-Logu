const formInput = document.querySelector('.form');
const InputUser = document.querySelector('.firstname');
const InputLast = document.querySelector('.lastname');
const InputMail = document.querySelector('.Email');
const Password = document.querySelector('.password');
const confirmPassword = document.querySelector('.cpassword');
const subBtn = document.querySelector('.Sign-Up')

const eyeIcon = document.querySelector('.eye-icon i');
const eyeIcons = document.querySelector('.eye-icons i');



 

formInput.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


const setError =(element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText = message;

    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}
const setSuccess =element=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText =  '';

    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}
 

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

 


const validateInputs = () => {
    const InutUserVal =   InputUser.value.trim();
    const InputLastVal =   InputLast.value.trim();
    const InputMailVal =   InputMail.value.trim();
    const PasswordVal =   Password.value.trim();
    const confirmPasswordVal =  confirmPassword.value.trim();

   

    if(InutUserVal === '') {
        setError(InputUser,'please enter UserName')
    }else{
        setSuccess(InputUser)
    }
    if(InputLastVal === ''){
        setError(InputLast,'please enter LastName')
    }else{
        setSuccess(InputLast)
    }

    if(InputMailVal === ''){
        setError(InputMail,'please enter EMail')
    }else if (!isValidEmail(InputMailVal)){
        setError(InputMail,'please enter valid EMail')
    }else{
        setSuccess(InputMail)
    }

    if(PasswordVal === ''){
        setError(Password,'please enter Password    ')
    }else if (PasswordVal.length <= 8 ){
        setError(Password,'Password must be 8 character')
    }else{
         setSuccess(Password)
    }
    
    if(confirmPasswordVal === ''){
        setError(confirmPassword,'Confirm Password')
    }else if (confirmPasswordVal !== PasswordVal ){
        setError(confirmPassword,'Password doesnt match')
    }else{
        setSuccess(confirmPassword)
    }
 


};



eyeIcon.addEventListener('click',(e)=>{
    Password.type = Password.type === 'password' ? 'text' : 'password';
    
    
    eyeIcon.className = `fa-regular fa-eye${Password.type === 'password' ? '' : '-slash'}`;
    
})

eyeIcons.addEventListener('click',(e)=>{
    confirmPassword.type = confirmPassword.type === 'password' ? 'text' : 'password';
    eyeIcons.className = `fa-regular fa-eye${confirmPassword.type === 'password' ? '' : '-slash'}`;
})
 

   
   