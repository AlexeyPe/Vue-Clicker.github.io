
// /*Click button*/
// function counter() {
//     count++;
//     document.querySelector('#score').innerHTML = `Your Score: ${count}`;    
// }
// /**/
// if (count == count_check) {
//     count_ten++;
//     count_check += 10;
//     document.querySelector('#points').innerHTML = `Your pointer ${count_ten}`;

// }
// if (count_ten == 1) {
//     document.querySelector('p').innerHTML = 'Your 10 Score = 1 Points.';
// }




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

var count = 0;

/* Super Button */
btn.addEventListener("click", function() {
    console.log("btn cliked");

    count++;
    document.querySelector("#score").innerHTML = `Your Score: ${count}`;

    if (count >= 10) {
        shop.classList.add("shop__add");
        content__inner.classList.add("content__add");
    }
});

/* Shop Button*/
shop__tab.forEach(function(item) {
    item.addEventListener("click", function() {

        let currentTab = item;
        let tabID = currentTab.getAttribute("data-tab");
        let currentContent = document.querySelector(tabID);
        console.log(tabID);  
        
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
