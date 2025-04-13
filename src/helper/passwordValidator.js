const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).{8,}$/;


function validatePassword(string) {
    if(string.length < 8){
        return false;
    }
    if(!regex.test(string)){
        return false;
    }
    return true
  }

  export default validatePassword;
  
  
  