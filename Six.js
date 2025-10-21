// function scope            VAR   LET    CONST 
// inside                     ✅   ✅      ✅          
// outside                    ✅   ❎      ❎


function hello()
{
    var a =10; 
}
 console.log(a)
hello()