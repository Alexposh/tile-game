import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import Konva from 'konva';

@Component({ 
    selector: 'app-konva-canvas',
    standalone: true,
    imports: [],
    template: `
    <div #container class="canvas-wrapper"></div>
  `,
  styles: `
    .canvas-wrapper {
      width: 100%;
      height: 100vh;
      background-color: #f0f0f0;
      overflow: hidden; 
    }
  `
     })
export class CanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) container!: ElementRef;
  stage!: Konva.Stage;

  ngAfterViewInit() {
    this.stage = new Konva.Stage({
      container: this.container.nativeElement,
      width: window.innerWidth,
      height: window.innerHeight
    });

    const layer = new Konva.Layer();
    const circle = new Konva.Circle({ x: 100, y: 100, radius: 50, fill: 'blue' });
    
    layer.add(circle);
    this.stage.add(layer);
  }

  ngOnDestroy() {
    if (this.stage) {
      this.stage.destroy(); // Important!
    }
  }
}