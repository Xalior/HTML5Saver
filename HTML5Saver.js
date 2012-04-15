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
        djsex.css.create(this.css());
    },

    css: function() {
        return "";
    },

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

    logo: function() {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABACAMAAADCg1mMAAAAYFBMVEUAAAAbCAI2EgYkJCRSGwppIwxISEhVVVVoaGh+fn6WNBOjOBKxPBXaTBndUhnhWRnmZBjpczLddFLtjFnpmXaDg4ORkZG3t7fhnIfiq5rys5Lmw7nZ2dn42cnr6+v+/v4XcUo9AAADAklEQVR4nO2b63aqMBBG0YJtKRe5WbnZ93/LEq5hJgngiSunA/uXC8YwbBbwCdGyLMvxn8QiwiHgyf3/Mt24Ls6HADlBKIaUgJNCQHgVw9Y5phvXxiFg7wK8zQLaa8DZdN/a+DoEPCXgZLpvbUxJKEYkkIgJCFix6bb1MQl4IH4gxSGgF+CZblsfUxQslwUkw12QTBA8BGwTENHLQVwUzJcFEAyCnID7egHJ7RPwxg8JVwpK2poLauajWfq+oWTVphouihIPClgIQiwHFUjNrFG0Fpe0NTe0d1Wz9HtDyapNNdwUJWMUjA8BHdHOBDhQQKwWEJAV4K8TwL5d6Ol8hYCWYcFlWLB5GFwygQSkywJySgKmJFR1Au67FYCiIDxvkkOAVMBnlmUfLxBQNePesp72wwMNU2WQG99Nxg8xwmUleRaGAhSnwAyNAljJ27D9SjwMZtNdQJGFDwFzHm0OEnf+lwWgKCgTUP8ZAe9wXCyAK3mNgKWuNghQlKyqEcJK+o/uICCQPRWuuz0o2yT8tICXReF/FSCdIjAGoV5AsVsBP7QF2FMS6kglAlL22RdvEgWhWTr5NimANYAfLHECUBS8AwFRLyBRCFB3fjEpQF4iE1ACAQlxASgLywRcyQu4iwWkegSYygHbBTyAgIIT0L4bt5XJcv2lWcMwaAQ8zPKWUBQs02gUEKVFnwjrUcCZuoCGKo+D8JoU9fQVugJcgQBGPf9Kl4RZnY7O/ycBYxQMlD+GuNkRqjdN1rp3WgwNw2h4NaaYIyEVQAx7nYAuCfukJgd0cPOF47wUC6jT6LoHAQ1RmgMBdZGMbwVYhWu6Ye34kPhe9gJYJuBfi7C1lGZHdCAB7I4Q5zV/6HcnwBe+GuuSsOl+tSOZLisTQGee8MBaAWGbAnYqIOz33qeXg6SPRUN46MkKsFUCwiCYLyY0T3ji7Aj+ORLCQ9/g2nT+KQA42S7YWbjznkPv8gc4O7I/kHguvbu/BNtFZ4NL/9DPOTnT2eA5uzn0c9rLIuFLHuMXPrPP7USuq8MAAAAASUVORK5CYII=";
    },
 
});
