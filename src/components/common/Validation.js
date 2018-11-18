
const Validator = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Shoppinglist name is required';
      } else if (values.name.length < 3) {
        errors.name = "Shoppinglist name can't be that short!";
      }
      
    return errors
}
export default Validator;