import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import platformSmallTall from '../img/platformSmallTall.png'


import platform2 from '../img/platform2.png'
import hills2 from '../img/hills2.png'
import background2 from '../img/background2.png'
import platformSmallTall2 from '../img/platformSmallTall2.png'

import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'

import door from '../img/door.png'
import door2 from '../img/door2.png'




const canvas = document.querySelector('canvas')
  const c = canvas.getContext('2d')
  
  canvas.width = 1024
  canvas.height = 576

  const gravity = 1.2

  class Player{
    constructor(){
      this.speed = 5
      this.position = {
        x:100,
        y:100
      }
      this.velocity = {
        x: 0,
        y: 0
      }
      this.width = 66
      this.height = 150

      this.image = createImage(spriteStandRight)
      this.frames = 0
      this.sprites = {
        stand:{
          right: createImage(spriteStandRight),
          left: createImage(spriteStandLeft),
          cropWidth: 177,
          width: 66
        },
        run:{
          right: createImage(spriteRunRight),
          left: createImage(spriteRunLeft),
          cropWidth: 340,
          width: 127.875

        }
      }

      this.currentSprite = this.sprites.stand.right
      this.currentCropWidth = 177
    }
    draw() {
     c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth ,
      400, this.position.x, this.position.y, this.width, this.height)
    }
    update(){
      this.frames++
      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) 
        this.frames = 0
      else if(this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left))
         this.frames = 0

      this.draw()
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y

      if (this.position.y + this.height+ this.velocity.y <= canvas.height) 
      this.velocity.y += gravity
      

      
    }

  }

  

  class Platform{
    constructor({x, y ,image}){
      this.position = {
        x,
        y 
      }

      this.image = image
      this.width = image.width
      this.height = image.height

      
    }

    
    draw(){
    c.drawImage(this.image, this.position.x, this.position.y)
    }
  }

  

  

    class GenericObject{
    constructor({x,y,image}){
      this.position = {
        x,
        y 
      }

      this.image = image
      this.width = image.width
      this.height = image.height

      
    }
    draw(){
    c.drawImage(this.image, this.position.x, this.position.y)
    }
  }

  function createImage(imageSrc) {


  const image = new Image()
  image.src = imageSrc
  return image
  }

  let platformImage = createImage(platform)
  let platformSmallTallImage = createImage(platformSmallTall)
  let player = new Player()
  let platforms = []
  let genericObjects = []
  let doorImage = createImage(door)
  let door2Image = createImage(door2)
  let platformImage2 = createImage(platform2)

  let platformSmallTallImage2 = createImage(platformSmallTall2)


  let lastKey

  const keys = {
    right: {
      pressed: false 
    },
    left: {
      pressed: false
    }
  }

  let scrollOffset = 0

  function init(){

  doorImage = createImage(door)

  platformImage = createImage(platform)
  
   player = new Player()

  

   platforms = [
    new Platform({ 
    x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width, 
    y: 270,
    image: createImage(platformSmallTall)
     }),
  new Platform ({
    x: -1,
    y: 470,
    image : platformImage 
  }),
  new Platform({ x: platformImage.width - 3, y: 470, image: 
    platformImage }),
  new Platform({ 
    x: platformImage.width * 2 + 100, 
    y: 470,
    image: platformImage
     }),
  new Platform({ 
    x: platformImage.width * 3 + 200, 
    y: 370,
    image: platformImage
     }),
  new Platform({ 
    x: platformImage.width * 4 + 300 - 2, 
    y: 370,
    image: platformImage
     }),
  new Platform({ 
    x: platformImage.width * 5 + 490 - 2, 
    y: 370,
    image: platformImage
     }),
   new Platform({ 
    x: platformImage.width * 6 + 600 - 2, 
    y: 370,
    image: platformImage
     }),
   new Platform({ 
    x: platformImage.width * 7 + 700 - 2, 
    y: 470,
    image: platformImage
     }),
   new Platform({ 
    x: platformImage.width * 8 + 900 - 2, 
    y: 370,
    image: platformImage
     }),
   new Platform({ 
    x: platformImage.width * 9 + 1000 - 2, 
    y: 270,
    image: platformImage
     }),
   new Platform({ 
    x: platformImage.width * 10 + 600 - 2, 
    y: 170,
    image: platformImage
     }),
    new Platform({ 
    x: platformImage.width * 11 + 600 - 2 + platformImage.width - platformSmallTallImage.width, 
    y: 470,
    image: createImage(platformSmallTall)
     }),
    new Platform({ 
    x: platformImage.width * 12 + 433 - 2 + platformImage.width - platformSmallTallImage.width, 
    y: 470,
    image: createImage(platformSmallTall)
     }),
     new Platform({ 
      x: platformImage.width * 13 + 350 - 2 + platformImage.width - platformSmallTallImage.width, 
      y: 370,
      image: createImage(platformSmallTall)
       }),
       new Platform({ 
        x: platformImage.width * 14 + 300- 2 + platformImage.width - platformSmallTallImage.width, 
        y: 370,
        image: createImage(platformSmallTall)
         }),
         new Platform({ 
          x: platformImage.width * 15 + 250- 2 + platformImage.width - platformSmallTallImage.width, 
          y: 270,
          image: createImage(platformSmallTall)
           }),
           new Platform({ 
            x: platformImage.width * 16 + 200- 2 + platformImage.width - platformSmallTallImage.width, 
            y: 170,
            image: createImage(platformSmallTall)
             }),
             new Platform({ 
              x: platformImage.width * 17 + 150- 2 + platformImage.width - platformSmallTallImage.width, 
              y: 170,
              image: createImage(platformSmallTall)
               }),
               new Platform({ 
                x: platformImage.width * 18 + 300 - 2, 
                y: 370,
                image: platformImage
                 }),
              


 
  ]

   genericObjects = [
  new GenericObject({
    x: -1,
    y: -1,
    image : createImage(background)
  }),
  new GenericObject({
    x: -1,
    y: -1,
    image : createImage(hills)
  }),
  new GenericObject({
    x: 7400,
    y: 180,
    image : createImage(door)
  }),

]

 scrollOffset = 0
 }

 function init2(){

  door2Image = createImage(door2)

  platformImage2 = createImage(platform2)
  
   player = new Player()

  

   platforms = [
    new Platform({ 
    x: platformImage.width2 * 4 + 300 - 2 + platformImage2.width - platformSmallTallImage2.width, 
    y: 270,
    image: createImage(platformSmallTall2)
     }),
     new Platform ({
      x: -1,
      y: 470,
      image : platformImage2
    }),
    new Platform ({
      x: 950,
      y: 270,
      image : platformImage2
    }),
    new Platform({ x: platformImage2.width - 3, y: 270, image: 
      platformImage2 }),
    new Platform({ 
      x: platformImage2.width * 3 + 20, 
      y: 470,
      image: platformImage2
       }),
       new Platform({ 
        x: platformImage2.width * 4 + 0 - 2 + platformImage2.width - platformSmallTallImage2.width, 
        y: 370,
        image: createImage(platformSmallTall2)
         }),
         new Platform({ 
          x: platformImage2.width * 5 + 0 - 60 + platformImage2.width - platformSmallTallImage2.width, 
          y: 270,
          image: createImage(platformSmallTall2)
           }),
           new Platform({ 
            x: platformImage2.width * 6 + 0 - 90 + platformImage2.width - platformSmallTallImage2.width, 
            y: 170,
            image: createImage(platformSmallTall2)
             }),
             new Platform({ 
              x: platformImage2.width * 7 + 0 - 180 + platformImage2.width - platformSmallTallImage2.width, 
              y: 70,
              image: createImage(platformSmallTall2)
               }),
               new Platform({ 
                x: platformImage2.width * 8 + 20, 
                y: 470,
                image: platformImage2
                 }),
                 new Platform({ 
                  x: platformImage2.width * 9 + 220, 
                  y: 470,
                  image: platformImage2
                   }),
                   new Platform({ 
                    x: platformImage2.width * 10 + 0 + platformImage2.width - platformSmallTallImage2.width, 
                    y: 370,
                    image: createImage(platformSmallTall2)
                     }),
                     new Platform({ 
                      x: platformImage2.width * 11 -50  + platformImage2.width - platformSmallTallImage2.width, 
                      y: 270,
                      image: createImage(platformSmallTall2)
                       }),
                       new Platform({ 
                        x: platformImage2.width * 12 + 0 - 120 + platformImage2.width - platformSmallTallImage2.width, 
                        y: 170,
                        image: createImage(platformSmallTall2)
                         }),
                         new Platform({ 
                          x: platformImage2.width * 13 + 0 - 140 + platformImage2.width - platformSmallTallImage2.width, 
                          y: 470,
                          image: createImage(platformSmallTall2)
                           }),
                           new Platform({ 
                            x: platformImage2.width * 14 - 200  + platformImage2.width - platformSmallTallImage2.width, 
                            y: 370,
                            image: createImage(platformSmallTall2)
                             }),
                             new Platform({ 
                              x: platformImage2.width * 15  - 260 + platformImage2.width - platformSmallTallImage2.width, 
                              y: 270,
                              image: createImage(platformSmallTall2)
                               }),
                               

  ]

   genericObjects = [
  new GenericObject({
    x: -1,
    y: -1,
    image : createImage(background2)
  }),
  new GenericObject({
    x: -1,
    y: -1,
    image : createImage(hills2)
  }),
  new GenericObject({
    x: 5850,
    y: 180,
    image : createImage(door2)
  }),
 
]

 scrollOffset = 0

 }



  function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0 , 0 , canvas.width , canvas.height)
    genericObjects.forEach(GenericObject => {
      GenericObject.draw()
    })
   
    platforms.forEach((platform) => {
      platform.draw()
    })
     player.update()

    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = player.speed
    }
    else if (( keys.left.pressed && player.position.x > 100)  || keys.left.pressed && scrollOffset === 0 && player.position.x > 0){
      player.velocity.x = -player.speed
    }
    else {
      player.velocity.x = 0

      if (keys.right.pressed) {
        scrollOffset += player.speed
        platforms.forEach((platform) => {
      platform.position.x -= player.speed
    })
        genericObjects.forEach(GenericObject =>{
          GenericObject.position.x -= player.speed *  0.66
        })
        
      }
      else if (keys.left.pressed && scrollOffset > 0){
        scrollOffset -= player.speed
        platforms.forEach((platform) => {
      platform.position.x += player.speed
     })  
        genericObjects.forEach(GenericObject =>{
          GenericObject.position.x += player.speed * 0.66
        })
      }
    }
   
    

    platforms.forEach(platform => {
      
    
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width){
     player.velocity.y = 0
    }
    })
    if (
      keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
      player.frames = 1
      player.currentSprite = player.sprites.run.right
      player.currentCropWidth = player.sprites.run.cropWidth
      player.width = player.sprites.run.width
   

    } else if (
      keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left)
    {
      player.currentSprite = player.sprites.run.left
      player.currentCropWidth = player.sprites.run.cropWidth
      player.width = player.sprites.run.width
     
    }else if (
      !keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left){
      player.currentSprite = player.sprites.stand.left
      player.currentCropWidth = player.sprites.stand.cropWidth
      player.width = player.sprites.stand.width
    }
    else if (
      !keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right){
      player.currentSprite = player.sprites.stand.right
      player.currentCropWidth = player.sprites.stand.cropWidth
      player.width = player.sprites.stand.width
    }

    if (scrollOffset > platformImage.width * 18+ 200 - 2) {
        init2()
    }
    if(player.position.x >= platformImage2.width * 15  - 260 + platformImage2.width - platformSmallTallImage2.width){
      init()
    }
    if (player.position.y > canvas.height) {
      init()
    }
    if(player.position.x > door.x ){
      
    }
  }
  init()
  animate()

  addEventListener('keydown', ({keyCode}) => {
      //console.log(keyCode)
    switch(keyCode){
      case 65:
      console.log('left')
      keys.left.pressed = true
      lastKey = 'left'

      break

      case 83:
      console.log('down')
      break

      case 68:
      console.log('right')
      keys.right.pressed = true
      lastKey = 'right'
      break

      case 87:
      console.log('up')
      player.velocity.y -= 25
      break

    }

  })

  addEventListener('keyup', ({keyCode}) => {
    //console.log(keyCode)
    switch(keyCode){
      case 65:
      console.log('left')
      keys.left.pressed = false
      break

      case 83:
      console.log('down')
      break

      case 68:
      console.log('right')
      keys.right.pressed = false

      break

      case 87:
      console.log('up')
      break

    }
    //console.log(keys.right.pressed)
  })