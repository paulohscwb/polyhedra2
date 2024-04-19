function abrir() {
  window.open(fl, '_self');
}

function sairVR() {
	const sceneEl = document.querySelector('a-scene');
	if (sceneEl.is('vr-mode')) {
		sceneEl.exitVR();
	}
}

function fracCubo() {
	var sceneEl = document.querySelector('a-scene')
	var ent = document.getElementById("cena")
	while (ent.firstChild) {
        ent.removeChild(ent.firstChild)
    }
	sc = 6;
	cd = 1;
	fat = 3;
	coord0 = cd*fat	
	
	var modulo = (a, b, c) => {
		ent2.setAttribute("position", `${a} ${b} ${c}`)
		for ( i = 1; i <= 20; i++) {
			var box = document.createElement("a-box")
			box.setAttribute("mixin", `mtl2 p${i}d`)
			ent2.appendChild(box)
		}
	}
		
	var moduloM = (a, b, c) => {
		ent3.setAttribute("position", `${a} ${b} ${c}`)
		vv = ""
		var items = (a) => {
			for (i = 1; i <= 20; i++) { 
				var box = document.createElement("a-box")
				box.setAttribute("mixin", `mtl2 p${i}d`)
				ent2.appendChild(box)
			}
		}
		
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${-coord0} ${coord0} 0`)
			items(1);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${coord0} ${coord0} 0`)
			items(2);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${coord0} ${-coord0} 0`)
			items(3);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${-coord0} ${-coord0} 0`)
			items(4);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `0 ${coord0} ${coord0}`)
			items(5);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `0 ${coord0} ${-coord0}`)
			items(6);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `0 ${-coord0} ${coord0}`)
			items(7);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `0 ${-coord0} ${-coord0}`)
			items(8);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${coord0} ${coord0} ${coord0}`)
			items(9);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${coord0} ${coord0} ${-coord0}`)
			items(10);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${coord0} ${-coord0} ${coord0}`)
			items(11);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${coord0} ${-coord0} ${-coord0}`)
			items(12);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${-coord0} ${coord0} ${coord0}`)
			items(13);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${-coord0} ${coord0} ${-coord0}`)
			items(14);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${-coord0} ${-coord0} ${coord0}`)
			items(15);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${-coord0} ${-coord0} ${-coord0}`)
			items(16);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${coord0} 0 ${coord0}`)
			items(17);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${coord0} 0 ${-coord0}`)
			items(18);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${-coord0} 0 ${coord0}`)
			items(19);
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${-coord0} 0 ${-coord0}`)
			items(20);
		ent3.appendChild(ent2)
	}
	
		var ent1 = document.createElement("a-entity")
		ent1.setAttribute("scale", `${sc} ${sc} ${sc}`)
		ent1.setAttribute("id", "nivel0")
		box = document.createElement("a-box")
		box.setAttribute("mixin", "mtl1")
		ent1.appendChild(box)
	ent.appendChild(ent1)
		sc /= 3;
		var ent1 = document.createElement("a-entity")
		ent1.setAttribute("scale", `${sc} ${sc} ${sc}`)
		ent1.setAttribute("id", "nivel1")
		ent1.setAttribute("visible", "false")
		var ent2 = document.createElement("a-entity")
		modulo(0, 0, 0);
		ent1.appendChild(ent2)
	ent.appendChild(ent1)
		sc /= 3;
		var ent1 = document.createElement("a-entity")
		ent1.setAttribute("scale", `${sc} ${sc} ${sc}`)
		ent1.setAttribute("id", "nivel2")
		ent1.setAttribute("visible", "false")
		var ent3 = document.createElement("a-entity")
		moduloM(0, 0, 0);
		ent1.appendChild(ent3);
	ent.appendChild(ent1)
		sc /= 3;
		var ent1 = document.createElement("a-entity")
		ent1.setAttribute("scale", `${sc} ${sc} ${sc}`)
		ent1.setAttribute("id", "nivel3")
		ent1.setAttribute("visible", "false")
		coord1 = cd*fat*3
		var ent3 = document.createElement("a-entity")
		moduloM(-coord1, coord1, 0);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(coord1, coord1, 0);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(coord1, -coord1, 0);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(-coord1, -coord1, 0);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(0, coord1, coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(0, coord1, -coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(0, -coord1, coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(0, -coord1, -coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(coord1, coord1, coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(coord1, coord1, -coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(coord1, -coord1, coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(coord1, -coord1, -coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(-coord1, coord1, coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(-coord1, coord1, -coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(-coord1, -coord1, coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(-coord1, -coord1, -coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(coord1, 0, coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(coord1, 0, -coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(-coord1, 0, coord1);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(-coord1, 0, -coord1);
		ent1.appendChild(ent3);
	ent.appendChild(ent1)
}

function fracTetraedro() {
	var sceneEl = document.querySelector('a-scene')
	var ent = document.getElementById("cena")
	while (ent.firstChild) {
        ent.removeChild(ent.firstChild)
    }
	sc = 6;
	cd = 0.57735;
	fat = 2;
	
	var modulo = (a, b, c) => {
		ent2.setAttribute("position", `${a} ${b} ${c}`)
		for ( i = 1; i <= 4; i++) {
			var box = document.createElement("a-tetrahedron")
			box.setAttribute("mixin", `mtl2 p${i}`)
			ent2.appendChild(box)
		}
	}
	
	var moduloM = (a, b, c) => {
		ent3.setAttribute("position", `${a} ${b} ${c}`)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${-cd*fat} ${cd*fat} ${-cd*fat}`)
			for ( i = 1; i <= 4; i++) {
				var box = document.createElement("a-tetrahedron")
				box.setAttribute("mixin", `mtl2 p${i}`)
				ent2.appendChild(box)
			}
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${cd*fat} ${cd*fat} ${cd*fat}`)
			for ( i = 1; i <= 4; i++) {
				var box = document.createElement("a-tetrahedron")
				box.setAttribute("mixin", `mtl2 p${i}`)
				ent2.appendChild(box)
			}
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${cd*fat} ${-cd*fat} ${-cd*fat}`)
			for ( i = 1; i <= 4; i++) {
				var box = document.createElement("a-tetrahedron")
				box.setAttribute("mixin", `mtl2 p${i}`)
				ent2.appendChild(box)
			}
		ent3.appendChild(ent2)
		var ent2 = document.createElement("a-entity")
			ent2.setAttribute("position", `${-cd*fat} ${-cd*fat} ${cd*fat}`)
			for ( i = 1; i <= 4; i++) {
				var box = document.createElement("a-tetrahedron")
				box.setAttribute("mixin", `mtl2 p${i}`)
				ent2.appendChild(box)
			}
		ent3.appendChild(ent2)
	}
	
	if (nv.value == 0) {
		var ent1 = document.createElement("a-entity")
		ent1.setAttribute("scale", `${sc} ${sc} ${sc}`)
		var box = document.createElement("a-tetrahedron")
		box.setAttribute("mixin", "mtl1")
		ent1.appendChild(box)
	} else if (nv.value == 1) {
		sc /= 2;
		var ent1 = document.createElement("a-entity")
		ent1.setAttribute("scale", `${sc} ${sc} ${sc}`)
		var ent2 = document.createElement("a-entity")
		modulo(0, 0, 0);
		ent1.appendChild(ent2)
	} else if (nv.value == 2) {
		sc /= 4;
		var ent1 = document.createElement("a-entity")
		ent1.setAttribute("scale", `${sc} ${sc} ${sc}`)
		var ent3 = document.createElement("a-entity")
		moduloM(0, 0, 0);
		ent1.appendChild(ent3);
	} else if (nv.value == 3) {
		sc /= 8;
		var ent1 = document.createElement("a-entity")
		ent1.setAttribute("scale", `${sc} ${sc} ${sc}`)
		var ent3 = document.createElement("a-entity")
		moduloM(-cd*fat*2, cd*fat*2, -cd*fat*2);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(cd*fat*2, cd*fat*2, cd*fat*2);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(cd*fat*2, -cd*fat*2, -cd*fat*2);
		ent1.appendChild(ent3);
		var ent3 = document.createElement("a-entity")
		moduloM(-cd*fat*2, -cd*fat*2, cd*fat*2);
		ent1.appendChild(ent3);
	} else if (nv.value == 4) {
		sc /= 16;
		var ent1 = document.createElement("a-entity")
		ent1.setAttribute("scale", `${sc} ${sc} ${sc}`)
		var ent4 = document.createElement("a-entity")
		ent4.setAttribute("position", `${-cd*fat*4} ${cd*fat*4} ${-cd*fat*4}`)
			var ent3 = document.createElement("a-entity")
			moduloM(-cd*fat*2, cd*fat*2, -cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(cd*fat*2, cd*fat*2, cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(cd*fat*2, -cd*fat*2, -cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(-cd*fat*2, -cd*fat*2, cd*fat*2);
			ent4.appendChild(ent3);
		ent1.appendChild(ent4);
		var ent4 = document.createElement("a-entity")
		ent4.setAttribute("position", `${cd*fat*4} ${cd*fat*4} ${cd*fat*4}`)
			var ent3 = document.createElement("a-entity")
			moduloM(-cd*fat*2, cd*fat*2, -cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(cd*fat*2, cd*fat*2, cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(-cd*fat*2, -cd*fat*2, cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(cd*fat*2, -cd*fat*2, -cd*fat*2);
			ent4.appendChild(ent3);
		ent1.appendChild(ent4);
		var ent4 = document.createElement("a-entity")
		ent4.setAttribute("position", `${cd*fat*4} ${-cd*fat*4} ${-cd*fat*4}`)
			var ent3 = document.createElement("a-entity")
			moduloM(-cd*fat*2, cd*fat*2, -cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(cd*fat*2, cd*fat*2, cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(-cd*fat*2, -cd*fat*2, cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(cd*fat*2, -cd*fat*2, -cd*fat*2);
			ent4.appendChild(ent3);
		ent1.appendChild(ent4);
		var ent4 = document.createElement("a-entity")
		ent4.setAttribute("position", `${-cd*fat*4} ${-cd*fat*4} ${cd*fat*4}`)
			var ent3 = document.createElement("a-entity")
			moduloM(-cd*fat*2, cd*fat*2, -cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(cd*fat*2, cd*fat*2, cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(-cd*fat*2, -cd*fat*2, cd*fat*2);
			ent4.appendChild(ent3);
			var ent3 = document.createElement("a-entity")
			moduloM(cd*fat*2, -cd*fat*2, -cd*fat*2);
			ent4.appendChild(ent3);
		ent1.appendChild(ent4);
	}
	ent.appendChild(ent1)
}


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
	var entityEl5 = sceneEl.querySelector('#nivel5')
	var entityEl6 = sceneEl.querySelector('#nivel6')
	var entityEl7 = sceneEl.querySelector('#nivel7')
	var entityEl8 = sceneEl.querySelector('#nivel8')
	var entityEl9 = sceneEl.querySelector('#nivel9')
	var entityEl10 = sceneEl.querySelector('#nivel10')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	} else if (p == 1) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	} else if (p == 2) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	} else if (p == 3) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','true');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	} else if (p == 4) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','true');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	} else if (p == 5) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','true');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	} else if (p == 6) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','true');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	} else if (p == 7) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','true');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	} else if (p == 8) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','true');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','false');
	} else if (p == 9) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','true');
	  entityEl10.setAttribute('visible','false');
	} else {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	  entityEl6.setAttribute('visible','false');
	  entityEl7.setAttribute('visible','false');
	  entityEl8.setAttribute('visible','false');
	  entityEl9.setAttribute('visible','false');
	  entityEl10.setAttribute('visible','true');
	}
}

function mnivelRA() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl0 = sceneEl.querySelectorAll('.nivel0')
	var entityEl1 = sceneEl.querySelectorAll('.nivel1')
	var entityEl2 = sceneEl.querySelectorAll('.nivel2')
	var entityEl3 = sceneEl.querySelectorAll('.nivel3')
	var entityEl4 = sceneEl.querySelectorAll('.nivel4')
	var entityEl5 = sceneEl.querySelectorAll('.nivel5')
	var entityEl6 = sceneEl.querySelectorAll('.nivel6')
	var entityEl7 = sceneEl.querySelectorAll('.nivel7')
	var entityEl8 = sceneEl.querySelectorAll('.nivel8')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl7[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl8[i].setAttribute('visible','false');
	  }
	} else if (p == 1) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl7[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl8[i].setAttribute('visible','false');
	  }
	} else if (p == 2) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
	    entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl7[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl8[i].setAttribute('visible','false');
	  }
	} else if (p == 3) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl7[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl8[i].setAttribute('visible','false');
	  }
	} else if (p == 4) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl7[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl8[i].setAttribute('visible','false');
	  }
	} else if (p == 5) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl5[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl7[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl8[i].setAttribute('visible','false');
	  } 
	} else if (p == 6) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl6[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl7[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl8[i].setAttribute('visible','false');
	  }
	} else if (p == 7) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl7[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl8[i].setAttribute('visible','false');
	  }
	} else {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl7[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl8[i].setAttribute('visible','true');
	  }
	}
}

function mnivelTREE() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl0 = sceneEl.querySelectorAll('.nivel0t')
	var entityEl1 = sceneEl.querySelectorAll('.nivel1t')
	var entityEl2 = sceneEl.querySelectorAll('.nivel2t')
	var entityEl3 = sceneEl.querySelectorAll('.nivel3t')
	var entityEl4 = sceneEl.querySelectorAll('.nivel4t')
	var entityEl5 = sceneEl.querySelectorAll('.nivel5t')
	var entityEl6 = sceneEl.querySelectorAll('.nivel6t')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl6.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	} else if (p == 1) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl6.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	} else if (p == 2) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl6.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	} else if (p == 3) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl6.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	} else if (p == 4) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl6.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	} else if (p == 5) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl6.length; i++) {
		entityEl6[i].setAttribute('visible','false');
	  }
	} else {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl6.length; i++) {
		entityEl6[i].setAttribute('visible','true');
	  }
	}
}
