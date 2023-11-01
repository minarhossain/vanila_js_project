const dropList = document.querySelectorAll('form select '); // 2 select option find this command

const formCurrency = document.querySelector('.form select');  // one currency select tag from (from form)
const toCurrency = document.querySelector('.to select'); // one currency select tag to(from to)
const getButton = document.querySelector('form button');
// console.log(dropList);


for (let i = 0; i < dropList.length; i++) {
    for (let currency_code in country_list) {
        // selecting USD by default as FROM currency and AFN as TO currency
        /*
         let selected;
          if (i == 0) {
              selected = currency_code == "USD" ? "selected" : "";
          } else if (i == 1) {
              selected = currency_code == "BDT" ? "selected" : "";
          } 
          */

        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "AFN" ? "selected" : "";
        // create a option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting option tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e => {
        loadFlag(e.target);
    });
}

function loadFlag(element) {
    for (let code in country_list) {
        if (code == element.value) { // if currency code of country list is equal to option value

            let imgTag = element.parentElement.querySelector("img"); // selecting image tag of particular drop list
            // passing country code of a selected currency code in a image url
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}
window.addEventListener("load", () => {

})