<link rel="stylesheet" href="../scripts/style.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="vr/salas/imagens/icone.png">
<h2>Visualization of polyhedra with Augmented Reality (AR) and Virtual Reality (VR) in A-frame</h2>
 <b>author:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
 <br><b>contact:</b> <a href="#">paulohscwb@gmail.com</a>
 <br><a href="https://paulohscwb.github.io/polyhedra2/fractalarchimedean/pt-br/">versão em português</a>
 <form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected value>More polyhedra:</option>
		<option value="../ArchimedeanCatalanHulls/">Archimedean and Catalan convex hulls</option>
		<option value="../fractalplatonic/">Platonic polyhedra fractals</option>
		<option value="../fractalnonconvex/">Non convex polyhedra fractals</option>
		<option disabled value="../fractalarchimedean/">Archimedean polyhedra fractals</option>
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
  <h2 align="center"><img src="vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Archimedean polyhedra fractals</h2>
Using the same principle as the construction of the Sierpinski triangle or the Koch curve, we can construct fractals from other regular polygons. When these polygons form a polyhedron, we have the construction of a fractal polyhedron.

<p align="center"><a href="#ra">Augmented Reality</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#m3d">3D Models</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../">Home</a></p>
  <hr>
 <h3 align="center">Immersive rooms</h3>
<div class="embed-container"><iframe width="100%" src="sala1.htm" title="Sala Imersiva de Fractais de poliedros" frameborder="0" loading="lazy"></iframe></div>
  <p align="center"><a href="sala1.htm" target="_blank">&#x1f517; room 1</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala2.htm" target="_blank">&#x1f517; room 2</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala3.htm" target="_blank">&#x1f517; room 3</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala4.htm" target="_blank">&#x1f517; room 4</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala5.htm" target="_blank">&#x1f517; room 5</a></p>
  <p align="center"><img src="../../geometria-descritiva/videos/fractalarchimedean1.gif" style="max-width: 47%; border-radius:5px; margin-right:5%" loading="lazy"/><img src="../../geometria-descritiva/videos/fractalarchimedean2.gif" style="max-width: 47%; border-radius:5px" loading="lazy"/></p>
  <hr>
  <h3 id="ra" align="center">Augmented Reality</h3>
To view fractal polyhedra in AR, simply visit the pages indicated in the 3D solid models using any browser with a webcam device (smartphone, tablet or notebook).
<br>Access to the VR sites is done by clicking on the blue circle that appears on top of the marker.
<p align="center"><img style="border-radius:7px;" alt="Augmented Reality to fractal polyhedra" src="ar/example.jpg" width="85%"></p>
<p align="center"><img src="ar/fractalarchimedean.gif" alt="Augmented Reality to fractal polyhedra" style="max-width: 92%; border-radius:5px;" loading="lazy"/></p>
<hr>
<h3 id="m3d" align="center">3D models</h3>
<!-- <iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxU-mneUmSsccpRAAwbErHFq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
<h4>1. Cuboctahedron fractal</h4>
<a href="vr/FractalCuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/31A.png" class="foto" alt="Cuboctahedron fractal"></a><img src="ar/31.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to triangular faces of the cuboctahedron, we obtain a cuboctahedron fractal. In the first order of fractal construction, we construct a new solid at each triangular face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>14</td>
		<td>24</td>
		<td>12</td>
	</tr>
	<tr>
		<td>1</td>
		<td>12</td>
		<td>168</td>
		<td>288</td>
		<td>144</td>
	</tr>
	<tr>
		<td>2</td>
		<td>144</td>
		<td>2016</td>
		<td>3456</td>
		<td>1728</td>
	</tr>
	<tr>
		<td>3</td>
		<td>1728</td>
		<td>24192</td>
		<td>41472</td>
		<td>20736</td>
	</tr>
 </table>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>2. Icosidodecahedron fractal</h4>
<a href="vr/FractalIcosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/32A.png" class="foto" alt="Icosidodecahedron fractal"></a><img src="ar/32.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to triangular faces of the icosidodecahedron, we obtain a icosidodecahedron fractal. In the first order of fractal construction, we construct a new solid at each triangular face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>32</td>
		<td>60</td>
		<td>30</td>
	</tr>
	<tr>
		<td>1</td>
		<td>21</td>
		<td>672</td>
		<td>1260</td>
		<td>630</td>
	</tr>
	<tr>
		<td>2</td>
		<td>441</td>
		<td>14112</td>
		<td>26460</td>
		<td>13230</td>
	</tr>
	<tr>
		<td>3</td>
		<td>9261</td>
		<td>296352</td>
		<td>555660</td>
		<td>277830</td>
	</tr>
 </table>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>3. Rhombicosidodecahedron fractal</h4>
<a href="vr/FractalRhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/33A.png" class="foto" alt="Rhombicosidodecahedron fractal"></a><img src="ar/33.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to pentagonal faces of the rhombicosidodecahedron, we obtain a rhombicosidodecahedron fractal. In the first order of fractal construction, we construct a new solid at each pentagonal face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>62</td>
		<td>120</td>
		<td>60</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>806</td>
		<td>1560</td>
		<td>780</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>10478</td>
		<td>20280</td>
		<td>10140</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>136214</td>
		<td>263640</td>
		<td>131820</td>
	</tr>
 </table>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>4. Rhombicuboctahedron fractal</h4>
<a href="vr/FractalRhombicuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/34A.png" class="foto" alt="rhombicuboctahedron fractal"></a><img src="ar/34.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to triangular faces of the rhombicuboctahedron, we obtain a rhombicuboctahedron fractal. In the first order of fractal construction, we construct a new solid at each triangular face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>26</td>
		<td>48</td>
		<td>24</td>
	</tr>
	<tr>
		<td>1</td>
		<td>9</td>
		<td>234</td>
		<td>432</td>
		<td>216</td>
	</tr>
	<tr>
		<td>2</td>
		<td>81</td>
		<td>2106</td>
		<td>3888</td>
		<td>1944</td>
	</tr>
	<tr>
		<td>3</td>
		<td>729</td>
		<td>18954</td>
		<td>34992</td>
		<td>17496</td>
	</tr>
 </table>
 <a href="ra1.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>5. Snub cube fractal</h4>
<a href="vr/FractalSnubCube.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/35A.png" class="foto" alt="Snub cube fractal"></a><img src="ar/35.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to square faces of the snub cube, we obtain a snub cube fractal. In the first order of fractal construction, we construct a new solid at each square face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2, 3 and 4.
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
		<td>38</td>
		<td>60</td>
		<td>24</td>
	</tr>
	<tr>
		<td>1</td>
		<td>7</td>
		<td>266</td>
		<td>420</td>
		<td>168</td>
	</tr>
	<tr>
		<td>2</td>
		<td>49</td>
		<td>1862</td>
		<td>2940</td>
		<td>1176</td>
	</tr>
	<tr>
		<td>3</td>
		<td>343</td>
		<td>13034</td>
		<td>20580</td>
		<td>8232</td>
	</tr>
	<tr>
		<td>4</td>
		<td>2401</td>
		<td>91238</td>
		<td>144060</td>
		<td>57624</td>
	</tr>
 </table>
 <a href="ra1.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>6. Snub dodecahedron fractal</h4>
<a href="vr/FractalSnubDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/36A.png" class="foto" alt="Snub dodecahedron fractal"></a><img src="ar/36.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to pentagonal faces of the snub dodecahedron, we obtain a snub dodecahedron fractal. In the first order of fractal construction, we construct a new solid at each pentagonal face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>92</td>
		<td>150</td>
		<td>60</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>1196</td>
		<td>1950</td>
		<td>780</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>15548</td>
		<td>25350</td>
		<td>10140</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>202124</td>
		<td>329550</td>
		<td>131820</td>
	</tr>
 </table>
 <a href="ra1.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>7. Truncated cuboctahedron fractal</h4>
<a href="vr/FractalTruncatedCuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/38A.png" class="foto" alt="Truncated cuboctahedron fractal"></a><img src="ar/38.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to square faces of the truncated cuboctahedron, we obtain a truncated cuboctahedron fractal. In the first order of fractal construction, we construct a new solid at each square face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>26</td>
		<td>72</td>
		<td>48</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>338</td>
		<td>936</td>
		<td>624</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>4394</td>
		<td>12168</td>
		<td>8112</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>57122</td>
		<td>158184</td>
		<td>105456</td>
	</tr>
 </table>
 <a href="ra1.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>8. Truncated cube fractal</h4>
<a href="vr/FractalTruncatedCube.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/37A.png" class="foto" alt="Truncated cube fractal"></a><img src="ar/37.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to triangular faces of the truncated cube, we obtain a truncated cube fractal. In the first order of fractal construction, we construct a new solid at each triangular face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>14</td>
		<td>36</td>
		<td>24</td>
	</tr>
	<tr>
		<td>1</td>
		<td>9</td>
		<td>126</td>
		<td>324</td>
		<td>216</td>
	</tr>
	<tr>
		<td>2</td>
		<td>81</td>
		<td>1134</td>
		<td>2916</td>
		<td>1944</td>
	</tr>
	<tr>
		<td>3</td>
		<td>729</td>
		<td>10206</td>
		<td>26244</td>
		<td>17496</td>
	</tr>
 </table>
 <a href="ra2.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>9. Truncated dodecahedron fractal</h4>
<a href="vr/FractalTruncatedDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/39A.png" class="foto" alt="Truncated dodecahedron fractal"></a><img src="ar/39.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to triangular faces of the truncated dodecahedron, we obtain a truncated dodecahedron fractal. In the first order of fractal construction, we construct a new solid at each triangular face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>32</td>
		<td>150</td>
		<td>60</td>
	</tr>
	<tr>
		<td>1</td>
		<td>21</td>
		<td>672</td>
		<td>3150</td>
		<td>1260</td>
	</tr>
	<tr>
		<td>2</td>
		<td>441</td>
		<td>14112</td>
		<td>66150</td>
		<td>26460</td>
	</tr>
	<tr>
		<td>3</td>
		<td>9261</td>
		<td>296352</td>
		<td>1389150</td>
		<td>555660</td>
	</tr>
 </table>
 <a href="ra2.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>10. Truncated icosahedron fractal</h4>
<a href="vr/FractalTruncatedIcosahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/40A.png" class="foto" alt="Truncated icosahedron fractal"></a><img src="ar/40.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to pentagonal faces of the truncated icosahedron, we obtain a truncated icosahedron fractal. In the first order of fractal construction, we construct a new solid at each pentagonal face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>32</td>
		<td>90</td>
		<td>60</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>416</td>
		<td>1170</td>
		<td>780</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>5408</td>
		<td>15210</td>
		<td>10140</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>70304</td>
		<td>197730</td>
		<td>131820</td>
	</tr>
 </table>
 <a href="ra2.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <p class="topop"><a href="#p1" class="topo">back to top</a></p>
 <hr>
 <h4>11. Truncated icosidodecahedron fractal</h4>
<a href="vr/FractalTruncatedIcosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/41A.png" class="foto" alt="Truncated icosidodecahedron fractal"></a><img src="ar/41.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to decagonal faces of the truncated icosidodecahedron, we obtain a truncated icosidodecahedron fractal. In the first order of fractal construction, we construct a new solid at each decagonal face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2, 3 and 4.
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
		<td>62</td>
		<td>180</td>
		<td>120</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>806</td>
		<td>2340</td>
		<td>1560</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>10478</td>
		<td>30420</td>
		<td>20280</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>136214</td>
		<td>395460</td>
		<td>263640</td>
	</tr>
	<tr>
		<td>4</td>
		<td>2401</td>
		<td>33614</td>
		<td>86436</td>
		<td>57624</td>
	</tr>
 </table>
 <a href="ra3.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>12. Truncated octahedron fractal</h4>
<a href="vr/FractalTruncatedOctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/42A.png" class="foto" alt="Truncated octahedron fractal"></a><img src="ar/42.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to square faces of the truncated octahedron, we obtain a truncated octahedron fractal. In the first order of fractal construction, we construct a new solid at each square face of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2, 3 and 4.
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
		<td>14</td>
		<td>36</td>
		<td>24</td>
	</tr>
	<tr>
		<td>1</td>
		<td>7</td>
		<td>98</td>
		<td>252</td>
		<td>168</td>
	</tr>
	<tr>
		<td>2</td>
		<td>49</td>
		<td>686</td>
		<td>1764</td>
		<td>1176</td>
	</tr>
	<tr>
		<td>3</td>
		<td>343</td>
		<td>4802</td>
		<td>12348</td>
		<td>8232</td>
	</tr>
	<tr>
		<td>4</td>
		<td>343</td>
		<td>4802</td>
		<td>12348</td>
		<td>8232</td>
	</tr>
 </table>
 <a href="ra3.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>13. Truncated tetrahedron fractal</h4>
<a href="vr/FractalTruncatedTetrahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/43A.png" class="foto" alt="Truncated tetrahedron fractal"></a><img src="ar/43.png" class="qr">
 <br><br>Applying the construction principle of the Sierpinski triangle to each triangular face vertex of the truncated tetrahedron, we obtain a truncated tetrahedron fractal. In the first order of fractal construction, we construct a new solid at each vertex of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>18</td>
		<td>12</td>
	</tr>
	<tr>
		<td>1</td>
		<td>12</td>
		<td>96</td>
		<td>216</td>
		<td>144</td>
	</tr>
	<tr>
		<td>2</td>
		<td>144</td>
		<td>1152</td>
		<td>2592</td>
		<td>1728</td>
	</tr>
	<tr>
		<td>3</td>
		<td>1728</td>
		<td>13824</td>
		<td>31104</td>
		<td>20736</td>
	</tr>
 </table>
 <a href="ra3.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>14. Menger sponge: Snub cube</h4>
<a href="vr/FractalSnubCube1.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/44A.png" class="foto" alt="Menger sponge - Snub cube"></a><img src="ar/44.png" class="qr">
 <br><br>Applying the construction principle of the Sierpinski carpet to the 6 square faces of the snub cube, we obtain a fractal snub cube. In the first order of construction of the fractal, we construct 8 new solids on each square face of the original polyhedron, all with ⅓ the measurement of the snub cube's edge. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>15. Menger's Cross - Jerusalem: Snub cube v1</h4>
<a href="vr/FractalSnubCube2.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/45A.png" class="foto" alt="Snub Cube - Menger's cross Jerusalem"></a><img src="ar/45.png" class="qr">
 <br><br>Consider a fractal snub cube. We can increase the edge sizes of the corner snub cubes and decrease the edge sizes of the intermediate snub cubes to reveal a cross. In this version, we have 8 homothetic snub cubes with an aspect ratio of &#8534; and 12 homothetic snub cubes with a proportion of &#8533;.
<a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>16. Menger's Cross - Jerusalem: Snub cube v2</h4>
<a href="vr/FractalSnubCube3.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/46A.png" class="foto" alt="Snub Cube - Menger's cross Jerusalem"></a><img src="ar/46.png" class="qr">
 <br><br>Consider a fractal snub cube. We can increase the edge sizes of the corner snub cubes and decrease the edge sizes of the intermediate snub cubes to reveal a cross. In this version, we have 8 homothetic snub cubes with an aspect ratio of &#8730;2 - 1 and 12 homothetic snub cubes with a proportion of (&#8730;2 - 1)&#xb2;.
 <a href="ra4a.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>17. Mosely snowflake: Snub cube</h4>
<a href="vr/FractalSnubCube4.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/47A.png" class="foto" alt="Mosely snowflake - Snub Cube"></a><img src="ar/47.png" class="qr">
 <br><br>The Mosely snowflake is a type of Sierpinski-Menger fractal obtained in two variants by the operation used in creating the Sierpinski-Menger snowflake. In this case, we removed eight corner snub cubes and the center snub cube in each iteration. 
 <a href="ra4a.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>18. Menger sponge: Truncated cube</h4>
<a href="vr/FractalTruncatedCube1.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/48A.png" class="foto" alt="Menger sponge - Truncated cube"></a><img src="ar/48.png" class="qr">
 <br><br>Applying the construction principle of the Sierpinski carpet to the 6 octagonal faces of the truncated cube, we obtain a fractal truncated cube. In the first order of construction of the fractal, we construct 8 new solids on each octagonal face of the original polyhedron, all with ⅓ the measurement of the truncated cube's edge. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>19. Menger's Cross - Jerusalem: Truncated cube v1</h4>
<a href="vr/FractalTruncatedCube2.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/49A.png" class="foto" alt="Truncated Cube - Menger's cross Jerusalem"></a><img src="ar/49.png" class="qr">
 <br><br>Consider a fractal truncated cube. We can increase the edge sizes of the corner truncated cubes and decrease the edge sizes of the intermediate truncated cubes to reveal a cross. In this version, we have 8 homothetic truncated cubes with an aspect ratio of &#8534; and 12 homothetic truncated cubes with a proportion of &#8533;.
<a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>20. Menger's Cross - Jerusalem: Truncated cube v2</h4>
<a href="vr/FractalTruncatedCube3.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/50A.png" class="foto" alt="Truncated Cube - Menger's cross Jerusalem"></a><img src="ar/50.png" class="qr">
 <br><br>Consider a fractal truncated cube. We can increase the edge sizes of the corner truncated cubes and decrease the edge sizes of the intermediate truncated cubes to reveal a cross. In this version, we have 8 homothetic truncated cubes with an aspect ratio of &#8730;2 - 1 and 12 homothetic truncated cubes with a proportion of (&#8730;2 - 1)&#xb2;.
 <a href="ra5a.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <p class="topop"><a href="#p1" class="topo">back to top</a></p>
<hr>
<h4>21. Mosely snowflake: Truncated cube</h4>
<a href="vr/FractalTruncatedCube4.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/51A.png" class="foto" alt="Mosely snowflake - Truncated Cube"></a><img src="ar/51.png" class="qr">
 <br><br>The Mosely snowflake is a type of Sierpinski-Menger fractal obtained in two variants by the operation used in creating the Sierpinski-Menger snowflake. In this case, we removed eight corner truncated cubes and the center truncated cube in each iteration. 
 <a href="ra5a.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>22. Menger sponge: Rhombicuboctahedron</h4>
<a href="vr/FractalRhombicuboctahedron1.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/52A.png" class="foto" alt="Menger sponge - Rhombicuboctahedron"></a><img src="ar/52.png" class="qr">
 <br><br>Applying the construction principle of the Sierpinski carpet to 6 square faces of the rhombicuboctahedron, we obtain a fractal rhombicuboctahedron. In the first order of construction of the fractal, we construct 8 new solids on square faces of the original polyhedron, all with ⅓ the measurement of the rhombicuboctahedron's edge. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
 <a href="ra6.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>23. Menger's Cross - Jerusalem: Rhombicuboctahedron v1</h4>
<a href="vr/FractalRhombicuboctahedron2.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/53A.png" class="foto" alt="Rhombicuboctahedron - Menger's cross Jerusalem"></a><img src="ar/53.png" class="qr">
 <br><br>Consider a fractal rhombicuboctahedron. We can increase the edge sizes of the corner rhombicuboctahedrons and decrease the edge sizes of the intermediate rhombicuboctahedrons to reveal a cross. In this version, we have 8 homothetic rhombicuboctahedrons with an aspect ratio of &#8534; and 12 homothetic rhombicuboctahedrons with a proportion of &#8533;.
<a href="ra6.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>24. Menger's Cross - Jerusalem: Rhombicuboctahedron v2</h4>
<a href="vr/FractalRhombicuboctahedron3.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/54A.png" class="foto" alt="Rhombicuboctahedron - Menger's cross Jerusalem"></a><img src="ar/54.png" class="qr">
 <br><br>Consider a fractal rhombicuboctahedron. We can increase the edge sizes of the corner rhombicuboctahedrons and decrease the edge sizes of the intermediate rhombicuboctahedrons to reveal a cross. In this version, we have 8 homothetic rhombicuboctahedrons with an aspect ratio of &#8730;2 - 1 and 12 homothetic rhombicuboctahedrons with a proportion of (&#8730;2 - 1)&#xb2;.
 <a href="ra6a.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>25. Mosely snowflake: Rhombicuboctahedron</h4>
<a href="vr/FractalRhombicuboctahedron4.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/55A.png" class="foto" alt="Mosely snowflake - Rhombicuboctahedron"></a><img src="ar/55.png" class="qr">
 <br><br>The Mosely snowflake is a type of Sierpinski-Menger fractal obtained in two variants by the operation used in creating the Sierpinski-Menger snowflake. In this case, we removed eight corner rhombicuboctahedrons and the center rhombicuboctahedron in each iteration. 
 <a href="ra6a.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>26. Menger sponge: Cuboctahedron</h4>
<a href="vr/FractalCuboctahedron1.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/56A.png" class="foto" alt="Menger sponge - Cuboctahedron"></a><img src="ar/56.png" class="qr">
 <br><br>Applying the construction principle of the Sierpinski carpet to 6 square faces of the cuboctahedron, we obtain a fractal cuboctahedron. In the first order of construction of the fractal, we construct 8 new solids on square faces of the original polyhedron, all with ⅓ the measurement of the cuboctahedron's edge. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
 <a href="ra7.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>27. Menger's Cross - Jerusalem: Cuboctahedron v1</h4>
<a href="vr/FractalCuboctahedron2.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/57A.png" class="foto" alt="Cuboctahedron - Menger's cross Jerusalem"></a><img src="ar/57.png" class="qr">
 <br><br>Consider a fractal cuboctahedron. We can increase the edge sizes of the corner cuboctahedrons and decrease the edge sizes of the intermediate cuboctahedrons to reveal a cross. In this version, we have 8 homothetic cuboctahedrons with an aspect ratio of &#8534; and 12 homothetic cuboctahedrons with a proportion of &#8533;.
<a href="ra7.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>28. Menger's Cross - Jerusalem: Cuboctahedron v2</h4>
<a href="vr/FractalCuboctahedron3.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/58A.png" class="foto" alt="Cuboctahedron - Menger's cross Jerusalem"></a><img src="ar/58.png" class="qr">
 <br><br>Consider a fractal cuboctahedron. We can increase the edge sizes of the corner cuboctahedrons and decrease the edge sizes of the intermediate cuboctahedrons to reveal a cross. In this version, we have 8 homothetic cuboctahedrons with an aspect ratio of &#8730;2 - 1 and 12 homothetic cuboctahedrons with a proportion of (&#8730;2 - 1)&#xb2;.
 <a href="ra7a.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>29. Mosely snowflake: Cuboctahedron</h4>
<a href="vr/FractalCuboctahedron4.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/59A.png" class="foto" alt="Mosely snowflake - Cuboctahedron"></a><img src="ar/59.png" class="qr">
 <br><br>The Mosely snowflake is a type of Sierpinski-Menger fractal obtained in two variants by the operation used in creating the Sierpinski-Menger snowflake. In this case, we removed eight corner cuboctahedrons and the center cuboctahedron in each iteration. 
 <a href="ra7a.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>30. Menger sponge: Truncated cuboctahedron</h4>
<a href="vr/FractalTruncatedCuboctahedron1.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/60A.png" class="foto" alt="Menger sponge - Truncated cuboctahedron"></a><img src="ar/60.png" class="qr">
 <br><br>Applying the construction principle of the Sierpinski carpet to 6 octagonal faces of the truncated cuboctahedron, we obtain a fractal truncated cuboctahedron. In the first order of construction of the fractal, we construct 8 new solids on octagonal faces of the original polyhedron, all with ⅓ the measurement of the truncated cuboctahedron's edge. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
 <a href="ra8.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <p class="topop"><a href="#p1" class="topo">back to top</a></p>
 <hr>
<h4>31. Menger's Cross - Jerusalem: Truncated cuboctahedron v1</h4>
<a href="vr/FractalTruncatedCuboctahedron2.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/61A.png" class="foto" alt="Truncated cuboctahedron - Menger's cross Jerusalem"></a><img src="ar/61.png" class="qr">
 <br><br>Consider a fractal truncated cuboctahedron. We can increase the edge sizes of the corner truncated cuboctahedrons and decrease the edge sizes of the intermediate truncated cuboctahedrons to reveal a cross. In this version, we have 8 homothetic truncated cuboctahedrons with an aspect ratio of &#8534; and 12 homothetic truncated cuboctahedrons with a proportion of &#8533;.
<a href="ra8.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>32. Menger's Cross - Jerusalem: Truncated cuboctahedron v2</h4>
<a href="vr/FractalTruncatedCuboctahedron3.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/62A.png" class="foto" alt="Truncated cuboctahedron - Menger's cross Jerusalem"></a><img src="ar/62.png" class="qr">
 <br><br>Consider a fractal truncated cuboctahedron. We can increase the edge sizes of the corner truncated cuboctahedrons and decrease the edge sizes of the intermediate truncated cuboctahedrons to reveal a cross. In this version, we have 8 homothetic truncated cuboctahedrons with an aspect ratio of &#8730;2 - 1 and 12 homothetic truncated cuboctahedrons with a proportion of (&#8730;2 - 1)&#xb2;.
 <a href="ra8a.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>33. Mosely snowflake: Truncated cuboctahedron</h4>
<a href="vr/FractalTruncatedCuboctahedron4.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/63A.png" class="foto" alt="Mosely snowflake - Truncated cuboctahedron"></a><img src="ar/63.png" class="qr">
 <br><br>The Mosely snowflake is a type of Sierpinski-Menger fractal obtained in two variants by the operation used in creating the Sierpinski-Menger snowflake. In this case, we removed eight corner truncated cuboctahedrons and the center truncated cuboctahedron in each iteration. 
 <a href="ra8a.html" class="raAR" title="Augmented reality" target="_blank"></a>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<hr>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Archimedean polyhedra fractals - Visualization of polyhedra with Augmented Reality and Virtual Reality</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra2/fractalarchimedean/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> is licensed with a license <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International</a>.

<h4>How to cite this work:</h4> 
<p>Siqueira, P.H., "Archimedean polyhedra fractals - Visualization of polyhedra with Augmented Reality and Virtual Reality". Available in: <https://paulohscwb.github.io/polyhedra2/fractalarchimedean/>, October 2023.</p>
<!--<a target="_blank" href="https://doi.org/10.5281/zenodo.8272770"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.8272770.svg" alt="DOI"></a>-->
<br><br><b>References:</b>
<br>Weisstein, Eric W. "Archimedean Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/ArchimedeanSolid.html" target="_blank">http://mathworld.wolfram.com/ArchimedeanSolid.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Archimedean Dual" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/ArchimedeanDual.html" target="_blank">https://mathworld.wolfram.com/ArchimedeanDual.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Archimedean_solid" target="_blank">https://en.wikipedia.org/wiki/Archimedean_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
