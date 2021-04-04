const validate = (value, type) => {
    const inputs = {
        'email': emailValidate(value),
        'username': usernameValidate(value),
        'password': passwordValidate(value),
        'rePassword': passwordValidate(value),
        'title': titleValidate(value),
        'description': descriptionValidate(value),
        'price': priceValidate(value),
        'deviceType': infoTypeValidate(value),
        'isActive': isActiveValidate(value),
    }
    return inputs
}

export default validate

const emailValidate = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

const usernameValidate = (value) => {
    // const re = /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    const re = /^([a-zA-Z0-9._\s]{3,15})/
    return re.test(String(value))   
}

const passwordValidate = (value) => {
    const re = /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    return re.test(String(value))
}

const titleValidate = (value) => {
    const re = /^([a-zA-Z0-9._\s]{4,20}$)/
    return re.test(value)
}

const descriptionValidate = (value) => {
    const re = /^([a-zA-Z0-9._\s]{10,250}$)/
    return re.test(value)
}

const priceValidate = (value) => {
    const re = /^\d{0,8}(\.\d{1,4})?$/
    return re.test(value)
}

const infoTypeValidate = (value) => {
    return (value === 'ipad' || value === 'mac' || value === 'iphone' || value === 'accessory')
}

const isActiveValidate = (value) => {
    return (value === 'true' || value === 'false')
}

