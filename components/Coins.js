AFRAME.registerComponent("coin",{
    init: function(){
        for(var i = 1; 1 <= 10; i++ ){
            const id = `coin${i}`

            const posX = Math.random() *100 + -50
            const posY = Math.random()*5 +5
            const posZ = Math.random()*60 + -40

            var position = { x: posX, y: posY, z: posZ }
            this.createCoins(id, position)
        }
    },
    createCoins: function(id, position){
        const treasureEntity = document.querySelector("#island")
        var coinEL = document.createElement("a-entity")

        coinEL.setAttribute("id", id)
        coinEL.setAttribute("position", position)
        coinEL.setAttribute("material", "color", "#ff9100")

        coinEL.setAttribute("animation",{
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        })
        treasureEntity.appendChild(coinEL)
    }


})