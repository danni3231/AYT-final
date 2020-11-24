const index = location.search.replace('?', '');
const container = document.querySelector('.container');

const socket = io();

function preload() {
    images = [];
    sombra = loadImage('./data/sombra.png');
    for (const route of exposiciones[index].images) {
        let image = loadImage(route);
        images.push(image);
    }
}

function setup() {
    //initialize canvas
    createCanvas(windowWidth, windowHeight);

    imageMode(CENTER);
    textAlign(LEFT, TOP);

    loop = 0;
    titulo = exposiciones[index].titulo;
    autor = exposiciones[index].autor;

    words = [];
    switch (parseInt(index)) {
        case 0:
            words.push(new Word(exposiciones[index].keyWords[0], 1032, 530));
            words.push(new Word(exposiciones[index].keyWords[1], 160, 430));
            words.push(new Word(exposiciones[index].keyWords[2], 1134, 737));
            words.push(new Word(exposiciones[index].keyWords[3], 1032, 150));
            words.push(new Word(exposiciones[index].keyWords[4], 1474, 260));
            words.push(new Word(exposiciones[index].keyWords[5], 300, 845));
            words.push(new Word(exposiciones[index].keyWords[6], 116, 604));
            words.push(new Word(exposiciones[index].keyWords[7], 960, 883));

            break;

        case 1:
            words.push(new Word(exposiciones[index].keyWords[0], 1300, 330));
            words.push(new Word(exposiciones[index].keyWords[1], 94, 876));
            words.push(new Word(exposiciones[index].keyWords[2], 116, 530));
            words.push(new Word(exposiciones[index].keyWords[3], 775, 766));
            words.push(new Word(exposiciones[index].keyWords[4], 578, 350));
            words.push(new Word(exposiciones[index].keyWords[5], 1353, 560));
            words.push(new Word(exposiciones[index].keyWords[6], 1032, 150));
            words.push(new Word(exposiciones[index].keyWords[7], 1528, 910));

            break;

        case 2:
            words.push(new Word(exposiciones[index].keyWords[0], 357, 639));
            words.push(new Word(exposiciones[index].keyWords[1], 1241, 810));
            words.push(new Word(exposiciones[index].keyWords[2], 401, 280));
            words.push(new Word(exposiciones[index].keyWords[3], 116, 433));
            words.push(new Word(exposiciones[index].keyWords[4], 1411, 401));
            words.push(new Word(exposiciones[index].keyWords[5], 970, 480));
            words.push(new Word(exposiciones[index].keyWords[6], 80, 804));
            words.push(new Word(exposiciones[index].keyWords[7], 1250, 194));

            break;

        case 3:
            words.push(new Word(exposiciones[index].keyWords[0], 707, 732));
            words.push(new Word(exposiciones[index].keyWords[1], 578, 370));
            words.push(new Word(exposiciones[index].keyWords[2], 94, 876));
            words.push(new Word(exposiciones[index].keyWords[3], 1353, 542));
            words.push(new Word(exposiciones[index].keyWords[4], 181, 540));
            words.push(new Word(exposiciones[index].keyWords[5], 935, 147));
            words.push(new Word(exposiciones[index].keyWords[6], 1421, 226));
            words.push(new Word(exposiciones[index].keyWords[7], 1528, 910));

            break;

        case 4:
            words.push(new Word(exposiciones[index].keyWords[0], 116, 845));
            words.push(new Word(exposiciones[index].keyWords[1], 578, 250));
            words.push(new Word(exposiciones[index].keyWords[2], 669, 503));
            words.push(new Word(exposiciones[index].keyWords[3], 1134, 611));
            words.push(new Word(exposiciones[index].keyWords[4], 1000, 100));
            words.push(new Word(exposiciones[index].keyWords[5], 116, 433));
            words.push(new Word(exposiciones[index].keyWords[6], 970, 917));
            words.push(new Word(exposiciones[index].keyWords[7], 1528, 910));

            break;

        case 5:
            words.push(new Word(exposiciones[index].keyWords[0], 691, 486));
            words.push(new Word(exposiciones[index].keyWords[1], 401, 280));
            words.push(new Word(exposiciones[index].keyWords[2], 60, 804));
            words.push(new Word(exposiciones[index].keyWords[3], 1008, 80));
            words.push(new Word(exposiciones[index].keyWords[4], 629, 891));
            words.push(new Word(exposiciones[index].keyWords[5], 1461, 326));
            words.push(new Word(exposiciones[index].keyWords[6], 1008, 674));
            words.push(new Word(exposiciones[index].keyWords[7], 1384, 768));

            break;

        case 6:
            words.push(new Word(exposiciones[index].keyWords[0], 691, 486));
            words.push(new Word(exposiciones[index].keyWords[1], 401, 280));
            words.push(new Word(exposiciones[index].keyWords[2], 60, 804));
            words.push(new Word(exposiciones[index].keyWords[3], 1008, 80));
            words.push(new Word(exposiciones[index].keyWords[4], 629, 891));
            words.push(new Word(exposiciones[index].keyWords[5], 1461, 326));
            words.push(new Word(exposiciones[index].keyWords[6], 1008, 674));
            words.push(new Word(exposiciones[index].keyWords[7], 1384, 768));

            break;

        default:
            break;
    }
}

function draw() {

    if (frameCount % 120 == 0) {
        if (loop < images.length - 1) {
            loop += 1;
            console.log();
        } else {
            loop = 0;
        }
    }

    background(0);
    image(images[loop], width / 2, height / 2);

    fill(0);
    image(sombra, width / 2, height / 2);

    fill(255);

    textFont('Abril Fatface');
    textSize(48);
    text(titulo, 116, 120);

    textFont('Poppins');
    textSize(24);
    text(autor, 116, 190);



    for (const word of words) {
        word.draw();
    }
}

function mouseClicked() {
    for (const word of words) {
        if (word.over) {
            msg = {
                index: index,
                text: word.text
            };
            socket.emit('add', msg);
            console.log('se envio la palabra');
        }
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

window.addEventListener("resize", function () {
    windowResized();
});