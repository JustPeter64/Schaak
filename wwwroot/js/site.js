//schaakbord
const schaakbord = document.getElementById("schaakbord");
const boordArray = [];
// const verticaleIndex = ["8", "7", "6", "5", "4", "3", "2", "1"];
// const horizontaleIndex = ["a", "b", "c", "d", "e", "f", "g", "h"];


for (let i = 0; i < 8; i++) {
    boordArray[i] = [];
    for (let j = 0; j < 8; j++) {
        boordArray[i][j] = document.createElement("div");
        boordArray[i][j].classList.add("veld");
        if ((i + j) % 2 == 0) {
            boordArray[i][j].classList.add("wit");
        } else {
            boordArray[i][j].classList.add("zwart");
        }
        schaakbord.appendChild(boordArray[i][j]);
    }
}

//stukken
const stukken = {
    wit: {
        koning: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/45px-Chess_klt45.svg.png",
        koningin: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/45px-Chess_qlt45.svg.png",
        toren: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/45px-Chess_rlt45.svg.png",
        paard: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/45px-Chess_nlt45.svg.png",
        loper: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/45px-Chess_blt45.svg.png",
        pion: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png"
    },
    zwart: {
        koning: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/45px-Chess_kdt45.svg.png",
        koningin: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/45px-Chess_qdt45.svg.png",
        toren: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/45px-Chess_rdt45.svg.png",
        paard: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/45px-Chess_ndt45.svg.png",
        loper: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/45px-Chess_bdt45.svg.png",
        pion: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png"
    }
}

//fucties
function beginPosities() {
    for (let i = 0; i < 8; i++) {
        boordArray[1][i].innerHTML = `<img src="${stukken.zwart.pion}" class="stuckIMG">`;
        boordArray[6][i].innerHTML = `<img src="${stukken.wit.pion}" class="stuckIMG">`;
    }
    boordArray[0][0].innerHTML = `<img src="${stukken.zwart.toren}" class="stuckIMG">`;
    boordArray[0][1].innerHTML = `<img src="${stukken.zwart.paard}" class="stuckIMG">`;
    boordArray[0][2].innerHTML = `<img src="${stukken.zwart.loper}" class="stuckIMG">`;
    boordArray[0][3].innerHTML = `<img src="${stukken.zwart.koningin}" class="stuckIMG">`;
    boordArray[0][4].innerHTML = `<img src="${stukken.zwart.koning}" class="stuckIMG">`;
    boordArray[0][5].innerHTML = `<img src="${stukken.zwart.loper}" class="stuckIMG">`;
    boordArray[0][6].innerHTML = `<img src="${stukken.zwart.paard}" class="stuckIMG">`;
    boordArray[0][7].innerHTML = `<img src="${stukken.zwart.toren}" class="stuckIMG">`;

    boordArray[7][0].innerHTML = `<img src="${stukken.wit.toren}" class="stuckIMG">`;
    boordArray[7][1].innerHTML = `<img src="${stukken.wit.paard}" class="stuckIMG">`;
    boordArray[7][2].innerHTML = `<img src="${stukken.wit.loper}" class="stuckIMG">`;
    boordArray[7][3].innerHTML = `<img src="${stukken.wit.koningin}" class="stuckIMG">`;
    boordArray[7][4].innerHTML = `<img src="${stukken.wit.koning}" class="stuckIMG">`;
    boordArray[7][5].innerHTML = `<img src="${stukken.wit.loper}" class="stuckIMG">`;
    boordArray[7][6].innerHTML = `<img src="${stukken.wit.paard}" class="stuckIMG">`;
    boordArray[7][7].innerHTML = `<img src="${stukken.wit.toren}" class="stuckIMG">`;
}

beginPosities();