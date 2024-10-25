<link rel="stylesheet" href="../scripts/style.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="vr/salas/imagens/icone.png">
<h2>Visualization of polyhedra with Augmented Reality (AR) and Virtual Reality (VR) in A-frame</h2>
 <b>author:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
 <br><b>contact:</b> <a href="#">paulohscwb@gmail.com</a>
 <br><a href="https://paulohscwb.github.io/polyhedra2/fractalnonconvex/pt-br/">versão em português</a>
 <form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected value>More polyhedra:</option>
		<option value="../ArchimedeanCatalanHulls/">Archimedean and Catalan convex hulls</option>
		<option value="../fractalplatonic/">Platonic polyhedra fractals</option>
		<option disabled value="../fractalnonconvex/">Non convex polyhedra fractals</option>
		<option value="../fractalarchimedean/">Archimedean polyhedra fractals</option>
		<option value="../chamfered/">Chamfered polyhedra</option>
		<option value="../propellor/">Propellor polyhedra</option>
		<option value="../diamonds/">Diamond polyhedra</option>
		<option value="../biscribed/">Biscribed polyhedra</option>
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p1"></p>
  <h2 align="center"><img src="vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Non convex polyhedra fractals</h2>
Using the same principle as the construction of the Sierpinski triangle or the Koch curve, we can construct fractals from other regular polygons. When these polygons form a polyhedron, we have the construction of a fractal polyhedron.

<p align="center"><a href="#ra">Augmented Reality</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#m3d">3D Models</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../">Home</a></p>
  <hr>
 <h3 align="center">Immersive rooms</h3>
  <div class="embed-container"><iframe width="100%" src="sala1.htm" title="Sala Imersiva de Fractais de poliedros" frameborder="0" loading="lazy"></iframe></div>
<p align="center"><a href="sala1.htm" target="_blank">&#x1f517; room 1</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala2.htm" target="_blank">&#x1f517; room 2</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala3.htm" target="_blank">&#x1f517; room 3</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala4.htm" target="_blank">&#x1f517; room 4</a>
<br><a href="sala5.htm" target="_blank">&#x1f517; room 5</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala6.htm" target="_blank">&#x1f517; room 6</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala7.htm" target="_blank">&#x1f517; room 7</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala8.htm" target="_blank">&#x1f517; room 8</a></p>
  <p align="center"><img src="vr/salas/videos/fractalnonconvex1.gif" style="max-width: 31.5%; border-radius:5px; margin-right:2%" loading="lazy"/><img src="vr/salas/videos/fractalnonconvex2.gif" style="max-width: 31.5%; border-radius:5px; margin-right:2%" loading="lazy"/><img src="vr/salas/videos/fractalnonconvex3.gif" style="max-width: 31.5%; border-radius:5px" loading="lazy"/></p>
 <hr> 
  <h3 id="ra" align="center">Augmented Reality</h3>
To view fractal polyhedra in AR, simply visit the pages indicated in the 3D solid models using any browser with a webcam device (smartphone, tablet or notebook).
<br>Access to the VR sites is done by clicking on the blue circle that appears on top of the marker.
<p align="center"><img style="border-radius:7px;" alt="Augmented Reality to fractal polyhedra" src="ar/example.jpg" width="85%"></p>
<p align="center"><img src="ar/fractalnonconvex.gif" alt="Augmented Reality to fractal polyhedra" style="max-width: 92%; border-radius:5px;" loading="lazy"/></p>
<hr>
<h3 id="m3d" align="center">3D models</h3>
<iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxWvg2uw06vbRaVe7ot5zUIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<h4>1. Escher solid fractal</h4>
<a href="vr/FractalEscher.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/18A.png" class="foto" alt="Escher solid fractal"></a><img src="ar/18.png" class="qr">
 <br><br>Applying the construction principle of the Sierpinski triangle to the 48 faces of the Escher solid, we obtain an Escher solid fractal. In the first order of fractal construction, we construct a new solid at 12 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>48</td>
		<td>72</td>
		<td>26</td>
	</tr>
	<tr>
		<td>1</td>
		<td>12</td>
		<td>576</td>
		<td>864</td>
		<td>312</td>
	</tr>
	<tr>
		<td>2</td>
		<td>144</td>
		<td>6912</td>
		<td>10368</td>
		<td>3744</td>
	</tr>
	<tr>
		<td>3</td>
		<td>1728</td>
		<td>82944</td>
		<td>124416</td>
		<td>44928</td>
	</tr>
 </table>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>2. Small stellated dodecahedron fractal</h4>
<a href="vr/FractalSmallStellatedDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/19A.png" class="foto" alt="Small stellated dodecahedron fractal"></a><img src="ar/19.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to the 12 faces of the small stellated dodecahedron, we obtain a small stellated dodecahedron fractal. In the first order of fractal construction, we construct a new solid at each vertex of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>12</td>
	</tr>
	<tr>
		<td>1</td>
		<td>12</td>
		<td>144</td>
		<td>360</td>
		<td>144</td>
	</tr>
	<tr>
		<td>2</td>
		<td>144</td>
		<td>1728</td>
		<td>4320</td>
		<td>1728</td>
	</tr>
	<tr>
		<td>3</td>
		<td>1728</td>
		<td>20736</td>
		<td>51840</td>
		<td>20736</td>
	</tr>
 </table>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>3. Great stellated dodecahedron fractal</h4>
<a href="vr/FractalGreatStellatedDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/22A.png" class="foto" alt="Great stellated dodecahedron fractal"></a><img src="ar/22.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to the 12 faces of the great stellated dodecahedron, we obtain a great stellated dodecahedron fractal. In the first order of fractal construction, we construct a new solid at each vertex of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>21</td>
		<td>252</td>
		<td>630</td>
		<td>420</td>
	</tr>
	<tr>
		<td>2</td>
		<td>441</td>
		<td>5292</td>
		<td>13230</td>
		<td>8820</td>
	</tr>
	<tr>
		<td>3</td>
		<td>9261</td>
		<td>111132</td>
		<td>277830</td>
		<td>185220</td>
	</tr>
 </table>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>4. Great icosahedron fractal</h4>
<a href="vr/FractalGreatIcosahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/20A.png" class="foto" alt="Great icosahedron fractal"></a><img src="ar/20.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to the 20 faces of the great icosahedron, we obtain a great icosahedron fractal. In the first order of fractal construction, we construct a new solid at each vertex of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
<h4>5. Great dodecahedron fractal</h4>
<a href="vr/FractalGreatDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/21A.png" class="foto" alt="Joined Truncated Icosahedron"></a><img src="ar/21.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to the 12 faces of the great dodecahedron, we obtain a great dodecahedron fractal. In the first order of fractal construction, we construct a new solid at each vertex of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>12</td>
	</tr>
	<tr>
		<td>1</td>
		<td>12</td>
		<td>144</td>
		<td>360</td>
		<td>144</td>
	</tr>
	<tr>
		<td>2</td>
		<td>144</td>
		<td>1728</td>
		<td>4320</td>
		<td>1728</td>
	</tr>
	<tr>
		<td>3</td>
		<td>1728</td>
		<td>20736</td>
		<td>51840</td>
		<td>20736</td>
	</tr>
 </table>
 <a href="ra1.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>6. Great stellapentakis dodecahedron fractal</h4>
<a href="vr/FractalGreatStellapentakisDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/29A.png" class="foto" alt="Great stellapentakis dodecahedron fractal"></a><img src="ar/29.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 20 faces of the great stellapentakis dodecahedron, we obtain a great stellapentakis dodecahedron fractal. In the first order of fractal construction, we construct a new solid at 20 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>60</td>
		<td>90</td>
		<td>32</td>
	</tr>
	<tr>
		<td>1</td>
		<td>21</td>
		<td>1260</td>
		<td>1890</td>
		<td>672</td>
	</tr>
	<tr>
		<td>2</td>
		<td>441</td>
		<td>26460</td>
		<td>39690</td>
		<td>14112</td>
	</tr>
	<tr>
		<td>3</td>
		<td>9261</td>
		<td>555660</td>
		<td>833490</td>
		<td>296352</td>
	</tr>
 </table>
 <a href="ra1.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>7. Pentagramic dipyramid fractal</h4>
<a href="vr/FractalPentagrammicDipyramid.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/23A.png" class="foto" alt="Pentagramic dipyramid fractal"></a><img src="ar/23.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to the edges that form the pentagram of the pentagramic dipyramid, we obtain a pentagramic dipyramid fractal. In the first order of fractal construction, we construct a new solid at 5 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2, 3 and 4.
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
		<td>10</td>
		<td>15</td>
		<td>7</td>
	</tr>
	<tr>
		<td>1</td>
		<td>6</td>
		<td>60</td>
		<td>90</td>
		<td>42</td>
	</tr>
	<tr>
		<td>2</td>
		<td>36</td>
		<td>360</td>
		<td>540</td>
		<td>252</td>
	</tr>
	<tr>
		<td>3</td>
		<td>216</td>
		<td>2160</td>
		<td>3240</td>
		<td>1512</td>
	</tr>
	<tr>
		<td>4</td>
		<td>1296</td>
		<td>12960</td>
		<td>19440</td>
		<td>9072</td>
	</tr>
 </table>
 <a href="ra2.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>8. Medial triambic icosahedron fractal</h4>
<a href="vr/FractalMedialTriambicIcosahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/24A.png" class="foto" alt="Medial triambic icosahedron fractal"></a><img src="ar/24.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 12 faces of the medial triambic icosahedron, we obtain a medial triambic icosahedron fractal. In the first order of fractal construction, we construct a new solid at 12 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>60</td>
		<td>24</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>260</td>
		<td>780</td>
		<td>312</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>3380</td>
		<td>10140</td>
		<td>4056</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>43940</td>
		<td>131820</td>
		<td>52728</td>
	</tr>
 </table>
 <a href="ra2.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>9. Great rhombic triacontahedron fractal</h4>
<a href="vr/FractalGreatRhombicTriacontahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/44A.png" class="foto" alt="Great rhombic triacontahedron fractal"></a><img src="ar/44.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 20 faces of the great rhombic triacontahedron, we obtain a great rhombic triacontahedron fractal. In the first order of fractal construction, we construct a new solid at 20 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>30</td>
		<td>60</td>
		<td>32</td>
	</tr>
	<tr>
		<td>1</td>
		<td>21</td>
		<td>630</td>
		<td>1260</td>
		<td>672</td>
	</tr>
	<tr>
		<td>2</td>
		<td>441</td>
		<td>13230</td>
		<td>26460</td>
		<td>14112</td>
	</tr>
	<tr>
		<td>3</td>
		<td>9261</td>
		<td>277830</td>
		<td>555660</td>
		<td>296352</td>
	</tr>
 </table>
 <a href="ra2.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>10. Medial rhombic triacontahedron fractal</h4>
<a href="vr/FractalMedialRhombicTriacontahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/25A.png" class="foto" alt="Medial rhombic triacontahedron fractal"></a><img src="ar/25.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 12 faces of the medial rhombic triacontahedron, we obtain a medial rhombic triacontahedron fractal. In the first order of fractal construction, we construct a new solid at 12 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>30</td>
		<td>60</td>
		<td>24</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>390</td>
		<td>780</td>
		<td>312</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>5070</td>
		<td>10140</td>
		<td>4056</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>65910</td>
		<td>131820</td>
		<td>52728</td>
	</tr>
 </table>
 <a href="ra3.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <p class="topop"><a href="#p1" class="topo">back to top</a></p>
 <hr>
 <h4>11. Small ditrigonal dodecacronic hexecontahedron fractal</h4>
<a href="vr/FractalSmallDitrigonalDodecacronicHexecontahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/26A.png" class="foto" alt="Small ditrigonal dodecacronic hexecontahedron fractal"></a><img src="ar/26.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 12 faces of the small ditrigonal dodecacronic hexecontahedron, we obtain a small ditrigonal dodecacronic hexecontahedron fractal. In the first order of fractal construction, we construct a new solid at 12 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>60</td>
		<td>120</td>
		<td>44</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>780</td>
		<td>1560</td>
		<td>572</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>10140</td>
		<td>20280</td>
		<td>7436</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>131820</td>
		<td>263640</td>
		<td>96668</td>
	</tr>
 </table>
 <a href="ra3.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>12. Rhombicosacron fractal</h4>
<a href="vr/FractalRhombicosacron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/46A.png" class="foto" alt="Rhombicosacron fractal"></a><img src="ar/46.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 20 faces of the rhombicosacron, we obtain a rhombicosacron fractal. In the first order of fractal construction, we construct a new solid at 20 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>60</td>
		<td>120</td>
		<td>50</td>
	</tr>
	<tr>
		<td>1</td>
		<td>21</td>
		<td>1260</td>
		<td>2520</td>
		<td>1050</td>
	</tr>
	<tr>
		<td>2</td>
		<td>441</td>
		<td>26460</td>
		<td>52920</td>
		<td>22050</td>
	</tr>
	<tr>
		<td>3</td>
		<td>9261</td>
		<td>555660</td>
		<td>1111320</td>
		<td>463050</td>
	</tr>
 </table>
 <a href="ra3.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>13. Small hexacronic icositetrahedron fractal</h4>
<a href="vr/FractalSmallHexacronicIcositetrahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/27A.png" class="foto" alt="Small hexacronic icositetrahedron fractal"></a><img src="ar/27.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 6 faces of the small hexacronic icositetrahedron, we obtain a small hexacronic icositetrahedron fractal. In the first order of fractal construction, we construct a new solid at 6 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>24</td>
		<td>48</td>
		<td>20</td>
	</tr>
	<tr>
		<td>1</td>
		<td>7</td>
		<td>168</td>
		<td>336</td>
		<td>140</td>
	</tr>
	<tr>
		<td>2</td>
		<td>49</td>
		<td>1176</td>
		<td>2352</td>
		<td>980</td>
	</tr>
	<tr>
		<td>3</td>
		<td>343</td>
		<td>8232</td>
		<td>16464</td>
		<td>6860</td>
	</tr>
 </table>
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
  <hr>
 <h4>14. Great triakis octahedron fractal</h4>
<a href="vr/FractalGreatTriakisOctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/28A.png" class="foto" alt="Great triakis octahedron fractal"></a><img src="ar/28.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 8 faces of the great triakis octahedron, we obtain a great triakis octahedron fractal. In the first order of fractal construction, we construct a new solid at 8 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>24</td>
		<td>36</td>
		<td>14</td>
	</tr>
	<tr>
		<td>1</td>
		<td>9</td>
		<td>216</td>
		<td>324</td>
		<td>126</td>
	</tr>
	<tr>
		<td>2</td>
		<td>81</td>
		<td>1944</td>
		<td>2916</td>
		<td>1134</td>
	</tr>
	<tr>
		<td>3</td>
		<td>729</td>
		<td>17496</td>
		<td>26244</td>
		<td>10216</td>
	</tr>
 </table>
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>15. Great disdyakis dodecahedron fractal</h4>
<a href="vr/FractalGreatDisdyakisDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/30A.png" class="foto" alt="Great disdyakis dodecahedron fractal"></a><img src="ar/30.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 8 faces of the great disdyakis dodecahedron, we obtain a great disdyakis dodecahedron fractal. In the first order of fractal construction, we construct a new solid at 8 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>48</td>
		<td>72</td>
		<td>20</td>
	</tr>
	<tr>
		<td>1</td>
		<td>9</td>
		<td>432</td>
		<td>648</td>
		<td>180</td>
	</tr>
	<tr>
		<td>2</td>
		<td>81</td>
		<td>3888</td>
		<td>5832</td>
		<td>1620</td>
	</tr>
	<tr>
		<td>3</td>
		<td>729</td>
		<td>34992</td>
		<td>52488</td>
		<td>14580</td>
	</tr>
 </table>
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>16. Small rhombidodecacron fractal</h4>
<a href="vr/FractalSmallRhombidodecacron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/45A.png" class="foto" alt="Small rhombidodecacron fractal"></a><img src="ar/45.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 12 faces of the small rhombidodecacron, we obtain a small rhombidodecacron fractal. In the first order of fractal construction, we construct a new solid at 12 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>60</td>
		<td>120</td>
		<td>42</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>780</td>
		<td>1560</td>
		<td>546</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>10140</td>
		<td>20280</td>
		<td>7098</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>131820</td>
		<td>263640</td>
		<td>92274</td>
	</tr>
 </table>
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>17. Great triakis icosahedron fractal</h4>
<a href="vr/FractalGreatTriakisIcosahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/47A.png" class="foto" alt="Great triakis icosahedron fractal"></a><img src="ar/47.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 12 faces of the great triakis icosahedron, we obtain a great triakis icosahedron fractal. In the first order of fractal construction, we construct a new solid at 12 faces of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>60</td>
		<td>90</td>
		<td>32</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>780</td>
		<td>1170</td>
		<td>416</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>10140</td>
		<td>15210</td>
		<td>5408</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>131820</td>
		<td>197730</td>
		<td>70304</td>
	</tr>
 </table>
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>18. Great truncated icosahedron fractal</h4>
<a href="vr/FractalTruncatedGreatIcosahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/48A.png" class="foto" alt="Great truncated icosahedron fractal"></a><img src="ar/48.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 12 faces of the great truncated icosahedron, we obtain a great truncated icosahedron fractal. In the first order of fractal construction, we construct a new solid at 12 faces of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>19. Pentagrammic dipyramid fractal</h4>
<a href="vr/FractalPentagrammicDipyramidA.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/54A.png" class="foto" alt="Pentagrammic dipyramid fractal"></a><img src="ar/54.png" class="qr">
 <br><br>Applying the principle of repetition of solids at vertices of the pentagrammic dipyramid, we obtain a pentagrammic dipyramid fractal. In the first order of fractal construction, we construct a new solid at each vertice of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2, 3, 4 and 5.
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
		<td>10</td>
		<td>15</td>
		<td>7</td>
	</tr>
	<tr>
		<td>1</td>
		<td>6</td>
		<td>60</td>
		<td>90</td>
		<td>42</td>
	</tr>
	<tr>
		<td>2</td>
		<td>11</td>
		<td>110</td>
		<td>165</td>
		<td>77</td>
	</tr>
	<tr>
		<td>3</td>
		<td>21</td>
		<td>210</td>
		<td>315</td>
		<td>147</td>
	</tr>
	<tr>
		<td>4</td>
		<td>41</td>
		<td>410</td>
		<td>615</td>
		<td>287</td>
	</tr>
	<tr>
		<td>5</td>
		<td>81</td>
		<td>810</td>
		<td>1215</td>
		<td>567</td>
	</tr>
 </table>
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>20. Heptagrammic dipyramid fractal</h4>
<a href="vr/FractalHeptagrammicDipyramidA.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/55A.png" class="foto" alt="Pentagrammic dipyramid fractal"></a><img src="ar/55.png" class="qr">
 <br><br>Applying the principle of repetition of solids at vertices of the heptagrammic dipyramid, we obtain a heptagrammic dipyramid fractal. In the first order of fractal construction, we construct a new solid at each vertice of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2, 3, 4 and 5.
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
		<td>21</td>
		<td>9</td>
	</tr>
	<tr>
		<td>1</td>
		<td>8</td>
		<td>112</td>
		<td>168</td>
		<td>72</td>
	</tr>
	<tr>
		<td>2</td>
		<td>15</td>
		<td>210</td>
		<td>315</td>
		<td>135</td>
	</tr>
	<tr>
		<td>3</td>
		<td>29</td>
		<td>406</td>
		<td>609</td>
		<td>261</td>
	</tr>
	<tr>
		<td>4</td>
		<td>57</td>
		<td>798</td>
		<td>1197</td>
		<td>513</td>
	</tr>
	<tr>
		<td>5</td>
		<td>113</td>
		<td>1582</td>
		<td>2373</td>
		<td>1017</td>
	</tr>
 </table>
 <a href="ra4.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <p class="topop"><a href="#p1" class="topo">back to top</a></p>
 <hr>
 <h4>21. Great pentakis dodecahedron fractal</h4>
<a href="vr/FractalGreatPentakisDodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/49A.png" class="foto" alt="Great Pentakis Dodecahedron fractal"></a><img src="ar/49.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 12 vertices of the great pentakis dodecahedron, we obtain a great pentakis dodecahedron fractal. In the first order of fractal construction, we construct a new solid at 12 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>60</td>
		<td>90</td>
		<td>24</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>780</td>
		<td>1170</td>
		<td>312</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>10140</td>
		<td>15210</td>
		<td>4056</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>131820</td>
		<td>197730</td>
		<td>52728</td>
	</tr>
 </table>
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>22. Icosidodecadodecahedron fractal</h4>
<a href="vr/FractalIcosidodecadodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/50A.png" class="foto" alt="icosidodecadodecahedron fractal"></a><img src="ar/50.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 12 faces of the icosidodecadodecahedron, we obtain an icosidodecadodecahedron fractal. In the first order of fractal construction, we construct a new solid at 12 faces of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>44</td>
		<td>120</td>
		<td>60</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>572</td>
		<td>1560</td>
		<td>780</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>7436</td>
		<td>20280</td>
		<td>10140</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>96668</td>
		<td>263640</td>
		<td>131820</td>
	</tr>
 </table>
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>23. Rhombicosahedron fractal</h4>
<a href="vr/FractalRhombicosahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/51A.png" class="foto" alt="Rhombicosahedron fractal"></a><img src="ar/51.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 12 faces of the rhombicosahedron, we obtain an rhombicosahedron fractal. In the first order of fractal construction, we construct a new solid at 12 faces of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>50</td>
		<td>120</td>
		<td>60</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>650</td>
		<td>1560</td>
		<td>780</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>8450</td>
		<td>20280</td>
		<td>10140</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>109850</td>
		<td>263640</td>
		<td>131820</td>
	</tr>
 </table>
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>24. Medial inverted pentagonal hexecontahedron fractal</h4>
<a href="vr/FractalMedialInvertedPentagonalHexecontahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/52A.png" class="foto" alt="Medial inverted pentagonal hexecontahedron fractal"></a><img src="ar/52.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to 12 vertices of the medial inverted pentagonal hexecontahedron, we obtain a medial inverted pentagonal hexecontahedron fractal. In the first order of fractal construction, we construct a new solid at 12 vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>60</td>
		<td>150</td>
		<td>84</td>
	</tr>
	<tr>
		<td>1</td>
		<td>13</td>
		<td>780</td>
		<td>1950</td>
		<td>1092</td>
	</tr>
	<tr>
		<td>2</td>
		<td>169</td>
		<td>10140</td>
		<td>25350</td>
		<td>14196</td>
	</tr>
	<tr>
		<td>3</td>
		<td>2197</td>
		<td>131820</td>
		<td>329550</td>
		<td>184548</td>
	</tr>
 </table>
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>25. Heptagrammic dipyramid fractal</h4>
<a href="vr/FractalHeptagrammicDipyramid.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/53A.png" class="foto" alt="Heptagrammic dipyramid fractal"></a><img src="ar/53.png" class="qr">
 <br><br>Applying the construction principle of the Koch curve to vertices of the heptagrammic dipyramid, we obtain a heptagrammic dipyramid fractal. In the first order of fractal construction, we construct a new solid at vertices of the original polyhedron. In this example, we have representations of the solid in orders 0, 1, 2, 3 and 4.
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
		<td>21</td>
		<td>9</td>
	</tr>
	<tr>
		<td>1</td>
		<td>8</td>
		<td>112</td>
		<td>168</td>
		<td>72</td>
	</tr>
	<tr>
		<td>2</td>
		<td>64</td>
		<td>896</td>
		<td>1344</td>
		<td>576</td>
	</tr>
	<tr>
		<td>3</td>
		<td>512</td>
		<td>7168</td>
		<td>10752</td>
		<td>4608</td>
	</tr>
	<tr>
		<td>4</td>
		<td>4096</td>
		<td>57344</td>
		<td>86016</td>
		<td>36864</td>
	</tr>
 </table>
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>26. Hexagonal trapezohedron-antiprism toroid fractal</h4>
<a href="vr/FractalHexagonalTrapezohedronAntiprismToroid.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/249A.png" class="foto" alt="Hexagonal trapezohedron-antiprism toroid fractal"></a><img src="ar/249.png" class="qr">
 <br><br>Applying the Antoine necklace construction principle to a hexagonal trapezohedron-antiprism toroid, we obtain a fractal of the hexagonal trapezohedron-antiprism toroid. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>24</td>
		<td>48</td>
		<td>24</td>
	</tr>
	<tr>
		<td>1</td>
		<td>16</td>
		<td>384</td>
		<td>768</td>
		<td>384</td>
	</tr>
	<tr>
		<td>2</td>
		<td>256</td>
		<td>6144</td>
		<td>12288</td>
		<td>6144</td>
	</tr>
	<tr>
		<td>3</td>
		<td>4096</td>
		<td>98304</td>
		<td>196608</td>
		<td>98304</td>
	</tr>
 </table>
 <a href="ra5.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
 <h4>27. Tetragonal toroid fractal</h4>
<a href="vr/FractalRegularTetragonalToroid.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/248A.png" class="foto" alt="Tetragonal toroid fractal"></a><img src="ar/248.png" class="qr">
 <br><br>Applying the Antoine necklace construction principle to a tetragonal toroid, we obtain a fractal of the tetragonal toroid. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>18</td>
		<td>36</td>
		<td>18</td>
	</tr>
	<tr>
		<td>1</td>
		<td>16</td>
		<td>288</td>
		<td>576</td>
		<td>288</td>
	</tr>
	<tr>
		<td>2</td>
		<td>256</td>
		<td>4608</td>
		<td>9216</td>
		<td>4608</td>
	</tr>
	<tr>
		<td>3</td>
		<td>4096</td>
		<td>73728</td>
		<td>147456</td>
		<td>73728</td>
	</tr>
 </table>
 <a href="ra6.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
 <h4>28. Hexagonal trapezohedron toroid fractal</h4>
<a href="vr/FractalHexagonalTrapezohedronToroid.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/247A.png" class="foto" alt="Hexagonal trapezohedron toroid fractal"></a><img src="ar/247.png" class="qr">
 <br><br>Applying the Antoine necklace construction principle to a hexagonal trapezohedron toroid, we obtain a fractal of the hexagonal trapezohedron toroid. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>24</td>
		<td>60</td>
		<td>36</td>
	</tr>
	<tr>
		<td>1</td>
		<td>16</td>
		<td>384</td>
		<td>960</td>
		<td>576</td>
	</tr>
	<tr>
		<td>2</td>
		<td>256</td>
		<td>6144</td>
		<td>15360</td>
		<td>9216</td>
	</tr>
	<tr>
		<td>3</td>
		<td>4096</td>
		<td>98304</td>
		<td>245760</td>
		<td>147456</td>
	</tr>
 </table>
 <a href="ra6.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
 <h4>29. Hexagonal antiprism-trapezohedron toroid fractal</h4>
<a href="vr/FractalHexagonalAntiprismTrapezohedronToroid.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/246A.png" class="foto" alt="Hexagonal antiprism-trapezohedron toroid fractal"></a><img src="ar/246.png" class="qr">
 <br><br>Applying the Antoine necklace construction principle to a hexagonal antiprism-trapezohedron toroid, we obtain a fractal of the hexagonal antiprism-trapezohedron toroid. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>24</td>
		<td>48</td>
		<td>24</td>
	</tr>
	<tr>
		<td>1</td>
		<td>16</td>
		<td>384</td>
		<td>768</td>
		<td>384</td>
	</tr>
	<tr>
		<td>2</td>
		<td>256</td>
		<td>6144</td>
		<td>12288</td>
		<td>6144</td>
	</tr>
	<tr>
		<td>3</td>
		<td>4096</td>
		<td>98304</td>
		<td>196608</td>
		<td>98304</td>
	</tr>
 </table>
 <a href="ra6.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
 <h4>30. Anti-octagonal iris toroid fractal</h4>
<a href="vr/FractalAntiOctagonalIrisToroid.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/111A.png" class="foto" alt="Anti-octagonal iris toroid fractal"></a><img src="ar/111.png" class="qr">
 <br><br>Applying the Antoine necklace construction principle to a anti-octagonal iris toroid, we obtain a fractal of the anti-octagonal iris toroid. In this example, we have representations of the solid in orders 0, 1, 2 and 3.
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
		<td>48</td>
		<td>16</td>
	</tr>
	<tr>
		<td>1</td>
		<td>16</td>
		<td>512</td>
		<td>768</td>
		<td>256</td>
	</tr>
	<tr>
		<td>2</td>
		<td>256</td>
		<td>8192</td>
		<td>12288</td>
		<td>4096</td>
	</tr>
	<tr>
		<td>3</td>
		<td>4096</td>
		<td>131072</td>
		<td>196608</td>
		<td>65536</td>
	</tr>
 </table>
 <a href="ra6.html" class="raAR" title="Augmented reality" target="_blank"></a>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<hr>
 <h4>31. Geometric Christmas tree v1</h4>
<a href="vr/FractalTreeA.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/242A.png" class="foto" alt="Geometric Christmas tree v1"></a><img src="ar/242.png" class="qr">
 <br><br>Construction of a Christmas tree using the following solids: right circular cone frustum, pyramid frustums, a pentagrammic dipyramid and a conical helix with dodecahedrons.
 <a href="ra7.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>32. Geometric Christmas tree v2</h4>
<a href="vr/FractalTreeB.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/243A.png" class="foto" alt="Geometric Christmas tree v2"></a><img src="ar/243.png" class="qr">
 <br><br>Construction of a Christmas tree using the following solids: right circular cone frustum, pyramid frustums, a pentagrammic dipyramid and a conical helix with small stellated dodecahedrons.
 <a href="ra7.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>33. Geometric Christmas tree v3</h4>
<a href="vr/FractalTreeC.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/244A.png" class="foto" alt="Geometric Christmas tree v3"></a><img src="ar/244.png" class="qr">
 <br><br>Construction of a Christmas tree using the following solids: right circular cone frustum, pyramid frustums, a heptagrammic dipyramid and a conical helix with great stellapentakis dodecahedrons.
 <a href="ra7.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>34. Geometric Christmas tree v4</h4>
<a href="vr/FractalTreeD.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/241A.png" class="foto" alt="Geometric Christmas tree v4"></a><img src="ar/241.png" class="qr">
 <br><br>Construction of a Christmas tree using the following solids: right circular cone frustum, stellated pyramid frustums, a heptagrammic dipyramid and a conical helix with icosahedrons.
 <a href="ra7.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>35. Geometric Christmas tree v5</h4>
<a href="vr/FractalTreeE.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/240A.png" class="foto" alt="Geometric Christmas tree v5"></a><img src="ar/240.png" class="qr">
 <br><br>Construction of a Christmas tree using the following solids: right circular cone frustum, stellated pyramid frustums, a heptagrammic dipyramid and a conical helix with icosidodecadodecahedrons.
 <a href="ra7.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>36. Geometric Christmas tree v6</h4>
<a href="vr/FractalTreeF.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/239A.png" class="foto" alt="Geometric Christmas tree v6"></a><img src="ar/239.png" class="qr">
 <br><br>Construction of a Christmas tree using the following solids: right circular cone frustum, stellated pyramid frustums, a heptagrammic dipyramid and a conical helix with truncated great icosahedrons.
 <a href="ra7.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
 <h4>37. Geometric Christmas tree v7</h4>
<a href="vr/FractalTreeG.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/238A.png" class="foto" alt="Geometric Christmas tree v7"></a><img src="ar/238.png" class="qr">
 <br><br>Construction of a Christmas tree using the following solids: right circular cone frustum, stellated pyramid frustums, a pentagrammic dipyramid and a conical helix with small rhombidodecacrons.
 <a href="ra7.html" class="raAR" title="Augmented reality" target="_blank"></a>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<hr>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Non convex polyhedra fractals - Visualization of polyhedra with Augmented Reality and Virtual Reality</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra2/fractalnonconvex/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> is licensed with a license <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International</a>.

<h4>How to cite this work:</h4> 
<p>Siqueira, P.H., "Non convex polyhedra fractals - Visualization of polyhedra with Augmented Reality and Virtual Reality". Available in: <https://paulohscwb.github.io/polyhedra2/fractalnonconvex/>, October 2023.</p>
<a target="_blank" href="https://doi.org/10.5281/zenodo.12572969"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.12572969.svg" alt="DOI"></a>
<br><br><b>References:</b>
<br>Weisstein, Eric W. "Fractal" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/Fractal.html" target="_blank">https://mathworld.wolfram.com/Fractal.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/List_of_uniform_polyhedra" target="_blank">https://en.wikipedia.org/wiki/List_of_uniform_polyhedra</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
