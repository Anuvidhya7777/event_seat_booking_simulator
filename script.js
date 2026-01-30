document.getElementById("generate").addEventListener("click", () => {
    const rows = Number(document.getElementById("rows").value);
    const cols = Number(document.getElementById("cols").value);

    const container = document.getElementById("seat-container");
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${cols}, 40px)`;

    for (let r = 0; r < rows; r++) {
        for (let c = 1; c <= cols; c++) {
            const seat = document.createElement("div");
            seat.className = "seat";
            seat.textContent = String.fromCharCode(65 + r) + c;
            container.appendChild(seat);
        }
    }
    let bookedCount = 0;
    seat.addEventListener("click", () => {
        if (seat.classList.contains("booked")) {
        return; // already booked, stop action
    }
    seat.classList.add("booked");
    bookedCount++;
    document.getElementById("count").textContent = `Booked Seats: ${bookedCount}`;



});

});
