/* function solution(number){
    let count = 0
    for (let i = 0; i < number; i++){
      if(number % 3 === 0 || number % 5 === 0) {
        if(number % 3 === 0 && number % 5 === 0){
            count += 1
        }
      } count += i
    }
    return count
  }

  console.log(solution(10)); */

  function solution(number){
    let count = 0
    for (let i = 0; i <= number; i++){
      if(number % 3 == 0 ) {
        console.log(i)
        count += i
      }
    }return count
}

console.log(solution(10));
