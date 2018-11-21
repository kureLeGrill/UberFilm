function sendf2() {
    var n=document.forms['EMail']['name'].value;
    var sn=document.forms['EMail']['sname'].value;
	var t=document.forms['EMail']['tel'].value;
	var em=document.forms['EMail']['e-mail'].value;
    if ((n==null || n=="") && 
		(sn==null || sn=="")&& 
		(t==null || t=="") && 
		(em==null || em=="")){
		alert('You didn\'t fully fill the form');
		return false;
    }
	var x=document.forms["EMail"]["e-mail"].value;
	var atpos=x.indexOf('@'); 
	var dotpos=x.indexOf('.');
	if (atpos < 1 || dotpos<atpos+2 || dotpos+2>x.length) {
		alert('Invalid E-mail adress');
		return false;
	} else {
		alert('Booking is successful');
	}
} 

function myF(Sum) 
{
/*TICKET PRICE*/    
	
 if (document.getElementById('kin').checked||document.getElementById('kin1').checked){
    time = 120;timeChild = 100; timeStud = 110;timeSen = 105;}
 if (document.getElementById('kin2').checked||document.getElementById('kin3').checked){
    time = 140;timeChild = 120; timeStud = 120;timeSen = 115;}
 if (document.getElementById('kin4').checked||document.getElementById('kin5').checked){
    time = 120;timeChild = 100; timeStud = 110;timeSen = 105;}
/*TIME*/	
if (document.getElementById('kin').checked) {
    timekin = Sum.timek.value;} 
 if (document.getElementById('kin1').checked) {
    timekin = Sum.timek1.value;}
 if (document.getElementById('kin2').checked) {
    timekin = Sum.timek2.value;}
 if (document.getElementById('kin3').checked) {
    timekin = Sum.timek3.value;}
 if (document.getElementById('kin4').checked) {
    timekin = Sum.timek4.value;}
 if (document.getElementById('kin5').checked) {
    timekin = Sum.timek5.value;}

 if (document.getElementById('days').checked) {
    dayx = Sum.dayk.value;} 
 if (document.getElementById('days1').checked) {
    dayx = Sum.dayk1.value;}
 if (document.getElementById('days2').checked) {
    dayx = Sum.dayk2.value;}
 if (document.getElementById('days3').checked) {
    dayx = Sum.dayk3.value;}
 if (document.getElementById('days4').checked) {
    dayx = Sum.dayk4.value;}
 if (document.getElementById('days5').checked) {
    dayx = Sum.dayk5.value;}
 if (document.getElementById('days6').checked) {
    dayx = Sum.dayk6.value;}


 if (document.getElementById('name').checked) {
    kino=Sum.fil.value;}
 if (document.getElementById('name1').checked) {
    kino=Sum.fil1.value;}
 if (document.getElementById('name2').checked) {
    kino=Sum.fil2.value;}
 if (document.getElementById('name3').checked) {
    kino=Sum.fil3.value;}
/*RESULT*/      	  
 var x=0, m=0, n=0, y=0, d=0, l=0;
  if (document.getElementById('a').checked&&Sum.numbA.value>0) {
    x = ( Sum.numbA.value*1 ) * time; }
  if (document.getElementById('b').checked&&Sum.numbB.value>0) {
    y = ( Sum.numbB.value*1 ) * timeChild;}
  if (document.getElementById('c').checked&&Sum.numbC.value>0) {
    m = ( Sum.numbC.value*1 ) * timeStud; }
  if (document.getElementById('d').checked&&Sum.numbD.value>0) {
    n = ( Sum.numbD.value*1 ) * timeSen; }
  l = Sum.numbA.value*1+Sum.numbB.value*1+Sum.numbC.value*1+Sum.numbD.value*1;	
  if (document.getElementById('e').checked&&
     (Sum.numbA.value>0||Sum.numbD.value>0||Sum.numbC.value>0||Sum.numbD.value>0)&&
	 (Sum.numbE.value<151&&Sum.numbE.value>0)&&
	 (Sum.numbE.value<l+1)) {
    dis = 30;
	d = (Sum.numbE.value*1)*dis;}
  if (l<151)
  {  	
	  Sum.numbSWD.value = x + y + m + n + 'KC';
      Sum.numbSD.value = x + y + m + n - d + 'KC';
      Sum.kinoS.value = kino;  
      Sum.timeS.value = timekin;
      Sum.dateS.value = dayx;
  }
 if (l>151)
 {
      Sum.numbS.value = '';
      Sum.kinoS.value = '';  
      Sum.timeS.value = '';
      Sum.dateS.value = '';
 }
}
/*FILM NAME CHANGE*/	
function activate() {
    if (document.getElementById('days').checked){
        var x = document.getElementById('filk1'), y = document.getElementById('filk2'), z = document.getElementById('filk3'), a = document.getElementById('filk4');
        x.setAttribute('value','Through darkness to knowledge'), y.setAttribute('value','Film without plot'), z.setAttribute('value','One day left'), a.setAttribute('value','30 shades of JS'); 		
	}	
    if (document.getElementById('days1').checked){
        var x = document.getElementById('filk1'), y = document.getElementById('filk2'), z = document.getElementById('filk3'), a = document.getElementById('filk4');
        x.setAttribute('value','LobsterHeaded'), y.setAttribute('value','Astronaut Jim'), z.setAttribute('value','Escander'), a.setAttribute('value','Checkmate');
	}
    if (document.getElementById('days2').checked){
        var x = document.getElementById('filk1'), y = document.getElementById('filk2'), z = document.getElementById('filk3'), a = document.getElementById('filk4');
        x.setAttribute('value','Through darkness to knowledge'), y.setAttribute('value','Film without plot'), z.setAttribute('value','Dr.Hakle&Mr.Jlide'), a.setAttribute('value','30 shades of JS');
	}
    if (document.getElementById('days3').checked){
        var x = document.getElementById('filk1'), y = document.getElementById('filk2'), z = document.getElementById('filk3'), a = document.getElementById('filk4');
        x.setAttribute('value','X-cofiles:New investigation'), y.setAttribute('value','Building a movie plot 2'), z.setAttribute('value','Old engine 3'), a.setAttribute('value','Split/second');
	}
    if (document.getElementById('days4').checked){
        var x = document.getElementById('filk1'), y = document.getElementById('filk2'), z = document.getElementById('filk3'), a = document.getElementById('filk4');
        x.setAttribute('value','Through black glass'), y.setAttribute('value','Checkmate'), z.setAttribute('value','One day left'), a.setAttribute('value','30 shades of JS');
	}
    if (document.getElementById('days5').checked){
        var x = document.getElementById('filk1'), y = document.getElementById('filk2'), z = document.getElementById('filk3'), a = document.getElementById('filk4');
        x.setAttribute('value','Escander'), y.setAttribute('value','New world'), z.setAttribute('value','One day left'), a.setAttribute('value','JoyPlay');
	}
    if (document.getElementById('days6').checked){
        var x = document.getElementById('filk1'), y = document.getElementById('filk2'), z = document.getElementById('filk3'), a = document.getElementById('filk4');
        x.setAttribute('value','Through darkness to knowledge'), y.setAttribute('value','Film without plot'), z.setAttribute('value','Through black glass'), a.setAttribute('value','Escander');
	}
}
function book(a)
    {
	    if (document.getElementById('check').checked){
		      document.forms[0].form.disabled=!(a==1);
		}
	    else{
		      document.forms[0].form.disabled=!!(a==1);
		}
}		    



function sendf(a) {
	if (document.getElementById('Agr').checked){
		document.forms[0].form.disabled=!(a==1);
	}
	else {
		document.forms[0].form.disabled=!!(a==1); 
	}
}
	
function sendf2() {
    var n=document.forms['EMail']['Name'].value;
    var sn=document.forms['EMail']['SName'].value;
    var a=document.forms['EMail']['Age'].value;
	var t=document.forms['EMail']['Tel'].value;
	var em=document.forms['EMail']['Mail'].value;
	var ad=document.forms['EMail']['Address'].value;
    if ((n==null || n=="") && 
		(sn==null || sn=="") && 
	    (a==null || a=="") && 
		(t==null || t=="") && 
		(em==null || em=="") && 
		(ad==null || ad=="")){
		alert('You didn\'t fully fill the form');
		return false;
    }
	var x=document.forms["EMail"]["Mail"].value;
	var atpos=x.indexOf('@'); 
	var dotpos=x.indexOf('.');
	if (atpos < 1 || dotpos<atpos+2 || dotpos+2>x.length) {
		alert('Invalid E-mail adress');
		return false;
	} else {
		alert('Your request for VIP Card was sent');
	}
} 

function activate() {
	var img=document.getElementById('1');
	var img2=document.getElementById('2');
	var img3=document.getElementById('3');
	img.setAttribute('src','Jakil.png');
	img2.setAttribute('src','world.png');
	img3.setAttribute('src','chess.png');
}
function deactivate() {
	var img=document.getElementById('1');
	var img2=document.getElementById('2');
	var img3=document.getElementById('3');
	img.setAttribute('src','30Shades.png');
	img2.setAttribute('src','Xfilm.png');
	img3.setAttribute('src','OneDay2.png');	
}
