
        window.onload = function() {
            var hasCookie = document.cookie.indexOf("backupxxx") !== -1;
            if (hasCookie) { 
              startTimer();
            } else {
                document.getElementById("bttonxnxx").style.display = "none";
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
                document.getElementById("bttonxnxxtimer").style.display = "block";
                document.getElementById("bttonxnxxtimer").innerText = "Tunggu " + countdown + " detik...";
            }
        }
        function showElement() {
            var element = document.getElementById("telo").style.display = "block";
        }
        function handleClick() {
            document.cookie = "backupxxx=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.open("https://www.example.com", "_blank");
        }
