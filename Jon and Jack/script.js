!(function consoleSwimmers() {
  let schedule = [];
  for (let i = 1; i < 367; i++) {
    let day = `day_${i}`;
    if (i % 50 === 0) {
     schedule.push({
        [`${day}`]: "John and Jack will swim"
      });
    } else if (i % 3 === 0) {
        schedule.push({
            [`${day}`]: "Jack will swim"
          });
    } else {
        schedule.push({
            [`${day}`]: "Jon will swim"
          });
    }
  }
  console.log(schedule);
})();

document.querySelector("#btn").addEventListener("click", e => {
  e.preventDefault();
  let day = +document.querySelector("#input").value;
  getswimers = value => {
    let p = document.createElement("p");
    let a = document.createTextNode(`${value} on day ${day}`);
    p.appendChild(a);
    document.querySelector("#swimer").appendChild(p);
  };

  if (day % 50 === 0) {
    getswimers("John and Jack will swim");
  } else if (day % 3 === 0) {
    getswimers("Jack will swim");
  } else {
    getswimers("Jon will swim");
  }
});
