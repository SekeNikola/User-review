// Check size of the screen
if (screen.width <= 699) {
    document.location = "mobile.html";
    }

function text() {
    const first = document.getElementById("show1");
    const second = document.getElementById("show2");
    const third = document.getElementById("show3");
    const fourth = document.getElementById("show4");
    const fifth = document.getElementById("show5");

    function showText1() {
        second.style.display = "none"
        third.style.display = "none"
        fourth.style.display = "none"
        fifth.style.display = "none"

        first.style.display = "block"
    };

    function showText2() {
        first.style.display = "none"
        third.style.display = "none"
        fourth.style.display = "none"
        fifth.style.display = "none"

        second.style.display = "block"
    };

    function showText3() {
        first.style.display = "none"
        second.style.display = "none"
        fourth.style.display = "none"
        fifth.style.display = "none"

        third.style.display = "block"
    };

    function showText4() {
        first.style.display = "none"
        second.style.display = "none"
        third.style.display = "none"
        fifth.style.display = "none"

        fourth.style.display = "block"
    };

    function showText5() {
        first.style.display = "none"
        second.style.display = "none"
        third.style.display = "none"
        fourth.style.display = "none"

        fifth.style.display = "block"
    };

    // Images
    const firstImg = document.getElementById("img1")
    const secoundImg = document.getElementById("img2")
    const thirdImg = document.getElementById("img3")
    const fourthImg = document.getElementById("img4")
    const fifthImg = document.getElementById("img5")
    const div = document.getElementById('images').querySelectorAll('div')[4].querySelector('img').src

    if (firstImg.src === div) {
        showText1()
    } else if (secoundImg.src === div) {
        showText2()

    } else if (thirdImg.src === div) {
        showText3()

    } else if (fourthImg.src === div) {
        showText4()

    } else if (fifthImg.src == div) {
        showText5()
    }
};

// Show text on next button click
document.getElementById('arrow-right').addEventListener('click', () => {
    let lastImg = document.getElementById('images').lastElementChild
    // Prepend image
    let parent = document.getElementById('images');
    parent.prepend(lastImg);
    text()
});

// Append image that is clicked

let allDivs = document.querySelectorAll('img')
for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener('click', (e) => {

        parent = document.getElementById('images')
        parent.append(e.target.parentElement)

        // Append text
        let div = document.getElementById('images').querySelectorAll('div')[4].querySelector('img').src
        let imgSrc = e.target.src
        if (div === imgSrc) {
            text()
        }
    }), false
};