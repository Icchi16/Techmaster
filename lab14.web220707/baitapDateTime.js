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

const now = new Date();
console.log(humanize(now));

now.setSeconds(now.getSeconds() - 3);
console.log(humanize(now));

now.setSeconds(now.getSeconds() - 40);
console.log(humanize(now));

now.setMinutes(now.getMinutes() - 10);
console.log(humanize(now));
