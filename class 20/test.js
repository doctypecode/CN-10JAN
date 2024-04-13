for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.dir(i);
  }, 2000);
}

// 0,1,2,3,4

// setTimeout() - 1 - setTimeout() - 2;
// setTimeout() - 3;
// setTimeout() - 4;
// setTimeout() - 5;

// i = 5;
// setTimeout(() => {
//   //  closure => i = 0
//   console.log(i);
// }, 2000);
