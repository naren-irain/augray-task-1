(function ()   
{
    'use strict';

    // Image files
    const imgPath = "./assets/img/";
    const Config = {
        set1: {
            bannerSrc   : imgPath + "img-banner-sugar.jpg",
            frameSrc    : imgPath + "img-frame-sugar.jpg"
        },
        set2: {
            bannerSrc   : imgPath + "img-banner-flower.jpg",
            frameSrc    : imgPath + "img-frame-flower.jpg"
        }
    };
    let imageSet = "set1";


    // Get canvas element
    const frameCanvas   = document.getElementById('image_holder');
    const frameCtx      = frameCanvas.getContext('2d');


    // Set Banner Image
    function setBannerImage() 
    {
        let _x = (frameCanvas.width - this.width) / 2 + 25,
            _y = (frameCanvas.height - this.height) / 2 + 25; // Aligning image to center
        frameCtx.drawImage(this, _x, _y, this.width - 50, this.height - 50);
    }


    // Set Frame Image
    function setFrameImage()
    { 
        let _x = (frameCanvas.width - this.width) / 2,
            _y = (frameCanvas.height - this.height) / 2; // Aligning image to center
        frameCtx.drawImage(this, _x, _y, this.width, this.height);
    }


    // Load Images into canvas
    function loadImages(obj)
    {
        const frameImage    = new Image();
        frameImage.onload   = setFrameImage;
        frameImage.src      = obj["frameSrc"];
    
        const bannerImage   = new Image();
        bannerImage.onload  = setBannerImage;
        bannerImage.src     = obj["bannerSrc"];
    }
    loadImages(Config[imageSet]);


    // Change Image on button click
    document.getElementById("btn_change").onclick = () => {
        imageSet = (imageSet == "set1") ? "set2" : "set1";
        frameCtx.clearRect(0, 0, frameCanvas.width, frameCanvas.height);
        loadImages(Config[imageSet]);
    };


})();