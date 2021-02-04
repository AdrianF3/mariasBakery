//console.log("hello");

function $init() {
  //Load Main Menu
  loadMenu();
  //Add Menu Event Listeners
  document.getElementById("homeBtn").addEventListener("click", homeBtnFunc);
  document.getElementById("bakeryBtn").addEventListener("click", bakeryBtnFunc);
  document.getElementById("orderBtn").addEventListener("click", orderBtnFunc);
  document.getElementById("aboutBtn").addEventListener("click", aboutBtnFunc);
  //Footer Menu Event Listeners
  document.getElementById("aboutBtnFT").addEventListener("click", aboutBtnFunc);
  document.getElementById("orderBtnFT").addEventListener("click", orderBtnFunc);
  document.getElementById("homeBtnFT").addEventListener("click", homeBtnFunc);
  //Newsletter Signup Popup Event Listener
  document.getElementById("newsletterSignup").addEventListener("click", newsletterPopup);
  //Bakery Images Event Listeners, if page 2
  if (window.location.href.indexOf("page2") > -1) {
    document.getElementById("imgOptionsA").addEventListener("click", bakeryImg);
    document.getElementById("imgOptionsB").addEventListener("click", bakeryImg);
    document.getElementById("imgOptionsC").addEventListener("click", bakeryImg);
    document.getElementById("imgOptionsD").addEventListener("click", bakeryImg);
    document.getElementById("imgOptionsE").addEventListener("click", bakeryImg);
  }
  //Load Cart Functionality, if page3
  if(window.location.href.indexOf("page3") > -1) {
    loadCart();
  }
  //Verify the newsletterPopup stays closed initialy
  $( "#dialog-1" ).dialog({
    autoOpen: false,
    modal: true,

  });
  //Load Social Media SVG images
  $("#socialMedia").append("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z'/></svg>");
  $("#socialMedia").append("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z'/></svg>");
  $("#socialMedia").append("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z'/></svg>");
}

function cartDiscount() {
  //Remove the cart button
  let cartButton = document.getElementById('discountBtn');
  cartButton.style.display = "none";
  //Apply Discount
  let curVal = document.getElementById('spanTotal').innerText;
  if(curVal >= 50 && curVal < 100) {
    //Apply a 10% discount
    let newTotal = parseInt(curVal) - (parseInt(curVal) * .10);
    document.getElementById('spanTotal').innerText = newTotal.toFixed(2);
    $("#cartTotal").append("<p id='disApplied'>A 10% discount has been applied</p>");
  } else if (curVal >= 100) {
    //Apply a 15% discount
    let newTotal = parseInt(curVal) - (parseInt(curVal) * .15);
    document.getElementById('spanTotal').innerText = newTotal.toFixed(2);
    $("#cartTotal").append("<p id='disApplied'>A 15% discount has been applied</p>");
  } else {
    console.log("Not currently eligible for this promotion. ")
  }



  //console.log("The current value is: " + curVal);
}

function homeBtnFunc() {
  window.location.href = "index.html";
}
function bakeryBtnFunc() {
  window.location.href = "page2.html";
}
function orderBtnFunc() {
  window.location.href = "page3.html";
}
function aboutBtnFunc() {
  window.location.href = "page5.html";
}

function loadCart() {
  //check if user has session saved, if not, create empty order and save it
  //to the current session
  if(localStorage.getItem("ordSaving")) {
    //console.log("Already has a cart.");
    //Read data and convert to object
    let jsonStr = localStorage.getItem("ordSaving");
    let ordSaving = JSON.parse(jsonStr);
    //set prevent var = false and calls function to process previous orders from session data
    let prv = false;
    let aOrders = ordSaving.A;
    while(aOrders > 0) {
      itemAOrder(prv);
      aOrders--;
    }
    let bOrders = ordSaving.B;
    while(bOrders > 0) {
      itemBOrder(prv);
      bOrders--;
    }
    let cOrders = ordSaving.C;
    while(cOrders > 0) {
      itemCOrder(prv);
      cOrders--;
    }
    let dOrders = ordSaving.D;
    while(dOrders > 0) {
      itemDOrder(prv);
      dOrders--;
    }
    let eOrders = ordSaving.E;
    while(eOrders > 0) {
      itemEOrder(prv);
      eOrders--;
    }

  } else {
    //Calls this function if there is not an ordSaving var already in local storage
    //console.log("Loading an empty cart.");
    let ordSaving = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    localStorage.setItem("ordSaving", JSON.stringify(ordSaving));
  }
}

function bakeryImg() {
  let descrip = document.getElementById('bakeryMainDescrip');
  img = this.src;
  descrip.innerText = this.alt;
  document.getElementById("bakeryMainImage").src = this.src;
}

function loadMenu() {
  //Header
  $("#mainNav").append("<button id='homeBtn' class='push-button-3d'>Home | Maria's Cafe</button>");
  $("#mainNav").append("<button id='bakeryBtn' class='push-button-3d'>Featured Bakery</button>");
  $("#mainNav").append("<button id='orderBtn' class='push-button-3d'>COVID SPECIALS | ORDER ONLINE</button>");
  $("#mainNav").append("<button id='aboutBtn' class='push-button-3d'>Our Story</button>");
  //Footer
  $("#footerBase").prepend("<button id='aboutBtnFT' class='push-button-3d'>Our Story</button>");
  $("#footerBase").prepend("<button id='orderBtnFT' class='push-button-3d'>COVID SPECIALS | ORDER ONLINE</button>");
  $("#footerBase").prepend("<button id='homeBtnFT' class='push-button-3d'>Home | Maria's Cafe</button>");
}


//function to reset cart
function clearStorage() {
  localStorage.clear();
  location.reload();
}

function newsletterPopup() {
  $( "#dialog-1" ).dialog( "open" );
  $( "#dialog-1" ).dialog({ closeText: ""});
  //Adds event listener for completion of the form
  document.getElementById("signupSubmit").addEventListener("click", signupValidation);
}

function signupValidation(e) {
  e.preventDefault();
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email.match(mailformat)) {
    //If email&name was already saved, overwrites previously saved date and alerts user
    if(localStorage.getItem("subscriberInfo")) {
      //Read previous data and convert to object
      let jsonStr = localStorage.getItem("subscriberInfo");
      let prevSubscriberInfo = JSON.parse(jsonStr);
      alert("Overwriting previously saved informaiton!!!\n\nName: " + prevSubscriberInfo.Name + " || Email: " + prevSubscriberInfo.Email);
      //This is where I would generally save the information to a db
      //For this example I will just save the info to local storag
      let subscriberInfo = {Name: name, Email: email};
      localStorage.setItem("subscriberInfo", JSON.stringify(subscriberInfo));
    } else {
      //Save Data for the firs time
      let subscriberInfo = {Name: name, Email: email};
      localStorage.setItem("subscriberInfo", JSON.stringify(subscriberInfo));
    }

    //Close dialog box
    $( "#dialog-1" ).dialog( "close" );
  } else {
    alert("You have entered an invalid email address!\nPlease Try Again.");
  }
}

//function that appends the ordered info into the shopping cart
function newItem(na, pr) {
  //Add item to the cart
  $("#cartItems").append(na + " | $" + pr + "<br>");
  //get current value of cartTotal
  let curCart = document.getElementById('spanTotal').innerText;
  //calculate and set the new total of the cart
  let newVal = parseInt(pr) + parseInt(curCart);
  document.getElementById('spanTotal').innerText = newVal.toFixed(2);


  //var to determine if discountBtn already exists
  let btnExist = document.getElementById('discountBtn');

  //Display cartDiscount button if between 50 - 100, or above 100
  if(newVal >= 50 && newVal < 100) {
    //console.log("More than 50");
    if(btnExist == null) {
      $("#cartTotal").append("<button id='discountBtn'>Discount available, click to apply and checkout</button>");
      document.getElementById("discountBtn").addEventListener("click", cartDiscount);

    }
  } else if (newVal >= 100) {
    //console.log("More than 100");
    if(btnExist == null) {
      $("#cartTotal").append("<button id='discountBtn'>Discount available, click to apply and checkout</button>");
      document.getElementById("discountBtn").addEventListener("click", cartDiscount);
    }
  } else {
    //console.log("No discounts available");
  }
  //End of new Item function
}

//The following functions are called to when an item is ordered (btnclick) or
//when the page is reloaded and previously ordered items are reloaded from local storage

function itemAOrder(prv) {
  //Get current value of orders
  let name = document.getElementById('itemAName').innerText;
  let price = document.getElementById('itemAPrice').innerText;
  newItem(name, price);

  if(prv) {
    //Update Sessions - Read data and convert to object
    let jsonStr = localStorage.getItem("ordSaving");
    let ordSaving = JSON.parse(jsonStr);
    //increment order by 1
    let curVal = parseInt(ordSaving.A);
    curVal = parseInt(curVal) + 1;
    //Save new order value
    ordSaving.A = curVal;
    // Convert the person object into JSON string and save it into storage
    localStorage.setItem("ordSaving", JSON.stringify(ordSaving));
  }
}

function itemBOrder(prv) {
  //Get current value of orders
  let name = document.getElementById('itemBName').innerText;
  let price = document.getElementById('itemBPrice').innerText;
  newItem(name, price);

  if(prv) {
    //Update Sessions - Read data and convert to object
    let jsonStr = localStorage.getItem("ordSaving");
    let ordSaving = JSON.parse(jsonStr);
    //increment order by 1
    let curVal = parseInt(ordSaving.B);
    curVal = parseInt(curVal) + 1;
    //Save new order value
    ordSaving.B = curVal;
    // Convert the person object into JSON string and save it into storage
    localStorage.setItem("ordSaving", JSON.stringify(ordSaving));
  }
}

function itemCOrder(prv) {
  //Get current value of orders
  let name = document.getElementById('itemCName').innerText;
  let price = document.getElementById('itemCPrice').innerText;
  newItem(name, price);
  if(prv) {
    //Update Sessions - Read data and convert to object
    let jsonStr = localStorage.getItem("ordSaving");
    let ordSaving = JSON.parse(jsonStr);
    //increment order by 1
    let curVal = parseInt(ordSaving.C);
    curVal = parseInt(curVal) + 1;
    //Save new order value
    ordSaving.C = curVal;
    // Convert the person object into JSON string and save it into storage
    localStorage.setItem("ordSaving", JSON.stringify(ordSaving));
  }
}

function itemDOrder(prv) {
  //Get current value of orders
  let name = document.getElementById('itemDName').innerText;
  let price = document.getElementById('itemDPrice').innerText;
  newItem(name, price);
  if(prv) {
    //Update Sessions - Read data and convert to object
    let jsonStr = localStorage.getItem("ordSaving");
    let ordSaving = JSON.parse(jsonStr);
    //increment order by 1
    let curVal = parseInt(ordSaving.D);
    curVal = parseInt(curVal) + 1;
    //Save new order value
    ordSaving.D = curVal;
    // Convert the person object into JSON string and save it into storage
    localStorage.setItem("ordSaving", JSON.stringify(ordSaving));
  }
}

function itemEOrder(prv) {
  //Get current value of orders
  let name = document.getElementById('itemEName').innerText;
  let price = document.getElementById('itemEPrice').innerText;
  newItem(name, price);
  if(prv) {
    //Update Sessions - Read data and convert to object
    let jsonStr = localStorage.getItem("ordSaving");
    let ordSaving = JSON.parse(jsonStr);
    //increment order by 1
    let curVal = parseInt(ordSaving.E);
    curVal = parseInt(curVal) + 1;
    //Save new order value
    ordSaving.E = curVal;
    // Convert the person object into JSON string and save it into storage
    localStorage.setItem("ordSaving", JSON.stringify(ordSaving));
  }
}

$(document).ready(function() {
  $init();
});
