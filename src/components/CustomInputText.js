import React from 'react';

const CustomInputText = (props) => {
  const { component } = props;
  let properties = props.component || {};
  
  return (
    <div className="col-3">
      <div className="form-group row">
        <label htmlFor={component.id}>{component.label}</label>
        <input 
            type="text" 
            className="my-form-control" 
            name={component.name} 
            id={component.id} 
            value={component.value}
            placeholder={component.placeholder} 
            {...properties} />
      </div>
    </div>
  );
}

export default CustomInputText;
