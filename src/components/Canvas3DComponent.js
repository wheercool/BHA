'use strict';

import React from 'react';

require('styles//Canvas3D.css');
var store, scene = new THREE.Scene(),
	isFullScreenMode = true,
	activeProjectionContainer = 'plane-container';

var	containersPadding = 15,
		titleMargin = 10 + 20,
		isFullScreen = true;



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
		    mesh1.name = 'text'
		    return mesh1;
			
	}


	function addMeshes() {
		var data = [];

			// var fStore = store.filter(x => x.length > 0)							
				// console.log(wellboreConfig.trajectory)
				console.log(store)
				store
				.map(wellboreConfig => ({
					curve: new THREE.SplineCurve3(wellboreConfig.trajectory.map(x => new THREE.Vector3(x[0], x[1], x[2]))),
					color: wellboreConfig.color
				}))

				.forEach(wellbore => {
					data = data.concat(wellbore.curve.points)
					var geometry = new THREE.TubeGeometry(
					    wellbore.curve,  //path
					    110,    //segments
					    1,     //radius
					    8,     //radiusSegments
					    false  //closed
					);

					var wellboreMesh = createMesh(geometry, wellbore.color);
					wellboreMesh.name = "wellbore"
					scene.add(wellboreMesh)
				})



			var min = Infinity,
			max = -Infinity,
			maxHeight = -Infinity,
			size
				
			data.forEach(function(d) {

				maxHeight = Math.max(maxHeight, d.y)
				min = Math.min(min, d.x, d.y, d.z)
				max = Math.max(max, d.x, d.y, d.z)
				size = Math.max(Math.abs(min), Math.abs(max))
			})

			// alert(size)
			var gridHelper = new THREE.GridHelper(size, 10 );
			gridHelper.position.z = -maxHeight - 10
			gridHelper.name = 'grid';
			gridHelper.rotation.x = Math.PI / 2;

			scene.add( gridHelper );

		

			// var bbox = new THREE.BoundingBoxHelper( wellbore, 0xeeeeee );
			// bbox.update();
			// scene.add( bbox );

			

			var north = text('N')
			north.position.set(135, size, -maxHeight - 10);
			scene.add( north );

			var south = text('S')
			south.position.set(135, -size, -maxHeight - 10);
			// south.rotation.set(-Math.PI /2, 0, Math.PI / 2)			
			scene.add( south );

			var west = text('W')
			west.position.set(-size + 135, 0, -maxHeight - 10);
			// west.rotation.set(-Math.PI /2, 0, Math.PI / 2)			
			scene.add( west );	

			var east = text('E')
			east.position.set(size + 135, 0, -maxHeight - 10);
			// east.rotation.set(-Math.PI /2, 0, Math.PI / 2)			
			scene.add( east );
			





	}
	function createMesh(geom, color) {
			color = color || 'black'
			var mat = new THREE.MeshBasicMaterial({ color: color, wireframe: false});
			var mesh = new THREE.Mesh(geom,mat);
			return mesh;
	}

	function init() {
			;

			var elements = ['plane-container', 'perspective-container', 'orthographic-container', 'section-container'],
			views = [],
			far = 1000,
			canvas = document.getElementById('canvas3d-component'),
			renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } ),

			axes = new THREE.AxisHelper(30),

			spereGeometry = new THREE.SphereGeometry(60, 20, 1, 1),
			planeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false});
			
			
			

			scene.add(axes)
			
			
			addMeshes();

			
			
			var cameras = [
				new THREE.OrthographicCamera(-200, 200, -200, 200, -200, 1000),
				new THREE.PerspectiveCamera(1000, 1, 1, 1000),
				new THREE.OrthographicCamera(-200, 200, -200, 200, -200, 1000),
				new THREE.OrthographicCamera(-200, 200, -200, 200, -200, 1000)
			]

			views = elements.map(function(elementId, i) {

				// var far = i > 0? 20: 45;
				

				var container = document.getElementById(elementId),
					camera = cameras[i];
					

					// camera.up.set(0, 0, -1)
					
					// window.controls = controls;
					
					
					switch(i) {
						case 0: 
							camera.up.set(0, -1, 0)
							// camera.rotation.z = Math.PI / 2;
							// camera.position.x = 0.00000001;	 //bug with float type						
							// camera.position.y = -100;							
							camera.position.z = -100;	

							// camera.lookAt(scene.position)													

							break;

						case 3:
							camera.position.y = 100;
							camera.up.set(0, 1, 0)
							// camera.position.z = 100;
							break;
						default:
							camera.position.x = 30
							camera.position.y = -40
							camera.position.z = 30
							break;
					}
					
					var bbox = new THREE.BoundingBoxHelper( scene, 0 );
					bbox.update();
					// camera.lookAt(scene.position)
					var controls = new THREE.OrbitControls( camera, container );
					controls.enablePan = true;
					controls.enableZoom = true;


					switch (i) {
						case 0:
							
							controls.enableRotate = false
							
							break;
						case 3:
							controls.enableRotate = false
							break;
						case 1:
								controls.enableRotate = true;
								const 	height = 100,
										fov = 1;
								var dist = height / 2 / Math.tan(Math.PI * fov / 360);								

							break;
						case 2:
							controls.enableRotate = true;
							break;

					}


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

		

		function updateSize() {

			var width = canvas.clientWidth;
			var height = canvas.clientHeight;
			// debugger;
			views.forEach(function(v) {
				// debugger;
				var titleHeight = document.getElementById('bha-title').clientHeight,
					panelHeaderHeight = document.getElementById('panel-header').clientHeight;

				v.element.style.height = isFullScreen?(window.innerHeight - titleHeight - 7 * containersPadding - titleMargin - 1 * panelHeaderHeight) + 'px'
					:(window.innerHeight - titleHeight - 9 * containersPadding - titleMargin - 2 * panelHeaderHeight) / 2 + 'px'
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
				if (camera instanceof THREE.OrthographicCamera) {
					camera.top = -height / 2;
					camera.bottom = height / 2;
					camera.left = - width / 2;
					camera.right = width / 2;
					camera.near = -200;
					camera.far = 10000;
					// debugger;
				} else {
					camera.aspect = width / height;
				}
				camera.updateProjectionMatrix()
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

	



class Canvas3DComponent extends React.Component {
	componentDidMount() {
		store = this.props.data;

		init();
		// animate(this.refs.canvas)
		// console.log(this.refs.canvas)
		// debugger;
		// window.addEventListener('resize', updateSize.bind(null, this.refs.canvas), false)
	}
  render() {
  	if (!scene) alert("Scene")
  	// debugger;
  	if (scene) {
  		scene.children = [];
  // 		scene.children.forEach(x => {
		// 	console.log(x.type)
		// 	// if (x.type == 'Mesh') {
		// 		scene.remove(x);
		// 	// }	
		// }) 
	}
	store = this.props.data;
	isFullScreen = this.props.isFullScreenMode
	if (scene) {
			addMeshes();
		}
    return (
      <canvas ref="canvas" id="canvas3d-component" className="canvas3d-component">
      </canvas>
    );
  }
}



Canvas3DComponent.displayName = 'Canvas3DComponent';


export default Canvas3DComponent;
