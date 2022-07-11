// 짝수와 홀수

// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"

function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// 실행을 위한 테스트코드
console.log(solution(2));