function hideAllScreens() {
    document.querySelectorAll(".card").forEach(card => {
        card.classList.add("hidden");
    });
}

function showScreen(id) {
    hideAllScreens();
    document.getElementById(id).classList.remove("hidden");
}

/* Button flows */

// Screen 1
function showScreen2() {
    showScreen("screen2");
}

// Screen 2
function showScreen3() {
    showScreen("screen3");
}

function showScreen6() {
    showScreen("screen6");
}

// Screen 3
function showScreen4() {
    showScreen("screen4");
}

// Screen 2
function showScreen5() {
    showScreen("screen5");
}

// Screen 4 & 6 go to final
function showScreen5() {
    showScreen("screen5");
}

let noClickCount = 0;

function handleNoClick() {
    const btn = document.getElementById("noBtn");

    const moves = [
        "translateX(150px)",
        "translateX(-150px)",
        "translateY(100px)"
    ];

    if (noClickCount < 3) {
        btn.style.transform = moves[noClickCount];
        noClickCount++;
    } else {
        btn.innerText = "Sige na nga!";
        btn.style.transform = "translateX(0)";
        btn.onclick = function() {
            showScreen("screen2");
        };
    }
}

/* Screen control */
function hideAllScreens() {
    document.querySelectorAll(".card").forEach(card => {
        card.classList.add("hidden");
    });
}

function showScreen(id) {
    hideAllScreens();
    document.getElementById(id).classList.remove("hidden");
}
