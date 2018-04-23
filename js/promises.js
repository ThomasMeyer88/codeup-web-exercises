
// const wait = waitNum => {
//     const waitPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (waitNum < 2000) {
//                 resolve();
//             } else {
//                 resolve();
//             }
//         }, waitNum);
//     });
//
//     return waitPromise;
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


const findCommit = userName => {
    fetch(`https://api.github.com/users/${userName}/events`,
        {headers: {'Authorization': 'token YOUR TOKEN HERE'}})
        .then((response) => response.json())
        .then((events) => console.log(events[0].payload.commits))
        .catch(() => console.log("Error!"));
    
};



