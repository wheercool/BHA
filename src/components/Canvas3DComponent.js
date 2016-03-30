'use strict';

import React from 'react';

require('styles//Canvas3D.css');

var	containersPadding = 15,
		titleMargin = 10 + 20,
		console = document.getElementById('console');



	function text( txt) {
		var canvas1 = document.createElement('canvas');
			var context1 = canvas1.getContext('2d');
			context1.font = "Bold 40px Arial";
			context1.fillStyle = "rgba(255,0,0,0.95)";
		    context1.fillText(txt, 0, 50);
		    
			// canvas contents will be used for a texture
			var texture1 = new THREE.Texture(canvas1) 
			texture1.needsUpdate = true;
		      
		    var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
		    material1.transparent = true;

		    var mesh1 = new THREE.Mesh(
		        new THREE.PlaneGeometry(canvas1.width, canvas1.height),
		        material1
		      );
		    return mesh1;
			
	}

	function init() {
		var scene = new THREE.Scene(),
			elements = ['plane-container', 'perspective-container', 'orthographic-container', 'section-container'],
			views = [],
			far = 1000,
			canvas = document.getElementById('canvas3d-component'),
			renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } ),

			axes = new THREE.AxisHelper(30),

			spereGeometry = new THREE.SphereGeometry(60, 20, 1, 1),
			planeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false});
			
			
			

			scene.add(axes)
			
			var f = Math.sin;
			var count = 20000,
				sx = 100,
				sy = 100,
				data = range(0,  Math.PI / 2, Math.PI/count).map(function(d) {
					return new THREE.Vector3(sx * d, sy * f(d), 20 * f(d));
				});

			var curve = new THREE.SplineCurve3(
				data
				// new THREE.Vector3( 10, 0, 10 )
			),


			min = Infinity,
			max = -Infinity,
			maxHeight = -Infinity,
			size
				

			data.forEach(function(d) {

				maxHeight = Math.max(maxHeight, d.y)
				min = Math.min(min, d.x, d.y, d.z)
				max = Math.max(max, d.x, d.y, d.z)
				size = Math.max(Math.abs(min), Math.abs(max))
			})

			var gridHelper = new THREE.GridHelper(size, 10 );
			gridHelper.position.y = maxHeight + 10
			scene.add( gridHelper );

			var geometry = new THREE.TubeGeometry(
			    curve,  //path
			    64,    //segments
			    2,     //radius
			    8,     //radiusSegments
			    false  //closed
			);

			var wellbore = createMesh(geometry);
			var bbox = new THREE.BoundingBoxHelper( wellbore, 0xeeeeee );
			bbox.update();
			scene.add( bbox );

			scene.add(wellbore)

			var north = text('N')
			north.position.set(-100, maxHeight + 10, -150);
			north.rotation.set(-Math.PI / 2, 0, Math.PI / 2)			
			scene.add( north );

			var south = text('S')
			south.position.set(200, maxHeight + 10, -150);
			south.rotation.set(-Math.PI /2, 0, Math.PI / 2)			
			scene.add( south );

			var west = text('W')
			west.position.set(0, maxHeight + 10, 0);
			west.rotation.set(-Math.PI /2, 0, Math.PI / 2)			
			scene.add( west );	

			var east = text('E')
			east.position.set(0, maxHeight + 10, -280);
			east.rotation.set(-Math.PI /2, 0, Math.PI / 2)			
			scene.add( east );
			



			
			var cameras = [
				new THREE.OrthographicCamera(-200, 200, -200, 200, -200, 1000),
				new THREE.PerspectiveCamera(far, 1, 1, 1000),
				new THREE.OrthographicCamera(-200, 200, -200, 200, -200, 1000),
				new THREE.OrthographicCamera(-200, 200, -200, 200, -200, 1000)
			]

			views = elements.map(function(elementId, i) {

				// var far = i > 0? 20: 45;
				

				var container = document.getElementById(elementId),
					camera = cameras[i],
					controls = new THREE.OrbitControls( camera, container );
					controls.enablePan = true;
					controls.enableZoom = true;
					// window.controls = controls;
					switch (i) {
						case 0:
							controls.enableRotate = false

							break;
						case 3:
							controls.enableRotate = false
							break;
						case 1:
						case 2:
							controls.enableRotate = true;
							break;

					}
					
					switch(i) {
						case 0: 
							camera.position.x = 0.00000001;	 //bug with float type						
							camera.position.y = -100;							
							camera.position.z = 0;														

							break;

						case 3:
							camera.position.z = 100;
							break;
						default:
							camera.position.x = 30
							camera.position.y = -40
							camera.position.z = 30
							break;
					}
					
					camera.lookAt(scene.position)

					return {
						camera: camera,
						element: container,
						controls: controls,
						container: container
					};
			})


			window.addEventListener('resize', updateSize, false)

			renderer.setPixelRatio(window.devicePixelRatio)

			animate();

		function createMesh(geom) {
			var mat = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false});
			var mesh = new THREE.Mesh(geom,mat);
			return mesh;
		}

		function updateSize() {

			var width = canvas.clientWidth;
			var height = canvas.clientHeight;
			// debugger;
			views.forEach(function(v) {
				// debugger;
				var titleHeight = document.getElementById('bha-title').clientHeight,
					panelHeaderHeight = document.getElementById('panel-header').clientHeight;

				v.element.style.height = (window.innerHeight - titleHeight - 9 * containersPadding - titleMargin - 2 * panelHeaderHeight) / 2 + 'px'
			})
			if ( canvas.width !== width || canvas.height != height ) {

				renderer.setSize( width, height, false );

			}

		}

		function animate() {

			render();
			requestAnimationFrame( animate );

		}

		function render() {
			updateSize();

			renderer.setClearColor( 0xffffff );
			renderer.setScissorTest( false );
			renderer.clear();

			renderer.setClearColor( 0xe0e0e0 );
			renderer.setScissorTest( true );

			views.forEach(function(view) {
				var rect = view.container.getBoundingClientRect();

					// check if it's offscreen. If so skip it
				if ( rect.bottom < 0 || rect.top  > renderer.domElement.clientHeight ||
					 rect.right  < 0 || rect.left > renderer.domElement.clientWidth ) {

					return;  // it's off screen

				}

				var width  = rect.right - rect.left;
				var height = rect.bottom - rect.top;
				var left   = rect.left;
				var bottom = renderer.domElement.clientHeight - rect.bottom;
                
				renderer.setViewport( left, bottom, width, height );
				renderer.setScissor( left, bottom, width, height );

				var camera = view.camera;
				/*if (camera instanceof THREE.OrthographicCamera) {
					camera.top = -height / 2;
					camera.bottom = height / 2;
					camera.left = - width / 2;
					camera.right = width / 2;
					camera.near = -200;
					camera.far = 10000;
					debugger;
				}*/
				renderer.render(scene, camera)
			})
		}
	}	


	function documentHeight() {
		var body = document.body,
		    html = document.documentElement;

		var height = Math.max( body.scrollHeight, body.offsetHeight, 
		                       html.clientHeight, html.scrollHeight, html.offsetHeight );

		return height;

	}

	function range(a, b, step) {
		var res = [];		
		step = step || 1;
		while (a < b) {
			res.push(a);
			a += step;
		}
		return res;
	}



class Canvas3DComponent extends React.Component {
	componentDidMount() {
		init();
		// animate(this.refs.canvas)
		// console.log(this.refs.canvas)
		// debugger;
		// window.addEventListener('resize', updateSize.bind(null, this.refs.canvas), false)
	}
  render() {
    return (
      <canvas ref="canvas" id="canvas3d-component" className="canvas3d-component">
      </canvas>
    );
  }
}



Canvas3DComponent.displayName = 'Canvas3DComponent';


export default Canvas3DComponent;
