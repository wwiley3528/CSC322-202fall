function largest(f1)
{
var a,b,c;

// accepting three values from user

a=parseInt(prompt("Enter value of a : "));
b=parseInt(prompt("Enter value of b : "));
c=parseInt(prompt("Enter value of c : "));

//comapring 3 values to get largest number

if(a>b && a>c)
{
//document.write("a is largest number among three & has value "+a);

document.getElementById("max").innerHTML="a is the largest number among three & has value "+a;
}
else if(b>a && b>c)
{
//document.write("b is largest number among three & has value "+b);

document.getElementById("max").innerHTML="b is the largest number among three & has value "+b;
}
else
{
//document.write("c is largest number among three & has value "+c);
document.getElementById("max").innerHTML="c is the largest number among three & has value "+c;
}
}