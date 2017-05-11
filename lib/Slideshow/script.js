var inter = 7000;
	var s = document.createElement('link'); s.rel = "stylesheet";
	s.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
	document.head.appendChild(s);

	document.querySelector('.slideshow').innerHTML += `
		<div style="height:60px;display:flex;justify-content:center;align-items:center">
			<i class="fa fa-arrow-left fa-2x left" aria-hidden="true" style="margin-right:20px"></i>
			<div class="player">
				<i class="fa fa-pause fa-2x pause" aria-hidden="true"></i>
				<i class="fa fa-play fa-2x play" aria-hidden="true" style="display:none"></i>
			</div>
			<i class="fa fa-arrow-right fa-2x right" aria-hidden="true" style="margin-left:20px"></i>
		</div>
	`;

	document.querySelector('.pause').addEventListener('click', function(){
		clearInterval(window.SlideBot);
		document.querySelector('.pause').style.display = "none";
		document.querySelector('.play').style.display = "block";
	});

	document.querySelector('.play').addEventListener('click', function(){
		document.querySelector('.pause').style.display = "block";
		document.querySelector('.play').style.display = "none";
		window.SlideBot = setInterval(() => {

		var childs = Array.from(document.querySelectorAll('.img-slide')),
			ativo = document.querySelector('.active'),
			proximo = childs.indexOf(ativo) + 1;

		if(proximo == childs.length) proximo = 0;

		ativo.className = ativo.className.replace(' active','');
		childs[proximo].className += ' active';

		}, inter);
	});

	document.querySelector('.left').addEventListener('click', function(){

		var childs = Array.from(document.querySelectorAll('.img-slide')),
			ativo = document.querySelector('.active'),
			proximo = childs.indexOf(ativo) - 1;

		if(0 > proximo) proximo = childs.length - 1;
		console.log(proximo);

		ativo.className = ativo.className.replace(' active','');
		childs[proximo].className += ' active';
		inter = 15000;
		setTimeout(() => {
			inter = 7000;
		}, 14000);

	});

	document.querySelector('.right').addEventListener('click', function(){
			
		var childs = Array.from(document.querySelectorAll('.img-slide')),
			ativo = document.querySelector('.active'),
			proximo = childs.indexOf(ativo) + 1;

		if(proximo == childs.length) proximo = 0;
		console.log(proximo);

		ativo.className = ativo.className.replace(' active','');
		childs[proximo].className += ' active';
		inter = 15000;
		setTimeout(() => {
			inter = 7000;
		}, 14000);

	});

	var slides = Array.from(document.querySelectorAll(".img-slide"));
	slides.forEach((v, i) => {

		if(i == 0) v.className += ' active';
		v.style.backgroundImage = 'url("'+v.getAttribute('image-src')+'")';

	});

	window.SlideBot = setInterval(() => {

		var childs = Array.from(document.querySelectorAll('.img-slide')),
			ativo = document.querySelector('.active'),
			proximo = childs.indexOf(ativo) + 1;
		console.log(childs);
		if(proximo == childs.length) proximo = 0;

		ativo.className = ativo.className.replace(' active','');
		childs[proximo].className += ' active';

	}, inter);
