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
console.log(deleteInvalids ([1 , null , undefined , 18 , -19 , NaN , "12" , [1,2] , {ob: "lala"}]));
console.log(deleteInvalids([12 , 36 , 52]))