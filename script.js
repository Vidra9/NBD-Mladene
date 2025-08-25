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

// Initial call to avoid delay
updateCountdown();
