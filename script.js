let products = [
    {
        name: "Yellow Chair",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "20,000",
        heading: "Brown wooden framed"
    },
    {
        name: "drawer dresser",
        image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "55,000",
        heading: "Teal wooden Drawer"
    },
    {
        name: "Gray Sofa",
        image: "https://images.unsplash.com/photo-1528754704377-60e053a66165?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "1,00,000",
        heading: "square framed mirror"
    },
    {
        name: "black chairs",
        image: "https://images.unsplash.com/photo-1533008093099-e2681382639a?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "85,000",
        heading: "round white base table"
    },
    {
        name: "Red Armchair",
        image: "https://images.unsplash.com/photo-1551298698-66b830a4f11c?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "95,000",
        heading: "chair beside palm tree"
    },
    {
        name: "white chair",
        image: "https://images.unsplash.com/photo-1593853919383-37c43e748897?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "1,20,000",
        heading: "white fur textile"
    },
    {
        name: "Wooden Dining Table",
        image: "https://images.unsplash.com/photo-1585128903994-9788298932a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "3,00,000",
        heading: "brown wooden table"
    },
]

let populars = [
    {
        name: "Wooden basket",
        image: "https://images.unsplash.com/flagged/photo-1568051263459-4615cc08a864?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxPUEdBVVFLTVdib3x8ZW58MHx8fHx8",
        price: "20,000",
        heading: "Brown wooden framed"
    },
    {
        name: "drawer dresser",
        image: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "55,000",
        heading: "Teal wooden Drawer"
    },
    {
        name: "Blue Chairs",
        image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3IlMjBjb2xvcmZ1bHxlbnwwfHwwfHx8MA%3D%3D",
        price: "1,00,000",
        heading: "square framed mirror"
    },
    {
        name: "Teal Sofa",
        image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3IlMjBjb2xvcmZ1bHxlbnwwfHwwfHx8MA%3D%3D",
        price: "85,000",
        heading: "round white base table"
    },
    {
        name: "black chairs",
        image: "https://images.unsplash.com/photo-1638171858053-fe173eabc49c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXxPUEdBVVFLTVdib3x8ZW58MHx8fHx8",
        price: "85,000",
        heading: "round white base table"
    },
]

let cart = []

let showProducts = () => {
    let clutter = "";
    products.forEach((obj, index) => {
        clutter += `
        <div class="product w-fit rounded-xl p-2 bg-white">
            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl object-cover overflow-hidden">
                <img class="w-full h-full" src="${obj.image}"/>
            </div>
            <div class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
                <div class="flex justify-between w-full items-center mt-2">
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">${obj.heading}</h3>
                        <h4 class="font-semibold mt-2">₹${obj.price}</h4>
                    </div>
                    <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}" class="ri-add-line add"></i></button>
                </div>
            </div>
        </div>`;
    });
    document.querySelector(".products").innerHTML = clutter;
}

let showPopulars = () => {
    let clutter = "";
    populars.forEach((obj) => {
        clutter += `
        <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
            <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                <img class="w-full h-full object-cover" src="${obj.image}" alt=""/>
            </div>
            <div class="data py-2 w-full">
                <h1 class="leading-none font-semibold">${obj.name}</h1>
                <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.heading}</h4>
                <h4 class="mt-3 font-semibold text-zinc-500">₹${obj.price}</h4>
            </div>
        </div>`;
    });
    document.querySelector(".populars").innerHTML = clutter;
}

showProducts();
showPopulars();

let count=0
document.querySelector(".products").addEventListener("click", (event) => {

    if (event.target.classList.contains("add")) {
        count++
        document.querySelector(".cart-count").style.display="block"
        document.querySelector(".cart-count").innerHTML=count
        let clickedIndex = event.target.dataset.index;
        let clickedProduct = products[clickedIndex];
        console.log(clickedProduct)

        // Check if the clicked product already exists in the cart
        let existingCartItemIndex = cart.findIndex(item => item.name === clickedProduct.name);
        if (existingCartItemIndex !== -1) {
            // If the product already exists in the cart, increment its quantity
            cart[existingCartItemIndex].quantity++;
        } else {
            // Otherwise, add it as a new item in the cart with quantity 1
            clickedProduct.quantity = 1;
            cart.push(clickedProduct);
        }

        // Render the updated cart
        renderCart();
    }
});

let renderCart = () => {
    let carts = "";
    cart.forEach((obj) => {
        console.log(obj)
        carts += `
        <div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500 overflow-hidden">
                <img class="w-full h-full" src="${obj.image}"/>
            </div>
            <div>
                <h3 class="font-semibold">${obj.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">₹ ${obj.price} x ${obj.quantity}</h5>
            </div>
        </div>`;
    });
    
    document.querySelector(".cartexpnd").innerHTML = carts;
    renderTotal()
};
let cartVisible = false; // Flag to track if cart is visible or not

document.querySelector(".carticon").addEventListener("click", () => {
    if (!cartVisible) {
        // If cart is not visible, show it and render cart items
        document.querySelector(".cartexpnd").style.display = "block";
        renderCart();
    } else {
        // If cart is already visible, hide it
        document.querySelector(".cartexpnd").style.display = "none";
    }
    
    // Toggle the cart visibility flag
    cartVisible = !cartVisible;
});
let renderTotal = () => {
    let total = 0;
    cart.forEach((item) => {
        total += parseFloat(item.price.replace(/,/g, '')) * item.quantity;
    });

    // Append total to the end of the cart
    let totalElement = document.createElement("div");
    totalElement.classList.add("total");
    totalElement.innerHTML = `<div class="w-full h-full bg-black text-white p-2 text-center rounded-lg"><h4 class="font-semibold">Total :  ₹ ${total.toLocaleString()}</h4></div>`;
    document.querySelector(".cartexpnd").append(totalElement);
};