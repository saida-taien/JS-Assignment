function password (object)
{
    const lengthBirthYear = object.birthYear.toString();
    if(typeof object !== "object")
    {
        return "Invalid Input";
    }
    else if(!object.name || !object.birthYear || !object.siteName)
    {
        return "Invalid Input";
    }
    else if(Object.keys(object).length !== 3)
    {
        return "Invalid";
    }
    else if(lengthBirthYear.length !== 4)
    {
        return "invalid";
    }
    else
    {
        let upperLetter = object.siteName.charAt(0).toUpperCase()+object.siteName.slice(1);
        return `${upperLetter}#${object.name}@${object.birthYear}`;
    }
    
}
console.log(password({name : 'rahat' , birthYear : 2002 , siteName : 'facebook' }));