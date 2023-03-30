  var t = confirm( 'Mobil Cihazla ve Planşetlə  daxil olmusunuz ?');
  if(t==true){
          document.body.style.display='none'

  }
    else{
    document.body.style.display='block'

  }

    function change(){
        var range= document.getElementById('myRange').value;
        document.getElementById('inp1').value=range;
    }
    function loansay(){
        var y= document.getElementById('inp1').value;
        document.getElementById('myRange').value=y;
    }
    function timesay(){
        var z= document.getElementById('timeinp').value;
        document.getElementById('myRange2').value=z
    }
   function change2(){
    var range2=document.getElementById('myRange2').value;
     document.getElementById('timeinp').value=range2
   }
   function ratesay(){
    var a=document.getElementById('rateinp').value;
    document.getElementById('myRange3').value=a;
   }
   function change3(){
    var b=document.getElementById('myRange3').value;
    document.getElementById('rateinp').value=b;
   }

    function Calc(){
         var inpmoney= Number(document.getElementById('inp1').value)
         var inptime=Number(document.getElementById('timeinp').value)
         var inppercent=Number(document.getElementById('rateinp').value)
          var afterpercent=Number(inpmoney*inppercent/100)
          var result=(inpmoney+afterpercent)/inptime;
         alert(`  Hər ay ödənəcək miqdar  :  ${result} ` )
    }

    
  










