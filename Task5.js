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
console.log(monthlySavings([1000 , 2000 , 3400] , 10000));
