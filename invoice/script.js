document.getElementById('invoiceForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Generate the invoice HTML
    const invoiceHTML = `
        <html>
        <head>
            <title>Invoice</title>
        </head>
        <body>
            <h2>Invoice</h2>
            <p><strong>Date:</strong> ${data.date}</p>
            <p><strong>Buyer's Address:</strong> ${data.buyerAddress}</p>
            <p><strong>Seller's Address:</strong> ${data.sellerAddress}</p>
            <h3>Items Sold:</h3>
            <ul>
                ${data.items.split('\n').map(item => `<li>${item}</li>`).join('')}
            </ul>
        </body>
        </html>
    `;

    // Create a new page to display the invoice
    const newWindow = window.open('');
    newWindow.document.write(invoiceHTML);
});
 