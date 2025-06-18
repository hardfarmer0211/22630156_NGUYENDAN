let qno = 0;	//質問番号
let score = 0;	//得点

document.querySelectorAll('button').forEach( function(elm, i){

	elm.addEventListener('click', function(evt){

		// 次のターゲット(data-next属性)の取得
		let target = evt.currentTarget;
		let next = target.dataset.next;

		if( next == "#start"){
			// 結果からスタート画面に戻る時(リセット)
			score = 0;
			qno = 0;

		}else if( next == "#result" ){
			// 結果
			let msg;
			score += Number( target.dataset.score );

			if( score >= 40){
				msg = "あなたは、犬について天才です。";
			}else if( score <= 30 && score > 20  ){
				msg = "あなたは、犬のことよくしってますね。";
			}else if( score <= 20 && score >= 1 ){
				msg = "あなたは、あまり犬のこと知ってないです。";
			}
			else{
				msg = "あなたは、犬について全然わからないです。";
			}

			document.querySelector('.result__msg p').innerHTML = msg;
			splitText( document.querySelector('.result__msg p'), 0.1 );
		
		}else{
			// 問題
			qno = qno + 1; // qno += 1;
			score += Number( target.dataset.score );

			// document.querySelector(next).querySelector('.quiz__no').innerHTML = 'Question-' + qno;
		}

		// 現状の画面から画面制御用クラス削除
		target.closest('.stage').classList.remove("active");

		//次の画面に画面制御用クラス付与
		document.querySelector(next).classList.add("active");
		//そこから500ms秒後にテキスト制御用クラス削除/付与
		setTimeout(function(){
			target.closest('.stage').classList.remove("active2");
			document.querySelector(next).classList.add("active2");
		}, 500);
		// Add this line inside the click event handler
		document.querySelectorAll('.score-display').forEach(display => {
			display.textContent = score;
		});
	});
});

//テキスト分離
document.querySelectorAll('.scText').forEach( function(elm, i){
	splitText(elm, 0.1);
});

let swiper = new Swiper('.swiper', {
    loop: true,                         /* false */
    speed: 600,                         /* 300 */
    grabCursor: true,                   /* false */

    autoplay: {
        delay: 1000,                    /* 3000 */
        disableOnInteraction: true,     /* true */
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// ScrollType - 02
let observer = new IntersectionObserver(intersect, {
	// オプション設定
	rootMargin: '0px 0px -10% 0px' //ブラウザ下端から10%入ったところで発火
	//threshold: [0, 0.5, 1.0]
});

function intersect(entries) {
	entries.forEach(entry => {
		if (!entry.isIntersecting){
			// return;
			entry.target.classList.remove('active');
		}else{
			// 交差した時の処理
			entry.target.classList.add('active');
			// observer.unobserve(entry.target);
		}
	});
}

document.querySelectorAll(".scItem2").forEach(elm => {

    splitText(elm, 0.1);

});

document.querySelectorAll(".btn-1, .btn-2, .btn-3, .btn-4").forEach(elm =>{
    observer.observe(elm);
})
