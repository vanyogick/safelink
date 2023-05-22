
        window.onload = function() {
            var hasCookie = document.cookie.indexOf("asw") !== -1;
            if (hasCookie) { 
              startTimer();
            } else {
                document.getElementById("bttonxnxxtimer").style.display = "none";
            }
        };
        var countdown = 10; // Waktu dalam detik sebelum tombol muncul
        var timer;

        function startTimer() {
            timer = setInterval(updateTimer, 1000);
        }

        function updateTimer() {
            countdown--;

            if (countdown === 0) {
                clearInterval(timer);
                document.getElementById("bttonxnxxtimer").style.display = "none";
                document.getElementById("button-container").style.display = "block";
            } else {
                document.getElementById("bttonxnxxtimer").innerText = "Tunggu " + countdown + " detik...";
            }
        }
        function showElement() {
            var element = document.getElementById("telo").style.display = "block";
        }
        function handleClick() {
            window.open("https://www.example.com", "_blank");
        }
