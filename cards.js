const products = [
    {
        image: 'caminho-da-imagem-do-produto1.jpg',
        title: 'Produto 1',
        description: 'Descrição do produto 1',
        price: 'R$ 99,99'
    },
    {
        image: 'caminho-da-imagem-do-produto2.jpg',
        title: 'Produto 2',
        description: 'Descrição do produto 2',
        price: 'R$ 199,99'
    },
    // Mais produtos aqui
];

const productsContainer = document.querySelector('.products-container');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-details">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>
        </div>
    `;

    productsContainer.appendChild(productCard);
});
