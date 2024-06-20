import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {


  projectlist = [
    {
      name: "Pokedex",
      img: "./assets/img/pokedex screanshot 2.png",
      skils: "JavaScript | HTML | CSS | Api",
      frame: "./assets/img/projectframe.png",
      info: "PROJECT1.INFO",
      link:"https://pokedex.alice-buchholz.de/",
      github: "https://github.com/05Lucia/Pokedex",
    },
    {
      name: "El Pollo Loco",
      img: "./assets/img/el polo loco sreanschot 1 (1).png",
      skils: "JavaScript | HTML | CSS",
      frame: "./assets/img/projectframe.png",
      info: "PROJECT2.INFO",
      link:"https://el-pollo-loco.alice-buchholz.de/",
      github: "https://github.com/05Lucia/El-pollo-Loco",
    },
    {
      name: "Join",
      img: "./assets/img/join screen (1).png",
      skils: "JavaScript | HTML | CSS",
      frame: "./assets/img/projectframe.png",
      info: "PROJECT3.INFO",
      link:"https://join.alice-buchholz.de/",
      github: "https://github.com/05Lucia/Join",
    }
  ]

}
