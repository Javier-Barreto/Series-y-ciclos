let In=0, x=2, serie=3, numero=1, n=1;

for(let i=0;i<serie;i++)
{
    In+=SerieCoseno(x,numero,n);
    n++;
}

console.log("El resultado de la serie de In es: " + In)
function SerieCoseno(x,numero,n)
{
    var e=0, res=0, div=0;

    e=((x-numero)/x);
    res=Math.pow(e,n);
    div=(numero/n);
    res*=div;
    return res;
}