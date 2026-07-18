function nextPage(pageNumber) {

    document.getElementById("page" + pageNumber).classList.add("hidden");

    document.getElementById("page" + (pageNumber + 1)).classList.remove("hidden");

}

function goBack(pageNumber) {

    document.getElementById("page" + pageNumber).classList.add("hidden");

    document.getElementById("page" + (pageNumber - 1)).classList.remove("hidden");

}
function moveButton() {

    const btn = document.getElementById("noBtn");

    btn.style.position = "absolute";

    btn.style.left = Math.random() * 250 + "px";

    btn.style.top = Math.random() * 500 + "px";

    document.getElementById("slapImg").style.display = "block";

    document.getElementById("funText").style.display = "block";
}

function yesAnswer() {

    alert("ইয়ে! 💜");
}
