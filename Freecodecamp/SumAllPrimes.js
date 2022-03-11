/*Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 
4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/

function sumPrimes(num) {
    if (!Number.isInteger(num) && num < 0) {
        throw Error("wrong input");
    }
    // if (num === 1) {
    //     return 1;
    // }

    let arrOfPrimes = [];
   

    for (let i = 2; i <= num; i++) {
        let flag = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = false;
            }
        }
        if (flag) {
            arrOfPrimes.push(i);
        }
    }
   

    const sum = arrOfPrimes.reduce((acc, elem) => {
        return (acc += elem);
    }, 0);
    // return arrOfPrimes;
    return sum;
}

// return num;

console.log(sumPrimes(977));

/*
sumPrimes(10) should return a number.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.
*/
