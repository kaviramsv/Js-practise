// /// async which has not yet finished running will have a pending state

// const pr2 = Promise.reject("second");
// const pr3 = Promise.reject("third");
// const pr1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("");
//   }, 1000)
// });
// Promise.all([pr3, pr2, pr1])
//   .then((values) => { console.log(values) })  //if all resolves=>[ 'first resolved', 'second', 400 ]
//   .catch((err) => { console.log(err) })//second => if one fails shows the first rejected one 


const makeRq = (req) => {
  return new Promise((resolve, reject) => {
    if (req === "google") {
      resolve("google says hi")
    } else {
      reject("req rejected")
    }
  })
}
const makeRq2 = (ip) => {
  return new Promise((resolve, reject) => {

    resolve("second req " + ip)

  })
}

makeRq("fa")
  .then(resp => {
    return makeRq2(resp);
  })
  .then(resp => {
    console.log(resp)
  })
  .catch(err => console.log("err is", err))

