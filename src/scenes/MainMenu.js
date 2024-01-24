class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainmenuScene')
        console.log('MainMenu: constructor')
    }

    init() {
        console.log('MainMenu: init')
        this.HP = 100
        this.EXP = 0
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)
    }

    preload() {
        console.log('MainMenu: preload')
        this.load.path = './assets/img/'
        this.load.image('tomato', 'tomato.png')
        this.load.image('grapes', 'grapes.png')
        this.load.image('kiwi', 'kiwi.png')
        this.load.image('orange', 'orange.png')
        this.load.image('pear', 'pear.png')
        this.load.image('carrot', 'carrot.png')
    }

    create() {
        console.log('MainMenu: create')

        let playerStats = {
            HP: this.HP,
            EXP: this.EXP
        }

        this.scene.start('playScene', playerStats)
    }
}