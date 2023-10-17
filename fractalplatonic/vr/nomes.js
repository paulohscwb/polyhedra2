function mfaces() {
	var x = document.getElementById("faces")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function marestas() {
	var x = document.getElementById("arestas")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#ar')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function mvertices() {
	var x = document.getElementById("vertices")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#esfera')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function mnivel() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl0 = sceneEl.querySelector('#nivel0')
	var entityEl1 = sceneEl.querySelector('#nivel1')
	var entityEl2 = sceneEl.querySelector('#nivel2')
	var entityEl3 = sceneEl.querySelector('#nivel3')
	var entityEl4 = sceneEl.querySelector('#nivel4')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 1) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 2) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 3) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','true');
	  entityEl4.setAttribute('visible','false');
	} else {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','true');
	}
}

function mnivelRA() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl0 = sceneEl.querySelectorAll('#nivel0')
	var entityEl1 = sceneEl.querySelectorAll('#nivel1')
	var entityEl2 = sceneEl.querySelectorAll('#nivel2')
	var entityEl3 = sceneEl.querySelectorAll('#nivel3')
	var entityEl4 = sceneEl.querySelectorAll('#nivel4')
	var entityEl0a = sceneEl.querySelectorAll('#nivel0a')
	var entityEl1a = sceneEl.querySelectorAll('#nivel1a')
	var entityEl2a = sceneEl.querySelectorAll('#nivel2a')
	var entityEl3a = sceneEl.querySelectorAll('#nivel3a')
	var entityEl4a = sceneEl.querySelectorAll('#nivel4a')
	var entityEl0b = sceneEl.querySelectorAll('#nivel0b')
	var entityEl1b = sceneEl.querySelectorAll('#nivel1b')
	var entityEl2b = sceneEl.querySelectorAll('#nivel2b')
	var entityEl3b = sceneEl.querySelectorAll('#nivel3b')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl0a.setAttribute('visible','true');
	  entityEl1a.setAttribute('visible','false');
	  entityEl2a.setAttribute('visible','false');
	  entityEl3a.setAttribute('visible','false');
	  entityEl4a.setAttribute('visible','false');
	  entityEl0b.setAttribute('visible','true');
	  entityEl1b.setAttribute('visible','false');
	  entityEl2b.setAttribute('visible','false');
	  entityEl3b.setAttribute('visible','false');
	} else if (p == 1) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl0a.setAttribute('visible','false');
	  entityEl1a.setAttribute('visible','true');
	  entityEl2a.setAttribute('visible','false');
	  entityEl3a.setAttribute('visible','false');
	  entityEl4a.setAttribute('visible','false');
	  entityEl0b.setAttribute('visible','false');
	  entityEl1b.setAttribute('visible','true');
	  entityEl2b.setAttribute('visible','false');
	  entityEl3b.setAttribute('visible','false');
	} else if (p == 2) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl0a.setAttribute('visible','false');
	  entityEl1a.setAttribute('visible','false');
	  entityEl2a.setAttribute('visible','true');
	  entityEl3a.setAttribute('visible','false');
	  entityEl4a.setAttribute('visible','false');
	  entityEl0b.setAttribute('visible','false');
	  entityEl1b.setAttribute('visible','false');
	  entityEl2b.setAttribute('visible','true');
	  entityEl3b.setAttribute('visible','false');
	} else if (p == 3) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','true');
	  entityEl4.setAttribute('visible','false');
	  entityEl0a.setAttribute('visible','false');
	  entityEl1a.setAttribute('visible','false');
	  entityEl2a.setAttribute('visible','false');
	  entityEl3a.setAttribute('visible','true');
	  entityEl4a.setAttribute('visible','false');
	  entityEl0b.setAttribute('visible','false');
	  entityEl1b.setAttribute('visible','false');
	  entityEl2b.setAttribute('visible','false');
	  entityEl3b.setAttribute('visible','true');
	} else {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','true');
	  entityEl0a.setAttribute('visible','false');
	  entityEl1a.setAttribute('visible','false');
	  entityEl2a.setAttribute('visible','false');
	  entityEl3a.setAttribute('visible','false');
	  entityEl4a.setAttribute('visible','true');
	  entityEl0b.setAttribute('visible','false');
	  entityEl1b.setAttribute('visible','false');
	  entityEl2b.setAttribute('visible','false');
	  entityEl3b.setAttribute('visible','false');
	}
}
