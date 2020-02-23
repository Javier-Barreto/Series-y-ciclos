let sen=1, x=2, serie=3, numero=3, multi=-1;

sen=x;
for(let i=0;i<serie;i++)
{
    sen+=(SerieCoseno(x,numero)*multi);
    multi*=-1;
    numero+=2;
}

console.log("El resultado de la serie de seno es: " + sen)
function SerieCoseno(x,numero)
{
    var e=0, fac=1;

    e=Math.pow(x,numero)

    for(let i=1;i<=numero;i++)
    {
        fac*=i;
    }

    return (e/fac);
}