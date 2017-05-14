{

    init: function(elevators, floors) {

        //Add custom attributes to elevators
        //this.setNewAttributes(elevators);
        //this.center = this.setCenterFloor(floors);
        this.setCenterFloor(floors);
        this.elevatorEvents(elevators);

    },

    update: function(dt, elevators, floors) {
       // We normally don't need to do anything here
    },

    center: 0,
    setCenterFloor: function(floors){
        var total = floors.length;
        total = Math.floor(total/2);
        this.center = total;
        //return total;
    },

    setNewAttributes: function(elevators){
        var eLen = elevators.length;
        for (var i = 0; i < eLen; i++){
            elevators[i].idle = false;
        }
    },

    elevatorEvents: function(elevators){
        var eLen = elevators.length;
        for (var i = 0; i < eLen; i++) {
            var elevator = elevators[i];
            elevator.idle = false;

            elevator.on("idle",function(){
              //elevator.goToFloor(this.center);
              elevator.goToFloor(1);
            });

            elevator.on("floor_button_pressed", function(floorNum) {
                // Maybe tell the elevator to go to that floor?
                elevator.goToFloor(floorNum);
            });
        }
    },
}
