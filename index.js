class superMan{
    constructor(name, age, tipe) {
        this.name = name
        this.age = age
        this.tipe = tipe
    }

    atacar() {
        console.log(`O ${this.tipe} atacou usando a sua espada`)
        }
}

let Sergio = new superMan("Sérgio", 29, "Guerreiro")

Sergio.atacar()