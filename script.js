const input = document.querySelector(".input");
const bnt = document.querySelector(".btn");
const temp1 = document.querySelector(".temp1");
const time = document.querySelector(".time");
const day = document.querySelector(".day");
const year = document.querySelector(".year");
const image = document.querySelector(".image");
const loc = document.querySelector(".loc");
const mist = document.querySelector(".mist");
bnt.addEventListener("click", () => {
  const location = input.value;
  getDataandSetData(location);
});

async function getDataandSetData(location) {
  const url = `http://api.weatherapi.com/v1/current.json?key=095284ed62444752a8195241242207&q=${location}&aqi=no`;
  const data = await fetch(url);
  if (data.status != 200) {
    alert("invalid location");
    return;
  }
  const json = await data.json();
  console.log("fetched data", json);
  loc.innerText = json.location.name;
  temp1.innerText = json.current.temp_c;
  image.src = json.current.condition.icon;
  const [curYear, curTime] = json.current.last_updated.split(" ");
  time.innerText = curTime;
  year.innerText = curYear;
  const val1 = json.current.condition.text;
  mist.innerText = val1;
}
