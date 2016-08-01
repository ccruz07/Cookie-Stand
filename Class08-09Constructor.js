//CLASS 08m2-09- CONSTRUCTOR FUNCTIONS  - merge wHTML09/form & 08JS-script
var store = function (location, minCustomer, maxCustomer, avgCookieSale, totalCookies) {
  this.location = location,
  this.minCustomer = minCustomer,
  this.maxCustomer = maxCustomer,
  this.avgCookieSale = avgCookieSale,
  this.totalCookies = totalCookies,
  this.numberOfCookiesPerHour=[],
  this.addInfo = function() {
    var storeRow = document.createElement("tr");
    var location = document.createElement("td");
    location.innerText = this.location;
    storeRow.appendChild(location);
  },
  this.calculateCookies = function(){
    var total = 0;
    for(var i=0; i<8; i++){
    var number = Math.floor(Math.random()*(this.maxCustomer-this.minCustomer+1) + this.minCustomer);
      this.numberOfCookiesPerHour.push(number);
      total += number;

      console.log(this.numberOfCookiesPerHour);

    this.totalCookies = total;
    }
    return total;

  },
  this.getCookieOutput = function(){

  var row = document.createElement('tr');
  var text = document.createTextNode(this.location);
     row.appendChild(text);
     this.calculateCookies();
    console.log(this.numberOfCookiesPerHour.length);

    for (i=0; i<this.numberOfCookiesPerHour.length; i++)
    {
      console.log(i);
  var cell = document.createElement('td');
  var data = document.createTextNode(this.numberOfCookiesPerHour[i]);
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
  var portlandAirport = new store("Portland Airport", 6, 24, 1.2,0);
  var washingtonSquare = new store("Washington Square", 11, 38, 1.9,0);
  var sellwood = new store("Sellwood", 20, 48, 3.3, 0);
  var pearlDistrict = new store("Pearl District", 20, 48, 3.3, 0);
    //console.log(new store);

    function createTable(){
      var time =['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];//time array does not appear with the table-IDK??
      var row = document.getElementById("time");
          cell = document.createElement("td");
          //row.appendChild(cell); //turned off to get table function to run w/store data
      for(i=0; i<time.length; i++){
      var cell = document.createElement('td');
      var data = document.createTextNode(time[i]);
            cell.appendChild(data);
            //row.appendChild(cell);//turned off to get table function to run w/store data
  }
      var table = document.getElementById("storeInfo");
      var data = document.createElement("tr");
      var cookieSales = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];
      table.appendChild(data);
      for (var i=0; i<cookieSales.length; i++){
      var cookieData = cookieSales[i].getCookieOutput();
      table.appendChild(cookieData);

      }

  }
      createTable();

//CLASS09 Task-add a new row to existing table

  //function addRow() {
document.getElementById("Phd").addEventListner("click", function(){
    var tableRef = document.getElementById("storeInfo");
    var newRow = tableRef.insertRow;
    var newCell= newRow.insertCell;
    var newText = document.createTextNode;
    new.appendChild(newText)
});
  //addRow();


  //PARKING LOT - hold code here

  /*var row = document.getElementById("storeInfo");
  var x = row.insertCell;
      x.innerHTML = "New Cell";
      console.log("addRow");
}*/ insertCell method does not work


  //cell = document.createElement("td");
  //textNode = document.createTextNode(content);
  //cell.appendChild(textNode);
  //row.appendChild(cell);
  //storeName.appendChild(row);



























        //document.getElementById("form-info").innerHTML = location;

        //create new row in DOM
        /*var row = document.createElement('tr');
        document.getElementById("location").appendChild(formToUse);
        //create data cell for new store location
        //var cell = document.createElement('td');  */
        //var text = document.createTextNode(this.location);
        //table.appendChild(data);
        /*
        var data = document.createTextNode(location);
            //cell.appendChild(data);
            row.appendChild(cell);  */
