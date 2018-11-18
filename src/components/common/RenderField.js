import React from 'react';

const RenderField = (field) => {
    const {meta: {touched, error}} = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`;
    return(
        <div className={className}>
            <label>{field.label}</label>
            <input
            className = "form-control"
            placeholder = {field.placeholder}
            type = {field.type}
            {...field.input}
            />
            <div className="text-help">
                { touched ? error : '' }
            </div>
        </div>
    );
}

export default RenderField;