function solution(n) {
    var answer = []; // 빈 배열 선언
    answer.push(n) // 빈 배열에 n의 값을 넣어줌
    
    let str = answer.toString().split('').sort() // 배열에 넣어진 n 값을 문자열로 바꿔준 후 split을 통해 나눠준 후 sort로 작은수부터 큰수대로 정렬함

    for(let i = 0; i < str.length; i++) { // 반복문을 돌려
        str[i] = parseInt(str[i]) // parseInt를 통해 문자열을 정수로 반환하여 str(배열)에 차례대로 넣어줌
    }
    
    str.reverse(); // 반복문을 통해 나온 배열의 값을 거꾸로 바꿔줌
    
    return str;
}
console.log(solution(12345))