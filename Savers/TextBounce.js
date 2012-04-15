var TextBounce = HTML5Saver.extend({
    localinit: function(options) {
        // state
        this.dirX = 1;
        this.dirY = 1;


        if (options && options.string)
            this.string = options.string
        this.bouncer = document.createElement('span');
        this.bouncer.id = "textbouncer";
        this.bouncer.innerHTML = this.string ? this.string : new Date();
        this.container.appendChild(this.bouncer);
        this.textX = (this.container.offsetWidth-this.bouncer.offsetWidth)/2;
        this.textY = (this.container.offsetHeight-this.bouncer.offsetHeight)/2;
        this.bouncer.style.top = this.textY+'px';
        this.bouncer.style.left = this.textY+'px';
    },

    css: "                  \n\
span#textbouncer {          \n\
    height: auto;           \n\
    width: auto;            \n\
    position: relative;     \n\
    text-shadow: 0 6px 4px #33F, -3px -5px 4px #F00, 3px -5px 4px #0F0; \n\
    font-size:  24px;       \n\
    font-family: sans-serif;\n\
}",

    draw: function() {
        this.bouncer.innerHTML = this.string ? this.string : new Date();
        if((this.textX+this.bouncer.offsetWidth>this.container.offsetWidth) ||
           (this.textX<0))
            this.dirX=djsex.math.invert(this.dirX);
        if((this.textY+this.bouncer.offsetHeight>=this.container.offsetHeight) || 
           (this.textY<0)) 
            this.dirY=djsex.math.invert(this.dirY);
        this.textY=this.textY+(1*this.dirY);
        this.textX=this.textX+(1*this.dirX);
        this.bouncer.style.top = this.textY+'px';
        this.bouncer.style.left = this.textX+'px';
    },
  
});
