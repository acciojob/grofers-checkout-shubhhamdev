const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceElements = document.querySelectorAll(".price"); // Get all price elements
    let totalPrice = 0;

    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent);
    });

    const totalRow = document.createElement("tr"); // Create a new row for the total
    const totalCell = document.createElement("td"); // Create a cell for the total
    totalCell.setAttribute("colspan", "2"); // Set colspan to span both columns
    totalCell.textContent = "Total Price: " + totalPrice.toFixed(2);
    totalRow.appendChild(totalCell); // Add the cell to the row
    totalRow.classList.add("total-row"); // Add a class to style the total row

    const table = document.querySelector("table"); // Get the table
    table.appendChild(totalRow); // Add the total row to the table
};

getSumBtn.addEventListener("click", getSum);
