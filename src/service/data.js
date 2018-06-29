const formConfig = {
    id: "frmRegistration",
    name: "Registration",
    title: "Register Employee",
    className: "",
    action: "",
    method: "",
    submitFunc: "",
    components : [
      {
        id:"firstName", 
        name:"firstName", 
        label:"First Name", 
        key:"firstName",
        type:"input-text",
        value: "", 
        placeholder:"First Name"
      },
      {
        id:"lastName", 
        name:"lastName", 
        label:"Last Name", 
        key:"lastName",
        type:"input-text",
        value: "", 
        placeholder:"Last Name"
      },
      {
        id:"address", 
        name:"address", 
        label:"Address", 
        key:"address",
        value: "", 
        props:{rows: 5}, 
        type:"input-textarea"
      }
    ]
  }

  export default formConfig;