const doWorkPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 7, 8])
        reject('Things went wrong')
    }, 2000)
})

doWorkPromises.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})