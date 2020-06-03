const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Select tab Content Item
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add("tab-border");
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add the show class
    tabContentItem.classList.add("show");
}

function removeBorder() {
    for (let i = 0; i < tabItems.length; i++) {
        tabItems[i].classList.remove("tab-border");
    }
}

function removeShow() {
    for (let i = 0; i < tabContentItems.length; i++) {
        tabContentItems[i].classList.remove("show");
    }
}

//Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
