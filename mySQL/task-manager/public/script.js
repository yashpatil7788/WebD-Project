document.getElementById('customerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const customer = Object.fromEntries(formData.entries());

    const res = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    });

    const result = await res.json();
    document.getElementById('message').textContent = result.message || result.error;
});
