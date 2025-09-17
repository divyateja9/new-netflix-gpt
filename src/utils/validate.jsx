export const validateData = (email,password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   const isPasswordValid = /^.{6,}$/.test(password);
   if(!isEmailValid) return "Email id is not valid";
   if(!isPasswordValid) return "Password is not valid";
}
