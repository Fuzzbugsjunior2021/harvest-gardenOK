namespace SpriteKind {
    export const Veggie = SpriteKind.create()
    export const Sprout = SpriteKind.create()
}
function goAfterSprout () {
    sprouts = sprites.allOfKind(SpriteKind.Sprout)
if(targetSprout==null||targetSprout.kind()==SpriteKind.Veggie){
        sproutIndex = randint(0, sprouts.length - 1)
        targetSprout = sprouts[sproutIndex]
        targetSprout.sayText("Save Me!!!")
rabbit.follow(targetSprout, 50)
}
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Sprout, function (ghoul, thesprout) {
    info.player2.changeScoreBy(1)
    thesprout.setKind(SpriteKind.Veggie)
    veggiesIndex = randint(0, veggies.length - 1)
    veggiesImg = veggies[veggiesIndex]
    thesprout.setImage(veggiesImg)
    thesprout.sayText("")
    thesprout.follow(ghoul)
})
let groundTile: tiles.Location = null
let groundIndex = 0
let sprout: Sprite = null
let veggiesImg: Image = null
let veggiesIndex = 0
let sproutIndex = 0
let sprouts: Sprite[] = []
let rabbit: Sprite = null
let veggies: Image[] = []
let targetSprout: any = null
veggies = [
img`
    . . . . . . . e e e e . . . . . 
    . . . . . e e 4 5 5 5 e e . . . 
    . . . . e 4 5 6 2 2 7 6 6 e . . 
    . . . e 5 6 6 7 2 2 6 4 4 4 e . 
    . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
    e 5 e c 5 4 5 4 5 5 5 e e . . . 
    e 5 e e 5 5 5 5 5 4 e . . . . . 
    4 5 4 e 5 5 5 5 e e . . . . . . 
    . 4 5 4 5 5 4 e . . . . . . . . 
    . . 4 4 e e e . . . . . . . . . 
    `,
img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `,
img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `,
img`
    . . . . . 3 3 b 3 3 d d 3 3 . . 
    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
    . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
    . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
    . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
    . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
    . 4 4 d 1 1 1 1 1 1 d d d b b . 
    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
    4 5 5 d 5 5 d b b b d d 3 . . . 
    4 5 5 5 d d d d 4 4 b 3 . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e 3 3 b . . 
    . . . . . . b b e 3 2 e 3 a . . 
    . . . . b b 3 3 e 2 2 e 3 3 a . 
    . . b b 3 3 3 3 3 e e 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `,
img`
    . . . . . . b b b b a a . . . . 
    . . . . b b d d d 3 3 3 a a . . 
    . . . b d d d 3 3 5 3 3 3 a a . 
    . . b d d 3 3 3 5 3 3 3 3 3 a . 
    . b 3 d 3 3 3 5 3 b 3 3 2 3 a b 
    . b 3 3 7 3 3 a a 3 3 2 3 3 a b 
    b 3 3 7 3 3 a a 3 3 2 3 d a 4 b 
    b 3 7 3 3 b a 3 3 3 3 3 d a 4 b 
    b 3 3 3 3 3 3 3 3 3 4 d a 4 4 e 
    a 3 3 3 3 9 3 3 3 4 d a 4 4 4 e 
    a 3 3 3 9 3 3 3 4 d a 4 4 4 e . 
    a a 3 9 3 d d d a a 4 4 4 e e . 
    . e a a a a a a 4 4 4 4 e e . . 
    . . e e b b 4 4 4 4 b e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 3 3 3 3 2 e . . . . 
    . . . 2 3 d 1 1 d d 3 2 e . . . 
    . . 2 3 1 d 3 3 3 d d 3 e . . . 
    . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
    . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
    e 3 d 3 3 1 d d 3 d 1 b b e e . 
    . e 3 1 1 d d 1 1 1 b b e e e . 
    . . e 3 3 3 3 3 3 b e e e e . . 
    . . . e e e e e e e e e e . . . 
    `
]
let sproutImg = img`
    . . . . 
    . 7 . 7 
    7 7 7 7 
    . 7 7 . 
    `
let player = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
rabbit = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
rabbit.z = 10
player.z = 100
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level`)
controller.moveSprite(player)
scene.cameraFollowSprite(player)
info.player1.setScore(0)
info.player2.setScore(0)
let available_field_tiles = tiles.getTilesByType(assets.tile`tile1`)
game.onUpdateInterval(2000, function () {
    player.startEffect(effects.halo)
    player.startEffect(effects.halo)
    player.startEffect(effects.fire)
    player.startEffect(effects.ashes)
    player.startEffect(effects.fire)
})
game.onUpdateInterval(100, function () {
    if (available_field_tiles.length > 0) {
        sprout = sprites.create(sproutImg, SpriteKind.Sprout)
        groundIndex = randint(0, available_field_tiles.length - 1)
        groundTile = available_field_tiles[groundIndex]
        tiles.placeOnTile(sprout, groundTile)
        available_field_tiles.removeAt(groundIndex)
        goAfterSprout()
    }
    rabbit.startEffect(effects.halo)
})
