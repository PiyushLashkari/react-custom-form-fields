import React from 'react';

const CustomInputTextArea = (props) => {
  const { component } = props;
  let properties = props.component || {};
  return (
    <div className="form-group row" key={component.key}>
      <label htmlFor={component.id} className="col-sm-1-12 col-form-label">{component.label}</label>
      <div className="col-sm-1-12">
        <textarea 
          className="form-control" 
          name={component.name} 
          id={component.id}
          value={component.value}
          {...properties} />
      </div>
    </div>
  );
}

export default CustomInputTextArea;
