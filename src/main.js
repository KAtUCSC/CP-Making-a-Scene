// Code Practice: Making a Scene
// Name: Kira Way
// Date: 2024-1-17

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    scene: [MainMenu, Play]
}

let game = new Phaser.Game(config)