document.getElementById('poll-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="poll"]:checked');
    if (selectedOption) {
        document.getElementById('poll-results').textContent = `Thank you for voting on: ${selectedOption.value}`;
    } else {
        alert('Please select an option before submitting.');
    }
});
