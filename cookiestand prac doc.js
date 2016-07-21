

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
      var text = document.createTextNode('total: ' + this.totalCookies);
      data.appendChild(text);
      row.appendChild(data);
      return row;
  },
  random: function(){
    var total = this.calculateCookies();
    var time =['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    for (var i=0; i<8; i++){
    //  document.getElementById(i).innerHTML = time[i] + " " + this.numberOfCookiesPerHour[i];

    }
  //  document.getElementById("total").innerHTML = "total: " + total;
  }
}
 salmonCookies.random();
function createTable(){
/*var row = document.createElement('tr');
var data = document.createElement('td');
var text = document.createTextNode(salmonCookies.location);
data.appendChild(text);
row.appendChild(data);*/
var table = document.getElementById('storeList');
var data = document.createElement('h2');
var text = document.createTextNode(salmonCookies.location);
data.appendChild(text);
table.appendChild(data);
var cookieData = salmonCookies.getCookieOutput();
table.appendChild(cookieData);
}

createTable();

      /*for (var i =0; i < table.length; i++);/*


/*tableCreate.();*/
