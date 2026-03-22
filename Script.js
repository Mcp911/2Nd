let box = document.getElementById("no-btn1");
let clickCount = 0;

function moveBox() {
    clickCount++;

    // Pehle baar click hote hi position absolute kardo taaki wo bhag sake
    if(box.style.position !== "absolute") {
        box.style.position = "absolute";
    }

    // Sabhi headers ko pehle hide karein
    document.getElementById("h1").style.display = "none";
    document.getElementById("h2").style.display = "none";
    document.getElementById("h3").style.display = "none";

    // Header switching logic: clickCount ke hisaab se
    if(clickCount === 1) {
        document.getElementById("h1").style.display = "block";
    } else if(clickCount === 2) {
        document.getElementById("h2").style.display = "block";
    } else if(clickCount >= 3) {
        document.getElementById("h3").style.display = "block";
    }

    // Random movement logic sirf No button ke liye
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    
    box.style.left = x + "px";
    box.style.top = y + "px";
}

// mouseover hata diya, ab sirf click par chalega
box.onclick = moveBox;

function showLove() {
    // 1. Saare purane headers aur buttons chhupao
    document.querySelectorAll('.header, .btn-container, .air').forEach(el => {
        el.style.display = 'none';
    });

    // 2. No button ko bhi gayab karo (kyunki wo absolute ho sakta hai)
    document.getElementById("no-btn1").style.display = 'none';

    // 3. Love page dikhao
    let lovePage = document.getElementById("love-page");
    lovePage.style.display = 'flex';
    
    // Background color change for celebration
    document.body.style.backgroundColor = "pink";
}

// Baki aapka moveBox wala purana code niche rahega...