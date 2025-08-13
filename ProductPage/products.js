const products = ["Smooth Gel Ink Knock Type Ballpoint Pen", ""];

fetch("products.json") // where to get the information
    .then(response => response.json()) //open the file 
    .then(products => {
        const productContainer = document.getElementById('productContainer'); // where the products will be displayed

        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');

            card.innerHTML = ` 
                <img src="${product.image}" alt="${product.name}"/>
                <h4>${product.name}</h4>
                <h4>${product.price}</h4>
                <p>${product.description}</p>
                `;

            productContainer.appendChild(card);

        });
    })