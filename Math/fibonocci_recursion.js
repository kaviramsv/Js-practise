const fibonocci = (num) => {
  if (num < 2) {
    return num;
  } else {
    return fibonocci(num - 1) + fibonocci(num - 2);
  }
}

for (let i = 0; i < 15; i++) {
  console.log(fibonocci(i));
}

