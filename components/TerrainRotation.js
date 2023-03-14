AFRAME.registerComponent("terrainrotation", {
    schema: {
      rotationSpeed: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.rotationSpeed > -0.1) {
            this.data.rotationSpeed -= 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.rotationSpeed < 0.1) {
            this.data.rotationSpeed += 0.01;
          }
        }
      });
    },
    tick: function () {
      var terrainRotation = this.el.getAttribute("rotation");
  
      terrainRotation.y += this.data.rotationSpeed;
  
      this.el.setAttribute("rotation", {
        x: terrainRotation.x,
        y: terrainRotation.y,
        z: terrainRotation.z
      });
    }
  });
  