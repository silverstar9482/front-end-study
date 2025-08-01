const numbers = [51, 20, 12, 5, 2];

// 01 numbers의 절반값을 구하시오. (단, 정수로) -> [ 25, 10, 6, 2, 1 ]
//map 사용
const halfNumbers = numbers.map((number) => parseInt(number / 2));
console.log(halfNumbers);

// 02 numbers에서 15미만인 숫자를 모두 구하시오 [12,5,2]
const under15 = numbers.filter((numbers) => numbers < 15);
console.log(under15);

// 03 numbers에서 15보다 작은 첫 번째 수를 구하시오. 12
const under15First = numbers.find((number) => number < 15);
console.log(under15First);

// 03. str에서 '5'가 몇개인지 출력하기 -> 2
const str = "15352"; // -> ['1','5','3','5','2']
const findFive = str.split("").filter((x) => x === "5").length;
console.log(findFive);

// 04. number2에서 전체적으로 '5'가 몇개있는지 구하시오. -> 3
const numbers2 = [153, 7, 55];
// hint -> 배열 -> 문자열로
// const strNumbers = numbers2.map((number) => number.toString());
const strNumbers = [...numbers.join("")].filter((num) => num === "5").length;
console.log(strNumbers);

const users = ["Daniel", "Don", "donald", "Micheal", "Juliet"];
// 05. users에서 'd', 'D'가 들어간이름만 배열로 반환 includes, toUpperCase, toLowerCase
const findD = users.filter((d) => d.toLowerCase().includes("d"));
console.log(findD);

// 5) 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다.
// 가격 : 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다.
//양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 함수를 완성해보세요.
function yangKochi(n, k) {
    // const yangTotal = n * 12000 + 2000 - k * 3;
    const discount = Math.trunc(n / 10) * 2000; // 서비스음료의 개수 * 음료가격
    const price = n * 12000 + k * 2000;

    return price - discount;
}

console.log(yangKochi(10, 3)); // 양꼬치 10인분, 음료 3개
