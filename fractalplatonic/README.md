<link rel="stylesheet" href="../scripts/style.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="vr/salas/imagens/icone.png">
<h2>Visualization of polyhedra with Augmented Reality (AR) and Virtual Reality (VR) in A-frame</h2>
 <b>author:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
 <br><b>contact:</b> <a href="#">paulohscwb@gmail.com</a>
 <br><a href="https://paulohscwb.github.io/polyhedra2/fractalplatonic/pt-br/">versão em português</a>
 <form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected value>More polyhedra:</option>
		<option value="../ArchimedeanCatalanHulls/">Archimedean and Catalan convex hulls</option>
		<option disabled value="../fractalplatonic/">Platonic polyhedra fractals</option>
		<option value="../fractalnonconvex/">Non convex polyhedra fractals</option>
		<option value="../fractalarchimedean/">Archimedean polyhedra fractals</option>
		<option value="../chamfered/">Chamfered polyhedra</option>
		<option value="../propellor/">Propellor polyhedra</option>
		<option value="../diamonds/">Diamond polyhedra</option>
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p1"></p>
  <h2 align="center"><img src="vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Platonic polyhedra fractals</h2>
Using the same principle as the construction of the Sierpinski triangle or the Koch curve, we can construct fractals from other regular polygons. When these polygons form a polyhedron, we have the construction of a fractal polyhedron.

 <p align="center"><a href="#ra">Augmented Reality</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#m3d">3D Models</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../">Home</a></p>
<hr>
  <h3 align="center">Immersive rooms</h3>
  <div class="embed-container"><iframe width="100%" src="sala1.htm" title="Sala Imersiva de Fractais de poliedros" frameborder="0" loading="lazy"></iframe></div>
  <p align="center"><a href="sala1.htm" target="_blank">&#x1f517; room 1</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala2.htm" target="_blank">&#x1f517; room 2</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala3.htm" target="_blank">&#x1f517; room 3</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala4.htm" target="_blank">&#x1f517; room 4</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala5.htm" target="_blank">&#x1f517; room 5</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala6.htm" target="_blank">&#x1f517; room 6</a></p> 
  <p align="center"><img src="vr/salas/videos/fractalplatonic1.gif" style="max-width: 47%; border-radius:5px; margin-right:5%" loading="lazy"/><img src="vr/salas/videos/fractalplatonic2.gif" style="max-width: 47%; border-radius:5px" loading="lazy"/></p> 
 <hr> 
  <h3 id="ra" align="center">Augmented Reality</h3>
To view fractal polyhedra in AR, simply visit the pages indicated in the 3D solid models using any browser with a webcam device (smartphone, tablet or notebook).
<br>Access to the VR sites is done by clicking on the blue circle that appears on top of the marker.
<p align="center"><img style="border-radius:7px;" alt="Augmented Reality to fractal polyhedra" src="ar/example.jpg" width="85%"></p>
<p align="center"><img src="ar/fractalplatonic.gif" alt="Augmented Reality to fractal polyhedra" style="max-width: 92%; border-radius:5px;" loading="lazy"/></p>
<hr>
<h3 id="m3d" align="center">3D models</h3>
<iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxVDbVP3SyhZfOpfD4SdsoVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<h4>1. Fractal tetrahedron</h4>
<a href="vr/FractalTetrahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/13A.png" class="foto" alt="Fractal Tetrahedron"></a><img src="ar/13.png" class="qr">
 <br><br>Applying the construction principle of the Sierpinski triangle to the 4 faces of the regular tetrahedron, we obtain a regular fractal tetrahedron. In the first order of fractal construction, we construct a new solid at each vertex of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2, 3 and 4.
 <table>
	<tr>
		<th>order</th>
		<th>polyhedra</th>
		<th>faces</th>
		<th>edges</th>
		<th>vertices</th>
	</tr>
	<tr>
		<td>0</td>
		<td>1</td>
		<td>4</td>
		<td>6</td>
		<td>4</td>
	</tr>
	<tr>
		<td>1</td>
		<td>4</td>
		<td>16</td>
		<td>24</td>
		<td>16</td>
	</tr>
	<tr>
		<td>2</td>
		<td>16</td>
		<td>64</td>
		<td>96</td>
		<td>64</td>
	</tr>
	<tr>
		<td>3</td>
		<td>64</td>
		<td>256</td>
		<td>384</td>
		<td>256</td>
	</tr>
	<tr>
		<td>4</td>
		<td>256</td>
		<td>1024</td>
		<td>1536</td>
		<td>1024</td>
	</tr>
 </table>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>2. Fractal octahedron</h4>
<a href="vr/FractalOctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/14A.png" class="foto" alt="FractalOctahedron"></a><img src="ar/14.png" class="qr">
 <br><br>Applying the construction principle of the Sierpinski triangle to the 8 faces of the regular octahedron, we obtain a regular fractal octahedron. In the first order of fractal construction, we construct a new solid at each vertex of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2, 3 and 4.
 <table>
	<tr>
		<th>order</th>
		<th>polyhedra</th>
		<th>faces</th>
		<th>edges</th>
		<th>vertices</th>
	</tr>
	<tr>
		<td>0</td>
		<td>1</td>
		<td>8</td>
		<td>12</td>
		<td>6</td>
	</tr>
	<tr>
		<td>1</td>
		<td>6</td>
		<td>48</td>
		<td>72</td>
		<td>36</td>
	</tr>
	<tr>
		<td>2</td>
		<td>36</td>
		<td>288</td>
		<td>432</td>
		<td>216</td>
	</tr>
	<tr>
		<td>3</td>
		<td>216</td>
		<td>1728</td>
		<td>2592</td>
		<td>1296</td>
	</tr>
	<tr>
		<td>4</td>
		<td>1296</td>
		<td>10368</td>
		<td>15552</td>
		<td>7776</td>
	</tr>
 </table>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>3. Fractal cube</h4>
<a href="vr/FractalCube.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/16A.png" class="foto" alt="Fractal Cube"></a><img src="ar/16.png" class="qr">
 <br><br>Applying the construction principle of the Sierpinski carpet to the 6 faces of the cube, we obtain a fractal cube. In the first order of construction of the fractal, we construct 8 new solids on each face of the original polyhedron, all with ⅓ the measurement of the cube's edge. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
 <table>
	<tr>
		<th>order</th>
		<th>polyhedra</th>
		<th>faces</th>
		<th>edges</th>
		<th>vertices</th>
	</tr>
	<tr>
		<td>0</td>
		<td>1</td>
		<td>6</td>
		<td>12</td>
		<td>8</td>
	</tr>
	<tr>
		<td>1</td>
		<td>20</td>
		<td>120</td>
		<td>240</td>
		<td>160</td>
	</tr>
	<tr>
		<td>2</td>
		<td>400</td>
		<td>2400</td>
		<td>4800</td>
		<td>3200</td>
	</tr>
	<tr>
		<td>3</td>
		<td>8000</td>
		<td>48000</td>
		<td>96000</td>
		<td>64000</td>
	</tr>
 </table>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>4. Fractal icosahedron</h4>
<a href="vr/FractalIcosahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/15A.png" class="foto" alt="Fractal Icosahedron"></a><img src="ar/15.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to the 20 faces of the regular icosahedron, we obtain a regular fractal icosahedron. In the first order of fractal construction, we construct a new solid at each vertex of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
 <table>
	<tr>
		<th>order</th>
		<th>polyhedra</th>
		<th>faces</th>
		<th>edges</th>
		<th>vertices</th>
	</tr>
	<tr>
		<td>0</td>
		<td>1</td>
		<td>20</td>
		<td>30</td>
		<td>12</td>
	</tr>
	<tr>
		<td>1</td>
		<td>12</td>
		<td>240</td>
		<td>360</td>
		<td>144</td>
	</tr>
	<tr>
		<td>2</td>
		<td>144</td>
		<td>2880</td>
		<td>4320</td>
		<td>1728</td>
	</tr>
	<tr>
		<td>3</td>
		<td>1728</td>
		<td>34560</td>
		<td>51840</td>
		<td>20736</td>
	</tr>
 </table>
 <a href="ra1.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>5. Fractal dodecahedron</h4>
<a href="vr/FractalDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/17A.png" class="foto" alt="Fractal Dodecahedron"></a><img src="ar/17.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to the 12 faces of the regular dodecahedron, we obtain a regular fractal dodecahedron. In the first order of fractal construction, we construct a new solid at each vertex of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
 <table>
	<tr>
		<th>order</th>
		<th>polyhedra</th>
		<th>faces</th>
		<th>edges</th>
		<th>vertices</th>
	</tr>
	<tr>
		<td>0</td>
		<td>1</td>
		<td>12</td>
		<td>30</td>
		<td>20</td>
	</tr>
	<tr>
		<td>1</td>
		<td>20</td>
		<td>240</td>
		<td>600</td>
		<td>400</td>
	</tr>
	<tr>
		<td>2</td>
		<td>400</td>
		<td>4800</td>
		<td>12000</td>
		<td>8000</td>
	</tr>
	<tr>
		<td>3</td>
		<td>8000</td>
		<td>96000</td>
		<td>240000</td>
		<td>160000</td>
	</tr>
 </table>
 <a href="ra1.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>6. Tetrahedron dragon fractal</h4>
<a href="vr/FractalDragon.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/78A.png" class="foto" alt="Tetrahedron dragon fractal"></a><img src="ar/78.png" class="qr">
 <br><br>Applying the construction principle of the Dragon curve with regular tetrahedron, we obtain a tetrahedron dragon fractal. In the first order of construction of the fractal, we construct two new tetrahedra corresponding to one original polyhedron. In this example, we have solid representations in orders from 0 to 10.
 <a href="ra2.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>7. Fractal tree</h4>
<a href="vr/FractalTree.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/77A.png" class="foto" alt="Fractal tree"></a><img src="ar/77.png" class="qr">
 <br><br>Applying the principle of repetitions with cone frustum, we obtain a fractal tree. In the first order of construction the fractal, we build three new cone frustums connected with a face of the original cone frustum. In this example, we have solid representations in orders from 0 to 7.
 <a href="ra2.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>8. Fractal tree with dodecahedrons</h4>
<a href="vr/FractalTree1.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/79A.png" class="foto" alt="Fractal tree with dodecahedrons"></a><img src="ar/79.png" class="qr">
 <br><br>Applying the principle of repetitions with cone frustum, we obtain a fractal tree. In this example, we added dodecahedrons as the "fruits" or "flowers" of the tree. In the first order of construction the fractal, we build three new cone frustums connected with a face of the original cone frustum. In this example, we have solid representations in orders from 0 to 7.
 <a href="ra2.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>9. Menger's Cross - Jerusalem: Cube v1</h4>
<a href="vr/FractalCube2.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/236A.png" class="foto" alt="Fractal Cube - Menger's cross Jerusalem"></a><img src="ar/236.png" class="qr">
 <br><br>Consider a fractal cube. We can increase the edge sizes of the corner cubes and decrease the edge sizes of the intermediate cubes to reveal a cross. In this version, we have 8 homothetic cubes with an aspect ratio of &#8534; and 12 homothetic cubes with a proportion of &#8533;.
<a href="ra3.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>10. Menger's Cross - Jerusalem: Cube v2</h4>
<a href="vr/FractalCube3.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/237A.png" class="foto" alt="Fractal Cube - Menger's cross Jerusalem"></a><img src="ar/237.png" class="qr">
 <br><br>Consider a fractal cube. We can increase the edge sizes of the corner cubes and decrease the edge sizes of the intermediate cubes to reveal a cross. In this version, we have 8 homothetic cubes with an aspect ratio of &#8730;2 - 1 and 12 homothetic cubes with a proportion of (&#8730;2 - 1)&#xb2;.
 <a href="ra3.html" class="raAR" title="Augmented reality" target="_blank"></a>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<hr>
<h4>11. Mosely snowflake: Cube</h4>
<a href="vr/FractalCube4.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/238A.png" class="foto" alt="Mosely snowflake - Cube"></a><img src="ar/238.png" class="qr">
 <br><br>The Mosely snowflake is a type of Sierpinski-Menger fractal obtained in two variants by the operation used in creating the Sierpinski-Menger snowflake. In this case, we removed eight corner cubes and the center cube from each previous iteration. 
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>12. Fractal tree with icosahedrons</h4>
<a href="vr/FractalTree2.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/239A.png" class="foto" alt="Fractal tree with icosahedrons"></a><img src="ar/239.png" class="qr">
 <br><br>Applying the principle of repetitions with cone frustum, we obtain a fractal tree. In this example, we added icosahedrons as the "fruits" or "flowers" of the tree. In the first order of construction the fractal, we build three new cone frustums connected with a face of the original cone frustum. In this example, we have solid representations in orders from 0 to 7.
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>13. Tetrahedron dragon fractal (3 rotations)</h4>
<a href="vr/FractalDragon0a.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/240A.png" class="foto" alt="Tetrahedron dragon fractal 3 rotations"></a><img src="ar/240.png" class="qr">
 <br><br>Applying the construction principle of the Dragon curve with regular tetrahedron and 3 rotations, we obtain a tetrahedron dragon fractal. In the first order of construction of the fractal, we construct three new tetrahedra corresponding to one original polyhedron. In this example, we have solid representations in orders from 0 to 10.
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>14. Cube dragon fractal</h4>
<a href="vr/FractalDragon1a.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/241A.png" class="foto" alt="Cube dragon fractal"></a><img src="ar/241.png" class="qr">
 <br><br>Applying the construction principle of the Dragon curve with a cube and 3 rotations, we obtain a cube dragon fractal. In the first order of construction of the fractal, we construct three new cube corresponding to one original polyhedron. In this example, we have solid representations in orders from 0 to 10.
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>15. Octahedron dragon fractal</h4>
<a href="vr/FractalDragon2a.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/242A.png" class="foto" alt="Octahedron dragon fractal"></a><img src="ar/242.png" class="qr">
 <br><br>Applying the construction principle of the Dragon curve with a regular octahedron and 3 rotations, we obtain a octahedron dragon fractal. In the first order of construction of the fractal, we construct three new octahedra corresponding to one original polyhedron. In this example, we have solid representations in orders from 0 to 10.
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>16. Icosahedron dragon fractal</h4>
<a href="vr/FractalDragon3a.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/244A.png" class="foto" alt="Icosahedron dragon fractal"></a><img src="ar/244.png" class="qr">
 <br><br>Applying the construction principle of the Dragon curve with a regular icosahedron and 3 rotations, we obtain a icosahedron dragon fractal. In the first order of construction of the fractal, we construct three new icosahedra corresponding to one original polyhedron. In this example, we have solid representations in orders from 0 to 10.
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>17. Dodecahedron dragon fractal</h4>
<a href="vr/FractalDragon4a.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/243A.png" class="foto" alt="Dodecahedron dragon fractal"></a><img src="ar/243.png" class="qr">
 <br><br>Applying the construction principle of the Dragon curve with a regular dodecahedron and 3 rotations, we obtain a dodecahedron dragon fractal. In the first order of construction of the fractal, we construct three new dodecahedra corresponding to one original polyhedron. In this example, we have solid representations in orders from 0 to 10.
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <p class="topop"><a href="#p1" class="topo">back to top</a></p>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Platonic polyhedra fractals - Visualization of polyhedra with Augmented Reality and Virtual Reality</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra2/fractalplatonic/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> is licensed with a license <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International</a>.

<h4>How to cite this work:</h4> 
<p>Siqueira, P.H., "Platonic polyhedra fractals - Visualization of polyhedra with Augmented Reality and Virtual Reality". Available in: <https://paulohscwb.github.io/polyhedra2/fractalplatonic/>, October 2023.</p>
<!--<a target="_blank" href="https://doi.org/10.5281/zenodo.8272770"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.8272770.svg" alt="DOI"></a>-->
<br><br><b>References:</b>
<br>Weisstein, Eric W. "Archimedean Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/ArchimedeanSolid.html" target="_blank">http://mathworld.wolfram.com/ArchimedeanSolid.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Archimedean Dual" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/ArchimedeanDual.html" target="_blank">https://mathworld.wolfram.com/ArchimedeanDual.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Archimedean_solid" target="_blank">https://en.wikipedia.org/wiki/Archimedean_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
