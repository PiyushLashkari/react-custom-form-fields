import React, { Component } from 'react';
import CustomInputText from './CustomInputText';
import CustomInputTextBootstrap from './CustomInputTextBootstrap';
import CustomInputTextMaterial from './CustomInputTextMaterial';
import CustomInputTextArea from './CustomInputTextArea';



class CustomForm extends Component {
  render(){
    const {
      id,
      name,
      title,
      className,
      action,
      method,
      submitFunc
    } = this.props.model;
  
    return (
      <div className="container">
        <h1>{title}</h1>
        <form id={id} name={name} action={action} method={method} className={className} onSubmit={(e) => submitFunc(e)}>
          {this.createForm()}
        </form>
      </div>
    )
  }

  createForm = () => {
    let { components } = this.props.model;
    let myFormUI = components.map((component) => {
      let type = component.type || "input-text";
      let key = component.key || "";
      if("input-text" === type){
        return (
          <div>
            <CustomInputText component={component}  key={key} />
            <CustomInputTextBootstrap component={component}  key={key} />
            <CustomInputTextMaterial component={component}  key={key} />
          </div>
        );
      }else if("input-textarea" === type){
        return (
          <CustomInputTextArea component={component}  key={key} />
        );
      }
    });

    return myFormUI;
  }
}
export default CustomForm;
