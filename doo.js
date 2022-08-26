var code="jhgsfghso";
var arr1=[0,0,0,1,0,2];
// var arr2=[0,2,0,1,0,0,0,0,2];
function doo(arr)
{
var temp1=0;
var newarr=[];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==1)
    {
        temp1=i;
        
    }
    }    
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==2)
        {
            var k=Math.abs(i-temp1);
            newarr.push(k);
        }
    }
    return Math.min(...newarr);
    

}
var l=doo(arr1);
var j=l.toString();
var m=j.concat(code);
var t=m.split('');
// or [...m]=m;=>this could also be done
for(let i=1;i<t.length;i++)
{
    if((i+1)==5)
    {
        t[i]="_";
    }
    else if(i>4)
    {
    if((i+1)%5==0)
    {
        t[i]="_";
    }
}
}
var g=t.join("");
console.log(g);
console.log("modified file to check changes in the curent history i the repository");


