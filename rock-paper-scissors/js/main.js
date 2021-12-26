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

const computerItems = document.querySelectorAll("#computer li");
const humanItems = document.querySelectorAll("#human li");
const resultList = document.querySelector('#resultList');
const resultCover = document.querySelector('#resultCover');
const btnRestart = document.querySelector('#btnRestart');
let computerPick = 0;
let gameCount = 0;

function computerSelect() {
    /*
    for(let i=0; computerItems.length<3; i++){
        // console.log(i);
        computerItems[i].style.display = "none";
    }
    */

    //순서가 필요할땐 i를 씀, 변수명은 아무렇게나 써도 된다. forEach가 알아서 호출하는 것

    computerItems.forEach(function (item) {
        item.style.display = "none"
    });

    const random = Math.floor(Math.random() * 3);
    computerItems[random].style.display = "block";
    computerPick = random;
}

let clearID = setInterval(computerSelect, 10);
let clearTimeoutID = null;

const clickItem = function (e) {
    // addEventListener -> 사용자가 특정 event를 발생시키는지 듣고 있어라는 뜻
    //console.log("드디어 나는 사용자의 click 이벤트를 받을 수 있게 되었다" + i);
    //setTimeOut -> 한번만 실행할 때 사용

    clearInterval(clearID);

    const userPick = parseInt(e.currentTarget.dataset.id);
    console.log("userPick===", userPick);



    if (computerPick === userPick) {
        // //console.log('비겼습니다');
        // const inner = document.createElement("li");
        // inner.classList.add("draw");
        // inner.innerHTML = "<span>D</span>";
        // resultList.appendChild(inner);

        resultList.innerHTML += `<li class="draw"><span>D</span></li>`

    } else if ((computerPick === 0 && userPick === 1) ||
        (computerPick === 1 && userPick === 2) ||
        (computerPick === 2 && userPick === 0)
    ) {
        //console.log('이겼습니다');
        resultList.innerHTML += `<li class="win"><span>W</span></li>`
    } else {
        //console.log('졌습니다');
        resultList.innerHTML += `<li class="lose"><span>L</span></li>`
    }

    removeEventListener();

    if (clearTimeoutID !== null) {
        clearTimeout(clearTimeoutID);
    }

    clearTimeoutID = setTimeout(function () {
        clearID = setInterval(computerSelect, 10);
        humanItems.forEach(function (item, i) {
            item.addEventListener("click", clickItem);
        });

    }, 1000);
    gameCount++;
    if(gameCount>=3){
        clearTimeout(clearTimeoutID);
        resultCover.classList.remove("off");
        resultCover.classList.add("on");
    }

   

}





function removeEventListener() {
    humanItems.forEach(function (item, i) {
        item.removeEventListener("click", clickItem);
    })
}


humanItems.forEach(function (item, i) {
    item.addEventListener("click", clickItem);
})



btnRestart.addEventListener("click",function(){
    resultCover.classList.remove("on");
    resultCover.classList.add("off");
    gameCount = 0;
    resultList.innerHTML = ""
    clearTimeoutID = setTimeout(function () {
        clearID = setInterval(computerSelect, 10);
        humanItems.forEach(function (item, i) {
            item.addEventListener("click", clickItem);
        });

    }, 1000);
});

// Q. 이벤트 두개 이상 넣는 법?

























//백준 알고리즘
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




let sum = 0;

for (let i = 0; i <= 10; i++) { //알트 키 누르고 코드 이동 가능
    if (i % 2 === 0) {
        continue; // 조건을 만족해서 continue를 만나면 아래 문장은 건너 뛴다. 반복문은 계속 이어진다.
        //break는 조건을 만족하면 완전히 for문을 빠져나가는 것이다.        
    }
    sum = sum + i;
    console.log("i===" + i, "sum===" + sum);

}


//rest api url/user/01 예시)TMDB
const fruits = ["orange", "apple", "kiwi", "shine", "totato"];
console.log(fruits.length);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(function (item, i) {
    console.log(item);
}); // 배열 반복문일 때 이걸 쓰는게 좋음, 배열은 추가가 되기 때문에

//자바스크립트 변수는 자동차 썬팅 같은 것. 밖에서는 안을 못보지만 안에서는 밖 볼수 있음
//itterable : 순환이 가능한


const sc01 = 10;

function scope01() {
    const innerSc01 = sc01;
    //console.log(sc01);
    const aa = 10;
    if (true) {
        var var01 = 10;
        let let01 = 20;
        const const01 = 30;
    }
    for (var i = 0; i < 3; i++) {
        var temp = i;
    }
    //var는 function() 스코프 let과 const는 block 스코프.... // var는 function() 스코프(함수 단위로 값을 유지) / let과 const는 block 스코프
    console.log("var01==", var01);
    console.log("temp==", temp);
    console.log("i===", i);
    //console.log(let01);
    //console.log(const01);


}
scope01();
//console.log(sc01);