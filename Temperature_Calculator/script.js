let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let degrees = document.getElementById("degree").value;
  console.log(degrees);
  let type = document.getElementById("type1").value;
  console.log(type);
  let output = document.getElementById('output');
  let deg2;
  if (type == "celcius") {
    deg2 = (degrees * 9.0) / 5.0 + 32.0;
    output.innerHTML = `${deg2} °F`
  } else {
    deg2 = (degrees - 32) * 5/9;
    output.innerHTML = `${deg2} °C`
  }
});
