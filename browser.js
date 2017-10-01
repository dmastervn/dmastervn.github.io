var getbrowser1 = function(){
	var result1 = 'Not support browser';
    var x = navigator.userAgent;
	var chromecheck = x.indexOf("Chrome");
	var safaricheck = x.indexOf("Safari");
	var safaricheck2 = x.indexOf("Version");
	var firefoxcheck = x.indexOf("Firefox");
	var operacheck = x.indexOf("OPR");
	var oldoperacheck = x.indexOf("Opera");
	var iecheck = x.indexOf("Trident");
	var edgecheck = x.indexOf("Edge");
	if (chromecheck > -1 && safaricheck > -1){
		result1 = 'Google Chrome';
		var first = navigator.userAgent.search("Chrome");
		var last = navigator.userAgent.search("Safari");
		var vr = navigator.userAgent.substring(first+7,last);
	}
	if (firefoxcheck > -1){
		result1 = 'Mozilla Firefox';
		var first = navigator.userAgent.search("rv");
		var last = navigator.userAgent.search("Gecko");
		var vr = navigator.userAgent.substring(first+3,last-2);
	}
	if (safaricheck > -1 && safaricheck2 > -1){
		result1 = 'Safari';
		var first = navigator.userAgent.search("Version");
		var last = navigator.userAgent.search("Safari");
		var vr = navigator.userAgent.substring(first + 8,last-1);
	}
	if (operacheck > -1 && chromecheck > -1 && safaricheck > -1){
		result1 = 'Opera';
		var first = navigator.userAgent.search("OPR");
		var vr = navigator.userAgent.substring(first + 4);
	}
	if (iecheck > -1){
		result1 = 'Internet Explorer';
		var first = navigator.userAgent.search("rv");
		var last = navigator.userAgent.search("like");
		var vr = navigator.userAgent.substring(first+3,last-2);
	}
	if (edgecheck > -1 && chromecheck > -1 && safaricheck > -1){
		result1 = 'Edge';
		var first = navigator.userAgent.search("Edge");
		var vr = navigator.userAgent.substring(first + 5);
	}
	return {
        result1: result1,
        vr: vr
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
	document.getElementById("color").innerHTML = "<b>Screen Resolution: </b>" + screen.pixelDepth;
	document.getElementById("language").innerHTML = "<b>Browser's Language: </b>" + navigator.language;
}
