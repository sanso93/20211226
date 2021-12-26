// 자바스크립트 객체
// 메서드와 속성
// 자동차
// 속성, 멤버필드, properties

// 배.배기량 = 30000
// 자동차.배기량 = 2000;
// 자동차.컬러 = "yellow";
// 자동차.브랜드 = "현대";
// 자동차.엑셀(); // 행위를 할 때는 함수를 만듬 , 속도 증가
// 자동차.브레이크(); //속도 감소


//NodeList : 유사배열


const items = document.querySelectorAll("#computer li");

function computerSelect(){

    for(let i=0; i<3; i++){
        console.log(i);
        items[i].style.display = "none";
    }
    const random = Math.floor(Math.random()*3);
    items[random].style.display = "block";
}
setInterval(computerSelect,100);

//itterable : 순환이 가능한













// console.log(item);

// //null은 데이터 타입 중 하나
// //배열은 번호 메기기.... 배열은 규칙이 없는 것들에 번호를 메길 때 주로 사용
// const 우리반 = ["홍길동","둘리","고길동"]
// console.log(우리반[0]);

// const now = new Date(); 
// const days = ["일","월","화","수","목","금","토"];
// const months = ["Jan", "Feb", "Mar" , "Apr", "May" , "Jun", "Jul","","","","","Dec"];
// console.log(days[now.getDay()]);
// console.log(now.getMonth()+1);
// console.log(months[now.getMonth()]);