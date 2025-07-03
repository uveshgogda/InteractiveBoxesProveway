// Select all card elements
const cards = document.querySelectorAll('.cardItem');
// Select all radio inputs inside card headers
const radios = document.querySelectorAll('.cardItem-header input[type="radio"]');
// Select the span to display total price
const totalSpan = document.querySelector('.provewayTotal');
// Select the span to display delivery info
const deliverySpan = document.querySelector('.provewayDelivery');

// Define prices for each card (1-based index)
const prices = {
    1: 10,
    2: 18,
    3: 24
}

// Add event listeners to each card and its radio button
cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
        // Prevent toggling when clicking directly on the radio input
        if (e.target.tagName === 'INPUT' && e.target.type === 'radio') return;
        selectCard(idx); // Select this card
    });
    // Also handle radio button change directly
    radios[idx].addEventListener('change', () => selectCard(idx));
});

// Function to select a card and update UI
function selectCard(idx) {
    cards.forEach((card, i) => {
        if (i === idx) {
            card.classList.add('active'); // Highlight selected card
            radios[i].checked = true;     // Check its radio button
        } else {
            card.classList.remove('active'); // Unhighlight others
            radios[i].checked = false;       // Uncheck others
        }
    });
    updateSummary(idx + 1); // Update summary (prices object is 1-based)
}

// Function to update total and delivery info
function updateSummary(selected) {
    totalSpan.textContent = `Total : $${prices[selected]}.00 USD`; // Update total price
    if (selected === 1) {
        deliverySpan.textContent = ''; // No delivery info for first card
    } else {
        deliverySpan.textContent = 'Free Delivery'; // Show delivery info for others
    }
}

// Initialize with the first card selected by default
selectCard(0);