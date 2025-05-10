window.onload=function(){
			
			}
function SwapColor(){
	var a = document.getElementById("AttackerColor");
	var b = document.getElementById("VictimColor");
	var c = a.value;
	a.value = b.value;
	b.value = c;
}
function WeaponChangeFunction(){
	var a = document.getElementById("Weapon");
	a.style.display = "";
	var b = document.getElementById("WeaponSvg");
	var c = document.getElementById("WeaponPng");
	if ( b.checked == true && c.checked == true){
		alert("Svg和Png只能二选一或不选");
		c.checked = false;
		return;}
	if ( b.checked == true)
		a.src = document.getElementById("WeaponChangeSvg").value.toString(); // Weapon
	if ( c.checked == true)
		a.src = document.getElementById("WeaponChangePng").value.toString(); // Weapon
	if ( b.checked == false && c.checked == false){
		a.style.display = "none";
	}
	var e = document.getElementById("Attacker");
	e.innerText = document.getElementById("AttackerName").value; // AttackerName
	var f = document.getElementById("Victim");
	f.innerText = document.getElementById("VictimName").value; // VictimName
	var h = document.getElementById("HeadShot");
	if (document.getElementById("HeadShotBool").checked==true) // HeadShot
		h.style.display = "";
	else h.style.display = "none";
	var h = document.getElementById("Revenge");
	if (document.getElementById("RevengeBool").checked==true) // Revenge
		h.style.display = "";
	else h.style.display = "none";
	var h = document.getElementById("Domination");
	if (document.getElementById("DominationBool").checked==true) // Domination
		h.style.display = "";
	else h.style.display = "none";
	var h = document.getElementById("AttackerBlind");
	if (document.getElementById("AttackerBlindBool").checked==true) // AttackerBlind
		h.style.display = "";
	else h.style.display = "none";
	var h = document.getElementById("NoScope");
	if (document.getElementById("NoScopeBool").checked==true) // NoScope
		h.style.display = "";
	else h.style.display = "none";
	var h = document.getElementById("ThroughSmoke");
	if (document.getElementById("ThroughSmokeBool").checked==true) // ThroughSmoke
		h.style.display = "";
	else h.style.display = "none";
	var h = document.getElementById("Suicide");
	if (document.getElementById("SuicideBool").checked==true) // Suicide
		h.style.display = "";
	else h.style.display = "none";
	var j = document.getElementById("Penetrate");	// Penetrate
	if (document.getElementById("PenetrateBool").checked==true) 
		j.style.display = "";
	else j.style.display = "none";
	var k = document.getElementById("Jumpkill");	// Jumpkill
	if (document.getElementById("JumpkillBool").checked==true) 
		k.style.display = "";
	else k.style.display = "none";
	var l = document.getElementById("kill360");	// 360°
	if (document.getElementById("kill360Bool").checked==true) 
		l.style.display = "";
	else l.style.display = "none";
	e.style.color = document.getElementById("AttackerColor").value;		//AttackerColor
	f.style.color = document.getElementById("VictimColor").value;	//VictimColor
	var m = document.getElementById("Fontfamily").value;	//Fontfamily
	e.style.fontFamily = m; 
	f.style.fontFamily = m;
	document.getElementById("Output").style.border = document.getElementById("Borderchange").value;
	document.getElementById("Output").style.backgroundColor = document.getElementById("ColorOpacity").value;
						
};
function Create(){
	var l = document.getElementById("OutputCanvas");
	if (l)
		l.parentNode.removeChild(l);
	html2canvas(document.getElementById('Output'), {
		backgroundColor:null
	}).then(function(t) {
		t.id="OutputCanvas";
		t.style.marginTop = "50px";
		var a = document.getElementById("img2");
		a.appendChild(t);
	});
};