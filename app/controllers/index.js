function doClick(e) {
    alert($.label.text);
}

$.index.open();

$.webView.addEventListener('load', function(e){
	if($.webView.canGoBack()){
		$.back.opacity = 1;
	}else{
		$.back.opacity = 0.3;
	}
	
	if($.webView.canGoForward()){
		$.fwd.opacity = 1;
	}else{
		$.fwd.opacity = 0.3;
	}
});

function goBack(){
	$.webView.goBack();
}

function goFwd(){
	$.webView.goForward();
}
