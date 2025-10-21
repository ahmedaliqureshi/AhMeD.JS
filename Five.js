// there are maninly 3 types of the scope 
/*1 block scope  */
/*2 functional scope 
  3  s*/

  /*
  block scope                  VAR     LET     CONST      
  inside block                 ✅      ✅       ✅
  outside of block             ✅      ❎       ❎  
  */

{
    const a =10; 
    console.log(a);
}
