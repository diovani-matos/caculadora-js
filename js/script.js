function insertNum(num) {
    const numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;   
   }

   function limpar() {
       document.getElementById('display').innerHTML = '';
   }

   function back() {
       const display = document.getElementById('display').innerHTML;
       document.getElementById('display').innerHTML = display.substring(0, display.length -1);
   }

   function calcular() {
       const display = document.getElementById('display').innerHTML;
       if(display) {
           document.getElementById('display').innerHTML = eval(display);
       }
       else {
           document.getElementById('display').innerHTML = "Nada..."
       }
   }