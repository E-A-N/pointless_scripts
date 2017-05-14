{

    init: function(elevators, floors) {

        //Add custom attributes to elevators
        //this.setNeWAttributes(elevators);
        this.center = this.setCenterFloor(floors);
        this.elevatorEvents(elevators);

        /*
        var elevator = elevators[0]; // Let's use the first elevator
        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(this.center);
        });

        elevator.on("floor_button_pressed", function(floorNum) {
            // Maybe tell the elevator to go to that floor?
            elevator.goToFloor(floorNum);
        });
        */
    },

    update: function(dt, elevators, floors) {
       // We normally don't need to do anything here
    },

    setCenterFloor: function(floors){
        var total = floors.length;
        total = Math.floor(total/2);
        return total;
    },

    setNeWAttributes: function(elevators){
        var eLen = elevators.length;
        for (var i = 0; i < eLen; i++){
            elevators[i].idle = false;
        }
    },
    center: 0,
    elevatorEvents: function(elevators){
      var eLen = elevators.length;
      for (var i = 0; i < eLen; i++) {
          var elevator = elevators[i];
          elevator.idle = false;

          elevator.on("idle",function(){
            elevator.goToFloor(this.center);
          });

          elevator.on("floor_button_pressed", function(floorNum) {
              // Maybe tell the elevator to go to that floor?
              elevator.goToFloor(floorNum);
          });
      }
    },
}
