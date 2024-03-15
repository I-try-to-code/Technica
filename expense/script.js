document.addEventListener("DOMContentLoaded", function() {
    const expenseForm = document.getElementById("expenseForm");
    const expenseTable = document.getElementById("expenseTable");
    const totalExpense = document.getElementById("totalExpense");

    let total = 0;
    let expenses = [];

    // Function to display expenses in the table
    function displayExpenses() {
        expenseTable.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Product Description</th>
                        <th>Price Per Item</th>
                        <th>Number of Items</th>
                        <th>Total Expense</th>
                    </tr>
                </thead>
                <tbody id="expenseList">
                    <!-- Expenses will be displayed here -->
                </tbody>
            </table>
        `;

        const expenseList = document.getElementById("expenseList");
        expenses.forEach(expense => {
            const row = document.createElement("tr");
            const productDescriptionCell = document.createElement("td");
            productDescriptionCell.textContent = expense.productDescription;
            const pricePerItemCell = document.createElement("td");
            pricePerItemCell.textContent = `$${expense.pricePerItem.toFixed(2)}`;
            const numberOfItemsCell = document.createElement("td");
            numberOfItemsCell.textContent = expense.numberOfItems;
            const totalExpenseCell = document.createElement("td");
            totalExpenseCell.textContent = `$${(expense.pricePerItem * expense.numberOfItems).toFixed(2)}`;
            row.appendChild(productDescriptionCell);
            row.appendChild(pricePerItemCell);
            row.appendChild(numberOfItemsCell);
            row.appendChild(totalExpenseCell);
            expenseList.appendChild(row);
        });
    }

    // Function to calculate and display total expenditure
    function calculateTotal() {
        total = expenses.reduce((acc, expense) => acc + (expense.pricePerItem * expense.numberOfItems), 0);
        totalExpense.textContent = `Total Expenditure: $${total.toFixed(2)}`;
    }

    // Function to handle form submission
    expenseForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const productDescriptionInput = document.getElementById("productDescription");
        const pricePerItemInput = document.getElementById("pricePerItem");
        const numberOfItemsInput = document.getElementById("numberOfItems");

        const productDescription = productDescriptionInput.value.trim();
        const pricePerItem = parseFloat(pricePerItemInput.value);
        const numberOfItems = parseInt(numberOfItemsInput.value);

        if (productDescription === "" || isNaN(pricePerItem) || pricePerItem <= 0 || isNaN(numberOfItems) || numberOfItems <= 0) {
            alert("Please enter valid product description, price per item, and number of items.");
            return;
        }

        expenses.push({ productDescription, pricePerItem, numberOfItems });

        displayExpenses();
        calculateTotal();

        productDescriptionInput.value = "";
        pricePerItemInput.value = "";
        numberOfItemsInput.value = "";
    });
});
