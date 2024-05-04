import data from "../data/order-history.js"

document.addEventListener("DOMContentLoaded", function () {
    (function sidebarMenuMobile() {
        const sidebar = document.getElementById("sidebar");
        const luminBurgerMenu = document.getElementById("burgerMenu");
        const sidebarBurgerMenu = document.getElementById("burgerMenuSidebar");

        function toggleSidebar() {
            sidebar.classList.toggle("show");
        }

        luminBurgerMenu.addEventListener("click", toggleSidebar);
        sidebarBurgerMenu.addEventListener("click", toggleSidebar);
    })();

    (function orderType() {
        const orderPend = document.getElementById("orderPend");
        const orderDeliver = document.getElementById("orderDeliver");

        orderPend.addEventListener("click", function () {
            orderPend.style.borderBottom = "1px solid var(--color-text-decoration)";
            orderDeliver.style.border = "none";
        });

        orderDeliver.addEventListener("click", function () {
            orderDeliver.style.borderBottom = "1px solid var(--color-text-decoration)";
            orderPend.style.border = "none";
        });
    })();

    const spans = {
        orderHistory: document.getElementById("orderHistorySpan"),
        subscriptions: document.getElementById("subscriptionsSpan"),
        wishlist: document.getElementById("wishlistSpan"),
        routine: document.getElementById("routineSpan"),
        settings: document.getElementById("settingsSpan")
    };

    const divs = {
        orderHistory: document.getElementById("orderDetails"),
        subscriptions: document.getElementById("subscriptions"),
        wishlist: document.getElementById("wishlist"),
        routine: document.getElementById("routine"),
        settings: document.getElementById("settings")
    };

    for (const key in spans) {
        spans[key].addEventListener("click", function () {
            setActiveSpan(spans[key]);
            toggleDisplay(divs[key]);
        });
    }

    function setActiveSpan(activeSpan) {
        for (const key in spans) {
            spans[key].style.color = "black";
        }
        activeSpan.style.color = "var(--color-span-category)";
    }

    function toggleDisplay(activeDiv) {
        const allDivs = Object.values(divs);
        allDivs.forEach(div => {
            div.style.display = "none";
        });
        activeDiv.style.display = "block";
    }

    (function dataOffers() {
        const mainProductContainer = document.createElement("div");
        mainProductContainer.id = "mainProductContainer";

        const innerProductContainer = document.createElement("div");
        innerProductContainer.id = "innerProductContainer";

        const discount = document.createElement("div");
        discount.id = "discount";

        const exampleOffers = document.createElement("div");
        exampleOffers.id = "exampleOffers";

        const addToCart = document.createElement("div");
        addToCart.id = "addToCart";

        addToCart.innerHTML = `
        <span>Anti-wrinkle Balm <p>N5000</p></span>
        <button>Add to Cart</button>
        `

        exampleOffers.innerHTML = `
        <span id="recommendation">Frequently Bought together</span>
        <p>Moisturizing balm <span>N5000</span/</p>
        <p>Anti-wrinkle balm <span>N5000</span/</p>
        `

        data.forEach(item => {
            const { moistureBalm, antiWrinkle } = item;
            const img1 = document.createElement("img");
            img1.id = "imgOne";
            img1.src = moistureBalm;
            img1.alt = "Moisture Balm";
            discount.appendChild(img1);
        
            const plusSign = document.createElement("span");
            plusSign.textContent = "+";
            plusSign.style.fontSize = "48px";
            discount.appendChild(plusSign);
        
            const img2 = document.createElement("img");
            img2.src = antiWrinkle;
            img2.alt = "Anti Wrinkle";
            discount.appendChild(img2);
        });

        innerProductContainer.appendChild(exampleOffers);
        innerProductContainer.appendChild(discount);
        innerProductContainer.appendChild(addToCart);
        mainProductContainer.appendChild(innerProductContainer);
        document.body.appendChild(mainProductContainer);
    })();
});









