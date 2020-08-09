export function getFormBody(params){
    let formBody =[];

    for(property in params){
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(params[property]);
        formBody(encodedKey + '=' + encodedValue);
    }

    return formBody.join('&');
}