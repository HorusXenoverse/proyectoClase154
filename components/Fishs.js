AFRAME.registerComponent("fish",{
    init: function(){
        for(var index = 1; index <= 10; index++){
            var fishX = Math.floor(Math.random()*100 + -50)
            var fishY = Math.floor(Math.random()*5 +5)
            var fishZ = Math.floor(Math.random()*60 + -40)
    
            var fishID = `fish${index}`
            var fhisPosition = {x: fishX, y: fishY, z: fishZ}
    
            this.createBird(fishID, fishPosition)
        }
    },
    
    createBird: function(id, position){
        var birdTerrain = document.querySelector("#island")
        var bird = document.createElement("a-entity")
        bird.setAttribute("id", id)
        bird.setAttribute("position", position)
        bird.setAttribute("scale", {x: 500, y: 500, z: 500})
        bird.setAttribute("gltf-model", "./models/fish/scene.gltf")
        bird.setAttribute("animation-mixer", {})
        birdTerrain.appendChild(bird)
        
    }
})