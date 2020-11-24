const socket = io();

const map = document.querySelector('.map');

function preload() {
    pointer = loadImage('./data/pointer.png');
    bg = loadImage('./data/bg.png');
    dotImg = loadImage('./data/dot.png');
    point = loadImage('./data/point.png');
}

function setup() {
    //initialize canvas
    width = map.clientWidth;
    height = map.clientHeight;
    createCanvas(width,height);
    finallize = false;

    imageMode(CENTER);
    noCursor();

    //initialize dots
    dots=[];
    imgs=[dotImg,point];

    dots.push(new Dot(Math.floor(Math.random() * (width-400)) + 200,Math.floor(Math.random() * (height-400)) + 200,imgs));

    //initialize lines
    vectors=[];

    button = new Button('Continuar',785,800);

    textFont('Poppins');
    textSize(23);

}


function draw() {
    image(bg,width/2,height/2);

    for (const dot of dots) {
        dot.draw(dotImg);
        tint(255, 255);
        if(!dot.found){
            dot.search(socket);
        }
        
    }

    for (const vector of vectors) {
        vector.draw();
    }

    if(dots.length>6 && dots[6].found){
        button.draw();
    }

    image(pointer, mouseX, mouseY,70,70);
}

function mouseClicked() {

    if(button.over && dots.length>6 && dots[6].found){
        window.location.href ='end.html';
    }

    for (const dot of dots) {
        if(dot.over){
            window.open(`exposition.html?${dots.indexOf(dot)}`);

            if(dots.length>1 && !dot.found){
                let point1 ={
                    posX:  dots[dots.indexOf(dot)-1].posX,
                    posY:  dots[dots.indexOf(dot)-1].posY
                }

                let point2 ={
                    posX:  dot.posX,
                    posY:  dot.posY
                }

                vectors.push(new Vector(point1,point2));
            }

            if(dots.length<7 && !dot.found){
                dots.push(new Dot(Math.floor(Math.random() * (width-400)) + 200,Math.floor(Math.random() * (height-400)) + 200,imgs));
            }   
            dot.found=true;

        }
    }

}