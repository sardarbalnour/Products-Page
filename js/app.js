const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");

// search by product name
const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    console.dir(productName);
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

searchInput.addEventListener("keyup", searchHandler);

// add event to butttons
const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
      //   if (filter === category) {
      //     product.style.display = "block";
      //   } else {
      //     product.style.display = "none";
      //   }
    }
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
