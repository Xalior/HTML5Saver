var ImageDrop = HTML5Saver.extend({
    localinit: function(options) {
        this.speed = 2;
        this.imageCounter = 0;
        this.imageLimit = 64;
        this.imageHeight = 240;
        this.visibleImages = [];
        this.visibleImageHeight = this.imageHeight;
        this.startSize = 1024;
        this.endSize = 378;

        // Build a consistantly formatted image list.
        if (options && options.images)
            this.images = options.images;
        else
            this.images = [{name: this.logo()}];
        
        // and our drawing components
        this.stage = new Kinetic.Stage({
          container: this.container,
          width: this.container.offsetWidth,
          height: this.container.offsetHeight
        });

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
        djsex.log("Creating a new image at "+this.imageCounter);
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
                    width: 768,
                    height: 768,
                });
                // add the shape to the layer
                this.layer.add(this.visibleImages[this.imageCounter]);
            }
            this.lastImg = this.fallingImg.src;
            
            this.moveImage();
        }).bind(this);
            
        this.fallingImg.src = this.images[djsex.math.randomint(0,this.images.length-1)].name;
    },

    moveImage: function() {
        this.visibleImages[this.imageCounter].setWidth(this.startSize+((this.endSize-this.startSize)/this.imageHeight)*this.visibleImageHeight);
        this.visibleImages[this.imageCounter].setHeight(this.startSize+((this.endSize-this.startSize)/this.imageHeight)*this.visibleImageHeight);
        this.visibleImages[this.imageCounter].setCenterOffset(this.visibleImages[this.imageCounter].getWidth()/2, this.visibleImages[this.imageCounter].getHeight()/2);
        this.visibleImages[this.imageCounter].setWidth(this.visibleImages[this.imageCounter].getWidth()+this.fallingHorizDrift);
        this.visibleImages[this.imageCounter].setHeight(this.visibleImages[this.imageCounter].getHeight()+this.fallingVertDrift);
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
