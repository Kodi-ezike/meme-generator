let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, downloadBtn, canvas, ctx;  //one

function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize){                                  //two   //five
    let fontSize;
    
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);//clear the canvas
    ctx.drawImage(img, 0, 0);                        //draw the image
    
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

   
    //this doesn't allow for multiple lines, so we'll change the code.
    // ctx.textBaseline = 'top';
    // ctx.fillText(topText, canvas.width/2, 0, canvas.width);   //to draw top text  x=canvas.width/2, y= fontSize or 0, z= canvas.width(ie max width)
    // ctx.strokeText(topText, canvas.width/2, 0, canvas.width); 

    // ctx.textBaseline = 'bottom';
    // ctx.fillText(bottomText, canvas.width/2, canvas.height, canvas.width);   //to draw bottom text  x=canvas.width/2, y= canvas.height, z= canvas.width(ie max width)
    // ctx.strokeText(bottomText, canvas.width/2, canvas.height, canvas.width);

    //top text size
    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize/20;

    //this code allows for multiple or new lines
    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function(t, i){
        ctx.fillText(t, canvas.width/2, i * fontSize + 10, canvas.width);   //to draw top text  x=canvas.width/2, y= fontSize or 0, z= canvas.width(ie max width)
        ctx.strokeText(t, canvas.width/2, i * fontSize + 10, canvas.width);
    });
    
    //bottom text size
    fontSize = canvas.width * bottomTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize/20;

    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function(t, i){     //we add .reverse to enable the words come out as we want
        ctx.fillText(t, canvas.width/2, canvas.height - i * fontSize -10, canvas.width);   //to draw top text  x=canvas.width/2, y= fontSize or 0, z= canvas.width(ie max width)
        ctx.strokeText(t, canvas.width/2, canvas.height - i * fontSize -10, canvas.width);
    });
}
function init(){                                            //three
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topTextSizeInput = document.getElementById('top-text-size-input');
    bottomTextSizeInput = document.getElementById('bottom-text-size-input');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    downloadBtn = document.getElementById('download-btn');
    canvas = document.getElementById('meme-canvas');

    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0; //so init is initially which means that initially the canvas width and height is 0. When generating meme, the canvas width and height = that of the image

    generateBtn.addEventListener('click', function(){            //four
        let reader = new FileReader(); //using the file reader api to read the file off the user's computer
        reader.onload = function(){
            let img = new Image;
            img.src = reader.result; //the result gottten from the readAsDataUrl
            generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);     //the reult is then sent to this function
        };
        reader.readAsDataURL(imageInput.files[0]);
    });

    downloadBtn.addEventListener('click', function(){
        
    })
}
init();
