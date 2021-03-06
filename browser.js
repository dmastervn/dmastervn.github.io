var getbrowser1 = function(){
	var result1 = 'Not support browser';
    var x = navigator.userAgent;
	if (x.indexOf("Chrome") > -1 && x.indexOf("Safari") > -1){
		result1 = 'Google Chrome';
		var first = navigator.userAgent.search("Chrome");
		var last = navigator.userAgent.search("Safari");
		var vr = navigator.userAgent.substring(first+7,last);
	}
	if (x.indexOf("Firefox") > -1){
		result1 = 'Mozilla Firefox';
		var first = navigator.userAgent.search("rv");
		var last = navigator.userAgent.search("Gecko");
		var vr = navigator.userAgent.substring(first+3,last-2);
	}
	if (x.indexOf("Safari") > -1 && x.indexOf("Version") > -1){
		result1 = 'Safari';
		var first = navigator.userAgent.search("Version");
		var last = navigator.userAgent.search("Safari");
		var vr = navigator.userAgent.substring(first + 8,last-1);
	}
	if (x.indexOf("OPR") > -1 && x.indexOf("Chrome") > -1 && x.indexOf("Safari") > -1){
		result1 = 'Opera';
		var first = navigator.userAgent.search("OPR");
		var vr = navigator.userAgent.substring(first + 4);
	}
	if (x.indexOf("Trident") > -1){
		result1 = 'Internet Explorer';
		var first = navigator.userAgent.search("rv");
		var last = navigator.userAgent.search("like");
		var vr = navigator.userAgent.substring(first+3,last-2);
	}
	if (x.indexOf("Edge") > -1 && x.indexOf("Chrome") > -1 && x.indexOf("Safari") > -1){
		result1 = 'Microsoft Edge';
		var first = navigator.userAgent.search("Edge");
		var vr = navigator.userAgent.substring(first + 5);
	}
	if (x.indexOf("OPR") > -1 && x.indexOf("Chrome") > -1 && x.indexOf("Safari") > -1 && x.indexOf("Nexus") > -1){
		result1 = 'Google Chrome';
		var first = navigator.userAgent.search("Chrome");
		var last = navigator.userAgent.search("Safari");
		var vr = navigator.userAgent.substring(first+7,last);
	}
	if (x.indexOf("Safari") > -1 && x.indexOf("CriOS") > -1){
		result1 = 'Google Chrome';
		var first = navigator.userAgent.search("CriOS");
		var last = navigator.userAgent.search("Safari");
		var vr = navigator.userAgent.substring(first+6,last);
	}
	if (x.indexOf("FxiOS") > -1){
		result1 = 'Mozilla Firefox';
		var first = navigator.userAgent.search("FxiOS");
		var last = navigator.userAgent.search("Safari");
		var vr = navigator.userAgent.substring(first+6,last);
	}
	return {
        result1: result1,
        vr: vr
    };
	
}

//Implemented font detection method from the paper "Cookieless Monster: Exploring the Ecosystem of Web-based Device Fingerprinting" by University of California, Santa Barbara and KU Leuven
function get_text_dimensions(font){
var textWidth;
var textHeight;
h = document.getElementsByTagName("BODY")[0];
d = document.createElement("DIV");
s = document.createElement("SPAN");
d.appendChild(s);
d.style.fontFamily = font;
s.style.fontFamily = font;
s.style.fontSize = "72px";
s.innerHTML = "font_detection";
h.appendChild(d);
textWidth = s.offsetWidth;
textHeight = s.offsetHeight;
h.removeChild(d);
return {
        textWidth: textWidth,
        textHeight: textHeight
    };
}


var getbrowser2 = function(){
	var result2 = 'Not Support This Browser';
	if (!!window.chrome && !!window.chrome.webstore){
		result2 = 'Google Chrome';
	}
	if (!!window.opr){
		result2 = 'Opera';
	}
	if(typeof InstallTrigger !== 'undefined'){
		result2 = 'Mozilla Firefox';
	}
	if (!(!!document.documentMode) && !!window.StyleMedia){
		result2 = 'Edge';
	}
	if(!!document.documentMode){
		result2 = 'Internet Explorer';
	}
	if(window.safari !== undefined){
		result2 = 'Safari';
	}

	return result2;	
}
 function getplugin(){
	 pluginlength = navigator.plugins.length;
	 document.getElementById("plugin").innerHTML = "<b>Number of installed plugins: </b>" + pluginlength;
	 return pluginlength;
 }
var getos = function(){
	var os = 'Unknown';
	var checkwin = navigator.userAgent.indexOf("Win");
	var checkmac = navigator.userAgent.indexOf("Mac");
	var checklinux = navigator.userAgent.indexOf("Linux");
	var checkandroid = navigator.userAgent.indexOf("Android");
	var checkios = navigator.userAgent.indexOf("like Mac");
	if (checkwin > -1){
		os = 'Microsoft Windows';
	}
	if (checkmac > -1){
		os = 'Apple Mac OS';
	}
	if(checklinux > -1){
		os = 'Linux';
	}
	if (checkandroid > -1){
		os = 'Google Android';
	}
	if(checkios > -1){
		os = 'Apple iOS';
	}

	return os;	
}
var cookieenable = function(){
	var rcv = 'No';
	var cv = navigator.cookieEnabled;
	if(cv){
		return 'Yes';
	}
}

function main(){
	var fm = "Not work (Font detection only work with <b>Google Chrome (61) & Opera (48) - Windows version</b>, and it only can detect 3 type of font: <b>Times New Roman, Arial and Calibri</b>)";
	var tw = get_text_dimensions().textWidth;
	var th = get_text_dimensions().textHeight;
	
	if(get_text_dimensions().textWidth ==416 && get_text_dimensions().textHeight == 80){
		fm ="Times New Roman";
	}
	if(get_text_dimensions().textWidth ==452 && get_text_dimensions().textHeight == 80){
		fm ="Arial";
	}
	if(get_text_dimensions().textWidth ==434 && get_text_dimensions().textHeight == 88){
		fm ="Calibri";
	}
	if(get_text_dimensions().textWidth ==416 && get_text_dimensions().textHeight == 83){
		fm ="Times";
	}
	
	var bn= getbrowser1().result1;
	var bn2= getbrowser2();
	var ver= getbrowser1().vr;
	var opers = getos();
	var cookie = cookieenable();
	var q1f = opers.charAt(0);
	var q2 = bn.charAt(0) + bn.charAt(1);
	var q2f = q2.toUpperCase();
	var q3f = ver.charAt(0) + ver.charAt(1);
	var q4f = cookie.charAt(0);
	var q5f = getplugin();
	var q6 = navigator.language;
	var q6s =q6.charAt(0);
	var q6f =q6s.toUpperCase();
	var q7 = screen.width.toString();
	var q7s = screen.height.toString()
	var q7f = q7.charAt(0) + q7s.charAt(0);
	
	document.getElementById("fontdetect").innerHTML = "<b>Font size: </b>" + tw + ' x ' + th;
	document.getElementById("fontf").innerHTML = "<b>Font: </b>" + fm;
	
	document.getElementById("identifier").innerHTML = "<b> Identifier: </b>" + q1f + q2f + q3f + q4f + q5f + q6f + q7f;
	document.getElementById("browser").innerHTML = "<b>Browser's name by first method: </b>" + bn;
	document.getElementById("version").innerHTML = "<b>Browser's Version: </b>" + ver;
	document.getElementById("browser2").innerHTML = "<b>Browser's name by second method: </b>" + bn2;
	getplugin();
	var printresult='<b>List of Plugins: </b>' + '<br>';
	for (i = 0; i < navigator.plugins.length; i++) {
		plugin = navigator.plugins[i];
		printresult += plugin.name + '<br>';
	}
	document.getElementById("name").innerHTML = printresult ;
	document.getElementById("os").innerHTML = "<b>Operating System: </b>" + opers;
	document.getElementById("cookie").innerHTML = "<b>Cookies enable: </b>" + cookie;
	document.getElementById("screen").innerHTML = "<b>Screen Resolution: </b>" + screen.width + 'x' + screen.height;
	document.getElementById("color").innerHTML = "<b>Color Resolution: </b>" + screen.pixelDepth;
	document.getElementById("language").innerHTML = "<b>Browser's Language: </b>" + navigator.language;
}
