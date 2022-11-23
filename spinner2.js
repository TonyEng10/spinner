// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// let delay1 = 0
// setTimeout(() => {
//   process.stdout.write('\r|   ')
// }, 100);


// setTimeout(() => {
//   process.stdout.write('\r/   ')
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ')
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ')
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ')
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ')
// }, 1500);

let a = setInterval(function() {
  setTimeout(function(){process.stdout.write('\r|   ')}, 0)
  setTimeout(function(){process.stdout.write('\r/   ')}, 400)
  setTimeout(function(){process.stdout.write('\r-   ')}, 800)
  setTimeout(function(){process.stdout.write('\r\\   ')}, 1200)
}, 1000);