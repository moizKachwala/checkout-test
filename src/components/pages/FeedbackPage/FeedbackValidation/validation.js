export const EMAIL_REGEX = /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;

export const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = "Name is required"
    }

    if (!values.email) {
        errors.email = "Email is required"
    } else if(!values.email.match(EMAIL_REGEX)) {
        errors.email = "Email is invalid"
    }

    if (!values.rating) {
        errors.rating = "Rating is required"
    }

    return errors;
};