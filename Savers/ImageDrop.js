var ImageDrop = HTML5Saver.extend({
    localinit: function(options) {
        console.log(options);
        this.speed = 2;
        this.imageCounter = 0;
        this.imageLimit = 64;
        this.imageHeight = 240;
        this.visibleImages = [];
        this.visibleImageHeight = this.imageHeight;
        // Floating point values representing multiplier for size...
        this.startSize = 3;
        this.endSize = 1;

        // Build a consistantly formatted image list.
        if (options && options.images)
            this.images = options.images;
        else
            this.images = [{name: this.logo()}];
        // Build a prefix....
        if (options && options.prefix)
            this.prefix = options.prefix;
        else
            this.prefix = "";
        
        // and our drawing components
        this.stage = new Kinetic.Stage({
          container: this.container,
          width: this.container.offsetWidth,
          height: this.container.offsetHeight
        });
        console.log(this.stage);
        this.layer = new Kinetic.Layer();

        // add the layer to the stage
        this.stage.add(this.layer);

        this.lastImg = '';
    },

    css: function() {
        return 'body { margin: 0; padding: 0; width: 100%; height: 100%; background-color: black;}';
    },

    mkNewImage: function() {
        if(this.imageCounter>this.imageLimit)
            this.imageCounter = 0;
        this.imageCounter++;
        this.fallingImg = new Image();
        this.fallingImg.onload = (function() {
            if(this.fallingImg.src != this.lastImg)
            {
                this.fallingSkewStart = djsex.math.randomint(0,90)-50;
                this.fallingSkewEnd = djsex.math.randomint(0,90)-40;
                this.fallingHorizDrift = (djsex.math.randomint(0,this.imageHeight)-(this.imageHeight/2))/this.imageHeight;
                this.fallingVertDrift = (djsex.math.randomint(0,this.imageHeight)-(this.imageHeight/2))/this.imageHeight;
                this.visibleImageHeight = 0;
                if (this.visibleImages[this.imageCounter])
                    this.layer.remove(this.visibleImages[this.imageCounter]);
                this.visibleImages[this.imageCounter] = new Kinetic.Image({
                    x: djsex.math.randomint(0,this.stage.getWidth()),
                    y: djsex.math.randomint(0,this.stage.getHeight()),
                    image: this.fallingImg,
                    width: this.fallingImg.width,
                    height: this.fallingImg.height
                });
                console.log(this.fallingImg.width);
                console.log(this.fallingImg.height);
                // add the shape to the layer
                this.layer.add(this.visibleImages[this.imageCounter]);
            }
            this.lastImg = this.fallingImg.src;
            
            this.moveImage();
        }).bind(this);
            
        this.fallingImg.src = this.prefix+this.images[djsex.math.randomint(0,this.images.length-1)].name;
        
        // Just in case, recalculate all this math, because the externals 'cripts could be rattled by some other APIsh ghoul....
        this.changeSize = this.startSize - this.endSize;
        
    },

    moveImage: function() {
        sizeRatio = this.changeSize * ((this.imageHeight-this.visibleImageHeight)/this.imageHeight);
        this.visibleImages[this.imageCounter].setWidth(this.fallingImg.width*(this.endSize+sizeRatio)+this.fallingHorizDrift);
        this.visibleImages[this.imageCounter].setHeight(this.fallingImg.height*(this.endSize+sizeRatio)+this.fallingHorizDrift);
        this.visibleImages[this.imageCounter].setCenterOffset(this.visibleImages[this.imageCounter].getWidth()/2, this.visibleImages[this.imageCounter].getHeight()/2);
//        this.visibleImages[this.imageCounter].setWidth(this.visibleImages[this.imageCounter].getWidth()+this.fallingHorizDrift);
//        this.visibleImages[this.imageCounter].setHeight(this.visibleImages[this.imageCounter].getHeight()+this.fallingVertDrift);
        this.visibleImages[this.imageCounter].setAlpha(this.visibleImageHeight/this.imageHeight);
        this.visibleImages[this.imageCounter].setRotationDeg((this.fallingSkewStart+((this.fallingSkewEnd-this.fallingSkewStart)/this.imageHeight)*(this.imageHeight-this.visibleImageHeight)));
        this.visibleImageHeight++;
    },

    draw: function() {
        if(this.visibleImageHeight == this.imageHeight)
            this.mkNewImage();
        else
            this.moveImage();
        this.layer.draw();
    },
});
