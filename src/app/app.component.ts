import { Component, OnInit } from '@angular/core';
import Heatmap from 'visual-heatmap';
import { Test } from './heatmap/classes/test'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'heatmap';
  dataPush;
  data = [];
  instance;
  test;

  constructor() {
    this.test = new Test();
    this.test.test();
  }

  ngOnInit() {
    const canvas = document.getElementById('canvas_live');
    this.instance = Heatmap("#" + canvas.id, {
      size: 30.0,
      max: 100,
      blur: 1.0,
      gradient: [{
        color: [0, 0, 255, 1.0],
        offset: 0
      }, {
        color: [0, 0, 255, 1.0],
        offset: 0.2
      }, {
        color: [0, 255, 0, 1.0],
        offset: 0.45
      }, {
        color: [255, 255, 0, 1.0],
        offset: 0.85
      }, {
        color: [255, 0, 0, 1.0],
        offset: 1.0
      }]
    });

    this.dataPush = true;
    // document.getElementById('canvas_live').addEventListener("mousemove", (e) => {
    //   console.log(e);
    //   this.instance.addData([{
    //     x: e.x,
    //     y: e.y,
    //     value: 20
    //   }], true);
    //   this.dataPush = false;
    //   setTimeout(this.idleFlag, 20);
    // });
  }
  idleFlag() {
    this.dataPush = true;
  }

}
