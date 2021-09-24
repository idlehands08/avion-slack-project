export const isValidEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email)
}

export const isEmpty = (string) => {
    return !string ? true : false;
}
