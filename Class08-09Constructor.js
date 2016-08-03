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
  var table = document.getElementById("storeInfo");
  var data = document.createElement("tr");
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
      //var table = document.getElementById("storeInfo");
      //var data = document.createElement("tr");
      var cookieSales = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];
      table.appendChild(data);
      for (var i=0; i<cookieSales.length; i++){
      var cookieData = cookieSales[i].getCookieOutput();
      table.appendChild(cookieData);

      }

  }
      createTable();

//CLASS09 Task-add a new row to existing table

var  newText = new store("Mea's", 10, 50, 5.5, 0);
var mea= newText.getCookieOutput();
  function  addRow(){
    var newStore = document.getElementById("storeInfo");
    //var newRow = tableRef.createElement('tr');
    //var newCell= newRow.createElement('td');
    table.appendChild(mea)
  }
  //addRow();












//PARKING LOT - hold code here

/*var  newText = new store("test", 1,  5,  3.3, 0);

  function  addRow(){
    var newStore = document.getElementById("storeInfo");
    //var newRow = tableRef.createElement('tr');
    //var newCell= newRow.createElement('td');
    table.appendChild(newText)
  }


  /*function pullInfo(formToUse) {
  // establish variables for form inputted new store parameters
  var newStoreName = formToUse.location.value;
  var newMinCust = formToUse.minCustomer.value;
  var newMaxCust = formToUse.maxCustomer.value;
  var newAvgCookiePerSale = formToUse.avgCookieSale.value;
  // random numbers engine function for generating hourly cookie sales
  calculateCookies = function() {
    return Math.floor(((Math.random() * (newMaxCust - newMinCust + 1)) + newMinCust) * newAvgCookiePerSale);
  };
  var table = document.getElementById('storeInfo');
    // initialize var cookiePile to 0
    var total = 0;
    // create new row in DOM for new store data
    var addCookieStoreRow = document.createElement('tr');
    // create data cell for form inputted store name
    var addStoreNameCell = document.createElement('td');
    // inject form inputted store name into store name data cell
    addStoreNameCell.innerText = newStoreName;
    // add store name data cell with new store name into new store data row
    addCookieStoreRow.appendChild(addStoreNameCell);
    // run loop for 8 iterations to generate hourly cookie sales
    for (var i = 0; i < 8; i++) {
      // create hourly sales cell for cookies, via random engine
      var addAveCookieSaleCell = document.createElement('td');
      // run form input parameters through random engine for hourly cookie sales
      var cookiesSold = numberOfCookiesPerHour();
      // add random engine generated cookie sales into hourly sales cell
      addgetCookieOutput.innerText = cookiesSold;
      // keep running tally of hourly cookie sales for store
      totalCookies += cookiesSold;
      // add hourly cookie sales cell into new store data row
      addCookieStoreRow.appendChild(addHourlyCookiesCell);
    }
    // create total cookie sales data cell
    var addTotalSalesCell = document.createElement('td');
    // add total daily cookie sales into total cookie sales data cell
    addTotalSalesCell.innerText = totalCookies;
    // add total cookie sales data cell into new store data row
    addCookieStoreRow.appendChild(addTotalSalesCell);
    // append new store data row onto table in DOM
    table.appendChild(addCookieStoreRow);
  };

    newText. addEventListner("click", function())
/*

  /*var row = document.getElementById("storeInfo");
  var x = row.insertCell;
      x.innerHTML = "New Cell";
      console.log("addRow");
/* insertCell method does not work


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
