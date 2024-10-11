export const isValidSignInCredentials = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

    if(!isEmailValid) {
        return "Email is not valid";
    }

    if(!isPasswordValid) {
        return "Password is not valid";
    }

    return null;
}