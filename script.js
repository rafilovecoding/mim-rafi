function nextPage(pageNumber) {

    document.getElementById("page" + pageNumber).classList.add("hidden");

    document.getElementById("page" + (pageNumber + 1)).classList.remove("hidden");

}

function goBack(pageNumber) {

    document.getElementById("page" + pageNumber).classList.add("hidden");

    document.getElementById("page" + (pageNumber - 1)).classList.remove("hidden");

}
