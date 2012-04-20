var HTML5Saver = djsex.Class.extend({
    init: function(container,options){
        // instance
        this.container = container ? container : document.getElementsByTagName('body')[0];

        // Clock
        this.systick = new Date().getTime();

        // Default Options 
        this.speed = 0;

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
        if(now>this.systick+(this.speed*16.66666667) {
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
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAGQAAABkADeQEDTAAAzlklEQVR42u3daXNk133f8e+5jWX24azcZkiK4iaJokQtliVFiy3H5U1xOZVUpZKneZzHyYO8gLyFPHG58iSpSsWL4k12yZZlWbF2UqQocZkVmAEGWwO9d997/nlwGrMCM0CjT+Me3N+nCiIlUpju2+f2757tf0BERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERENrkqvMm5r7+kT1pEJubCN96txPucqsjnmQGH1KxFZAL6QF6FN1qVAHkZ+B/ASbVtEYkoB/4L8CdVeLNVCZCc0AN5Qe1bRCK6BfSq8mazirzPFjCnti0ikS0PfyqhKgHSITwZiIjEVB/+VEJVAqQLrKhti0hkG8B6Vd5sVQKkX6UPVUT2TQdoV+XNViVACsI8iIhITF1CiFRCVQJk84MVEYlpQHhgrYRKBMhwV2hlPlQR2TeV2EC4qUo9kBbh6UBEJAYPrFaljAlUK0BWqNDyOhGZuA5wtUpvuEoBskSFNviIyMS1gRtVesNVCpA6WsorIvF0gYUqveEqBcgG0FAbF5FI+sBqld5w1SbRK7PBR0QmrnIblqsUIB20F0RE4imo2ENqlQJkQHhCEBGJwVOhUu5QrQABbSYUkXgqtQsdKhQgw809LcDUzkUkghtU7Pulaj2Qa1SsiykiE1EA76EAOdDmqVClTBGZGE849dRX6U1XLUAWUYCIyPgVaAjrwFtBK7FkN5wugeyIJ5RLqpSpir3fNRQgslMOZo86hcgBUfQh70XrIBiwXqVKvFC9AGlSsXr9MjrnYPpIhqvpWiTPoOd9zCU0ngqeelq1AOmgAJHd0sLv9D9CDz7uDg1HBVd4Vm0OZKCvA5GKirs+qksFD6yrWoB4wjCWiFSIGfi4AXKNCs6vVi1ADLiEeiEiFbvzDbOot/1VFCAHvxkNP2jVxBKpmriPjfMoQCrhBhXbLSoixA6QRTQHcuD54QetABGpmLgjWKxQwRWeVeyBLKMAEakUiz9o3aCCc6uVCpDhLtGNKn7QIlVWxA+QVtV2oUM1eyBt1AMRqQ4DK6I/M1Zu/gOqGSCV/KBFqizyEFaPitbYq2KA5IRdoyJSEZEn0G8SCrVWThUDpAdc0S0lUg0GmI+aIIuEudXKqWqAXNVtJVIdkXsgSyhAKmNA6HKKSFXEDZBVwuKcyqligPQJXU4RqYL4i/abVHRetYoBUhCeGESkAsxHz5A2WoVVnfaESrqLVIYvLPbOrx4V3ZxcuQAZ7hat3NGTIlU1gTImeRV3oUM1eyBQ0e6mSBX5uENYObBe1Wtb1QAZoLPRRSrBPDETZIMKr+qsaoCsAwu6tUQOvsibCDeo8KrOKgeIlvKKyF41CEdEVFJVA6TSH7pIpRgxh7DaQL2ql7aqAdJCe0FEDj4bljFx0f6ELhXeFlDVAOlQ0do1IlUSeQIdworOTlWvb5WX8WoviMgBZz56IcWcsJGwkqoaIL7KH7pIZW50b7FXYeVU+IjsSgbIcNeo9oGIHGQu+hCWAYtV3YUO1e2BQIXr14hUhkW9yfvA5Spf3ioHyAIVreEvUhV2+z+i6ANzVb6+VQ+QytawEamEuGMMAype0aLKAbKCyrqLHGxxNxEOqPiG5KkKv/e0A8QslBmViNcYKEwzZTFlNXCRdvnZcBI9noIK70KHagdIg4Q3ALmTZ3Avvga1WpXbb1SZc0yfmcVlThcjkuKDn+BXb0YJEfNhGW/EXegFFd9PVuUAaZHwuSDu7BNM/bv/BLOHqtx+o6plNQ6dOoFzCpBIrZjOH/5n/MocuPF/FZlF3wMCFd9PVuUA6ZJqgJjBoIc7fhJmD1e5/UblajXc8cdQfMS8yC7eVvH4Q1h9Qi+ksqocIHnKH771esOj1jRAH+8iDyvxqQcSR68D/R6xxpgs7gQ6wHUqHiBVXoVlpFwErah0u5UDwG8sYZ1GqpPoBnyAAqSahuUHbhDqYqWnGGBNFRSWdNnGKtZpEnOWO2IHxFAPpNI9EICrpDoPkg+wpfmKf3ySMmvVod+Olh+Rh7CMcBZ6pdfSVz1A5kkxQBxYPoDVRY3PS7KsvYH1ukRJkPi3hRE2ESpAKmyRsJs0MQ6KHL+uQxUlXdZtYYNunC97AyuiLzCpfCmkqgfIKqmWdS9y2FirevuVlA16oR3HSBADH3d2woBmlUu5gwJkg1QnwbyHdqPiH58kbdAfBsj4GWDx7+wERy/Gq+oB0iLhALFeZY9ilgPAfBGvnlv8UnFdFCCVD5BkS5lgPjzBiaTZgLFB5DPd4m8irHQdLFCAFKRcy6YoVJFXkmS9LtZYJeoekLh1sOZIeSPymChA4Fqyr77bgkZdS3klPZ0mtrEcdxd63HewgAJEAQJcIcUTH1yGtZvY+ooCRJJjvRbWXIvWdg1i79BYouKVeEEBUhC6omlWJOy2sUYdVC9WEmP9DtbeiNoDiaxOynOoY1L1APGEcgQJ9kAc1m1Dc109EElPvxu1DtYENhE2qHgdLFCAeMLRtmn2QAa9cBMqQCQxlvexfida59n76Dd1p+qbCEEBAqmeaewcDAbQ6+oTlPQU+XAZepwE8fHPsq/8HhCoeIAMnyBapNoDuX0TiiTGeyjifQdH3oWeoxVYgHogkPJKCivi1RISianI4+5hivtIuESoxFt5CpDQFU2zO2qEgnQ+zXqQUlFm+EbcQqCR99cuEwqxVp4CJNS0WUzylTuHr69AWxPpkpBigK3Mxf0z4vZA1kh17nTMFCBhDuR6mi/dwQSOBRUZJ8tzfP1W3D8jboCsEyp5V54CJEyG3UzylTsXNhJ22uqBSDr8YFjGJM6vt/jl4VpAWx+kAgTCJPpSkq/cOWhtQK+jDoikoyiwZp24S3ijdkG6w5/KU4CEcgTJTohZp4VFXE8vMna+wDrxRoDMRx/CGlDxs9A3KUDCmu40j/ZzQL8HufY0STrMPNaNt43CPLEn0bXscUgBEppaogfDuLCRUMt4JSXeQx5v+1XkHkgBrKqMSVD5ABk2hHQf4b0OlZIEFfEeeizu+FWblM8QGjP1QIIBqZYzAWg2QpCIJMA6zbgPPXGfp9qkumozAgVIUCfVeRDAlm+EwooiSbTXubhrbeM+CnaAuJtYEqIACVZIuLaNX1kIhem0F0TKzgy/egOL2GO22/8RRReVMbltSpcAhg1iBXg+uVfugPUVyEs2kV6bSj/QajWF8tjbqwubCCMNYZlNZAmvdqEPKUCCBqE8QYp3JGysYUVenp0g+QD/0+8ON4slrJYxOHUUpxAZH/Pk7/8k3hCWH/7qeB/ZAO1Cv00BEjRIeQ4k9qTkbvV75H/+R9i7byTdKIoMOmdrOA30jleWEeuiem+Yj9oFKUj5CIgxU4AEHRJ+qrBuJ/oJOrv9gnDHT2G1xJtXRhjGUoCkcy/EH8Iq0Fno99wiEsqZpPtUkfej3zW7a1U13MkzalUyeUbsVVjXSXnJ/7hvdV2C280u3e3c3kNRooeiWg0eO6tWJZPliB0gBXBFF/oOBQgHYze61ZfL0wvJpsjOPK4VTDJxkYewctQDufdW1yW4bYlUeyGFx27NlydAajU4/bhalExe/B7IPAqQ2xQgd8yR6kS6FdhKiaorOGB6Bi1fksnfC1F/e0HYLyZDusPvuEmqVXm9h/rKRI5i2zHnQk9EZGL3QVjGG3EPiAfWVIn3DgXIHUukesqYWbk27Rm4Wg03NY16+zLB2yD2M1TCRz/EoQC5Y41Ul/KaQbtZru/qbApmDys/ZLK3QvxOuDYR3n2b6xLctkHYD5LibYP1OpTq23p6Gg4dVauSyd0FFr0gQw+dRngPBcgdnWQbh1GyYooG0zO4o8fLtcFRDrb4Q1jXSXm5fwQKkDt6pFyioMjD8bYluZGZOQTHTqIxLJlYszODuHWwrpDsKEUcCpA7PCl3T3tdbO1WSTbvWQiQE6eUH3KQqAdyHwXIHR5YJMWvPOeg38VWFssRIGa4w0fITp8v19JiOfAij5guoDmQeyhA7nWZ2Ccqx7pxBj1svUR7nKZm4PAxtSiZ4E0Q/U9YQZV476EAubf5XSXVJ4xBHxp1KM+xUlHPfRC5n4//1b6BBmXvvcV1Ce6xQIpPGM5BkWPtZqnyg9qUdqPLxEwgQNrahX4vBcgdBiyT6BAWRQG9DqVKkOkZqE1rKa9M5O61Ino70wqs+yhAhoZPFmukGiC+gH6ZNskOV2JNz6hxySRa2yQ2ESpA7qMAuVeDVMc4zcp1qJSBmz2Mmz2U7CWVxMQNkDlgXRf5XgqQe3VJ+duu1xkOY5WBweGjqoclk2txcTcR3iRMostdFCD3ykl1CMtlWKOONdbKsfLJLJQyOXwUJYjEb2/RW9kSqsT7AAXIvXLCZsL0OLDWBjTWS7OZkOOPqR6WTLDNRf3ta6R64FxECpB7DQj1bhLkoN3AWo1yLMQycMcegyPHFCASv7nFb2LrpHpeUEQKkHsNCPVu0uNcKOnea1GaBJmeDjvSS7U5RQ4in0cfw2qjMiYPUIDca0DYTJimXgd63ZIUVCTc0LWp8rweObB8YbHnQHpoMu8BCpB75YTJsvQ4B/mgPCXdN1/W9LQCRKKbQM3OXLvQH6QAuZcnTJalqcixomS97NkjKmci0ZknZv8gJ+wRk/soQO4yfMJId6met3CwVGkmrQ13+ChkNdT7l8hNLaZ1wj4QuY8C5EHprrRwwEa9XMNYx07A1LTyQ6KK/MxUJ9Wh7cgUIA8akOxmQoetLkKvXZK9IMDxUyFARGI2tbgBskE4C0TuowB5UIdkSxY4bH0Z63Upy1Le7ORZnAoqSsxWZsTu4bYIvRC5jwLkQeuEwmnpcQ7bHMIqRX4YnD43rMirMSyJ1Mx89D0gHaCpK/2gKV2CBzSBW8m++lajVHMg7sTpsBckz4eT6Qkxg8KUfXtuBEAW76vGfPQhrB4hROQ+CpAHtQgHS6Wp2w4rscqy+3tqitqv/QG2tpTcfpAsc8yePozLtI9lLyzv0f/uH0M30gLHuEt4ISzjHeiT3OL21iV4QIdUxzudw/rdcp0LktWo/da/T3IzYa1WY/b4MRVi2SPrdRj8+G+wTjNKO/A+ein3+BGVKAXIg7qkvGmoyCeyLXfXrylFm2Mj2km/t8vYacQ7sNwR+6vdgAXtQt+aJtEfVJBy2Wbz4WhbVcCVsjTJ5flQZifW7zeL2dx7wDV9iltTgNxn+KSR7tnHZvilm/Ge+ER2ya/dhGIQrScX+VmpiwJkWwqQrSVdttlWbihApDztsX4LizkvF3cfSJ9UD5mbAAXI1jZINUQMWLkVZhZFSsBvrMR7oIk/Ujsg5VWZkSlAtrZAsjtPDdtYVYBIebTXowaIxe1s54TNxbIFBcjWbpFw6QJrrZdvJZZUlu+0oj3QeD/81fEWynlSrtAdmQJka2sku5TXoNNSgEh59Dvx2qMZZtH3gPT0IW5NAbK1Oqk+dRjhWFut4pWyKAbRlkqZEbt2dp+wtF+2oADZWpOUa98UBUoQKQXv464I9NE723OkerzDBChAttYh5b0gPsdaOoFTStAUW2tYrPNpXOwVvBhwCfVAtqUA2dqAVJfxOrA8x5Zu6FOUfWdrt7B25Ero8RLEEzYRqgeyDQXI9k0y0acOF8pGLC/oU5T9v5Gaa9BvE22Z1ATqYKHx4G0pQLYwLGeylmzD8QW+rr1Psv+suYb1OnGGsCx6GRNP2ESoHsg2FCDbu0KqZwAUBTTr+gRl31mngQ0irYI18Hn0ZzzdSA+hANneHKGQWoJ3rYdWose6y8HS64Qh1TgdkNgrsAxoqpT79hQg21sg1ZVY5sONK7LfTbHfiXdCpk1kv2y6qzEnQAGyvWVSHcLyHutr86yUQDGIWgcrcsm3TrLfAROiANneWtKNp4wnE0r1+Mg7/eIeZTtPqsPYE6IA2V6LlJfy9rpYow460Vv2iy+wbrzDPY3oq7CukvLppBOgANleh1SX7zmHdZpYfRkyBYjsD2s38OtL4CJ+zcQNkJuokOJDKUC2l5PqPhAHdDuwsYZ6ILJfrNvEWmvRjrKdgFsoQB5KAbI9T5gHSZDD+h2sua78kP3TaUJznViN0Hz0J7y050EnQAGyvYJQSC3NXki/D60mShDZL9bvYJ1GtCY4gU2ETbQL/aEUIA9pn4RJtPQakHOQ9yFWFVSRHbB+L1TijZQgvrDYj3cdbSJ8OAXIQ9oncINUeyBFrr0gsr/yPtbvxqujGH+NpIavHkEB8pD2ScqVOGMf5CPyKEUeesKx5kDi3pkDtAfkkRQgD2mfpFyRF6DfG55OKLIPN5D5qLvQLe4mwkVCNQp5CAXINoZjnw2SXcrrsMYa1mlqHkT2R96Le/fEvTOXSXYV5uQoQB4u4V2oLuwDaTXQSiyZOF9gq4tRm17kIawVYF0f5MMpQB4uzWNtIRxt21yDTkv5IZM36ONXIx6rHH9cYJ2wjFceQgHyiNsASPNgDZdBqxmWUWoISybMikEoYxJrCa+PvoS3iepgPZIC5OHawLVkb+JOO0ykqwsik5YPsMZqvLZdRB/C6qIyJo+kAHl0I7qe5Ct3QL8DA52HI/vA51grXikd74ndA+mhXeiPNKVL8FBdwnK+BLlwlKgvIMvAqxey+0voNPw3IisKrNsi3i706NMgCo8dUIA8XJ+U14Kbkf/ZH+L+4c9iH7xzIBU1R/v0DC6FkviZY+q1X2fmS/+mJG3Phx5wxLYdMUEKYE1lTB5NAfJwOVBP+Q3YpbfDhis9SO/+2mWQn82iHmcxvjt5htqzr5bo4lnoAUf89RG1gDndATtodroED+VJfSlfVtNM18jXDqilcf3czGGyM0+X6M4p4h5lG38F1k3dADu7RWQbwy5sp+rXQUrODKamyc5dLM1L8hsrmI8cIPFCpA0sqWE9mgLk0VSRU8qvNk12tiQBYoYtXRsulYrx+6NPoHeBVeSRFCA7a0wKESm32hTMzJbkxRh+bTHaEJbZ8FfHm9frkuoG4glTgDzaCsku5ZWqcNMzlGalhBlWvxVtptsKYndBcrQLfUcUII9WJ4SISDk5h5s9AmVZbmyGb65F7IFY7FLuBWEJvzyCAuTR1tF4qJTdkROUZr2xGbQ3iNJNcCGXLH4PJN1CqhOkAHm0JirrLGW/kU+cLU+AYKGIZ6QvebOoAWJoCe/O250uwSO1UVlnKTPnyE4/ictqpXlJNugRL0GIvQv9khrVzihAHq2H9oJIqTncuQth02NZFHnU/IhoQKjArdo/O6AA2cGtgMo6S5k5yB5/rjRDWNZthwCJ9gcQuweiIawdUoDsvFGJlJPLwiqskvCrN6DfjbOqOG54QJg8X1YhxZ1RgDzCsCE1UZdWSspNTZdoAh18/RaWxznIzDz4ImpxUE/iBVQnSQGyMzfRPIiUksHMYVytRHVR15fiHWRm8SqkDKVfQHWCVI13Z24MG1V5xgl2feP58vShHKV6Yk6agTt8DKamS/OSfHMNKwZRegkGkxhQ1ibCHVKA7MwSyZY2MJg5RPb4xXJ8aTuwXg+7NRdKfsueP1935ARMzZTnFbUbkOdEGcKy6Gej9dAmwh1TgOzMCqkOYZnhTp1n6j/+13I8pWYOu3mN/I/+G1Zf0ZGx4/h8T57DzRwuz2vqtcPDQYzPNvIuQsISXgXIDilAdmaDUKEzPQbUargnny1HtdYsCz2hI8ehrhJj4+BOPQGzJQqQQS8MmbpI+1Li9kAuo+rbO6YA2Zlmso3KAYM+Vl/GnX2yHK+pNgXHTg6/CdQD2RMzsjNPlaoHYsVgWEgxToBEnsqbQz2QHdNM5s50021UDvo9bHmhHMNFZjA9izt2Ugujx/UJHz5enqFAszD/EbEOFnHrYC2ke69PngJkZwaE5X1JskEPqy9Rlqd9N3sId+pc9JKq1biDa7isPLextTewTiNaoFn8dRcraOPwzpufLsHO2i0prw3PB7CxVo78MIPZwyFA1AXZe7OcnoHpspxECNZYwVr1aAEygYV7qry9CwqQnbtMir0Q58KQQnOd0sw3TE3D0RPqgeyVAdOHoEzzH611rNMk1iYQX0RvMy2VMdk5BcjOb9XrpDo2WhShwF2ZuKxc1WOTbJVGdugo7tCx8rykTgPrtuJtIoz/CKcVWLugANm5dFdnWIH1y7UK2dWmINMiwD1+sHD4OO7I8fK8om4L+h1i9XYtboB00C70XVGA7MCwS3uLZAPE4tUmGtX0TBjK0jDWnj5Xd+wx3LFT5XlN/e7wMKkY7zechx7RDaChhrVzCpCdWyHVlVhmUBTRH9929XpmD+FmD6lV7fE6ZidOh+Nsy/KSBr2waCPWKqy4zxubNe9khxQgO9cg1QBxDjotaDVKsl/A4NCRsHtaPZC9mT0aenNlUeTxD5OKZxFoqVHtnAJk51okuxfEYc06trFaks2EwJFj4UdLeffwsbqwq79MfBHvoSB+U1lFxzbsigJk59JdneEY9kA2KMlmENzRk6EelvJjD3dvrVxFFL0PlXhj/fr4S3jrpFrzbr+aoC7BjhWkWtLdOei2sbIMYXmPO/4Y2fHHyjMvkxyDqSnc4aPleUW9Dn5tIRTMjNFsiugjni20C31XFCA7NwCupPnSHdbthL0gZaldePhomAeR0RhQmynZCqw2thGvwrIvLHaPtYv6xLuiANm5AXA13Vffg1689fmjtT5tJNwLNzOLK9MKrH4Ha67Ga2PxO6u5dqHv8hbWJdh54yJsJkzvCcW5sLSydHtBphUiIzPczCGyxx4vzysa9LH2Rrw6WHEDZIBWYO2aAmTnCsIyvzT5YliJriw9kHDUrsqZjH75mDlCduap8rymwSDsRI/5nuNZT/r+3icKkJ3zhGV+aTIL6/PLsu/CCBPA2RQadh7tArrpks2B+EEYJo30jBK56a4AS2pXu6MA2aEL33jXCEfbJsqFfSD9Ei1zP3YyDGMpP0b6PKlNl+tMeV9A3ifRUyY3SPkBcZ8oQHYnzWW8AJnD1pawTrs0JxO646dw09NqVaNwDlemc9ABzGNFEetXx37QaKKzQHZNAbI7yT5egYP11eEQQ0k2E548E86zUBdkhI/T4Y6cKFUPJFR8jvNZWmGxCym2UR2sXVOA7M6AVHeqOrDGeljOWxZnHg8T6cqPET7PDI6fLs/rMY9fmo/2672PPgfSS/be3kcKkN1pAjfTfOkOOo3hUt6SDGEdO1muQoBJ3bkZ2anHQ5CUQVHgV29E+5Y3T+x9IAN0mNTum6Euwa40SDVAHNBtQ1GieyTTqYSjX7sa2ZkLpRlQNV9g67ci/v7oHVWVMBmlGeoS7EqLZNeKu7DRqyjKNYtTtmqypWfgC5z3ZOcvUpoP0xfxypg4Qs8mXoIYsKxd6Lunu3d3OsBysq8+z6Nv593dF0NG9sQzFJffCUNrWVauZallYmESwM0eIXviQ9Se/yTZ+WdL9fqsVY/36+Pf11fUyHZPAbI7PVLeC2I+DGGVZdI6y6j99n8ge+1XsfkrFG/9M7ZwFbqde0uvVi1U7n7fWQ136AjZhZeZevXLZOcuUnv8ObKnXyzP/AeEUu6xd6EbsTpcXSDeCoADTAGyOwMSX+pnK4thR3pJvpTdhedxz7wIvQ7Zl38P2k383Af4H30bm/sAWhtYuxl6KI7wpXngAsXAWwj4qWnckRO4Y6fInnye6c/8FrWLr8CRE2Qnz5f3vZtBP9lFTD1UxmQkCpBd3+kJn1hmhi3dDE/3ZZl78D781KZxZ56Es1C78Dy1T38V8j7+6nv4N/8JW7yO3ZrHlm5Apwm49Ie8vA+fxcws2bmnyc4/Q3b+WaY+9iVqL7yOm54drlJL4T0alveJ0k3w0Y+N6ZPy0PQ+UoDswoVvvMvc119Ke6nf6rAHUrrJa7trotSFL87pGbJXXif7yKdC+F1/D3/5HWxlEbvyC/yVX0CjHv5/KQWJGUzPkj3xIaZe+izZuQvUnvkotec+DtOzabaroog2v7aZsxFzNCfpMkX7RwGyeyWrib47tlEv10T6jl50mBNwz75M7UMfCePtK4vY8k1Yu4V/58f4X/wIW18NGyXz/E6o7Gew2DAUsywMTR06Snb+OaZf/xrZhVdwj52n9sSHDsRKNL++FB5MYnzLb17HeHJUyn0kCpDdWyY8rZxI8cVbq55egGzaHO4C3OnHcWefBPNkn/hiOHFxfQX/k+9g772BrS1j9WVoN8Lja5ZNZtLZe7AiDMkdP407eY7a489Qe/UrTL3yOdzskXAe/AE7B8UvXR8GSIQ2a9GHsIwwDyK7pADZvVvAGokGCO3mwTiH3DwUw/cxewR36AjusTNkFz8M3rCNVfzb38euvY8t38Cuv4+tLIQvuaw23p6Jhb0ZTM2QnX+a2jMfxZ15mqkXXqf20udC2foDOfl/1yWoL0YrpEj0DggDtJFwJAqQ3VsF6kCJFuHvQq+LmeHC7qwD8pHctcnMZVADd+o8tS9/Pfz3Rh1/9ZfYyk3sxlX82z+AW9exfu/O8IiDHQ+/3D08NjVDdv4Zpj7yRWpPv4g7d4Hac6/iZkpWKTfy9fcbS8OJijFzt7fAxDTHJA7MPYAUILtXJ9mlvBaOtq2E4dJYPBw9Tvbq58IXfreNffX3od3AX3oH/9PvYDevhaXC3VaYP7k9dzIMFBsuA3JhTwaHj5OdvcD0x79M7SNfwB05jjv1RFg1VUUG1qyHobuIf0YkHriEAmQkCpDda5DyhJsvync2emybpzECTM/gnngGcNSefZnaF38H+l38pZ8PlwvPhZ7K8gIMOmAOd/Is2flnyc48Se2VzzP10S+EvRozh3Sm+6bO5tDo+IfpIveTPXAN1YQeiQJk99okuxfEhXHqlQU4da6an97dK3pcBrOHYPYQ2Se+QPaJL0IxwF/5JXbpbVxrndnHT1J7+gWmXv5cmPyWrS9rrx1vOXXcr3YP3EA9kJEoQHavS8pLeX2OX75J7YWP65N8gEFtiuzFj8PLn6BWm2L2+LFUTxCb7JUb9O6aSxpnew2HScW8IwgrK9UDGYECZIR7hZRXbBQFrC3pU3yYzeXCtyfYFSGPvCWKIspMtxFnbv6+P6KuSryjUTn3XRo2tHTXjPsCq6+gBy4ZF+u2II/UKbeJrDrXJsIRKUBGc4NUeyHeY60N5YeMr0mtLWLdZpSNmmbR971qE+EeKEBGM0eqE+lm0NEDl4yxSW2sYL1OvFpVPurTTo9QykRGoAAZzTxhMj3Buz3psttSxibVWIF+hzh1sKJvIpxHPZCRKUBGs0SyK7GqtJlQJtKi2huhiGXEJhvRZVI+omGfKUBGs0qqAWKEUwnzim0mlHhNqtMMZ4FEGsKKPF13I9l7uQQUIKPZINVxU0eoXFtf1vJUGY9BNyzjjbELPf5ij1soQEamABlNm2T3ggzrQSlAZFz6vWil3H1usbsgq4RqvDICBciItwyplj5wDnpd2FhVgMhYWJFH26zhi+hdkAZa1D4yBchoChJ+arFBD2s2SOOsbSl5awpzapF+tcXv57e1C310CpCRmzbXkn31eR86DX2KsvcbodPCmmvRerMTmAPR/MceKEBG4wnL/9IbxnIunHnR66oDIntm7XVsY5VYjSlyGZM+qe7nKgkFyGg8cJ1U50GKAhv0J3NGuBxo1mli7fV4bSnuLvQFwvHUMiJ9g4x43wwbX6JnCBi0Gtj6alh+WZsa/znhUg39DtZpxNqEHnsIa4lwwqiMSOXcR2/b6Z4hUJui+OdvYtffJ3v9S7hnX8I9dhb35LMwe3hYzjzdivUyoZug06CYexdrJ7sgY5mwp0tGpAAZXZ2UTzHrdvCX3sZ/8NbtY16zlz+JO38B98yLZB/6aAgTM7TKUTZZfZHi/Z/gl65R3LxE/ssfhACJ0XuNf3fVUSn3PVGAjODCN95l7usvtTgI36zOQT7Arr1HceUXMD2LO/sE7vxF3JMXyT72ObIXX4PpaZiehSwbji3oBNADL+9jRY6t3GDwxrfw13+BX72Jv3U1TJybjzr06XOLPYTVQHWw9kQBMrqDVcEzy4bh4LHFOWzhGvx8Gv+9v4ZjJ3FPP0/22d8gu/A8HD2Oe+wsTE2HoS6vMDkorLGCNer4tZvkP/4b8ktvYM3VcIZMvxN6pFkttJXIU6jeE/sRrXPg7uMJU4CMLuegniOw+eVghjU3oLmBLc7hf/pdOHyU7JkXyT7+edz5p3BPPhfmTmpTIUxMw11JMY+ff4/i1jX8yjzFL79PcelNrLNx78OBcyE4JvvSYuuh8dk9UYCMrg/cBE4c6Hd59/CEL6C1gf/5D/Bvfx8OH8U9/Tzu4gtkTzxD9sqncBdfCEs6nQs/CpRyMY8N+hTv/ZDi0hv41QX89Z/jF64MTxV09y7J3ceVeZvH0kdUaBf63ihARtcFrgIvV+6duywsuul2sPd/hr33Jn72CO7UOdzp87hnXqT22a/B+adxs4fg0FHIXFjTr7mTySoGWLeFdVvk7/6Q4q1/wC/NY/UF/Poy5L3h55lNvIfxSHHTwwPraiB7owAZXZdwmll1OQdu+KUz6GGL17HF6/DeGxTf+b+4E6dwH36V2qe+gjt9DnfmSXjsbAiTwitMIrFOA780hzXXKC79lOKt71Dcuob12uHgJ1/c6SHWpkv8RqL+9o3K379joAAZ3YBwloDAnS8kCGMP3TbWbWO35vH/75u446fIXvg47rlXwtzJh1/FnX96IuMUVeDrixQf/BRbW6C4/guK936E1RexrU6fLFtPYxsTWIG1qJazNwqQ0Q2AFV2GnX0T2PoKxQ++BT/4Fu74SdxTz+Eev4B75iWy176IO30earW7nohNwbKdIsd8ji1dJ//Zdyjm38WvzONvvB8KG3p/MCoLbG5BivM2mugBcM8UIHu4jdEu1p1zLgQEYK0G9ss34N034NDf4b75v3CnHyd7+XWyz3wVjpzAHX8MjhwL/1+t7sIaq2FoanmOwU/+Fn/lZ/iNFaxZh177zvJal0Et/QpFttkxjZeBXVTGZM8UIHujXayjuCtM6Hex5QVseSHsiv/m/wxh8urnyD78MTh1HnfhedyJ08PhrooMefkCv3gFf+sqfvUm+Vv/SHH1Lay9EU7/u728lmSGpHZjAh9zlzCMJXugABnRcDe6NiHtmbvzlOk99HvYzasUN65Q1Gq4U+dxz3+U7KnncBdfxL38SdzRkwevFL0ZNuhRfPATiqtv4Zfnws7v+fewbuvO0ujbl+1gF7703rC4lXgHhKOpZQ8UIHuTE3OUtqru2kNiKzexpXl8VsOdPA1nnsCde5rsI58h++TncTOHYPZI2BW/OW+SQg+lyLF+B/pd8p//E/k738Mvz+NX57H6Egy65V1eOwnxd6EXaBf6nilA9maDcJ7AaV2KSO4a07f1VagvY5ffwf/0O7g/+e+48xfJPv0V3Ic+gjt+Cnf2CTh8NJSpn0AtjN2wbhO/chNadfIPfkz+xrfxy3PQbYUwSWV5bfTPfCLPATkhRGQPFCB7UycsBVSATMLd+076Pazfw9ZX8e+9CTMzuCeeJfvop3FPPIu78DzZMy/B7KF9XSrs64v4K2+FIoRzvyR/94f4lfkQcPcvM6piT2M7cYtAG6GKhOyRAmRv1glnCsi+shAoV39BcfnnoTz94xfDUuHzF8he+RTZy68PlwlP3Zk/GHeo+CJMfi/PMXjz29jCJYqla/j597HGyjbLazX6ueUnGjfvB8BllTHZOwXI3jTQkZjlsTnc5T02fxmb+wCmpvHf/Qs4eYbs6efJPv1V3MUXcEeOwbGTMDU1PEBrtF3x1qqHUiFL1xn85G8prryFbazgN5YP5PLaiYo3uzgArukC750CZG/aqJ5OOd1dUXh9FdZXKOY+oPjh38HhY2TPvUz2yS+GA7TOXcCdf2pn5enN4xcuhyGp1Rvkb/wdxbV3sNY65IPhSY62L9VrD4z4Z5jlhCOpZY8UIHvTQXtBys85bs/M5gNorOHf/B7+ze/BoSNkz72Ce+5l3LmncB/+ONmzL3Ln0ddhvQ7FlTfxV97Gr90MVWxvXgrVa3FbLK/VsNRemIEvLOZlzNHQ81goQPbeELu6DAna/NLvtvHv/BB+/gM4dAR39kncuadxF1/Azj5Op3kFW7qOrdzAr92Efi/0bjaX2Mr4xa+zWaCRg7FQgOzdQJcgYfev7Jq/jM1fgre/j5+uMTiR4ywf7sdww/0mEpOZxQ4QI9TCkj3SI9QeDFdxHMxTCavIueHRvrVQLqQ/3GdWmxrOqWhoalIir8LyaORgLBQge7eCeiEiY2NG7DImfbSJcCwUIHs3j6ryioxP/FVYcyhAxkIBsneLaDxVZKwi1w34AA09j4UCZO9W0FJekfGKlyCe0ANRgIyBAmTv1gn7QURkDCz+4NICGsIaCwXI3jVQWWiRsfHxv9qXCD0R2SMFyN610SoskfGw6AFiaBPh2ChA9m6AusMiYzGBJbwAbVXiHQ/tRN+7AgWIyJ5snoGe9wyfRw8QDTmPiQJkPBbR0bYiO+OGgVGEkiXFAPKu4QsLO9Dj5kcXDTmPjYaw9mjYFb6MlgWKPJT50MPot4xew9Ope9prnl7DUwyG9a/iHxw5j/ZtjY16IONxnfBUo0p7IpsMvDfyHviBhaNW8uiFEh9lDu3bGhsFyHgsoB6IVFyYAN/saXiKXggQ9u9I+q0son1bY6MAGY8lNK4qFeQ92MDwHoq+UfSHoVGewLjfMgqQsVGAjMc62pgkFeHzYVAURpGH4SlLp/XXCdV4ZQwUIOPRRAEiB5ENh6YKY9A1fB6Cw4pSDUvt9l7VcPOYKEDGo4sCRFLnCIFRhGEoK8KqqaJvt/dpHJB7VcZEATIeOQoQSZjPCUtpC8j7VobVUtHuVe1CHx8FyHgUhIn0p3UpJAVmYe4i7xuWh/pTRR5WTB3g7bB9tAdkrBQg45ED7wOf1KWQUtkclhoOQRUDI+8aloeVU7c377m7/v2Da42wCkvGRAEyHjlhg5LKmcj+G4aGz+9s3su7bF8qpDotdhUFyFgpQMbDAzdRgMg+Mgt7MTaDoxiEVVMl3pMxaXVCL0TGRAEyHgVwS5dBJmlz53cxGO76LsKPFaZHma01hj8yJgqQMd3LhCcbPetJHLcr2IJZ2MiX90IF2y1LhSg8ttJGk+hjpQAZHzVMGbvQw7Dbf93cAa5HlZF00T6QsVI59zEYrivvouc+GQMrYNAxehue7vqdn0F7eNiSwmNUA7QLfazUAxmfFmEl1nHgMRQmsgObq6LMQ9715P27DltSUIxLh1Cv7pY2EY6XAmR8fgZ8Hvg08LvAi8BTwEuopydw+5HCNutJ+bDru+gdqFIhZbECvEco3/73wN8QDn6TMVKAjE8B3Bj+fIPQE/kI8C+AZ4DXgc8Ch3WpqscXYYmtDZfXFmlVsE3FdeCfgA+AN4Z/f3N4b0oEGmaJYO7rL93/P9WA54APA88DXwO+AhwFZof/XMp2c2Rw9GwNt9v+43CawufD0/jyEBy360vprhuHPmFOYw74E+AnwFXgXcKGwds0bBXxHtEliGuLMHHACeAMIVB+B/g1Qo/lSdRDKc/NsZMAubtUiA8b+PLunR7Glju/ZVSrhJpzN4A/A75NOA10jftWVyk0JnSP6BJMzhZhAqH3cYjQM/mXhHpaF4FPAKd01fbx5nhEgPh8s1xIWF6rYakoLgNvE3oa3xn+LLJFBWyFxj7cI7oE++++YHGEAPkUoYfyMeA3CBPymT6zCd4c9wfIZjHC/uaQ1HBYSj2McfGE+Yp3gb8lFCj9GfAm95UgUViU5B7RJSiXLXopJwmB8jTwJeD3CGFyFDiiKxbx5sjgyKkavrCw6zu/M0ylUiFj0yDsEH8X+GPgx4SJ7+vcd3a5QqOE94guQXltESbThNB4ihAmvws8TgiYp3TFItwgGbePdZWxuUYIiGuECfDvE5bdtrlvxZRCo+T3hy5B+W0zdwJhSOsc8BngC4Qg+Szwsj5bKZkfEZbWXgO+C/yQsLnvgWhWaKRDXzIJ2yJYjhHC40PAR4HfAl4j9FxmdMVkQvpAj7C09i8I+zLeAS6hYakDRQFyQGwz3HWG0EP5OPCvh389CZzXZy9j5AnHGawTJrz/ePjXJcLQlIalDih9iRxA2+w9mSLsP3md0DP5MPAs8CohbER2Iyf0Kj4grJb6C0JobAz/2T1DUwqNg0kBUiH3BcshQr2uXyEEyWcIE/NH1S5kC0bY+f33hPmLK8O/vsNdm/gUFNWiL4qKui9MMuAJQpA8B/w28GXCcNdR1EOpooJQYboJ/CPw54RNfZfZor6UgqOaFCAVt80KryOE0iofJgx3fQU4TQiY47pqB1aXUE9qhdC7+FNCD2ODECb3UGiIAkRu2yZMHGEF1zOEml2vEYLks4Q9KJK2JiEsfgn8AvgWYU6jg5bYyiMoQOSRtgiWJwglVj5ECJTfAS4QJupVWbi8PGGCuwH8JWED3xXgreFfbweGgkJ2QgEiu7JFmBwlLAt+knD2yR8M//4xwhyK7K8uoYrtGqG+1F8ShqkWgPrd/6JCQ3ZLASIj2+bck1ngLGES/muE3fHPE3orMhl1wtzFAvDPwF8RNvF1CSup7qHgkFEpQGQsHlJu5TRhmOtz3CkI+Ro65nfcFoB/IMxjvAN8j1AC/YHT+BQYMi4KEIlmi1CZJfRGngVeIVQW/iRhT8oRtccd6xN6EyuEXd//jzAsdQlYvvtfVFhITLphZSK2Ge46QZgrubvUymnCsJcm4+9VB+YJJUP+ijCfMU8oH6LT+GRfKEBk4rYZ7soIE/IfA36TsAflBcLBWoeqeqkI52PMEeYyvk04zlWlQqQUFCBSGvcFyxRhuOuT3Cm18tuEM+NrB7DtFoRltpeAvybMZfySUAJ95e5/UWEhZaEAkVLaopdyhrDX5CKhh/Kb3FkqnGoPpTH8uQ78b8K+jBvDn/bd/6JCQ8pIASKlts1w1wyhJ/IcodTKFwi74l8gBE2p3xKhlzFPqGD7j4SJ7w6qLyWJUYBIMh6yVLhGWCL8q4Qhr+cIy4UvlOSlv0VYKXWFcDLfD7hvWGqTQkNSogCR5G0RLKcIJzM+SwiU3ycMfU0TlhLH1CMss30L+AZhLmPzzAwNS8mBogCRA2WbvSenCUNcvwL8W0Jv5SzhtMZxWCD0KN4D/g+hl7FEKB+S3/0vKjTkIFGAyIH1kJMZTwOfB36dMMz1EcLGxp0qCCukfg5cA75JCI368J9pia1UggJEKmWLUDlGONb3Ne7MnfwqYV/KZrkVTwiG7xImvS8DPyMMU3U2f5GCQqpGASKVtUWYTBMqCV8EXgL+1fB//1PgXcJy25toWEoEUICIANsOdx0e/v0DhyspNEQUICIP2G65sEJDREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZFT/HxI0EoENodeFAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE4VDExOjA3OjU1LTA4OjAw5XYm4AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMS0wMS0xOFQxMTowNzo1NS0wODowMJQrnlwAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC";
    },
 
});
