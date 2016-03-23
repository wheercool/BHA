function module() {
	// var planeContainer = document.getElementById('plane-container'),
	// 	perspectiveContainer = document.getElementById('perspective-container'),
	// 	orthographicContainer = document.getElementById('orthographic-container'),
	// 	sectionContainer = document.getElementById('section-container'),

	var	containersPadding = 15;


	init();

	
	function init() {
		var scene = new THREE.Scene(),
			elements = ['plane-container'],
			views = [],
			viewAngle = 90,
			aspect = window.innerWidth/window.innerHeight,
			near = 0.1,
			far = 1000,
			canvas = document.getElementById('c'),
			renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } ),

			axes = new THREE.AxisHelper(20),

			planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1),
			planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, wireframe: false}),
			plane = new THREE.Mesh(planeGeometry, planeMaterial);

			plane.rotation.x = -0.5 * Math.PI
			plane.position.x = 15
			plane.position.y = 0
			plane.position.z = 0


		scene.add(axes)
		scene.add(plane)
		
	

		views = elements.map(function(elementId) {



			var container = document.getElementById(elementId),
				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
				// controls = new THREE.OrbitControls( camera, container );

				// controls.enablePan = true;
				// controls.enableZoom = true;

				camera.position.x = -30
				camera.position.y = 40
				camera.position.z = 30
				
				camera.lookAt(scene.position)
				updateSize();
				renderer.setClearColor(0xeeeeee)
				renderer.render(scene, camera)

				return {
					camera: camera,
					element: container,
					// controls: controls,
					container: container
				};
		})


		// window.addEventListener('resize', updateSize, false)

		// renderer.setPixelRatio(window.devicePixelRatio)

		// animate();

		function updateSize() {

			var width = canvas.clientWidth;
			var height = canvas.clientHeight;

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

			// renderer.setClearColor( 0xffffff );
			// renderer.setScissorTest( false );
			// renderer.clear();

			// renderer.setClearColor( 0xe0e0e0 );
			// renderer.setScissorTest( true );

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

				// renderer.setViewport( left, bottom, width, height );
				// renderer.setScissor( left, bottom, width, height );

				var camera = view.camera;
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

	
	


}

module();
