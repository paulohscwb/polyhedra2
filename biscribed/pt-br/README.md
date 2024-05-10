<link rel="stylesheet" href="../../scripts/style.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="../vr/salas/imagens/icone.png">
<h2>Visualização de poliedros com Realidade Aumentada (RA) e Realidade Virtual (RV) em A-frame</h2>
<b>autor:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
<br><b>contato:</b> <a href="#"> paulohscwb@gmail.com </a>
<br><a href="https://paulohscwb.github.io/polyhedra2/chamfered/">english version</a>
<form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected>Mais poliedros:</option>
		<option value="../../ArchimedeanCatalanHulls/pt-br/">Cascos convexos de Arquimedes e Catalan</option>
		<option value="../../fractalplatonic/pt-br/">Fractais dos poliedros de Platão</option>
		<option value="../../fractalnonconvex/pt-br/">Fractais dos poliedros não convexos</option>
		<option value="../../fractalarchimedean/pt-br/">Fractais dos poliedros de Arquimedes</option>
		<option value="../../chamfered/pt-br/">Poliedros chanfrados</option>
		<option value="../../propellor/pt-br/">Poliedros de hélice</option>
		<option value="../../diamonds/pt-br/">Poliedros de diamante</option>
		<option disabled value="../../biscribed/pt-br/">Poliedros biscritos</option>
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p1"></p>
  <h2 align="center"><img src="../vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Poliedros biscritos</h2>
  Definimos um poliedro biscrito como qualquer poliedro convexo que possui esferas concêntricas circunscritas e inscritas, onde o centro da esfera também é o centróide dos vértices e o centróide dos pontos de tangência das faces.
 <p align="center"><a href="#ra">Realidade Aumentada</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#m3d">Modelos 3D</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../../pt-br/">Página Inicial</a></p>
<hr>
 <h3 align="center">Sala imersiva</h3>
  <div class="embed-container"><iframe width="100%" src="../sala.htm" title="Sala Imersiva dos Poliedros biscritos" frameborder="0" loading="lazy"></iframe></div>
  <p align="center"><img align="middle" src="../../../cotadas/videos/biscribed.gif" style="max-width: 47%; border-radius:5px; margin-right:10px" loading="lazy" alt="Sala Imersiva de RV para os Poliedros biscritos"/><a href="../sala.htm" target="_blank">&#x1f517; link da sala</a></p>
  <hr>
  <h3 id="ra" align="center">Realidade Aumentada</h3>
  Para visualizar os poliedros biscritos em RA, visite a página:
<p align="center"><a href="../ra.html" class="raAR" target="_blank">https://paulohscwb.github.io/polyhedra2/biscribed/ra.html</a></p> 
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima de cada marcador.
<p align="center"><img style="border-radius:7px;" alt="Realidade Aumentada para poliedros biscritos" src="../ar/example.jpg" width="85%"></p>
<p align="center"><img src="../ar/chamfered.gif" alt="Realidade Aumentada para poliedros biscritos" style="max-width: 92%; border-radius:5px;" loading="lazy"/></p>
<hr>
<h3 id="m3d" align="center">Modelos 3D</h3>
<!-- <iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxXlieaiv7p0PWdsNRWPbWRv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
<h4>1. Octaedro truncado biscrito</h4>
<a href="../vr/BiscribedTruncatedOctahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/77A.png" class="foto" alt="Octaedro Truncado Biscrito"></a><img src="../ar/77.png" class="qr">
 <br><br><br>Um octaedro truncado biscrito tem a forma do octaedro truncado, um dos poliedros Arquimedianos, mas não possui os hexágonos regulares. É o sólido dual do hexaedro tetrakis biscrito.
 <br><br><br><b>Faces:</b> 6 quadrados e 8 ditrígonos | <b>Arestas:</b> 36 | <b>Vértices:</b> 24. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">Mais sobre...</a>
<a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>2. Hexaedro tetrakis biscrito</h4>
<a href="../vr/BiscribedTetrakisHexahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/78A.png" class="foto" alt="Hexaedro tetrakis biscrito"></a><img src="../ar/78.png" class="qr">
 <br><br><br>Um hexaedro tetrakis biscrito tem a forma do hexaedro tetrakis, um dos poliedros de Catalan, mas as medidas das arestas são diferentes. É o sólido dual do octaedro truncado biscrito.
 <br><br><br><b>Faces:</b> 24 triângulos isósceles | <b>Arestas:</b> 36 | <b>Vértices:</b> 14. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">Mais sobre...</a>
<a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr> 
<h4>3. Cuboctaedro truncado biscrito</h4>
<a href="../vr/BiscribedTruncatedCuboctahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/79A.png" class="foto" alt="Cuboctaedro truncado biscrito"></a><img src="../ar/79.png" class="qr">
 <br><br><br>Um cuboctaedro truncado biscrito tem a forma do cuboctaedro truncado, um dos poliedros de Arquimedes, mas não possui faces regulares. É o sólido dual do dodecaedro disdyakis biscrito.
 <br><br><br><b>Faces:</b> 12 retângulos, 8 ditrígonos e 6 ditetrágonos | <b>Arestas:</b> 72 | <b>Vértices:</b> 48. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">Mais sobre...</a>
<a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>4. Dodecaedro disdiakis biscrito</h4>
<a href="../vr/BiscribedDisdyakisDodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/80A.png" class="foto" alt="Dodecaedro disdiakis biscrito"></a><img src="../ar/80.png" class="qr">
  <br><br><br>Um dodecaedro disdiakis biscrito tem a forma do dodecaedro disdiakis, um dos poliedros de Catalan, mas as medidas das arestas são diferentes. É o sólido dual do cuboctaedro truncado biscrito.
 <br><br><br><b>Faces:</b> 48 triângulos acutângulos | <b>Arestas:</b> 72 | <b>Vértices:</b> 26. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">Mais sobre...</a>
<a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>5. Icosaedro truncado biscrito</h4>
<a href="../vr/BiscribedTruncatedIcosahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/81A.png" class="foto" alt="Icosaedro truncado biscrito"></a><img src="../ar/81.png" class="qr">
  <br><br><br>Um icosaedro truncado biscrito tem a forma do icosaedro truncado, um dos poliedros de Arquimedes, mas não possui hexágonos regulares. É o sólido dual do dodecaedro pentakis biscrito.
 <br><br><br><b>Faces:</b> 12 pentágonos regulares e 20 ditrígonos | <b>Arestas:</b> 90 | <b>Vértices:</b> 60. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">Mais sobre...</a>
<a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>6. Dodecaedro pentakis biscrito</h4>
<a href="../vr/BiscribedPentakisDodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/82A.png" class="foto" alt="dodecaedro pentakis biscrito"></a><img src="../ar/82.png" class="qr">
 <br><br><br>Um dodecaedro pentakis biscrito tem a forma do dodecaedro pentakis, um dos poliedros de Catalan, mas as medidas das arestas são diferentes. É o sólido dual do icosaedro truncado biscrito.
 <br><br><br><b>Faces:</b> 60 triângulos isósceles | <b>Arestas:</b> 90 | <b>Vértices:</b> 32. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">Mais sobre...</a>
<a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>7. Icosidodecaedro truncado biscrito</h4>
<a href="../vr/BiscribedTruncatedIcosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/83A.png" class="foto" alt="Icosidodecaedro truncado biscrito"></a><img src="../ar/83.png" class="qr">
  <br><br><br>Um icosidodecaedro truncado biscrito tem a forma do icosidodecaedro truncado, um dos poliedros de Arquimedes, mas não possui faces regulares. É o sólido dual do triacontaedro disdiakis biscrito.
 <br><br><br><b>Faces:</b> 30 retângulos, 20 ditrígonos e 12 dipentágonos | <b>Arestas:</b> 180 | <b>Vértices:</b> 120. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">Mais sobre...</a>
<a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>8. Triacontaedro disdiakis biscrito</h4>
<a href="../vr/BiscribedDisdyakisTriacontahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/84A.png" class="foto" alt="triacontaedro disdiakis biscrito"></a><img src="../ar/84.png" class="qr">
 <br><br><br>Um triacontaedro disdiakis biscrito tem a forma do triacontaedro disdiakis, um dos poliedros de Catalan, mas as medidas das arestas são diferentes. É o sólido dual do icosidodecaedro truncado biscrito.
 <br><br><br><b>Faces:</b> 120 triângulos acutângulos | <b>Arestas:</b> 180 | <b>Vértices:</b> 62. <a href="http://dmccooey.com/polyhedra/BiscribedNonChiral.html" target="_blank">Mais sobre...</a>
<a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<p class="topop"><a href="#p1" class="topo">voltar ao topo</a></p>
<hr>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Chamfered polyhedra - Visualization of polyhedra with Augmented Reality and Virtual Reality</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra2/chamfered/pt-br/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional</a>.

<h4>Como citar este trabalho:</h4> 
<p>Siqueira, P.H., "Chamfered polyhedra - Visualization of polyhedra with Augmented Reality and Virtual Reality". Disponível em: <https://paulohscwb.github.io/polyhedra2/chamfered/pt-br/>, Novembro de 2023.</p>
<!--<a target="_blank" href="https://doi.org/10.5281/zenodo.8272770"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.8272770.svg" alt="DOI"></a>-->
<br><br><b>Referências:</b>
<br>Weisstein, Eric W. "Archimedean Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/ArchimedeanSolid.html" target="_blank">http://mathworld.wolfram.com/ArchimedeanSolid.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Archimedean Dual" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/ArchimedeanDual.html" target="_blank">https://mathworld.wolfram.com/ArchimedeanDual.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Archimedean_solid" target="_blank">https://en.wikipedia.org/wiki/Archimedean_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
