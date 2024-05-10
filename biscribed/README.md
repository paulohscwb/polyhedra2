<link rel="stylesheet" href="../scripts/style.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="vr/salas/imagens/icone.png">
<h2>Visualization of polyhedra with Augmented Reality (AR) and Virtual Reality (VR) in A-frame</h2>
 <b>author:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
 <br><b>contact:</b> <a href="#">paulohscwb@gmail.com</a>
 <br><a href="https://paulohscwb.github.io/polyhedra2/chamfered/pt-br/">versão em português</a>
 <form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected value>More polyhedra:</option>
		<option value="../ArchimedeanCatalanHulls/">Archimedean and Catalan convex hulls</option>
		<option value="../fractalplatonic/">Platonic polyhedra fractals</option>
		<option value="../fractalnonconvex/">Non convex polyhedra fractals</option>
		<option value="../fractalarchimedean/">Archimedean polyhedra fractals</option>
		<option value="../chamfered/">Chamfered polyhedra</option>
		<option value="../propellor/">Propellor polyhedra</option>
		<option value="../diamonds/">Diamond polyhedra</option>
		<option disabled value="../biscribed/pt-br/">Biscribed polyhedra</option>
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p1"></p>
  <h2 align="center"><img src="vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Biscribed polyhedra</h2>
We define a biscribed polyhedron as any convex polyhedron that has circumscribed and inscribed concentric spheres, where the center of the sphere is also the centroid of the vertices and the centroid of the points of tangency of the faces.
<p align="center"><a href="#ra">Augmented Reality</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#m3d">3D Models</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../">Home</a></p>
  <hr>
 <h3 align="center">Immersive room</h3>
  <div class="embed-container"><iframe width="100%" src="sala.htm" title="Sala Imersiva dos Poliedros biscritos" frameborder="0" loading="lazy"></iframe></div>
  <p align="center"><img align="middle" src="../../cotadas/videos/biscribed.gif" style="max-width: 47%; border-radius:5px; margin-right:10px" loading="lazy" alt="VR immersive room to biscribed polyhedra"/><a href="sala.htm" target="_blank">&#x1f517; room link</a></p>  
  <hr>
  <h3 id="ra" align="center">Augmented Reality</h3>
  To view biscribed polyhedra in AR, simply visit:
<p align="center"><a href="ra.html" class="raAR" target="_blank">https://paulohscwb.github.io/polyhedra2/biscribed/ra.html</a></p> 
with any browser with a webcam device (smartphone, tablet or notebook). 
<br>Access to the VR sites is done by clicking on the blue circle that appears on top of the marker.
<p align="center"><img style="border-radius:7px;" alt="Augmented Reality to biscribed polyhedra" src="ar/example.jpg" width="85%"></p>
<p align="center"><img src="ar/biscribed.gif" alt="Augmented Reality to biscribed polyhedra" style="max-width: 92%; border-radius:5px;" loading="lazy"/></p>
<hr>
<h3 id="m3d" align="center">3D models</h3>
<!-- <iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxXlieaiv7p0PWdsNRWPbWRv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
<h4>1. Biscribed truncated octahedron</h4>
<a href="vr/BiscribedTruncatedOctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/77A.png" class="foto" alt="Biscribed Truncated Octahedron"></a><img src="ar/77.png" class="qr">
 <br><br><br>A biscript truncated octahedron has the shape of the truncated octahedron, one of the Archimedean polyhedra, but does not have the regular hexagons. It is the dual solid of the biscript tetrakis hexahedron.
 <br><br><br><b>Faces:</b> 6 squares and 8 ditrigons | <b>Edges:</b> 36 | <b>Vertices:</b> 24. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">More...</a>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>2. Biscribed tetrakis hexahedron</h4>
<a href="vr/BiscribedTetrakisHexahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/78A.png" class="foto" alt="Biscribed Tetrakis Hexahedron"></a><img src="ar/78.png" class="qr">
 <br><br><br>A biscript tetrakis hexahedron has the shape of the tetrakis hexahedron, one of the Catalan polyhedra, but the edge measurements are different. It is the dual solid of the biscript truncated octahedron.
 <br><br><br><b>Faces:</b> 24 isosceles triangles | <b>Edges:</b> 36 | <b>Vertices:</b> 14. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">More...</a>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>3. Biscribed truncated cuboctahedron</h4>
<a href="vr/BiscribedTruncatedCuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/79A.png" class="foto" alt="Biscribed Truncated Cuboctahedron"></a><img src="ar/79.png" class="qr">
 <br><br><br>A biscript truncated cuboctahedron has the shape of the truncated cuboctahedron, one of the Archimedean polyhedra, but does not have the regular faces. It is the dual solid of the biscribed disdyakis dodecahedron.
 <br><br><br><b>Faces:</b> 12 rectangles, 8 ditrigons and 6 ditetragons | <b>Edges:</b> 72 | <b>Vertices:</b> 48. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">More...</a>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>4. Biscribed disdyakis dodecahedron</h4>
<a href="vr/BiscribedDisdyakisDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/80A.png" class="foto" alt="Biscribed Disdyakis Dodecahedron"></a><img src="ar/80.png" class="qr">
 <br><br><br>A biscript disdyakis dodecahedron has the shape of the disdyakis dodecahedron, one of the Catalan polyhedra, but the edge measurements are different. It is the dual solid of the biscript truncated cuboctahedron.
 <br><br><br><b>Faces:</b> 48 acute triangles | <b>Edges:</b> 72 | <b>Vertices:</b> 26. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">More...</a>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>5. Biscribed truncated icosahedron</h4>
<a href="vr/BiscribedTruncatedIcosahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/81A.png" class="foto" alt="Biscribed Truncated Icosahedron"></a><img src="ar/81.png" class="qr">
 <br><br><br>A biscript truncated icosahedron has the shape of the truncated icosahedron, one of the Archimedean polyhedra, but does not have the regular hexagons. It is the dual solid of the biscribed pentakis dodecahedron.
 <br><br><br><b>Faces:</b> 12 regular pentagons and 20 ditrigons | <b>Edges:</b> 90 | <b>Vertices:</b> 60. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">More...</a>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>6. Biscribed pentakis dodecahedron</h4>
<a href="vr/BiscribedPentakisDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/82A.png" class="foto" alt="Biscribed pentakis dodecahedron"></a><img src="ar/82.png" class="qr">
 <br><br><br>A biscribed pentakis dodecahedron has the shape of the pentakis dodecahedron, one of the Catalan polyhedra, but the edge measurements are different. It is the dual solid of the biscript truncated icosahedron.
 <br><br><br><b>Faces:</b> 60 isosceles triangles | <b>Edges:</b> 90 | <b>Vertices:</b> 32. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">More...</a>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>7. Biscribed truncated icosidodecahedron</h4>
<a href="vr/BiscribedTruncatedIcosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/83A.png" class="foto" alt="Biscribed truncated icosidodecahedron"></a><img src="ar/83.png" class="qr">
 <br><br><br>A biscript truncated icosidodecahedron has the shape of the truncated icosidodecahedron, one of the Archimedean polyhedra, but does not have the regular faces. It is the dual solid of the biscribed disdyakis triacontahedron.
 <br><br><br><b>Faces:</b> 30 rectangles, 20 ditrigons and 12 dipentagons | <b>Edges:</b> 180 | <b>Vertices:</b> 120. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">More...</a>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>8. Biscribed disdyakis triacontahedron</h4>
<a href="vr/BiscribedDisdyakisTriacontahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/84A.png" class="foto" alt="Biscribed disdyakis triacontahedron"></a><img src="ar/84.png" class="qr">
 <br><br><br>A biscribed disdyakis triacontahedron has the shape of the disdyakis triacontahedron, one of the Catalan polyhedra, but the edge measurements are different. It is the dual solid of the biscript truncated icosidodecahedron.
 <br><br><br><b>Faces:</b> 120 acute triangles | <b>Edges:</b> 180 | <b>Vertices:</b> 62. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">More...</a>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<hr>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Chamfered polyhedra - Visualization of polyhedra with Augmented Reality and Virtual Reality</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra2/chamfered/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> is licensed with a license <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International</a>.

<h4>How to cite this work:</h4> 
<p>Siqueira, P.H., "Chamfered polyhedra - Visualization of polyhedra with Augmented Reality and Virtual Reality". Available in: <https://paulohscwb.github.io/polyhedra2/chamfered/>, November 2023.</p>
<!--<a target="_blank" href="https://doi.org/10.5281/zenodo.8272770"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.8272770.svg" alt="DOI"></a>-->
<br><br><b>References:</b>
<br>Weisstein, Eric W. "Archimedean Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/ArchimedeanSolid.html" target="_blank">http://mathworld.wolfram.com/ArchimedeanSolid.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Archimedean Dual" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/ArchimedeanDual.html" target="_blank">https://mathworld.wolfram.com/ArchimedeanDual.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Archimedean_solid" target="_blank">https://en.wikipedia.org/wiki/Archimedean_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
