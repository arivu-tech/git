document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryDateInput = document.getElementById('expiryDate');
    const cvvInput = document.getElementById('cvv');
    const cardNumberError = document.getElementById('cardNumberError');
    const expiryDateError = document.getElementById('expiryDateError');
    const cvvError = document.getElementById('cvvError');
    const messageDiv = document.getElementById('message');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Basic client-side validation (not for actual security!)
        let isValid = true;

        if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumberInput.value)) {
            cardNumberError.textContent = 'Invalid card number format (XXXX-XXXX-XXXX-XXXX)';
            isValid = false;
        } else {
            cardNumberError.textContent = '';
        }

        if (!/^\d{2}\/\d{2}$/.test(expiryDateInput.value)) {
            expiryDateError.textContent = 'Invalid expiry date format (MM/YY)';
            isValid = false;
        } else {
            expiryDateError.textContent = '';
        }

        if (!/^\d{3}$/.test(cvvInput.value)) {
            cvvError.textContent = 'Invalid CVV format (XXX)';
            isValid = false;
        } else {
            cvvError.textContent = '';
        }

        if (isValid) {
            // In a real application, you would send this data securely
            // to a back-end server for processing and fraud detection.
            console.log('Payment data submitted (for demonstration purposes only):', {
                cardNumber: cardNumberInput.value,
                expiryDate: expiryDateInput.value,
                cvv: cvvInput.value,
                cardholderName: paymentForm.elements.cardholderName.value
            });

            // Simulate a successful submission (replace with actual back-end interaction)
            messageDiv.textContent = 'Payment submitted successfully (this is a simulation!).';
            messageDiv.className = 'message success';
            paymentForm.reset();
        } else {
            messageDiv.textContent = 'Please correct the form errors.';
            messageDiv.className = 'message failure';
        }
    });
});