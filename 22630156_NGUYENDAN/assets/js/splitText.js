function splitText( elm, offset){

	let html = '';
	let no = 0;
	
	// 取得した要素の中身、それぞれに対して処理できる
	elm.childNodes.forEach( function(elm) {

		//nodeType == 3 テキストノードの場合
		if (elm.nodeType == 3) {
			let text = elm.textContent;  //テキストの取得
			text.split('').forEach((letter, i) =>{
				no ++;
				if( letter !== ' ' ) {
					html += '<span style="transition-delay:'+((no - 1) * offset)+'s">' + letter + '</span>';
				}else{
					html += letter;
				}
			});
		}else{
			html += elm.outerHTML
		}
	});
	elm.innerHTML = html;
}