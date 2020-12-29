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

    // Get canvas element
    const frameCanvas   = document.getElementById('image_holder');
    const frameCtx      = frameCanvas.getContext('2d');

    // Set Banner Image
    function setBannerImage() 
    {
        let _x = (frameCanvas.width - this.width) / 2 + 25; // Aligning image to center
        frameCtx.drawImage(this, _x, 40, this.width - 50, this.height - 50);
    }

    // Set Frame Image
    function setFrameImage()
    { 
        let _x = (frameCanvas.width - this.width) / 2; // Aligning image to center
        frameCtx.drawImage(this, _x, 15, this.width, this.height);
    }

    // Load Images
    function loadImages(obj)
    {
        const frameImage = new Image();
        frameImage.onload = setFrameImage;
        frameImage.src = obj["frameSrc"];
    
        const bannerImage = new Image();
        bannerImage.onload = setBannerImage;
        bannerImage.src = obj["bannerSrc"];
    }

    loadImages(Config.set1);
    
    setTimeout(()=>{
        frameCtx.clearRect(0, 0, frameCanvas.width, frameCanvas.height);
        loadImages(Config.set2);
    }, 2500);

})();