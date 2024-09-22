// const num = 144

// function ganjilGenap(num) {
//     if (num % 2 == 0) {
//         return 'genap'
//     } else {
//         return 'ganjil'
//     }
// }

// console.log(ganjilGenap(num))

// function genap(i) {
//     if (i % 2 === 0) {
//         return i
//     } else {
//         return -1
//     }
// }

// for (let i = 1; i <= num; i++) {
//     // if (i % 2 === 0) {
//     //     console.log(i)
//     // }
//     if(genap(i) === -1) {
//         continue
//     }
//     console.log(genap(i))
// }

const isPrime = 21

function checkIsPrime(num) {
    let flagging = true

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flagging = false
            break
        }
    }

    return flagging
}

console.log(checkIsPrime(isPrime))

// open weather api cuaca, create 1 halaman untuk menampilkan
// 