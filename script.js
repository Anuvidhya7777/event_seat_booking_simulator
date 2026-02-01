document.getElementById("generate").addEventListener("click", () => {
    const rows = Number(document.getElementById("rows").value);
    const cols = Number(document.getElementById("cols").value);

    const container = document.getElementById("seat-container");
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${cols}, 40px)`;

    let bookedCount = 0;
    document.getElementById("count").textContent = "Booked Seats: 0";



    for (let r = 0; r < rows; r++) {
        for (let c = 1; c <= cols; c++) {
            const seat = document.createElement("div");
            seat.className = "seat";
            seat.textContent = String.fromCharCode(65 + r) + c;

            // 👇 THIS WAS MISSING
            seat.addEventListener("click", () => {
                if (seat.classList.contains("booked")) return;
                seat.classList.toggle("selected");
            });

            container.appendChild(seat);
        }
    }

    document.getElementById("confirm").onclick = () => {
        const selectedSeats = document.querySelectorAll(".seat.selected");

        selectedSeats.forEach(seat => {
            seat.classList.remove("selected");
            seat.classList.add("booked");
            bookedCount++;
        });
         bookedCount += selectedSeats.length;
        document.getElementById("count").textContent =
            `Booked Seats: ${bookedCount}`;
    };
});
