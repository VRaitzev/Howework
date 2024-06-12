function genDiff(obj1, obj2)
{
        let result = {};
        Object.keys(obj1).map((key) =>
            {
                    if(!obj2.hasOwnProperty(key))
                    {
                        result[key] = "deleted";
                    }
                    else
                    {
                        if(obj1[key] === obj2[key])
                        {
                             result[key] = "unchanged";
                        }
                        else
                        {
                            result[key] = "changed";
                        }
                    }
            })
     Object.keys(obj2).map((key) =>
         {
             if(!obj1.hasOwnProperty(key))
             {
                    result[key]="added";
             }
         })
    return result;
};

console.log(genDiff(
  { one: "eon", two: "two", four: true },
  { two: "own", zero: 4, four: true }
))


