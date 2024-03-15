document.addEventListener("DOMContentLoaded", function() {
    const expenseForm = document.getElementById("expenseForm");
    const totalExpenseValue = document.getElementById("totalExpenseValue");
    const expenseList = document.getElementById("expenseList");

    let totalExpense = 0;

    expenseForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const productDescription = document.getElementById("productDescription").value.trim();
        const numberOfItems = parseInt(document.getElementById("numberOfItems").value);
        const itemPrice = parseFloat(document.getElementById("itemPrice").value);

        if (productDescription === "" || isNaN(numberOfItems) || numberOfItems <= 0 || isNaN(itemPrice) || itemPrice <= 0) {
            alert("Please enter valid product description, number of items, and price per item.");
            return;
        }

        const totalCost = numberOfItems * itemPrice;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${productDescription}</td>
            <td>${numberOfItems}</td>
            <td>₹${itemPrice.toFixed(2)}</td>
            <td>₹${totalCost.toFixed(2)}</td>
        `;
        expenseList.appendChild(row);

        totalExpense += totalCost;
        totalExpenseValue.textContent = totalExpense.toFixed(2);

        // Reset form fields
        expenseForm.reset();
    });
});
