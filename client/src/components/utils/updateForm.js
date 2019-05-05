const validateInput = (newInput, formData) => {
    let error = [true, ''];
    if(newInput.validation.email){
        const valid = newInput.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
        const message = `${!valid ? 'Invalid Email':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.name){
        const valid = newInput.value.length >= 2;
        const message = `${!valid ? 'Min 2 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.subject){
        const valid = newInput.value.length >= 3;
        const message = `${!valid ? 'Min 3 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.message){
        const valid = newInput.value.length >= 10;
        const message = `${!valid ? 'Min 10 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.required){
        const valid = newInput.value.trim()!== '';
        const message = `${!valid ? 'This field is required':''}`;
        error = valid ? error : [valid, message];
    }
    return error;
}
export const updateInput = (element, formData) => {
    const newFormData = {...formData};
    const newInput = {...formData[element.name]};    
    newInput.value = element.event.target.value;
    if(element.blur){
        const error = validateInput(newInput, formData)
        newInput.valid = error[0];
        newInput.validationMsg = error[1];
    }
    newInput.touch = element.blur;
    newFormData[element.name] = newInput;    
    return newFormData;
}

export const generateData = (inputs) => {
    const submitData = {}
    Object.keys(inputs).forEach(input=>{
        submitData[input] = inputs[input].value
    })
    return submitData;
}

export const validateForm = (inputs) => {
    let initalValid = true
    Object.keys(inputs).forEach(input=>{
        initalValid = inputs[input].valid && initalValid;
    })
    return initalValid;
} 
