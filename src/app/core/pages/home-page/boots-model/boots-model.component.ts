import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'boots-model',
  standalone: true,   // 👈 IMPORTANTE
  templateUrl: './boots-model.component.html',
})
export class BootsModelComponent implements AfterViewInit { 
  @ViewChild('canvasContainer', { static: true }) container!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private plataformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.plataformId)) return;

    const scene = new THREE.Scene();

    const width = this.container.nativeElement.clientWidth || 400;  // 👈 fallback
    const height = this.container.nativeElement.clientHeight || 300;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);

    this.container.nativeElement.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }
}
