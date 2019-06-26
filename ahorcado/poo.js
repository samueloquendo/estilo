var t,b,c,d,boton,q,n,z,g,text,botin,p,te,bob,dad,tec,bol,dic,siete,ocho,nueve;
var once,doce,trece,uno,dos,tres;
function entrada() 
{
// asignando valores a las cajas de texto
	t=document.getElementById("t");
	b=document.getElementById("b");
	c=document.getElementById("c");
	d=document.getElementById("binario");
	boton=document.getElementById("decimal");
	q=document.getElementById("m");
	n=document.getElementById("n");
	z=document.getElementById("z");
	g=document.getElementById("g");
	text=document.getElementById("text");
	botin=document.getElementById("botin");
	p=document.getElementById("p");
	te=document.getElementById("te");
	bob=document.getElementById("bob");
	dad=document.getElementById("dad");
	tec=document.getElementById("tec");
	bol=document.getElementById("bol");
	dic=document.getElementById("dic");
	siete=document.getElementById("siete");
	ocho=document.getElementById("ocho");
	nueve=document.getElementById("nueve");
	once=document.getElementById("once");
	doce=document.getElementById("doce");
	trece=document.getElementById("trece");
	uno=document.getElementById("uno");
	dos=document.getElementById("dos");
	tres=document.getElementById("tres");


	
// asignando los valores a la función click
	b.addEventListener("click",sumar);
	boton.addEventListener("click",decimal);
	z.addEventListener("click",hexadecimal);
	botin.addEventListener("click",calculo);
	bob.addEventListener("click",hecimal);
	bol.addEventListener("click",convert);
	ocho.addEventListener("click",octal);
	doce.addEventListener("click",decimalOctal);
	dos.addEventListener("click",traducir);

}
// binario a decimal
function sumar()
{
	var sum=Number(t.value);
	var ecuacion=parseInt(sum,2);
	c.innerHTML="<strong>"+ecuacion+"</strong>";
}
// decimal a binario
function decimal()
{
	var convertir=Number(d.value);
	var resultado=convertir.toString(2);
	q.innerHTML="<strong>"+resultado+"</strong>";
}
function hexadecimal()
{
	var hexa=Number(n.value);
	var deci=parseInt(hexa,2).toString(16);
	g.innerHTML="<big>"+deci+" "+"</big>";
}
function calculo()
{
	var cal=Number(text.value);
	var l=parseInt(cal,16).toString(2);
	p.innerHTML=l;
}
function hecimal()
{
	var conversion=Number(te.value);//16
	var calcular=parseInt(conversion,10).toString(16);
	dad.innerHTML=calcular;
}
function convert()
{
	var arreg=Number(tec.value);
	var numero=parseInt(arreg,16).toString(10);
	dic.innerHTML=numero;
}
function octal()
{
	var oc=Number(siete.value);
	var oct=parseInt(oc,10).toString(8);
	nueve.innerHTML=oct;
}
function decimalOctal()
{
	var sal=Number(once.value);
	var sali=parseInt(sal,8).toString(10);
	trece.innerHTML=sali;
}
// traducir texto a binario
function traducir()
{
	var tra=Number(uno.value);
	tres.innerHTML=tra;
}
















