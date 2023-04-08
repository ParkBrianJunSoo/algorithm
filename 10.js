function solution(phone_number) {

    let lenNum = phone_number.length
    let secretNum = '*'.repeat(lenNum - 4)
    
    for (let i = lenNum - 4; i != lenNum; i++) {
        secretNum += phone_number[i]
    }
    return secretNum
}