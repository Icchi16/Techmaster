const options = { year: "numeric", month: "2-digit", day: "2-digit" };
// (1)

function curDate() {
  let date = new Date();
  return date.toLocaleDateString("vi-VN", options);
}

// console.log(curDate());

// (2)

function curTime() {
  let date = new Date();
  return date.toLocaleTimeString("vi-VN", options);
}

// console.log(curTime());

// (3)
function weekday() {
  let date = new Date();
  let result = ("T" + (date.getDay() + 1)).slice(-2);
  if (result === "T1") return "CN";
  else return result;
}

// (4)

function getDateAgo(days) {
  let date = new Date();
  let result = date.getTime();
  date = new Date(result - days * 86400000);
  return date.toLocaleDateString("vi-VN", options);
}

// console.log(getDateAgo(1));

// (5)

function getLastDayOfMonth(year, month) {
  let lastDay = new Date(year, month + 1, 0);
  return lastDay.getDate();
}

// console.log(getLastDayOfMonth(2022, 7));

// (6)

// function ()



// (7)
function humanize(date) {
  const now = new Date();

  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 5) {
    return "Just Now";
  } else if (diff < 60) return `${diff} scond ago`;
  else if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  else if (diff < 86400) return `${Math.floor(diff / 3600)} scond ago`;
  else if (diff < 2592000) return `${Math.floor(diff / 48600)} days ago`;
  else if (diff < 946080000) return `${Math.floor(diff / 2592000)} months ago`;
  else return `Long time ago`;
}

// const now = new Date();
// console.log(humanize(now));

// now.setSeconds(now.getSeconds() - 3);
// console.log(humanize(now));

// now.setSeconds(now.getSeconds() - 40);
// console.log(humanize(now));

// now.setMinutes(now.getMinutes() - 10);
// console.log(humanize(now));
