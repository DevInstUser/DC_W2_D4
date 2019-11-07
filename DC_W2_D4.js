var array = ["Hello", "World", "in", "a", "frame"];
var array_test1 = ["Hello", "World", "in", "a", "frame","leeeeeave","meeeeee","alooooooone"];


function iFrame(arr)
{
var max = arr[0].length;
var arr_size = arr.length;
for(var i = 0; i < arr_size+1; i++) 

   {
      if (arr[i]== undefined) {break;}
      var test_max = arr[i].length
      if(test_max > max)
      
      {
         max = arr[i].length;
      }
       
   }

var stars = [];
for (i=1;i<max+5;i++)
{
stars.push("*");
}
var starStr = stars.join("");
console.log(starStr);

var space = " ";
//var diff = 0;
for (k =0; k < arr.length+1; k++)
 {
 	if (arr[k]== undefined) {break;};
 	if (parseInt(max-arr[k].length)!==0)
 {console.log("* "+ arr[k] + space.repeat(max-arr[k].length+1) + "*");
 
 }
 else {console.log("* "+ arr[k] + " *")}
 }

var stars = [];
for (i=1;i<max+5;i++)
{
stars.push("*");
}

var starStr = stars.join("");
console.log(starStr);
}

iFrame(array);