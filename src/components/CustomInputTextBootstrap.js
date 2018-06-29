import React from 'react';

const CustomInputTextBootstrap = (props) => {
  const { component } = props;
  let properties = props.component || {};
  
  return (
    <div className="col-3">
      <div className="form-group row">
        <label htmlFor={component.id}>{component.label}</label>
        <input 
            type="text" 
            className="form-control" 
            name={component.name} 
            id={component.id} 
            value={component.value}
            placeholder={component.placeholder} 
            {...properties} />
      </div>
    </div>
  );
}

export default CustomInputTextBootstrap;
