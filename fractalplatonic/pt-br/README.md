<link rel="stylesheet" href="../../scripts/style.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="../vr/salas/imagens/icone.png">
<h2>Visualização de poliedros com Realidade Aumentada (RA) e Realidade Virtual (RV) em A-frame</h2>
<b>autor:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
<br><b>contato:</b> <a href="#"> paulohscwb@gmail.com </a>
<br><a href="https://paulohscwb.github.io/polyhedra2/fractalplatonic/">english version</a>
<form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected>Mais poliedros:</option>
		<option value="../../ArchimedeanCatalanHulls/pt-br/">Cascos convexos de Arquimedes e Catalan</option>
		<option disabled value="../../fractalplatonic/pt-br/">Fractais dos poliedros de Platão</option>
		<option value="../../fractalnonconvex/pt-br/">Fractais dos poliedros não convexos</option>
		<option value="../../fractalarchimedean/pt-br/">Fractais dos poliedros de Arquimedes</option>
		<option value="../../chamfered/pt-br/">Poliedros chanfrados</option>
		<option value="../../propellor/pt-br/">Poliedros de hélice</option>
		<option value="../../diamonds/pt-br/">Poliedros de diamante</option>
		<option value="../../biscribed/pt-br/">Poliedros biscritos</option>
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

 <p align="center"><a href="#ra">Realidade Aumentada</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#m3d">Modelos 3D</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../../pt-br/">Página Inicial</a></p>
 <hr>
   <h3 align="center">Salas imersivas</h3>
  <div class="embed-container"><iframe width="100%" src="../sala1.htm" title="Sala Imersiva de fractais de poliedros" frameborder="0" loading="lazy"></iframe></div>
  <p align="center"><a href="../sala1.htm" target="_blank">&#x1f517; sala 1</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../sala2.htm" target="_blank">&#x1f517; sala 2</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../sala3.htm" target="_blank">&#x1f517; sala 3</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../sala4.htm" target="_blank">&#x1f517; sala 4</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../sala5.htm" target="_blank">&#x1f517; sala 5</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../sala6.htm" target="_blank">&#x1f517; sala 6</a></p>
  <p align="center"><img src="../vr/salas/videos/fractalplatonic1.gif" style="max-width: 31.5%; border-radius:5px; margin-right:2%" loading="lazy"/><img src="../vr/salas/videos/fractalplatonic2.gif" style="max-width: 31.5%; margin-right:2%; border-radius:5px" loading="lazy"/><img src="../../../cotadas/videos/frac_drag.gif" style="max-width: 31.5%; border-radius:5px" loading="lazy"/></p>
<hr>
  <h3 id="ra" align="center">Realidade Aumentada</h3>
  Para visualizar os fractais de poliedros em RA, visite as páginas indicadas nos modelos 3D dos sólidos utilizando qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima de cada marcador.
<p align="center"><img style="border-radius:7px;" alt="Realidade Aumentada para fractais de poliedros" src="../ar/example.jpg" width="85%"></p>
<p align="center"><img src="../ar/fractalplatonic.gif" alt="Realidade Aumentada para fractais de poliedros" style="max-width: 92%; border-radius:5px;" loading="lazy"/></p>
<hr>
<h3 id="m3d" align="center">Modelos 3D</h3>
<iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxVDbVP3SyhZfOpfD4SdsoVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
 <a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
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
 <a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
<h4>3. Cubo fractal</h4>
<a href="../vr/FractalCube.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/16A.png" class="foto" alt="Cubo fractal"></a><img src="../ar/16.png" class="qr">
 <br><br>Aplicando-se o princípio de construção do tapete de Sierpinski nas 6 faces do cubo, obtemos um cubo fractal. Na primeira ordem de construção do fractal, construímos 8 novos sólidos em cada face do poliedro original, todas com ⅓ da medida da aresta do cubo. Neste exemplo, temos as representações do sólido nas ordens 0, 1, 2 e 3.
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
 <a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
 <h4>4. Icosaedro fractal</h4>
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
 <a href="../ra1.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
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
 <a href="../ra1.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
<h4>6. Fractal dragão de tetraedro</h4>
<a href="../vr/FractalDragon.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/78A.png" class="foto" alt="Fractal dragão de tetraedro"></a><img src="../ar/78.png" class="qr">
 <br><br>Aplicando-se o princípio de construção da curva do Dragão com um tetraedro regular, obtemos um fractal dragão de tetraedro. Na primeira ordem de construção do fractal, construímos dois novos tetraedros correspondentes a um poliedro original. Neste exemplo, temos as representações do sólido nas ordens de 0 até 10.
 <a href="../ra2.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
<h4>7. Árvore fractal</h4>
<a href="../vr/FractalTree.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/77A.png" class="foto" alt="Árvore fractal"></a><img src="../ar/77.png" class="qr">
 <br><br>Aplicando-se o princípio de repetições com troncos de cones, obtemos uma árvore fractal. Na primeira ordem de construção do fractal, construímos três novos troncos de cone conectados com uma face do tronco de cone original. Neste exemplo, temos as representações do sólido nas ordens de 0 até 7.
 <a href="../ra2.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
<h4>8. Árvore fractal com dodecaedros</h4>
<a href="../vr/FractalTree1.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/79A.png" class="foto" alt="Árvore fractal com dodecaedros"></a><img src="../ar/79.png" class="qr">
 <br><br>Aplicando-se o princípio de repetições com troncos de cones, obtemos uma árvore fractal. Neste exemplo, adicionamos dodecaedros como "frutos" ou "flores" da árvore. Na primeira ordem de construção do fractal, construímos três novos troncos de cone conectados com uma face do tronco de cone original. Neste exemplo, temos as representações do sólido nas ordens de 0 até 7.
 <a href="../ra2.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
<h4>9. Cruz de Menger - Jerusalém: Cubo v1</h4>
<a href="../vr/FractalCube2.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/236A.png" class="foto" alt="Cubo fractal - cruz de Menger - Jerusalém"></a><img src="../ar/236.png" class="qr">
 <br><br>Considere um cubo fractal. Podemos aumentar os tamanhos das arestas dos cubos dos cantos e diminuir os tamanhos das arestas dos cubos intermediários para revelar uma cruz. Nesta versão, temos 8 cubos homotéticos com proporção de &#8534; e 12 cubos homotéticos com proporção de &#8533;.
 <a href="../ra3.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
<h4>10. Cruz de Menger - Jerusalém: Cubo v2</h4>
<a href="../vr/FractalCube3.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/237A.png" class="foto" alt="Cubo fractal - cruz de Menger - Jerusalém"></a><img src="../ar/237.png" class="qr">
 <br><br>Considere um cubo fractal. Podemos aumentar os tamanhos das arestas dos cubos dos cantos e diminuir os tamanhos das arestas dos cubos intermediários para revelar uma cruz. Nesta versão, temos 8 cubos homotéticos com proporção de &#8730;2 - 1 e 12 cubos homotéticos com proporção de (&#8730;2 - 1)&#xb2;.
 <a href="../ra3.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <p class="topop"><a href="#p1" class="topo">voltar ao topo</a></p>
 <hr>
<h4>11. Floco de neve Mosely: Cubo</h4>
<a href="../vr/FractalCube4.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/238A.png" class="foto" alt="Cubo fractal - cruz de Menger - Jerusalém"></a><img src="../ar/238.png" class="qr">
 <br><br>O floco de neve Mosely é um tipo de fractal Sierpinski-Menger obtido em duas variantes pela operação usada na criação do floco de neve Sierpinski-Menger. Neste caso, removemos oito cubos dos cantos e o cubo central de cada iteração anterior.
 <a href="../ra4.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
 <h4>12. Árvore fractal com icosaedros</h4>
<a href="../vr/FractalTree2.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/239A.png" class="foto" alt="Árvore fractal com icosaedros"></a><img src="../ar/239.png" class="qr">
 <br><br>Aplicando-se o princípio de repetições com troncos de cones, obtemos uma árvore fractal. Neste exemplo, adicionamos icosaedros como "frutos" ou "flores" da árvore. Na primeira ordem de construção do fractal, construímos três novos troncos de cone conectados com uma face do tronco de cone original. Neste exemplo, temos as representações do sólido nas ordens de 0 até 7.
 <a href="../ra4.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>13. Fractal dragão de tetraedro (3 rotações)</h4>
<a href="../vr/FractalDragon0a.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/240A.png" class="foto" alt="Fractal dragão de tetraedro 3 rotações"></a><img src="../ar/240.png" class="qr">
 <br><br>Aplicando-se o princípio de construção da curva do Dragão com um tetraedro regular e 3 rotações, obtemos um fractal dragão de tetraedro. Na primeira ordem de construção do fractal, construímos três novos tetraedros correspondentes a um poliedro original. Neste exemplo, temos as representações do sólido nas ordens de 0 até 10.
 <a href="../ra5.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
<h4>14. Fractal dragão de cubo</h4>
<a href="../vr/FractalDragon1a.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/241A.png" class="foto" alt="Fractal dragão de cubo"></a><img src="../ar/241.png" class="qr">
 <br><br>Aplicando-se o princípio de construção da curva do Dragão com um cubo e 3 rotações, obtemos um fractal dragão de cubo. Na primeira ordem de construção do fractal, construímos três novos cubos correspondentes a um poliedro original. Neste exemplo, temos as representações do sólido nas ordens de 0 até 10.
 <a href="../ra5.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
<h4>15. Fractal dragão de octaedro</h4>
<a href="../vr/FractalDragon2a.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/242A.png" class="foto" alt="Fractal dragão de octaedro"></a><img src="../ar/242.png" class="qr">
 <br><br>Aplicando-se o princípio de construção da curva do Dragão com um octaedro regular e 3 rotações, obtemos um fractal dragão de octaedro. Na primeira ordem de construção do fractal, construímos três novos octaedros correspondentes a um poliedro original. Neste exemplo, temos as representações do sólido nas ordens de 0 até 10.
 <a href="../ra5.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
<h4>16. Fractal dragão de icosaedro</h4>
<a href="../vr/FractalDragon4a.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/244A.png" class="foto" alt="Fractal dragão de icosaedro"></a><img src="../ar/244.png" class="qr">
 <br><br>Aplicando-se o princípio de construção da curva do Dragão com um icosaedro regular e 3 rotações, obtemos um fractal dragão de icosaedro. Na primeira ordem de construção do fractal, construímos três novos icosaedros correspondentes a um poliedro original. Neste exemplo, temos as representações do sólido nas ordens de 0 até 10.
 <a href="../ra5.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
<h4>17. Fractal dragão de dodecaedro</h4>
<a href="../vr/FractalDragon3a.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/243A.png" class="foto" alt="Fractal dragão de dodecaedro"></a><img src="../ar/243.png" class="qr">
 <br><br>Aplicando-se o princípio de construção da curva do Dragão com um dodecaedro regular e 3 rotações, obtemos um fractal dragão de dodecaedro. Na primeira ordem de construção do fractal, construímos três novos dodecaedros correspondentes a um poliedro original. Neste exemplo, temos as representações do sólido nas ordens de 0 até 10.
 <a href="../ra5.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
 <hr>
 <p class="topop"><a href="#p1" class="topo">voltar ao topo</a></p>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Fractal polyhedra - Visualization of polyhedra with Augmented Reality and Virtual Reality</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra2/fractalplatonic/pt-br/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional</a>.

<h4>Como citar este trabalho:</h4> 
<p>Siqueira, P.H., "Platonic polyhedra fractals - Visualization of polyhedra with Augmented Reality and Virtual Reality". Disponível em: <https://paulohscwb.github.io/polyhedra2/fractalplatonic/pt-br/>, Outubro de 2023.</p>
<a target="_blank" href="https://doi.org/10.5281/zenodo.12572969"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.12572969.svg" alt="DOI"></a>
<br><br><b>Referências:</b>
<br>Weisstein, Eric W. "Fractal" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/Fractal.html" target="_blank">https://mathworld.wolfram.com/Fractal.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
