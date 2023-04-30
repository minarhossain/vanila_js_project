function age() {
    const dayOne = document.getElementById("date").value;
    const monthOne = document.getElementById("month").value;
    const yearOne = document.getElementById("year").value;


    const date = new Date();

    let dayTwo = date.getDate();
    let monthTwo = 1 + date.getMonth();
    let yearTwo = date.getFullYear();

    const month = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31];


    if (dayOne > dayTwo) {
        dayTwo = dayTwo + month[monthTwo - 1];
        monthTwo = monthTwo - 1;
    }

    if (monthOne > monthTwo) {
        monthTwo = monthTwo + 12;
        yearTwo = yearTwo - 1;
    }

    const d = dayTwo - dayOne;
    const m = monthTwo - monthOne;
    const y = yearTwo - yearOne;


    document.getElementById('age').innerHTML = ` Your age is ${y} Years ${m} Month ${d}  Days`;
}