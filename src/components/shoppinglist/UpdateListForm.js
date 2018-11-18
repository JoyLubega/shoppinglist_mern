import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import RenderField from '../common/RenderField';
import validate from '../common/Validation';

export const UpdateListForm = (props) => {
    const { handleSubmit, onSubmit, initialValues } = props;
    console.log(initialValues)

    // Returns a redux form for updating shopping lists.
    return(
        <div>
            <form className="UpdateListForm container" onSubmit={handleSubmit(onSubmit)}>
                <Field
                    label = "New Name:"
                    name = "name"
                    placeholder= "Name"
                    value= {initialValues.name}
                    component = {RenderField}
                    
                />
                <Field
                    label = "New Description:"
                    name = "description"
                    placeholder= "Description"
                    component = {RenderField}
                    value={initialValues.description}
                />
                <button type="submit" className="btn btn-primary">Save</button>
                <Link className="btn btn-danger" to='/'>Cancel</Link>   
            </form>
        </div>
    )
}
export default reduxForm({
    validate,
    form: 'UpdateItemForm'
})(UpdateListForm);