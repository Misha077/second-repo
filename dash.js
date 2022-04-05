let allProducts = null;
isAsc = true;
axios("https://6219cf0581d4074e85b1f64b.mockapi.io/products").then(res => {
  if (res.status == 200) {
      allProducts = res.data
    renderProducts(res.data);
  }
});

function renderProducts(data) {
  let tbody = document.querySelector("#products-table tbody");
    tbody.innerHTML = ''
  data.forEach(product => {
    tbody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.color}</td>
                <td>${product.price}</td>
                <td>${product.department}</td>
                <td>${product.inStock}</td>    
            </tr>
        `;
  });
}

function searchProducts(e){
    let keyword = e.target.value;
    let result = allProducts.filter(product => 
        product.name.split(" ")
        .some(word => word.toUpperCase().startsWith(keyword.toUpperCase()))
        );
        renderProducts(result);
}

function sortProducts(sortBy, type){
  isAsc = !isAsc;
  let result = sorting(allProducts, sortBy, type, isAsc);
  renderProducts(result);
}


function sorting(array, sortBy, type, isAsc){
if(type === "string"){
  array.sort((a, b) => {
    a = a[sortBy].toUpperCase();
    b = b[sortBy].toUpperCase();
    if(a>b) return isAsc ? 1 : -1;
    if(a<b) return isAsc ? -1 : 1;
    return 0;
  });
}
else if (type === "number"){
  array.sort((a, b) => {
    a = a[sortBy];
    b = b[sortBy];
    if (isAsc) return a - b;
    return b - a;

  });
}
 return array;
}
