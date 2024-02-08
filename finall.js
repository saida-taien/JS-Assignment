function calculateMoney (number)
{
    if(typeof number !== "number")
    {
        return "Invalid Input";
    }
    else if(number < 0)
    {
        return "Invalid Number";
    }
    else
    {
        const guardPayment = 500;
        const staffPayment = 8 * 50;
        const totalPayment = guardPayment + staffPayment;
        const ticketPrice = 120;
        const total = (ticketPrice * number) - totalPayment;
        return total;  
    }
    
}




function checkName (str)
{
    if(typeof str !== "string")
    {
        return "Invalid";
    }
    else
    {
        for(let i = str.length - 1 ; i > 0 ; i--)
        {
            let names = str.toLowerCase();
            if(names[i] === 'a' || names[i] === 'y' || names[i] === 'i' || names[i] === 'e' || names[i] === 'o' || names[i] === 'u' || names[i] === 'w')
            {
                return "Good Name";
            }
            else
            {
                return "Bad Name";
            }
        }
    }
}





function deleteInvalids (array)
{
    if(!Array.isArray(array))
    {
        return "Invalid Array";
    }
    else
    {
        let filteredArray = [];
        for(const arr of array)
        {
            if(typeof arr === "number" && !isNaN(arr))
            {
                filteredArray.push(arr);
            }
        }
        return filteredArray;
    }
}



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





function monthlySavings (array , number)
{
    if(!Array.isArray(array) || typeof number != "number")
    {
        return "invalid input";
    }
    else if(number <=0)
    {
        return "invalid input";
    }
    else
    {
        let sum = 0;
        let totalTax =0;
        let total = 0;
        for(const arr of array)
        {
            if(arr >= 3000)
            {
                tax = arr*20 / 100;
                totalTax += arr - tax;
            }
            if(arr <3000)
            {
                sum += arr;
            }
    
            total = totalTax + sum;
        }
        const savings = total - number ;
        if(savings >= 0)
        {
            return savings;
        }
        else
        {
            return "earn more";
        }
    }
}