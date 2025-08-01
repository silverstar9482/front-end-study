// "https://dev.wenivops.co.kr/services/fastapi-crud/1/blog"
// 렌더링 결과가 담긴 그릇 : #blogList

const blogList = document.querySelector("#blogList");

// 1. 렌더링
function renderingBlog(data) {
    // 파싱된 데이터를 매개변수로 받아서 사용할 수 있게 만듬
    // console.log("data", data);
    data.forEach((item) => {
        blogList.innerHTML += `<li>
        <h2>${item.title}</h2>
        <strong>작성자: ${item.author}</strong>
        <time datetime=${item.date}>${item.date}</time>
        <p>조회수: ${item.views_count}</p>
        </li>`;
    });
}

// 2. 블로그 목록 조회
function fetchBlog() {
    // 1. 네트워크 요청(블로그 목록 요청) => 응답: Promise 객체
    fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/blog") // method 생략가능
        // 2. 응답 헤더
        .then((response) => {
            // 에러처리 => HTTP 요청에 의한 에러 처리를 위함!
            if (!response.ok) {
                throw new Error("블로그 목록 조회에 실패했습니다.");
            }

            // json파싱
            return response.json(); // 이것의 결과도 Promise로 반환
        })
        .then((data) => {
            // 파싱결과 사용
            console.log("블로그 목록: ", data);
            renderingBlog(data); // 파싱된 data 넘겨주는 작업
        })
        .catch((error) => {
            // 에러처리
            console.error(error);
        });
}

fetchBlog();

/*
function getProducts() {
    fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/product")
    .then((response) => {
      // 응답 객체를 받음
        console.log(response);
      //JSON 파싱 => 원하는 형식에 맞게 실제 데이터를 꺼내기 위함.
        return response.json();
    })
    .then((json) => {
      // 파싱 결과를 사용
        console.log(json);
    })
    .catch((error) => {
      // 오류가 발생한 경우 처리
        console.error(error);
    });
}
// getProducts();
*/
