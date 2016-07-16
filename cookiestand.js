/*var psCookieStand = {
name: 'pioneer Square',
minCustomer: 17,
maxCustomer: 88,
aveCookieSale: 5.2
function cookieSales() {
  //INSERT MATH OPERATION HERE//
  document.getElementsById('cookieSales').innerHTML= Math.random ();
  console.log ("min,max");
}
}*/


var salmonCookies = {
  location: 'pioneer square',
  minCustomer: 17,
  maxCustomer: 80,
  avgCookieSale: 5.2,
  numberOfCookiesPerHour:[],
  calculateCookies:function(){
    var total = 0;
    for(var i=0; i<8; i++){
      var number = Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
      this.numberOfCookiesPerHour.push(number);
      total += number;

      console.log(this.numberOfCookiesPerHour);
    }
    return total;
  },
  random: function(){
    var total = this.calculateCookies();
    var time =['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    for (var i=0; i<8; i++){
      document.getElementById(i).innerHTML = time[i] + " " + this.numberOfCookiesPerHour[i];

    }
    document.getElementById("total").innerHTML = "total: " + total;

  /*document.getElementById("0").innerHTML = "10am:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("1").innerHTML = "11am:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("2").innerHTML = "12pm:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("3").innerHTML = "1pm:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("4").innerHTML = "2pm:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("5").innerHTML = "3pm:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("6").innerHTML = "4pm:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("7").innerHTML = "5pm:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
*/
}

 }
 salmonCookies.random();


 /*var salmonCookies1 = {
   location: 'Portland Airport',
   minCustomer: 6,
   maxCustomer: 24,
   avgCookieSale: 1.2,
   //arr:[customerPerHour]//
   //total 0//
   random: function(){
   document.getElementById("pa0").innerHTML = "10am:" + " " + Math.floor(Math.random()*(salmonCookies1.maxCustomer-salmonCookies1.minCustomer+1) + salmonCookies1.minCustomer);
   document.getElementById("pa1").innerHTML = "11am:" + " " + Math.floor(Math.random()*(salmonCookies1.maxCustomer-salmonCookies1.minCustomer+1) + salmonCookies1.minCustomer);
   document.getElementById("pa2").innerHTML = "12pm:" + " " + Math.floor(Math.random()*(salmonCookies1.maxCustomer-salmonCookies1.minCustomer+1) + salmonCookies1.minCustomer);
   document.getElementById("pa3").innerHTML = "1pm:" + " " + Math.floor(Math.random()*(salmonCookies1.maxCustomer-salmonCookies1.minCustomer+1) + salmonCookies1.minCustomer);
   document.getElementById("pa4").innerHTML = "2pm:" + " " + Math.floor(Math.random()*(salmonCookies1.maxCustomer-salmonCookies1.minCustomer+1) + salmonCookies1.minCustomer);
   document.getElementById("pa5").innerHTML = "3pm:" + " " + Math.floor(Math.random()*(salmonCookies1.maxCustomer-salmonCookies1.minCustomer+1) + salmonCookies1.minCustomer);
   document.getElementById("pa6").innerHTML = "4pm:" + " " + Math.floor(Math.random()*(salmonCookies1.maxCustomer-salmonCookies1.minCustomer+1) + salmonCookies1.minCustomer);
   document.getElementById("pa7").innerHTML = "5pm:" + " " + Math.floor(Math.random()*(salmonCookies1.maxCustomer-salmonCookies1.minCustomer+1) + salmonCookies1.minCustomer);
   }
  }


var salmonCookies2 = {
  location: ' Washington Square',
  minCustomer: 6,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  //arr:[customerPerHour]//
  //total 0//
  random: function(){
  document.getElementById("ws0").innerHTML = "10am:" + " " + Math.floor(Math.random()*(salmonCookies2.maxCustomer-salmonCookies2.minCustomer+1) + salmonCookies2.minCustomer);
  document.getElementById("ws1").innerHTML = "11am:" + " " + Math.floor(Math.random()*(salmonCookies2.maxCustomer-salmonCookies2.minCustomer+1) + salmonCookies2.minCustomer);
  document.getElementById("ws2").innerHTML = "12pm:" + " " + Math.floor(Math.random()*(salmonCookies2.maxCustomer-salmonCookies2.minCustomer+1) + salmonCookies2.minCustomer);
  document.getElementById("ws3").innerHTML = "1pm:" + " " + Math.floor(Math.random()*(salmonCookies2.maxCustomer-salmonCookies2.minCustomer+1) + salmonCookies2.minCustomer);
  document.getElementById("ws4").innerHTML = "2pm:" + " " + Math.floor(Math.random()*(salmonCookies2.maxCustomer-salmonCookies2.minCustomer+1) + salmonCookies2.minCustomer);
  document.getElementById("ws5").innerHTML = "3pm:" + " " + Math.floor(Math.random()*(salmonCookies2.maxCustomer-salmonCookies2.minCustomer+1) + salmonCookies2.minCustomer);
  document.getElementById("ws6").innerHTML = "4pm:" + " " + Math.floor(Math.random()*(salmonCookies2.maxCustomer-salmonCookies2.minCustomer+1) + salmonCookies2.minCustomer);
  document.getElementById("ws7").innerHTML = "5pm:" + " " + Math.floor(Math.random()*(salmonCookies2.maxCustomer-salmonCookies2.minCustomer+1) + salmonCookies2.minCustomer);
  }
 }
 var salmonCookies3 = {
   location: ' Sellwood',
   minCustomer: 20,
   maxCustomer: 48,
   avgCookieSale: 3.3,
   //arr:[customerPerHour]//
   //total 0//
   random: function(){
   document.getElementById("s0").innerHTML = "10am:" + " " + Math.floor(Math.random()*(salmonCookies3.maxCustomer-salmonCookies3.minCustomer+1) + salmonCookies3.minCustomer);
   document.getElementById("s1").innerHTML = "11am:" + " " + Math.floor(Math.random()*(salmonCookies3.maxCustomer-salmonCookies3.minCustomer+1) + salmonCookies3.minCustomer);
   document.getElementById("s2").innerHTML = "12pm:" + " " + Math.floor(Math.random()*(salmonCookies3.maxCustomer-salmonCookies3.minCustomer+1) + salmonCookies3.minCustomer);
   document.getElementById("s3").innerHTML = "1pm:" + " " + Math.floor(Math.random()*(salmonCookies3.maxCustomer-salmonCookies3.minCustomer+1) + salmonCookies3.minCustomer);
   document.getElementById("s4").innerHTML = "2pm:" + " " + Math.floor(Math.random()*(salmonCookies3.maxCustomer-salmonCookies3.minCustomer+1) + salmonCookies3.minCustomer);
   document.getElementById("s5").innerHTML = "3pm:" + " " + Math.floor(Math.random()*(salmonCookies3.maxCustomer-salmonCookies3.minCustomer+1) + salmonCookies3.minCustomer);
   document.getElementById("s6").innerHTML = "4pm:" + " " + Math.floor(Math.random()*(salmonCookies3.maxCustomer-salmonCookies3.minCustomer+1) + salmonCookies3.minCustomer);
   document.getElementById("s7").innerHTML = "5pm:" + " " + Math.floor(Math.random()*(salmonCookies3.maxCustomer-salmonCookies3.minCustomer+1) + salmonCookies3.minCustomer);
   }
  }
  var salmonCookies4 = {
    location: ' Pearl District',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookieSale: 2.6,
    //arr:[customerPerHour]//
    //total 0//
    random: function(){
    document.getElementById("pd0").innerHTML = "10am:" + " " + Math.floor(Math.random()*(salmonCookies4.maxCustomer-salmonCookies4.minCustomer+1) + salmonCookies4.minCustomer);
    document.getElementById("pd1").innerHTML = "11am:" + " " + Math.floor(Math.random()*(salmonCookies4.maxCustomer-salmonCookies4.minCustomer+1) + salmonCookies4.minCustomer);
    document.getElementById("pd2").innerHTML = "12pm:" + " " + Math.floor(Math.random()*(salmonCookies4.maxCustomer-salmonCookies4.minCustomer+1) + salmonCookies4.minCustomer);
    document.getElementById("pd3").innerHTML = "1pm:" + " " + Math.floor(Math.random()*(salmonCookies4.maxCustomer-salmonCookies4.minCustomer+1) + salmonCookies4.minCustomer);
    document.getElementById("pd4").innerHTML = "2pm:" + " " + Math.floor(Math.random()*(salmonCookies4.maxCustomer-salmonCookies4.minCustomer+1) + salmonCookies4.minCustomer);
    document.getElementById("pd5").innerHTML = "3pm:" + " " + Math.floor(Math.random()*(salmonCookies4.maxCustomer-salmonCookies4.minCustomer+1) + salmonCookies4.minCustomer);
    document.getElementById("pd6").innerHTML = "4pm:" + " " + Math.floor(Math.random()*(salmonCookies4.maxCustomer-salmonCookies4.minCustomer+1) + salmonCookies4.minCustomer);
    document.getElementById("pd7").innerHTML = "5pm:" + " " + Math.floor(Math.random()*(salmonCookies4.maxCustomer-salmonCookies4.minCustomer+1) + salmonCookies4.minCustomer);
    }
  }*/

/* salmonCookies1.random();
 salmonCookies2.random();
 salmonCookies3.random();
 salmonCookies4.random();*/
