
import { required, numericality, format, length, email, confirmation } from 'redux-form-validators';

const validations = {
    //validating registration form
    username: [
        required(),
        length({ min: 3 }),
        format({ with: /^[A-Za-z0-9]+$/i, message: 'Letters and digits only' }),
    ],
    email: [
        required(),
        email(),
    ],
    password: [
        required(),
        length({ min: 6 }),
    ],
    repeat_password: [
        required(),
        confirmation({field: 'password', fieldLabel: 'Password'})
    ],

    //validating lists add and update forms
    listname: [
        required(),
        length({ min: 1 }),
        format({ with: /^[A-Za-z0-9]+$/i, message: 'Letters and digits only' })
    ],

    //validating items add and update forms
    itemname: [
        required(),
        length({ min: 3 }),
        format({ with: /^[A-Za-z0-9]+$/i, message: 'Letters and digits only' })
    ],
    quantity: [numericality({allowBlank: true, '>': 0})],
    units: [ format({ without: /^[0-9]+$/i, message: 'Numbers not allowed' })],
    price: [ numericality({allowBlank: true, '>': 0})],
    currency: [format({ without: /^[0-9]+$/i, message: 'Numbers are not currency characters' })]
}

//Display errors on the webpage
const validate = (values) => {
    const errors = {};
    for (let field in validations){
        let value = values[field]
        errors[field] = validations[field].map(validateField => {
            return validateField(value, values)
        }).find(x => x)
    }
    return errors
}
export default validate;