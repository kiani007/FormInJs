let formData = []; //#endregio
const addContent = (Event) => {
    Event.preventDefault();

    // converted our data into objects for future useage
    let form = {
        id: Date.now(),
        pName: document.getElementById("pName").value,
        price: document.getElementById("price").value,
        pQuantity: document.getElementById("quantity").value,
    }


    // for display and chect output on console 
    console.warn("form data Added", { formData })


    // To get total price
    const productPrice = Number.parseInt(form.pQuantity) * Number.parseInt(form.price)

    //upload productprice in form object model
    form.productPrice = productPrice;

    //push that object into array of objects: its works like an api  [ {},...{} ] 
    formData.push(form);

    //console check for debugging;
    console.log(JSON.stringify(formData));

    // localStorage.setItem("formdata", JSON.stringify(formData));

    //-------------->> for Displaying thing on the table <------- -----//

    // Getting reference 
    const productTable = document.getElementById('productTable');

    //creating child node table row
    const newRow = document.createElement('tr');

    // creating childnode referece for Product Name  and innserting values from form   
    const newProduct = document.createElement('td');
    newProduct.innerHTML = form.pName;
    newRow.appendChild(newProduct);

    //creating childnode referece for product price and innserting values from form   
    const newPrice = document.createElement('td');
    newPrice.innerHTML = form.productPrice;
    newRow.appendChild(newPrice);

    //creating childnode referece for product Quantity and innserting values from form   
    const newQuant = document.createElement('td');
    newQuant.innerHTML = form.pQuantity;
    newRow.appendChild(newQuant);

    //Appending all the child element into productTable 
    productTable.appendChild(newRow);

    //This is getting values from each array object of product price and updating total price;
    let totalPrice = 0;
    formData.forEach(item => {
        totalPrice += item.productPrice;
    })

    //this update the inner html of total price.
    let totalCartPrice = document.getElementById('total');
    totalCartPrice.innerHTML = totalPrice;

}
document.getElementById("btn").addEventListener("click", addContent);