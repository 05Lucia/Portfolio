import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  constructor() { }

  projectlist = [
    {
      name: "Pokedex",
      img: "./assets/img/pojeckt pokedex.png",
      skils: "JavaScript | HTML | CSS | Api",
      info: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
    },
    {
      name: "El Pollo Loco",
      img: "./assets/img/el polo loco.png",
      skils: "JavaScript | HTML | CSS",
      info: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
    },
    {
      name: "Join",
      img: "./assets/img/join.png",
      skils: "JavaScript | HTML | CSS",
      info: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
    }
  ]

}
