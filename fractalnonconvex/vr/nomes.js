function Conic1() {
	var sceneEl = document.querySelector('a-scene')
	var ent = document.getElementById("cena")
	h = 8;
	r = 4.1;
	ang = 0;
	mx = 75;
	n = 4;
	ac = 2*n*Math.PI / mx;
	
	for (i = 0; i <= mx; i++) {
		var box = document.createElement("a-entity")
		box.setAttribute("visible", `false`)
		box.setAttribute("mixin", `fcb`)
		box.setAttribute("class", `nivel2t`)
		box.setAttribute("scale", `${rd} ${rd} ${rd}`)
		cx = r * ang * Math.cos(ang)/(ac * mx);
		cz = r * ang * Math.sin(ang)/(ac * mx);
		cy = -h * (i / mx) + 7.5
		cxP = r * (ang+ac) * Math.cos(ang+ac)/(ac * mx);
		czP = r * (ang+ac) * Math.sin(ang+ac)/(ac * mx);
		if (Math.abs(cxP - cx) > 0.23 || Math.abs(czP - cz) > 0.23) {
			box.setAttribute("position", `${cx} ${cy} ${cz}`)
		}
		if (cxP >= 0 && czP >= 0) {
			angz = Math.abs(Math.atan((cxP - cx)/(czP - cz))*180/Math.PI)
			angx = Math.abs(Math.atan((czP - cz)/(cxP - cx))*180/Math.PI)
		} else if (cxP > 0 && czP < 0) {
			angz = -Math.abs(Math.atan((cxP - cx)/(czP - cz))*180/Math.PI)
			angx = Math.atan((czP - cz)/(cxP - cx))*180/Math.PI
		} else {
			angz = Math.atan((cxP - cx)/(czP - cz))*180/Math.PI
			angx = Math.atan((czP - cz)/Math.abs(cxP - cx))*180/Math.PI
		}
		box.setAttribute("rotation", `${angx} 0 ${angz}`)
		ang += ac
		rd *= 1.005;
		ent.appendChild(box)
	}
}


function abrir() {
  window.open(fl, '_self');
}

function sairVR() {
	const sceneEl = document.querySelector('a-scene');
	if (sceneEl.is('vr-mode')) {
		sceneEl.exitVR();
	}
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
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	} else if (p == 1) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	} else if (p == 2) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	} else if (p == 3) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','true');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	} else if (p == 4) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','true');
	  entityEl5.setAttribute('visible','false');
	} else {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','true');
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
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','false');
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
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','false');
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
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','false');
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
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','false');
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
	  for (let i = 0; i < entityEl5.length; i++) {
		entityEl5[i].setAttribute('visible','true');
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
