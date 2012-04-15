var ImageBounce = HTML5Saver.extend({
    localinit: function(options) {
        // state
        this.dirX = 1;
        this.dirY = 1;

        this.speed = 0;

        if (options && options.images)
            this.images = options.images;

        this.bouncer = document.createElement('img');
        this.bouncer.id = "imagebouncer";

        if(this.images) {
            this.bouncer.src=this.images[djsex.math.randomint(0,this.images.length-1)].name;
        } else
            this.bouncer.src=this.logo();
        this.container.appendChild(this.bouncer);
        this.textX = (this.container.offsetWidth-this.bouncer.offsetWidth)/2;
        this.textY = (this.container.offsetHeight-this.bouncer.offsetHeight)/2;
        this.bouncer.style.top = this.textY+'px';
        this.bouncer.style.left = this.textY+'px';
    },

    css: function() {
        return "            \n\
img#imagebouncer {          \n\
    max-width: 128px;       \n\
    max-height: 128px;      \n\
    height: auto;           \n\
    width: auto;            \n\
    position: relative;     \n\
    font-size:  24px;       \n\
    font-family: sans-serif;\n\
}";
    },

    draw: function() {
        var bounced = 0;
        if((this.textX+this.bouncer.offsetWidth>this.container.offsetWidth) ||
           (this.textX<0))
            { this.dirX=djsex.math.invert(this.dirX); bounced = 1;}
        if((this.textY+this.bouncer.offsetHeight>=this.container.offsetHeight) || 
           (this.textY<0)) 
            { this.dirY=djsex.math.invert(this.dirY); bounced = 1;}
        if(this.textY<0)
            this.textY=0;
        if(this.textX<0)
            this.textX=0;

        this.textY=this.textY+(1*this.dirY);
        this.textX=this.textX+(1*this.dirX);
        if(bounced && this.images)
            this.bouncer.src=this.images[djsex.math.randomint(0,this.images.length-1)].name;

        this.bouncer.style.top = this.textY+'px';
        this.bouncer.style.left = this.textX+'px';
    },
});
