  // Toggle menu on mobile
    document.querySelector(".menu-toggle").addEventListener("click", function() {
        document.querySelector(".nav-links").classList.toggle("active");
    });
      // Show popup when page loads
    window.onload = function() {
      document.getElementById("welcomePopup").style.display = "block";
    };

    // Close popup
    function closeWelcomePopup() {
      document.getElementById("welcomePopup").style.display = "none";
    }
    
// count down
    function createCountdown(elementId, targetDate) {
    var timer = setInterval(function() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(timer);
            document.getElementById(elementId).innerHTML = "🎉 Event Started!";
        } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById(elementId).innerHTML =
                days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }
    }, 1000);
}

// Set different target dates for each topic
createCountdown("count1", new Date(2025, 8, 7, 0, 0, 0).getTime()); // Hackathon
createCountdown("count2", new Date(2025, 8, 6, 0, 0, 0).getTime()); //cosmetic play
createCountdown("count3", new Date(2025, 8, 8, 0, 0, 0).getTime()); // Gaming
createCountdown("count4", new Date(2025, 8, 1, 0, 0, 0).getTime());// Video Editing
createCountdown("count5", new Date(2025, 8, 3, 0, 0, 0).getTime()); // Dance & singing
