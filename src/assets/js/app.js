/* ==============================
MOBILE NAV
=============================== */

const bodyEl = document.body;
const hiddenNavEl = document.querySelector(".mobilenav__hidden");
const openNavButtonEl = document.querySelector(".mobilenav__open");
const closeNavButtonEl = document.querySelector(".mobilenav__close");

openNavButtonEl.addEventListener("click", OnOpenNav);
closeNavButtonEl.addEventListener("click", OnCloseNav);

function OnOpenNav(e) {
  hiddenNavEl.style.left = "0%";
  bodyEl.style.overflow = "hidden";
}

function OnCloseNav(e) {
  hiddenNavEl.style.left = "100%";
  bodyEl.style.overflowY = "scroll";
}

/* ==============================
MOBILE Filters
=============================== */

const filtersEl = document.querySelector(".filters");
const filtersButtonOpenEl = document.querySelector(".button__filters");
const filtersButtonCloseEl = document.querySelector(".filters__nav__close");

filtersButtonOpenEl.addEventListener("click", OnOpenFilters);
filtersButtonCloseEl.addEventListener("click", OnCloseFilters);

function OnOpenFilters(e) {
  filtersEl.classList.toggle("filters__visible");
  filtersEl.classList.toggle("filters__hidden");
  bodyEl.style.overflow = "hidden";
}

function OnCloseFilters(e) {
  filtersEl.classList.toggle("filters__visible");
  filtersEl.classList.toggle("filters__hidden");
  bodyEl.style.overflowY = "scroll";
}

window.addEventListener("resize", StartMobile);

StartMobile();
function StartMobile() {
  if (window.innerWidth < 750) {
    filtersEl.classList.add("filters__mobile");
    filtersEl.classList.add("filters__hidden");
  }
}

/* ==============================
=DROPDOWN
=============================== */

const dropdownitemsCheckBoxEl = document.querySelectorAll(
  ".dropdownItem__checkbox"
);
const dropdownListEl = document.querySelectorAll(".dropdown__list");
var dropdownCrossEl = document.querySelectorAll(".selected__img");
const templateSelectedEl = document.querySelector(".template__selected");
const templateSelectedMoreEl = document.querySelector(
  ".template__selectedMore"
);

dropdownitemsCheckBoxEl.forEach((el) => {
  el.addEventListener("click", OnDropdownItem);
});

function OnDropdownItem(e) {
  console.log(e.target);

  /*

    let el = e.target 
    let elParent = document.querySelector(`.selected__${el.dataset.parent}`)

    SpawnSelected(el, elParent)

    */
}

function UpdateDropdownSelected(array, elParent) {}

/*

function SpawnSelected(el, elParent) {

    const parentSize = elParent.querySelectorAll("li").length
    console.log(parentSize)

    if(parentSize == 3) {

        const clone = templateSelectedMoreEl.content.cloneNode(true);
        let template = clone.querySelector("li");
        
        elParent.appendChild(template)

    }else if(parentSize < 3) {

        const clone = templateSelectedEl.content.cloneNode(true);
        let template = clone.querySelector("li");
        template.querySelector(".selected__text").textContent = `${el.dataset.value}`
        
        elParent.appendChild(template)

    }

    //Stocker le param
    UpdateSelected()


}

function OnCrossClick(e) {
    
    const el = e.target
    const elParent = el.closest("li")
    elParent.remove()

}

function UpdateSelected() {

    dropdownCrossEl = document.querySelectorAll(".selected__img")
    dropdownCrossEl.forEach(el => {
    
        el.addEventListener("click", OnCrossClick)
    
    });


}

*/
