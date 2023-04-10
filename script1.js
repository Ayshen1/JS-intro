let reqem = 34
let say = 0;

if (reqem < 50) {
  say = Math.floor(reqem / 3);
} else if (reqem >= 50 && reqem <= 100) {
  say = Math.floor(reqem / 5);
} else {
  say = Math.floor(reqem / 8);
}

console.log("bolunen reqem sayi",say);