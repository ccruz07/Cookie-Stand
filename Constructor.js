//CLASS 08- CONSTRUCTOR FUNCTIONS STORE #1
  var store = function (location, minCustomer, maxCustomer, avgCookieSale, totalCookies) {
  this.location = location,
  this.minCustomer = minCustomer,      //17,
  this.maxCustomer = maxCustomer,      //80,
  this.avgCookieSale = avgCookieSale,
  this.totalCookies = totalCookies,
  this.numberOfCookiesPerHour=[],  //5.2,
  this.addInfo = function() {
    var storeRow = document.createElement("tr");
    var location = document.createElement("td");
    location.innerText = this.location;
    storeRow.appendChild(location);
  },
  this.calculateCookies = function(){
    var total = 0;
    for(var i=0; i<8; i++){
      var number = Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
      this.numberOfCookiesPerHour.push(number);
      total += number;

      console.log(this.numberOfCookiesPerHour);

    this.totalCookies = total;
    return total;
    }
  },
  this.getCookieOutput = function(){
    var time =['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    var row = document.createElement('th');
    for (i=0; i<this.numberOfCookiesPerHour.length; i++)
    {
      var cell = document.createElement('tr');
      var data = document.createTextNode(time[i] + ' ' + this.numberOfCookiesPerHour[i]);
      cell.appendChild(data);
      row.appendChild(cell);
      }
      var data = document.createElement('td');
      var text = document.createTextNode('Total: ' + this.totalCookies);
      data.appendChild(text);
      row.appendChild(data);
      return row;
  }
}

  var pioneerSquare = new store("Pioneer Square", 17, 80, 5.2, 0);
  console.log(pioneerSquare);
