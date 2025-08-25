// Confetti animation function
function createConfettiBurst() {
    // First burst from bottom-center
    const start = () => {
        const defaults = {
            origin: { x: 0.5, y: 1 },
            spread: 180,
            ticks: 150,
            gravity: 0.8,
            decay: 0.95,
            startVelocity: 35,
            colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a', '#4FC1E9', '#a5efff'],
            particleCount: 100,
            scalar: 1.2
        };

        function shoot() {
            // Center burst
            confetti({
                ...defaults,
                angle: 90,
                spread: 100,
                particleCount: 80
            });
            
            // Side bursts for fuller effect
            confetti({
                ...defaults,
                angle: 120,
                spread: 80,
                particleCount: 40
            });
            
            confetti({
                ...defaults,
                angle: 60,
                spread: 80,
                particleCount: 40
            });
        }

        // Initial bursts
        shoot();
    };

    // Start the animation when the page loads
    start();
}

function updateCountdown() {
    const targetDate = new Date('2025-09-04T00:00:00');
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
        document.getElementById('countdown').innerHTML = "It's time!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const formattedDays = String(days);
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    document.getElementById('countdown').innerHTML = 
        `${formattedDays} days:${formattedHours} hours:${formattedMinutes} minutes:${formattedSeconds} seconds`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial calls
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    createConfettiBurst();
});
