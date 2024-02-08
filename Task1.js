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
console.log(calculateMoney('ten'));