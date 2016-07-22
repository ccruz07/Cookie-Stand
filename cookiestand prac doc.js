//Class 7-DOM Manipulation methods & properties
//STORE #1
    var salmonCookies = {
  location: 'Pioneer Square',
  minCustomer: 17,
  maxCustomer: 80,
  avgCookieSale: 5.2,
  numberOfCookiesPerHour:[],
  totalCookies: 0,
  calculateCookies:function(){
    var total = 0;
    for(var i=0; i<8; i++){
      var number = Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
      this.numberOfCookiesPerHour.push(number);
      total += number;

      console.log(this.numberOfCookiesPerHour);
    }
    this.totalCookies = total;
    return total;
  },

  getCookieOutput: function(){
    var time =['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    var row = document.createElement('ul');
    for (i=0; i<this.numberOfCookiesPerHour.length; i++)
    {
      var cell = document.createElement('li');
      var data = document.createTextNode(time[i] + ' ' + this.numberOfCookiesPerHour[i]);
      cell.appendChild(data);
      row.appendChild(cell);
      }
      var data = document.createElement('li');
      var text = document.createTextNode('Total: ' + this.totalCookies);
      data.appendChild(text);
      row.appendChild(data);
      return row;
  },
}

 salmonCookies.calculateCookies();
function createTable(){
var table = document.getElementById('storeList');
var data = document.createElement('h2');
var text = document.createTextNode(salmonCookies.location);
data.appendChild(text);
table.appendChild(data);
var cookieData = salmonCookies.getCookieOutput();
table.appendChild(cookieData);
}
createTable();


//STORE #2
var salmonCookies1 = {
  location: 'Portland Airport',
  minCustomer: 6,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  numberOfCookiesPerHour:[],
  totalCookies: 0,
  //FUNCTION #1
  calculateCookies:function(){
    var total = 0;
    for(var i=0; i<8; i++){
      var number = Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
      this.numberOfCookiesPerHour.push(number);
      total += number;

      console.log(this.numberOfCookiesPerHour);
    }
    this.totalCookies = total
    return total;
  },
  //Store 2 -FUNCTION #2
  getCookieOutput: function() {
    var time =['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
    var row =document.createElement('ul');
    for(i=0; i<this.numberOfCookiesPerHour.length; i++)
  {
    var cell = document.createElement('li');
    var data = document.createTextNode(time[i] + ' ' +this.numberOfCookiesPerHour[i]);
    cell.appendChild(data);
    row.appendChild(cell);
}

    var data = document.createElement('li');
    var text = document.createTextNode('Total:' + this.totalCookies);
    data.appendChild(text);
    row.appendChild(data);

    return row;
  },

}
salmonCookies1.calculateCookies();

//STORE 2- PORTLAND AIRPORT-FUNCTION #3
function createTable2(){
  var table = document.getElementById('storeList2');
  var data = document.createElement('h2');
  var text = document.createTextNode(salmonCookies1.location);
  data.appendChild(text);
  table.appendChild(data);
  var cookieData = salmonCookies1.getCookieOutput();
  table.appendChild(cookieData);
}
createTable2();

//STORE #3

var salmonCookies2 = {
  location: 'Washington Square',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 1.9,
  numberOfCookiesPerHour:[],
  totalCookies: 0,
  //FUNCTION #1
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

  //STORE 3- FUNCTION #2
  getCookieOutput: function(){
    var time =['10am', '11am', '12pm','1pm','2pm', '3pm', '4pm', '5pm'];
    var row = document.createElement('ul');
    for(i=0; i<this.numberOfCookiesPerHour.length;i++)
  {
    var cell = document.createElement('li');
    var data = document.createTextNode(time[i] + ' ' +this.numberOfCookiesPerHour[i]);
    cell.appendChild(data);
    row.appendChild(cell);
  }

    var data = document.createElement('li');
    var text = document.createTextNode('Total:' +this.totalCookies);
    data.appendChild(text);
    row.appendChild(data);

    return row;
  }

}
salmonCookies2.calculateCookies();
//STORE 3 - FUNCTION 3
function createTable3(){

  var table = document.getElementById('storeList3');
  var data = document.createElement('h2');
  var text = document.createTextNode(salmonCookies2.location);
  data.appendChild(text);
  table.appendChild(data);
  var cookieData = salmonCookies2.getCookieOutput();
  table.appendChild(cookieData);

}
createTable3();

//STORE #4
var salmonCookies3 = {
  location: 'Sellwood',
  minCustomer: 20,
  maxCustomer: 48,
  avgCookieSale: 3.3,
  numberOfCookiesPerHour:[],
  totalCookies: 0,
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
