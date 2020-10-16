function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 8 + 8)];
    }
    
    //color='#0000FF';
    
    return color;
}

function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}

function removeAll()
{
	var obj, i;
	for ( i = scene.children.length - 1; i >= 0 ; i -- )
	 {
	    obj = scene.children[ i ];
	    if ( obj !== directional_light && obj !== camera && obj !== light2 && obj !== IIAparticles)
	    {
	        scene.remove(obj);
	    }
	}
}

function stars(scene_name) {
	var material =  new THREE.MeshLambertMaterial( { color:0xffffff, shading: THREE.FlatShading } );
	for ( var i = 0; i < 400; i ++ ) {
		var geometry = new THREE.SphereGeometry(Math.random()/10,8, 8);
		var mesh = new THREE.Mesh( geometry, material );
		theta = (Math.random()-0.5)*2*Math.PI;
		phi = Math.random()*Math.PI;
		radius = 100;
		mesh.position.x = radius * Math.sin(theta) * Math.cos(phi);
		mesh.position.y = radius * Math.sin(theta) * Math.sin(phi);
		mesh.position.z = radius * Math.cos(theta);
		mesh.updateMatrix();
		mesh.matrixAutoUpdate = false;
		scene_name.add( mesh );
	}
}

function pointcloud(scene_name, filename, object_name) {
	var pMaterial =
	  new THREE.ParticleBasicMaterial({
	    color: 0xFFFFFF,
	    size: 0.05,
	    map: THREE.ImageUtils.loadTexture(
	      "textures/sprites/particle.png"
	    ),
	    blending: THREE.AdditiveBlending,
	    transparent: true
	  });

	$.getJSON(filename, function(obj2) {

		var geometry = new THREE.Geometry();

		l = obj2.points.length

		for (var i=0;i<l;i++)
		{
		var vertex = new THREE.Vector3();
		vertex.x = obj2.points[i].vertex[0];
		vertex.y = obj2.points[i].vertex[1];
		vertex.z = obj2.points[i].vertex[2];
		geometry.vertices.push( vertex );
		}

		object_name.geometry = geometry;
		object_name.material = pMaterial;
		object_name.dynamic = true;
		object_name.sortParticles = true;

		scene_name.add(object_name);
		
	});

	return object;
}

function plotaxes(in_scene){
	
	var material = new THREE.LineBasicMaterial({
	    
	    // color: 0xff0000,
	    color: 0x007d32,	// Piccadilly Line Blue
	    linewidth: 5
	});
	var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 0, 0));
    geometry.vertices.push(new THREE.Vector3(80, 0, 0));
    var line = new THREE.Line(geometry, material);
    in_scene.add(line);

    var material = new THREE.LineBasicMaterial({
	    
	    // color: 0x00ff00, 
	    color: 0x0019a8,	// District Line Green
	    linewidth: 5
	});
	var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 80, 0));
    var line = new THREE.Line(geometry, material);
    in_scene.add(line);

    var material = new THREE.LineBasicMaterial({
	    
	    // color: 0x0000ff, 
	    color: 0xdc241f,	// Central Line Red
	    linewidth: 5
	});
	var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0, 80));
    var line = new THREE.Line(geometry, material);
    in_scene.add(line);
}


// function add_axes_of_len(in_scene, in_length){
	
// 	var len = in_length;

// 	var material = new THREE.LineBasicMaterial({
// 	    color: 0xff0000, 
// 	    linewidth: 3
// 	});
// 	var geometry = new THREE.Geometry();
//     geometry.vertices.push(new THREE.Vector3(0, 0, 0));
//     geometry.vertices.push(new THREE.Vector3(100, 0, 0));
//     var line = new THREE.Line(geometry, material);
//     in_scene.add(line);

//     var material = new THREE.LineBasicMaterial({
// 	    color: 0x00ff00, 
// 	    linewidth: 3
// 	});
// 	var geometry = new THREE.Geometry();
//     geometry.vertices.push(new THREE.Vector3(0, 0, 0));
//     geometry.vertices.push(new THREE.Vector3(0, 100, 0));
//     var line = new THREE.Line(geometry, material);
//     in_scene.add(line);

//     var material = new THREE.LineBasicMaterial({
// 	    color: 0x0000ff, 
// 	    linewidth: 3
// 	});
// 	var geometry = new THREE.Geometry();
//     geometry.vertices.push(new THREE.Vector3(0, 0, 0));
//     geometry.vertices.push(new THREE.Vector3(0, 0, 100));
//     var line = new THREE.Line(geometry, material);
//     in_scene.add(line);
// }

function plotaxes(in_mesh){
	
	var material = new THREE.LineBasicMaterial({
	    // color: 0xff0000, 
	    color: 0x007d32,	// Piccadilly Line Blue
	    linewidth: 5
	});

	var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 0, 0));
    geometry.vertices.push(new THREE.Vector3(80, 0, 0));
    var line = new THREE.Line(geometry, material);
    in_mesh.add(line);

    var material = new THREE.LineBasicMaterial({
	    // color: 0x00ff00, 
	    color: 0x0019a8,	// District Line Green
	    linewidth: 5
	});

	var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 80, 0));
    var line = new THREE.Line(geometry, material);
    in_mesh.add(line);

    var material = new THREE.LineBasicMaterial({
	    // color: 0x0000ff, 
	    color: 0xdc241f,	// Central Line Red
	    linewidth: 5
	});

	var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0, 80));
    var line = new THREE.Line(geometry, material);
    in_mesh.add(line);
}

// function add_axes_of_len(in_mesh, in_length){
	
// 	var len = in_length;

// 	var material = new THREE.LineBasicMaterial({
// 	    color: 0xff0000, 
// 	    linewidth: 3
// 	});

// 	var geometry = new THREE.Geometry();
//     geometry.vertices.push(new THREE.Vector3(0, 0, 0));
//     geometry.vertices.push(new THREE.Vector3(len, 0, 0));
//     var line = new THREE.Line(geometry, material);
//     in_mesh.add(line);

//     var material = new THREE.LineBasicMaterial({
// 	    color: 0x00ff00, 
// 	    linewidth: 3
// 	});

// 	var geometry = new THREE.Geometry();
//     geometry.vertices.push(new THREE.Vector3(0, 0, 0));
//     geometry.vertices.push(new THREE.Vector3(0, len, 0));
//     var line = new THREE.Line(geometry, material);
//     in_mesh.add(line);

//     var material = new THREE.LineBasicMaterial({
// 	    color: 0x0000ff, 
// 	    linewidth: 3
// 	});

// 	var geometry = new THREE.Geometry();
//     geometry.vertices.push(new THREE.Vector3(0, 0, 0));
//     geometry.vertices.push(new THREE.Vector3(0, 0, len));
//     var line = new THREE.Line(geometry, material);
//     in_mesh.add(line);
// }

// show the rays 
function ShowRays(angle,grid,gridrays,rays,intersections,normals,reflections)
{
			
				var xdistance = maxx-minx+0.4;
				var ydistance = maxy-miny+0.4;
				var xsteps = xdistance*9;
				var ysteps = ydistance*9;
				var raycount = 0;
				var rayhits = 0;
				var rayarea = (xdistance/xsteps) * (xdistance/xsteps)
			
				var start = new Date().getTime();
				//var rayorigin = new THREE.Vector3( i, j ,10);
				var direction = new THREE.Vector3( 0, 0, -1.0 ).normalize();

				var testray = new THREE.Raycaster(rayorigin,direction)

				var material =  new THREE.MeshLambertMaterial( { color:0xff0000, shading: THREE.FlatShading } );
				var geometry = new THREE.SphereGeometry(0.05,4, 4);
				var mesh = new THREE.Mesh( geometry, material );

				xarray = [];
				yarray = [];
				zarray = [];

				rayhitoriginxarray = [];
				rayhitoriginyarray = [];
				rayhitoriginzarray = [];

				normalxarray = [];
				normalyarray = [];
				normalzarray = [];

				raygridxarray = [];
				raygridyarray = [];
				raygridzarray = [];

				for( var i = minx-0.2; i <= maxx+0.2; i=i+xdistance/xsteps )
				 {
					for( var j = miny-0.2; j <= maxy+0.2; j=j+ydistance/ysteps )
					 {
						raycount++;

						var matrix = new THREE.Matrix4().makeRotationAxis( new THREE.Vector3( 0, 1 ,0), angle );

						var rayorigin = new THREE.Vector3( i, j ,5);
						rayorigin.applyMatrix4( matrix );

						raygridxarray[raycount] = rayorigin.x;
						raygridyarray[raycount] = rayorigin.y;
						raygridzarray[raycount] = rayorigin.z;


						direction = new THREE.Vector3( 0, 0, -1.0 ).normalize();
						direction.applyMatrix4( matrix );

						rayCaster = new THREE.Raycaster(rayorigin,direction)

						testray = new THREE.Raycaster(rayorigin,direction)
						var result = testray.intersectObjects( scene.children, true);

						if ( result.length > 0 ) {
							
							rayhits++;
							xarray[rayhits] = result[0].point.x;
							yarray[rayhits] = result[0].point.y;
							zarray[rayhits] = result[0].point.z;

							normalxarray[rayhits] = result[0].face.normal.x;
							normalyarray[rayhits] = result[0].face.normal.y;
							normalzarray[rayhits] = result[0].face.normal.z;

							rayhitoriginxarray[rayhits] = rayorigin.x;
							rayhitoriginyarray[rayhits] = rayorigin.y;
							rayhitoriginzarray[rayhits] = rayorigin.z;

						}

					}
				}

				if (intersections == true) {
					for (var n =0; n < rayhits; n++){
						material =  new THREE.MeshBasicMaterial( { color:0xff0000 } );
						mesh = new THREE.Mesh( geometry, material );
						mesh.position.x = xarray[n];
						mesh.position.y = yarray[n];
						mesh.position.z = zarray[n];
						scene.add( mesh );
					}
				}


				if (normals == true) {
				for (var n =0; n < rayhits; n++){
					 var material = new THREE.LineBasicMaterial({
				        color: 0x0000FF, linewidth: 3
				    });
					var geometry = new THREE.Geometry();
				    geometry.vertices.push(new THREE.Vector3(xarray[n], yarray[n], zarray[n]));
				    geometry.vertices.push(new THREE.Vector3(xarray[n]+normalxarray[n], yarray[n]+normalyarray[n], zarray[n]+normalzarray[n]));
				    var line = new THREE.Line(geometry, material);
				    scene.add(line);
					}
				}


				if (rays == true) {
					for (var n =0; n < rayhits; n++){
	 					var material = new THREE.LineBasicMaterial({
					        color: 0xffa500
					    });
					 var geometry = new THREE.Geometry();
				    geometry.vertices.push(new THREE.Vector3(xarray[n], yarray[n], zarray[n]));
				    //geometry.vertices.push(new THREE.Vector3(xarray[n]-(direction.x*10.0), yarray[n]-(direction.y*10.0), zarray[n]-(direction.z*10.0)));
				    geometry.vertices.push(new THREE.Vector3(rayhitoriginxarray[n], rayhitoriginyarray[n], rayhitoriginzarray[n]));
				    var line = new THREE.Line(geometry, material);
				    scene.add(line);
					}
				}


				if (grid == true) {					
					for (var n =0; n <= raycount; n++){
						geometry = new THREE.SphereGeometry(0.03,4, 4);
						material =  new THREE.MeshBasicMaterial( { color:0xff0000 } );
						mesh = new THREE.Mesh( geometry, material );
						mesh.position.x = raygridxarray[n];
						mesh.position.y = raygridyarray[n];
						mesh.position.z = raygridzarray[n];
						scene.add( mesh );
					}
				}

				if (gridrays == true) {					
					for (var n =0; n < raycount; n++){
	 					var material = new THREE.LineBasicMaterial({
					        color: 0xffa500
					    });
						var geometry = new THREE.Geometry();
					    geometry.vertices.push(new THREE.Vector3(raygridxarray[n], raygridyarray[n], raygridzarray[n]));
					    //geometry.vertices.push(new THREE.Vector3(xarray[n]-(direction.x*10.0), yarray[n]-(direction.y*10.0), zarray[n]-(direction.z*10.0)));
					    geometry.vertices.push(new THREE.Vector3(raygridxarray[n]+(direction.x*15.0), raygridyarray[n]+(direction.y*15.0), raygridzarray[n]+(direction.z*15.0)));
					    var line = new THREE.Line(geometry, material);
					    scene.add(line);
					}
				}

				/*
				var up = new THREE.Vector3( 0.0, 1.0, 0.0 );
			var direction = new THREE.Vector3( tx-bx, ty-by, tz-bz );
			height = direction.length();
			
			var angle = Math.acos(up.dot(direction.normalize()));

			var axis = new THREE.Vector3( 0.0, 0.0, 0.0 );
			axis.crossVectors( up, direction );
			axis.normalize();

			var cyl = new THREE.CylinderGeometry(radius,radius,height,segments,1,1);

			var transformMatrix = new THREE.Matrix4();

			transformMatrix.makeRotationAxis( axis, angle )
			cyl.applyMatrix(transformMatrix)

				*/

				if (reflections == true) {					
					for (var n =0; n < rayhits; n++){

						var normal = new THREE.Vector3(normalxarray[n], normalyarray[n], normalzarray[n]).normalize();

						var incidence = direction.clone();

						var angle = Math.acos(normal.dot(incidence.normalize()));


						var axis = new THREE.Vector3( 0.0, 0.0, 0.0 );
						axis.crossVectors( incidence, normal);
						axis.normalize();


						var reflection = incidence.clone();
						var matrix = new THREE.Matrix4().makeRotationAxis( axis, angle*2.0 );
						reflection.applyMatrix4( matrix );



	 					var material = new THREE.LineBasicMaterial({
					        color: 0xff5c00, linewidth: 2
					    });

						var geometry = new THREE.Geometry();
					    geometry.vertices.push(new THREE.Vector3(xarray[n], yarray[n], zarray[n]));
					    geometry.vertices.push(new THREE.Vector3(xarray[n]-(reflection.x*2.0), yarray[n]-(reflection.y*2.0), zarray[n]-(reflection.z*2.0)));
					    var line = new THREE.Line(geometry, material);
					    scene.add(line);
					}
				}
				
				var end = new Date().getTime();
				var time = end - start;

				document.getElementById("elapsedtime").innerHTML='Done in ' + time + 'ms';
				document.getElementById("totalrays").innerHTML=raycount + ' rays';
				document.getElementById("rayhits").innerHTML=rayhits + ' hits';

}




function spacecraftgeometry(scene_name, filename, object_name, mli) {

var faceMaterial =  new THREE.MeshPhongMaterial( { 
	//color:0xDDDDDD, 
	side:THREE.DoubleSide
 } );

//to open the wireframe or not
var wireframe = false;

var wireframematerial = new THREE.MeshLambertMaterial( { color: 0x000000, wireframe: true } );

var segments = 64;

//read in JSON file
$.getJSON(filename, function(obj2) {	

	length = obj2.geometry.length;
	
	// for all the geometries
	for (var k=0;k<length;k++)
	{
		
		// process the polygon
		if (obj2.geometry[k].polygon) 
		{
			var geometry = new THREE.Geometry();

			var l = obj2.geometry[k].polygon[0].vertices.length;
			//var l = 3

			for (var i=0;i<l;i++){
				var vertex = new THREE.Vector3();
				vertex.x = obj2.geometry[k].polygon[0].vertices[i].vertex[0];
				vertex.y = obj2.geometry[k].polygon[0].vertices[i].vertex[1];
				vertex.z = obj2.geometry[k].polygon[0].vertices[i].vertex[2];
				geometry.vertices.push( vertex );
				if (vertex.x < minx){minx = vertex.x;}
				if (vertex.x > maxx){maxx = vertex.x;}
				if (vertex.y < miny){miny = vertex.y;}
				if (vertex.y > maxy){maxy = vertex.y;}
				if (vertex.z < minz){minz = vertex.z;}
				if (vertex.z > maxz){maxz = vertex.z;}
				}

			for (var i=0;i<l-1;i++){
				geometry.faces.push(new THREE.Face3(i+1, i, 0));
			}
			geometry.computeFaceNormals();
			//polygongeometry.computeVertexNormals()
			geometry.computeBoundingSphere();

			if (mli) {
				if (obj2.geometry[k].polygon[4].mli === 'yes') {
					object = new THREE.Mesh( geometry, 
					new THREE.MeshLambertMaterial( { color: 0xDD8888, ambient:getRandomColor(),
					side:THREE.DoubleSide} ));
				}

				if (obj2.geometry[k].polygon[4].mli === 'no') {
					object = new THREE.Mesh( geometry, 
					new THREE.MeshLambertMaterial( { color: 0x88DD88,ambient:getRandomColor(),
					side:THREE.DoubleSide} ));
				}
			}

			if(!mli) {
				object = new THREE.Mesh( geometry, 
					new THREE.MeshLambertMaterial( { color: 0x88DD88,ambient:getRandomColor(),
					side:THREE.DoubleSide} )

					);
			}

			if (wireframe) 
			{
				object = new THREE.Mesh( geometry, 
					wireframematerial
					);
			}

			object.name = obj2.geometry[k].polygon[1].name;
		
			object.reflectivity = obj2.geometry[k].polygon[2].reflectivity;
			object.specularity = obj2.geometry[k].polygon[3].specularity;
			
			scene.add( object );

		}

	// process the cylinder
		if (obj2.geometry[k].cylinder) 
		{
			radius = obj2.geometry[k].cylinder[2].radius;
			
			bx = obj2.geometry[k].cylinder[0].vertex1[0];
			by = obj2.geometry[k].cylinder[0].vertex1[1];
			bz = obj2.geometry[k].cylinder[0].vertex1[2];
				
			if (bx < minx){minx = bx;}
				if (bx > maxx){maxx = bx;}
				if (by < miny){miny = by;}
				if (by > maxy){maxy = by;}
				if (bz < minz){minz = bz;}
				if (bz > maxz){maxz = bz;}

			tx = obj2.geometry[k].cylinder[1].vertex2[0];
			ty = obj2.geometry[k].cylinder[1].vertex2[1];
			tz = obj2.geometry[k].cylinder[1].vertex2[2];

				if (tx < minx){minx = tx;}
				if (tx > maxx){maxx = tx;}
				if (ty < miny){miny = ty;}
				if (ty > maxy){maxy = ty;}
				if (tz < minz){minz = tz;}
				if (tz > maxz){maxz = tz;}	
		
			var up = new THREE.Vector3( 0.0, 1.0, 0.0 );
			var direction = new THREE.Vector3( tx-bx, ty-by, tz-bz );
			height = direction.length();
			
			var angle = Math.acos(up.dot(direction.normalize()));

			var axis = new THREE.Vector3( 0.0, 0.0, 0.0 );
			axis.crossVectors( up, direction );
			axis.normalize();

			var cyl = new THREE.CylinderGeometry(radius,radius,height,segments,1,1);

			var transformMatrix = new THREE.Matrix4();

			transformMatrix.makeRotationAxis( axis, angle )
			cyl.applyMatrix(transformMatrix)

			cyl.computeBoundingSphere();

			if (mli) {
				if (obj2.geometry[k].cylinder[6].mli === 'yes') {
					var cyl_mesh = new THREE.Mesh( cyl, 
					new THREE.MeshLambertMaterial( { color: 0xDD8888, ambient:getRandomColor(), 
					side:THREE.DoubleSide} ) );
				}
				if (obj2.geometry[k].cylinder[6].mli === 'no') {
					var cyl_mesh = new THREE.Mesh( cyl, 
					new THREE.MeshLambertMaterial( { color: 0x88DD88, ambient:getRandomColor(), 
					side:THREE.DoubleSide} ) );
				}
			}
			if (!mli){
				var cyl_mesh = new THREE.Mesh( cyl, 
				new THREE.MeshLambertMaterial( { color: 0xD8D8D8, ambient:getRandomColor(), 
				side:THREE.DoubleSide} ) );
			}

			if (wireframe) {
				var cyl_mesh = new THREE.Mesh( cyl, 
					wireframematerial
					);
			}



			cyl_mesh.position.set(bx+(
				height*direction.x*0.5),
				by+(height*direction.y*0.5),
				bz+(height*direction.z*0.5)
				)
			
			cyl_mesh.name = obj2.geometry[k].cylinder[3].name;
			cyl_mesh.reflectivity = obj2.geometry[k].cylinder[4].reflectivity;
			cyl_mesh.specularity = obj2.geometry[k].cylinder[5].specularity;
			scene_name.add( cyl_mesh );
			
		}

		// process the paraboloid
		if (obj2.geometry[k].paraboloid) 
		{

			depth = obj2.geometry[k].paraboloid[2].depth;
			radius = obj2.geometry[k].paraboloid[3].radius;

			v1x = obj2.geometry[k].paraboloid[0].vertex1[0];
			v1y = obj2.geometry[k].paraboloid[0].vertex1[1];
			v1z = obj2.geometry[k].paraboloid[0].vertex1[2];
			
			if (v1x < minx){minx = v1x;console.log(minx);}
			if (v1x > maxx){maxx = v1x;console.log(maxx);}
			
			v2x = obj2.geometry[k].paraboloid[1].vertex2[0];
			v2y = obj2.geometry[k].paraboloid[1].vertex2[1];
			v2z = obj2.geometry[k].paraboloid[1].vertex2[2];
		
			if (v1x < minx){minx = v1x;console.log(minx);}
			if (v1x > maxx){maxx = v1x;console.log(maxx);}
			
			var up = new THREE.Vector3( 0.0, 0.0, 1.0 );
			var direction = new THREE.Vector3( v1x-v2x, v1y-v2y, v1z-v2z );
			height = direction.length();
			
			var angle = Math.acos(up.dot(direction.normalize()));

			var axis = new THREE.Vector3( 0.0, 0.0, 0.0 );
			axis.crossVectors( up, direction );
			axis.normalize();

			var points = [];
			points.push( new THREE.Vector3( 0, 0, 0 ));
			points.push( new THREE.Vector3( radius, 0, depth));

			var cyl = new THREE.LatheGeometry( points, segments );


			var transformMatrix = new THREE.Matrix4();

			transformMatrix.makeRotationAxis( axis, angle )
			cyl.applyMatrix(transformMatrix)

			cyl.computeBoundingSphere();

			if (mli) {
				if (obj2.geometry[k].paraboloid[7].mli === 'yes') {
					var cyl_mesh = new THREE.Mesh( cyl, 
					new THREE.MeshLambertMaterial( { color: 0xDD8888, ambient:getRandomColor(), 
					side:THREE.DoubleSide} ) );
				}
				if (obj2.geometry[k].paraboloid[7].mli === 'no') {
					var cyl_mesh = new THREE.Mesh( cyl, 
					new THREE.MeshLambertMaterial( { color: 0x88DD88, ambient:getRandomColor(), 
					side:THREE.DoubleSide} ) );
				}
			}
			if (!mli){
				var cyl_mesh = new THREE.Mesh( cyl, 
				new THREE.MeshLambertMaterial( { color: 0xD8D8D8, ambient:getRandomColor(), 
				side:THREE.DoubleSide} ) );
			}

			if (wireframe) {
				var cyl_mesh = new THREE.Mesh( cyl, 
					wireframematerial
					);
			}



			cyl_mesh.position.set(v2x,
				v2y,
				v2z
				)
			
			cyl_mesh.name = obj2.geometry[k].paraboloid[4].name;
			cyl_mesh.reflectivity = obj2.geometry[k].paraboloid[4].reflectivity;
			cyl_mesh.specularity = obj2.geometry[k].paraboloid[6].specularity;
			scene_name.add( cyl_mesh );
			
		}
		
		// process the ring
		if (obj2.geometry[k].ring) 
		{
		
			radius1 = obj2.geometry[k].ring[1].radius1;
			radius2 = obj2.geometry[k].ring[2].radius2;

			v1x = obj2.geometry[k].ring[3].vertex1[0];
			v1y = obj2.geometry[k].ring[3].vertex1[1];
			v1z = obj2.geometry[k].ring[3].vertex1[2];
		
			if (v1x < minx){minx = v1x;console.log(minx);}
			if (v1x > maxx){maxx = v1x;console.log(maxx);}
			
			
			v2x = obj2.geometry[k].ring[4].vertex2[0];
			v2y = obj2.geometry[k].ring[4].vertex2[1];
			v2z = obj2.geometry[k].ring[4].vertex2[2];
			
			if (v2x < minx){minx = v2x;console.log(minx);}
			if (v2x > maxx){maxx = v2x;console.log(maxx);}	
			
			v3x = obj2.geometry[k].ring[5].vertex3[0];
			v3y = obj2.geometry[k].ring[5].vertex3[1];
			v3z = obj2.geometry[k].ring[5].vertex3[2];
			
			if (v3x < minx){minx = v3x;console.log(minx);}
			if (v3x > maxx){maxx = v3x;console.log(maxx);}
			
			var pts = [
        	new THREE.Vector3(radius1,0,0),//top left
        	new THREE.Vector3(radius2,0,0)//top right
			           ];

			var up = new THREE.Vector3( 0.0, 0.0, 1.0 );
			var arm1 = new THREE.Vector3(v2x-v1x, v2y-v1y, v2z-v1z);
			var arm2 = new THREE.Vector3(v3x-v1x, v3y-v1y, v3z-v1z);

			var circlenormal = new THREE.Vector3( 0.0, 0.0, 0.0 );
			circlenormal.crossVectors( arm1, arm2 );
			circlenormal.normalize();
			
			var angle = Math.acos(up.dot(circlenormal.normalize()));

			var axis = new THREE.Vector3( 0.0, 0.0, 0.0 );
			axis.crossVectors( up, circlenormal );
			axis.normalize();

			var transformMatrix = new THREE.Matrix4();
			transformMatrix.makeRotationAxis( axis, angle )
			var cyl = new THREE.LatheGeometry( pts, segments );

			cyl.applyMatrix(transformMatrix)
			cyl.computeBoundingSphere();

			if(mli){
				if (obj2.geometry[k].circle[7].mli === 'yes') {
					var mesh = new THREE.Mesh( cyl, 
					new THREE.MeshLambertMaterial( { color: 0xDD8888, ambient:getRandomColor(), 
					side:THREE.DoubleSide} ) );
				}

				if (obj2.geometry[k].circle[7].mli === 'no') {
					var mesh = new THREE.Mesh( cyl, 
					new THREE.MeshLambertMaterial( { color: 0x88DD88, ambient:getRandomColor(), 
					side:THREE.DoubleSide} ) );
				}
			}

			if(!mli){
				var mesh = new THREE.Mesh( cyl, 
				new THREE.MeshLambertMaterial( { color: 0xD8D8D8, ambient:getRandomColor(), 
				side:THREE.DoubleSide} ) );
			}

			if (wireframe) {
				var mesh = new THREE.Mesh( cyl, 
					wireframematerial
					);
			}

			mesh.overdraw = true;
			mesh.doubleSided = true;
			mesh.position.x = v1x;
			mesh.position.y = v1y;
			mesh.position.z = v1z;

			mesh.name = obj2.geometry[k].ring[0].name;
			mesh.reflectivity = obj2.geometry[k].ring[5].reflectivity;
			mesh.specularity = obj2.geometry[k].ring[6].specularity;

			scene.add( mesh );

		}

		if (obj2.geometry[k].cone) 
		{
		
			cone_height = obj2.geometry[k].cone[1].coneheight;
			truncated_cone_height = obj2.geometry[k].cone[3].truncatedconeheight;
			height_difference = cone_height - truncated_cone_height;
			base_radius = obj2.geometry[k].cone[2].baseradius;
			top_radius = height_difference/cone_height*base_radius;
			cone_base_centrex = obj2.geometry[k].cone[4].basevertex[0];
			cone_base_centrey = obj2.geometry[k].cone[4].basevertex[1];
			cone_base_centrez = obj2.geometry[k].cone[4].basevertex[2];
			cone_peakx = obj2.geometry[k].cone[5].peakvertex[0];
			cone_peaky = obj2.geometry[k].cone[5].peakvertex[1];
			cone_peakz = obj2.geometry[k].cone[5].peakvertex[2];
			
			// here should be ConeGeometry, NOT CYLINDER !!!!!!!!!
			var cyl = new THREE.CylinderGeometry(base_radius,
				top_radius,truncated_cone_height,segments,1,1);

			
			var up = new THREE.Vector3( 0.0, 1.0, 0.0 );
			var direction = new THREE.Vector3(cone_base_centrex-cone_peakx, cone_base_centrey-cone_peaky, cone_base_centrez-cone_peakz );
			height = truncated_cone_height;

			
			var angle = Math.acos(up.dot(direction.normalize()));
			
			var axis = new THREE.Vector3( 0.0, 0.0, 0.0 );
			axis.crossVectors( up, direction );
			axis.normalize();

			var transformMatrix = new THREE.Matrix4();
			
			transformMatrix.makeRotationAxis( axis, angle )
			cyl.applyMatrix(transformMatrix)

			cyl.computeBoundingSphere();
			
			if(mli){
				if (obj2.geometry[k].cone[8].mli === 'yes') {
					var cyl_mesh = new THREE.Mesh( cyl, 
					new THREE.MeshLambertMaterial( { color: 0xDD8888, ambient:getRandomColor(), 
					side:THREE.DoubleSide} ) );
				}

				if (obj2.geometry[k].cone[8].mli === 'no') {
					var cyl_mesh = new THREE.Mesh( cyl, 
					new THREE.MeshLambertMaterial( { color: 0x88DD88, ambient:getRandomColor(), 
					side:THREE.DoubleSide} ) );
				}
			}

			if(!mli){
				var cyl_mesh = new THREE.Mesh( cyl, 
				new THREE.MeshLambertMaterial( { color: 0xD8D8D8, ambient:getRandomColor(), 
				side:THREE.DoubleSide} ) );
			}

			if (wireframe) {
				var cyl_mesh = new THREE.Mesh( cyl, 
					wireframematerial
					);
			}
			
			cyl_mesh.name = obj2.geometry[k].cone[0].name;
			cyl_mesh.reflectivity = obj2.geometry[k].cone[6].reflectivity;
			cyl_mesh.specularity = obj2.geometry[k].cone[7].specularity;

			
			cyl_mesh.position.set(
				cone_base_centrex-(height*direction.x*0.5),
				cone_base_centrey-(height*direction.y*0.5),
				cone_base_centrez-(height*direction.z*0.5)
				);

			scene.add(cyl_mesh);

		}

		if (obj2.geometry[k].circle) 
		{
			radius = obj2.geometry[k].circle[1].radius;
				
			v1x = obj2.geometry[k].circle[2].vertex1[0];
			v1y = obj2.geometry[k].circle[2].vertex1[1];
			v1z = obj2.geometry[k].circle[2].vertex1[2];
			
			v2x = obj2.geometry[k].circle[3].vertex2[0];
			v2y = obj2.geometry[k].circle[3].vertex2[1];
			v2z = obj2.geometry[k].circle[3].vertex2[2];

			v3x = obj2.geometry[k].circle[4].vertex3[0];
			v3y = obj2.geometry[k].circle[4].vertex3[1];
			v3z = obj2.geometry[k].circle[4].vertex3[2];

			var pts = [
        	new THREE.Vector3(0,0,0),//top left
        	new THREE.Vector3(radius,0,0)//top right
			           ];
			           
			var up = new THREE.Vector3( 0.0, 0.0, 1.0 );
			var arm1 = new THREE.Vector3(v2x-v1x, v2y-v1y, v2z-v1z);
			var arm2 = new THREE.Vector3(v3x-v1x, v3y-v1y, v3z-v1z);

			var circlenormal = new THREE.Vector3( 0.0, 0.0, 0.0 );
			circlenormal.crossVectors( arm1, arm2 );
			circlenormal.normalize();

			var angle = Math.acos(up.dot(circlenormal.normalize()));

			var axis = new THREE.Vector3( 0.0, 0.0, 0.0 );
			axis.crossVectors( up, circlenormal );
			axis.normalize();

			var transformMatrix = new THREE.Matrix4();
			transformMatrix.makeRotationAxis( axis, angle )
			var cyl = new THREE.LatheGeometry( pts, segments );

			cyl.applyMatrix(transformMatrix)
			cyl.computeBoundingSphere();

			if(mli){
				if (obj2.geometry[k].circle[7].mli === 'yes') {
					var mesh = new THREE.Mesh( cyl, 
					new THREE.MeshLambertMaterial( { color: 0xDD8888, ambient:getRandomColor(), 
					side:THREE.DoubleSide} ) );
				}

				if (obj2.geometry[k].circle[7].mli === 'no') {
					var mesh = new THREE.Mesh( cyl, 
					new THREE.MeshLambertMaterial( { color: 0x88DD88, ambient:getRandomColor(), 
					side:THREE.DoubleSide} ) );
				}
			}

			if(!mli){
				var mesh = new THREE.Mesh( cyl, 
				new THREE.MeshLambertMaterial( { color: 0xD8D8D8, ambient:getRandomColor(), 
				side:THREE.DoubleSide} ) );
			}

			if (wireframe) {
				var mesh = new THREE.Mesh( cyl, 
					wireframematerial
					);
			}

			mesh.overdraw = true;
			mesh.doubleSided = true;
			mesh.position.x = v1x;
			mesh.position.y = v1y;
			mesh.position.z = v1z;

			mesh.name = obj2.geometry[k].circle[0].name;
			mesh.reflectivity = obj2.geometry[k].circle[5].reflectivity;
			mesh.specularity = obj2.geometry[k].circle[6].specularity;

			scene.add( mesh );
		}



	}

});

}