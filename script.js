function displayInventory(){
    const inventory = [
        ["Books", "The Great Gatsby", 10, 29.99],
        ["Magazines", "Times", 5, 5.99],
        ["Accessories", "Bookmark", 50, 1.99],
        ["Books", "1984", 15, 19.99],
        ["Magazines", "National Geographic", 8, 7.99],
        ["Accessories", "Reading Light", 30, 15.99],
    ]
    
    console.log(inventory)
    let inventoryHTML = '<table>'
    inventoryHTML += `<tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price($)</th>
                      </tr>`

    for(let i = 0; i< inventory.length; i++){
        const [type, name, quantity, price] = inventory[i];
        inventoryHTML += `<tr>
                            <td>${type}</td>
                            <td>${name}</td>
                            <td>${quantity}</td>
                            <td>$${price}</td>
                          </tr>`
    }

    document.getElementById('inventory').innerHTML = inventoryHTML

}

displayInventory()


