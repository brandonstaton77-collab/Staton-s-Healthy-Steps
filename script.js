const facts = [
    'Aim for 8-10 hours of sleep each night to help your body and mind recharge.',
    'Eating a balanced breakfast can boost energy and concentration throughout the day.',
    'Take a few minutes each day for a mental health check-in; talk to someone you trust if you feel stressed.',
    'Remember to wash your hands regularly to reduce the spread of germs.'
];

let current = 0;
const container = document.getElementById('fact-container');

function showFact(index) {
    container.textContent = facts[index];
}

function rotateFact() {
    current = (current + 1) % facts.length;
    showFact(current);
}

// Initial fact
showFact(current);
// Rotate every 5 seconds
setInterval(rotateFact, 5000);
