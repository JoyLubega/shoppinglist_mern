import '../../static/index.css';

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from '../common/RenderField';
import Validator from '../common/Validation';

export const AddListForm = (props) => {
    const { handleSubmit, onSubmit } = props;

    return(
        <div>
            
            <form className="AddListForm container" onSubmit={handleSubmit(onSubmit)}>
                <h2><b>Create new shopping list:</b></h2>
                <div className = "row">
                    <div className = "col-sm-10">
                        <Field
                            name = "name"
                            placeholder="Shoppinglist Name"
                            component = {RenderField}
                            
                        />
                        <Field
                            name = "description"
                            placeholder=" Shoppinglist Description"
                            component = {RenderField}
                        />
                    </div>
                    <div className = "col-sm-2">
                        <button 
                            type="submit" 
                            className="btn btn-primary">
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default reduxForm({
    validate:Validator,
    form: 'AddListForm'
})(AddListForm);