var HTML5Saver = djsex.Class.extend({
	init: function(container,options){
        this.container = container ? container : document.getElementsByTagName('body')[0];

        this.red = 255;
        this.green = 255;
        this.blue = 255;
	},

    render: function(now){
        this.draw();
	},

    draw: function() {
    },
  
});

var screensaver;

function init() {
    screensaver = new HTML5Saver(document.getElementById('container'));
    loop();
}

function loop() {
    requestAnimationFrame(loop);
    screensaver.render();
}
window.onload = init;
