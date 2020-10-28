// super button
const btn = document.querySelector("#btn1");
// container shop
const shop = document.querySelector("#shop");
// main container (shop and button)
const content__inner = document.querySelector("#content__inner");
// shop tab (theme and upgrade)
const shop__tab = document.querySelectorAll("#shop__tab");
// shop body content (text, price ...)
const shop__item = document.querySelectorAll(".shop__items");

const btn__money__up = document.querySelector("#btn__money__up");


// Counts clicks (does not affect, except for the start)
var count = 0;

var click__up = 0;

// Every 10 points money__count = 1 money
// money__count = click__up + 1 
// money = money__up + 1
var money__count = 0;
var money__up = 0;
var money = 0;

/* Super Button */
btn.addEventListener("click", function() {

    /* count */
    count ++;
    document.querySelector("#score").innerHTML = `Your Click: ${count}`;

    if (count >= 10) {
        document.querySelector("#money").innerHTML = `Your Money: ${money}`;
        shop.classList.add("shop__add");
        content__inner.classList.add("content__add");
    }

    /* money */
    money__count += click__up + 1;
    console.log(`money__count ${money__count}`);
    if (money__count % 10 == 0) {
        money += money__up + 1;
        document.querySelector("#money").innerHTML = `Your Money: ${money}`;
        console.log(`money ${money}`);
    }
});

/* Shop Button*/
shop__tab.forEach(function(item) {
    item.addEventListener("click", function() {

        let currentTab = item;
        let tabID = currentTab.getAttribute("data-tab");
        let currentContent = document.querySelector(tabID); 
        
        //if the tab is active, it is not updated
        if ( ! currentTab.classList.contains("active") ) {
            shop__tab.forEach(function(item) {
            item.classList.remove("active");
            });

            shop__item.forEach(function(item) {
                item.classList.remove("active");
            });

            currentTab.classList.add("active");
            currentContent.classList.add("active");
        }

    });
});

/* Money Up */

var cost = 2;
document.querySelector("#cost").innerHTML = `Cost: ${cost}`;

var profit = 1;
document.querySelector("#profit").innerHTML = `Money profit +${profit}`;

var upgrade__count = 0;

btn__money__up.onclick = function () {
    if (money >= cost) {

        upgrade__count++;
        money -= cost;
        money__up += profit;

        if (cost % 2 == 0) {
            cost += 3;
            if (cost >= 50){
                cost *= 2 + upgrade__count;
            }
        } else {
            cost *= 3;
            cost--;
        }

        document.querySelector("#money").innerHTML = `Your Money: ${money}`;

        console.log(`money ${money}`);
        console.log(`money__up ${money__up}`);
    }
    document.querySelector("#cost").innerHTML = `Cost: ${cost}`;
};


