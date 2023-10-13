<link rel="stylesheet" href="../../scripts/style.css">
<link rel="icon" type="image/png" href="../vr/salas/imagens/icone.png">
<h2>Visualização de poliedros com Realidade Aumentada (RA) e Realidade Virtual (RV) em A-frame</h2>
<b>autor:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
<br><b>contato:</b> <a href="#"> paulohscwb@gmail.com </a>
<br><a href="https://paulohscwb.github.io/polyhedra2/fractalplatonic/">english version</a>
<form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected>Mais poliedros:</option>
		<option value="../../archimedeancatalanhulls/pt-br/">Cascos convexos de Arquimedes e Catalan</option>
		<option disabled value="../../fractalplatonic/pt-br/">Fractais dos poliedros de Platão</option>
		<option value="../../fractalnonconvex/pt-br/">Fractais dos poliedros não convexos</option>
		<option value="../../fractalarchimedean/pt-br/">Fractais dos poliedros de Arquimedes</option>
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p1"></p>
  <h2 align="center"><img src="../vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Fractais dos poliedros de Platão</h2>
  Utilizando o mesmo princípio da construção do triângulo de Sierpinski ou da curva de Koch, podemos construir fractais de outros polígonos regulares. Quando estes polígonos formam um poliedro, temos a construção de um poliedro fractal.
 <hr>
<!-- <p align="center"><a href="#ra">Realidade Aumentada</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#m3d">Modelos 3D</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../../pt-br/">Página Inicial</a></p>
  <hr>
  <h3 align="center">Sala imersiva</h3>
  <div class="embed-container"><iframe width="100%" src="../sala.htm" title="Sala Imersiva de fractais de poliedros" frameborder="0" loading="lazy"></iframe></div>
  <p align="center"><img align="middle" src="../../../geometria-descritiva/videos/fractalplatonic.gif" style="max-width: 47%; border-radius:5px; margin-right:10px" loading="lazy" alt="Sala Imersiva de RV para fractais de poliedros"/><a href="../sala.htm" target="_blank">&#x1f517; link da sala</a></p>
<hr>
  <h3 id="ra" align="center">Realidade Aumentada</h3>
  Para visualizar os fractais de poliedros em RA, visite a página:
<p align="center"><a href="../ra.html" target="_blank">https://paulohscwb.github.io/polyhedra2/fractalplatonic/ra.html</a></p> 
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima de cada marcador.
<p align="center"><img style="border-radius:7px;" alt="Realidade Aumentada para fractais de poliedros" src="../ar/example.jpg" width="85%"></p>
<p align="center"><img src="../ar/fractalplatonic.gif" alt="Realidade Aumentada para fractais de poliedros" style="max-width: 92%; border-radius:5px;" loading="lazy"/></p>
<hr>
<h3 id="m3d" align="center">Modelos 3D</h3>
 <iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxU-mneUmSsccpRAAwbErHFq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
<h4>1. Tetraedro fractal</h4>
<a href="../vr/FractalTetrahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/13A.png" class="foto" alt="Tetraedro fractal"></a><img src="../ar/13.png" class="qr">
 <br><br>Aplicando-se o princípio de construção do triângulo de Sierpinski nas 4 faces do tetraedro regular, obtemos um tetraedro regular fractal. Na primeira ordem de construção do fractal, construímos um novo sólido em cada vértice do poliedro original. Neste exemplo, temos as representações do sólido nas ordens 0, 1, 2, 3 e 4.
 <table>
	<tr>
		<th>ordem</th>
		<th>poliedros</th>
		<th>faces</th>
		<th>arestas</th>
		<th>vértices</th>
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
<hr>
<h4>2. Octaedro fractal</h4>
<a href="../vr/FractalOctahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/14A.png" class="foto" alt="Octaedro fractal"></a><img src="../ar/14.png" class="qr">
 <br><br>Aplicando-se o princípio de construção do triângulo de Sierpinski nas 8 faces do octaedro regular, obtemos um octaedro regular fractal. Na primeira ordem de construção do fractal, construímos um novo sólido em cada vértice do poliedro original. Neste exemplo, temos as representações do sólido nas ordens 0, 1, 2, 3 e 4.
 <table>
	<tr>
		<th>ordem</th>
		<th>poliedros</th>
		<th>faces</th>
		<th>arestas</th>
		<th>vértices</th>
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
 <hr>
<h4>3. Icosaedro fractal</h4>
<a href="../vr/FractalIcosahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/15A.png" class="foto" alt="Icosaedro fractal"></a><img src="../ar/15.png" class="qr">
 <br><br>Aplicando-se o princípio de construção da curva de Koch nas 20 faces do icosaedro regular, obtemos um icosaedro regular fractal. Na primeira ordem de construção do fractal, construímos um novo sólido em cada vértice do poliedro original. Neste exemplo, temos as representações do sólido nas ordens 0, 1, 2 e 3.
 <table>
	<tr>
		<th>ordem</th>
		<th>poliedros</th>
		<th>faces</th>
		<th>arestas</th>
		<th>vértices</th>
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
 <hr>
<h4>4. Cubo fractal</h4>
<a href="../vr/FractalCube.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/16A.png" class="foto" alt="Cubo fractal"></a><img src="../ar/16.png" class="qr">
 <br><br>Aplicando-se o princípio de construção do tapete de Sierpinski nas 6 faces do cubo, obtemos um cubo fractal. Na primeira ordem de construção do fractal, construímos 8 novos sólidos em cada face do poliedro original, todas com &frac13; da medida da aresta do cubo. Neste exemplo, temos as representações do sólido nas ordens 0, 1, 2 e 3.
 <table>
	<tr>
		<th>ordem</th>
		<th>poliedros</th>
		<th>faces</th>
		<th>arestas</th>
		<th>vértices</th>
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
 <hr>
<h4>5. Dodecaedro fractal</h4>
<a href="../vr/FractalDodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/17A.png" class="foto" alt="Dodecaedro fractal"></a><img src="../ar/17.png" class="qr">
 <br><br>Aplicando-se o princípio de construção do triângulo de Sierpinski nas 12 faces do dodecaedro regular, obtemos um dodecaedro regular fractal. Na primeira ordem de construção do fractal, construímos um novo sólido em cada vértice do poliedro original. Neste exemplo, temos as representações do sólido nas ordens 0, 1, 2 e 3.
 <table>
	<tr>
		<th>ordem</th>
		<th>poliedros</th>
		<th>faces</th>
		<th>arestas</th>
		<th>vértices</th>
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
 <hr>
<p class="topop"><a href="#p1" class="topo">voltar ao topo</a></p>
<hr>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Fractal polyhedra - Visualization of polyhedra with Augmented Reality and Virtual Reality</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra2/fractalplatonic/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional</a>.

<h4>Como citar este trabalho:</h4> 
<p>Siqueira, P.H., "Platonic polyhedra fractals - Visualization of polyhedra with Augmented Reality and Virtual Reality". Disponível em: <https://paulohscwb.github.io/polyhedra2/fractalplatonic/>, Outubro de 2023.</p>
<!--<a target="_blank" href="https://doi.org/10.5281/zenodo.8272770"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.8272770.svg" alt="DOI"></a>-->
<br><br><b>Referências:</b>
<br>Weisstein, Eric W. "Archimedean Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/ArchimedeanSolid.html" target="_blank">http://mathworld.wolfram.com/ArchimedeanSolid.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Archimedean Dual" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/ArchimedeanDual.html" target="_blank">https://mathworld.wolfram.com/ArchimedeanDual.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Archimedean_solid" target="_blank">https://en.wikipedia.org/wiki/Archimedean_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
