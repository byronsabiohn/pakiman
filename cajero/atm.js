class Billete
{
   constructor(v, c) 
   {
       this.valor = v;
       this.cantidad = c;
   }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = pharseInt(t.value);

    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else 
            {
                paleles = div;
            }
            entregado.push( new Billete(bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
        }
        if (dinero >0)
        {
            console.log("Soy un cajero que esta quebrado hay poco dinero"); 
        }
        
    }
    
    console.log(entregado);
}

var caja = [];
var entregado = [];
caja.push( new Billete(500, 10) );
caja.push( new Billete(200, 20) );
caja.push( new Billete(100, 30) );

var dinero = 210;
var div = 0;
var papeles = 0;

var b = document.getElementById("Extraer");
b.addEventListener("click", entregarDinero);
