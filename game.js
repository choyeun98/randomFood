const clickBtn = document.getElementById('js_clickBtn');
const foodImage = document.getElementById('js_foodImg');
const input = document.getElementById('js_foodNameInput');


const IMAGE_NUM = 7;

const foodName = ['간장게장', '김밥', '콩국수', '치킨', '떡볶이', '비빔밥', '삼겹살'];


function createNum(){
    const genNum = Math.floor(Math.random() * IMAGE_NUM);
    handleClick(genNum)
}


function paintImg(num){
    const image = new Image();
    image.src = `images/${num}.jpg`;
    image.classList.add('imgHandle');
    foodImage.appendChild(image);
    input.value = foodName[num];
}


function handleClick(num){
    if(foodImage.childElementCount === 1){
        const delImg = foodImage.firstChild;
        foodImage.removeChild(delImg);
        paintImg(num);
    }
    else{
        paintImg(num);
    }
}



if(clickBtn){
    clickBtn.addEventListener("click", createNum);
}

