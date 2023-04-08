function solution(n) {
    var answer = 0;
    let str = n.toString().split('') // 반복문에 자연수가 들어갈 수 없어서 문자열로 바꿔준 후 split을 통해 문자열로 바뀐 숫자를 하나하나 쪼개어 준다
    
    // str.forEach ((item) => {
    //     answer += Number(item)
    //     console.log(item, answer)
    // })
    
    for (let i = 0; i < str.length; i++) { //반복문을 통해 순회하면서
        answer += Number(str[i]) // 문자열로 변환되었던 숫자 하나 하나를 정수로 바꿔주면서 더해준다.
    }

    return answer;
}