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

