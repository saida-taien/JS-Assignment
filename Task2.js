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
console.log(checkName('RafEE'));