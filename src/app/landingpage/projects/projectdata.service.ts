import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  constructor() { }

  projectlist = [
    {
      name: "Pokedex",
      img: "./assets/img/pokedex screanshot 2.png",
      skils: "JavaScript | HTML | CSS | Api",
      frame: "./assets/img/projectframe.png",
      info: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      link:"http://pokedex.alice-buchholz.de/",
      github: "https://github.com/05Lucia/Pokedex",
    },
    {
      name: "El Pollo Loco",
      img: "./assets/img/el polo loco sreanschot 1 (1).png",
      skils: "JavaScript | HTML | CSS",
      frame: "./assets/img/projectframe.png",
      info: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      link:"http://el-pollo-loco.alice-buchholz.de/",
      github: "https://github.com/05Lucia/El-pollo-Loco",
    },
    {
      name: "Join",
      img: "./assets/img/join screen (1).png",
      skils: "JavaScript | HTML | CSS",
      frame: "./assets/img/projectframe.png",
      info: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      link:"http://join.alice-buchholz.de/",
      github: "https://github.com/05Lucia/Join",
    }
  ]

}
