import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

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

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040, 2)); //luz suave

    // -- Cargar modelo GLTF --
    const loader = new GLTFLoader();
    loader.load(
    'assets/cowboy_boots/scene.gltf',
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(2, 2, 2);
      model.position.set(0, -1, 0);
      scene.add(model);
    },
      undefined, 
      (error) => {
        console.error('Error cargando modelo', error);
      }
    );
    camera.position.z = 5;
  }
}