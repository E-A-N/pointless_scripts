{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var center = this.centerFloor(floors);
        
        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(center);
        });
        
        elevator.on("floor_button_pressed", function(floorNum) {
            // Maybe tell the elevator to go to that floor?
            elevator.goToFloor(floorNum);
        })
    },
    update: function(dt, elevators, floors) {
       // We normally don't need to do anything here
    },
    centerFloor: function(floors){
        var total = floors.length;
        total = Math.floor(total/2);
        return total;
    }
}
