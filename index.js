//Factory function
/* function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1); */

//Constructor function
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {x:0,y:0};
    
    Object.defineProperty(this,'defaultLocation',{
        get: function() {return defaultLocation},
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });

    this.draw = function() {
        console.log('draw');
    }

}

function StopWatch() {
    let duration = 0;
    let startTime = 0;

 
    Object.defineProperty(this,'duration',{
        get : function() {return duration}
    });

    this.start = function() {
        if (startTime !== 0)
            throw new Error('Stopwatch has already started');
        else 
            startTime = new Date();
    }
    
    this.stop = function() {
        if (startTime == 0)
            throw new Error('Stopwatch not started');
        else {
            let stopTime = new Date();
            duration = duration + (stopTime.getTime() - startTime.getTime())/1000;
            startTime = 0;
        }
    }

    this.reset = function() {
        duration = 0;
    }

}