let cos=1, x=2, serie=3, numero=2, multi=-1;

for(let i=0;i<serie;i++)
{
    cos+=(SerieCoseno(x,numero)*multi);
    multi*=-1;
    numero+=2;
}

console.log("El resultado de la serie de coseno es: " + cos)
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