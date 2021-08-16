const wbtn = document.getElementById("white_btn");

// html에서 해당되는 wbtn click을 실행했을 때 
wbtn.addEventListener("click", function(){

    // 전체 영역에 있는 id 영역에 className을 변경함으로써 
    // 그에 맞는 css로 변경한다.
    document.getElementById("target").className = "white"
})

const bbtn = document.getElementById("black_btn");

bbtn.addEventListener("click", function(){

    document.getElementById("target").className = "black"
})

const borderbtn = document.getElementById("border_btn");

borderbtn.addEventListener("click", function(){

    document.getElementById("target").classList.add("border")
})