const regex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
function validateEmail(string) {
    if(!regex.test(string)){
        return false;
    }
    return true
  }

  export default validateEmail;
  