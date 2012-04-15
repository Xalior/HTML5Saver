var HTML5Saver = djsex.Class.extend({
    init: function(container,options){
        // instance
        this.container = container ? container : document.getElementsByTagName('body')[0];

        // Clock
        this.systick = new Date().getTime();

        // Default Options
        this.speed = 10;

        // Local(this screensaver specific) Variables
        this.localinit(options);
        djsex.css.create(this.css);
    },

    css: "",

    localinit: function(options) {
        // state
        this.red = 255;
        this.redDir = 1;
        this.green = 255;
        this.greenDir = 1;
        this.blue = 255;
        this.blueDir = 1;
    },

    render: function(now) {
        if(now>this.systick+this.speed) {
            this.systick = now;
            this.draw();
        }
	},

    draw: function() {
        switch(djsex.math.randomint(0,3)) { // who gets tampered
        case 0:     // no-one
            break;
        case 1:     // red
            if((this.red<=0) || (this.red>=255))
                this.redDir = djsex.math.invert(this.redDir);
            this.red = this.red + this.redDir;
            break;
        case 2:     // green
            if((this.green<0) || (this.green>255))
                this.greenDir = djsex.math.invert(this.greenDir);
            this.green = this.green + this.greenDir;
            break;
        case 3:     // blue
            if((this.blue<0) || (this.blue>255))
                this.blueDir = djsex.math.invert(this.blueDir);
            this.blue = this.blue + this.blueDir;
            break;
        }
        this.container.style.background = "#"+djsex.math.decimalToHex(this.red)
                                             +djsex.math.decimalToHex(this.green)
                                             +djsex.math.decimalToHex(this.blue);
    },
  
});
