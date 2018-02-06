var pont = 0;
var point = 0;
var time = 80;
var count = 0;
var interval = null;
var audioEl = null;
var top1 = null;
var left1 = null;
var randomnumber = 0;
var ind = 0;
var ind2 = 0;
var material = 0;

var mira = "img/mira1.png";
var preload_mira = new Image();
preload_mira.src = mira;

var array_material = Array( "img/vidro.png", "img/metal.png", "img/papel.png", "img/plastico.png", "img/organico.png");

var array_vidro = Array( "img/vidro1.png", "img/vidro2.png", "img/vidro3.png", "img/vidro4.png", "img/vidro5.png", "img/vidro6.png", "img/vidro7.png", "img/vidro8.png", "img/metal1.png", "img/papel1.png", "img/plastico1.png", "img/organico1.png" );

var array_metal = Array( "img/metal1.png", "img/metal2.png", "img/metal3.png", "img/metal4.png", "img/metal5.png", "img/metal6.png", "img/metal7.png", "img/metal8.png", "img/vidro2.png", "img/papel2.png", "img/plastico2.png", "img/organico2.png" );

var array_papel = Array( "img/papel1.png", "img/papel2.png", "img/papel3.png", "img/papel4.png", "img/papel5.png", "img/papel6.png", "img/papel7.png", "img/papel8.png", "img/vidro3.png", "img/metal3.png", "img/plastico3.png", "img/organico3.png" );

var array_plastico = Array( "img/plastico1.png", "img/plastico2.png", "img/plastico3.png", "img/plastico4.png", "img/plastico5.png", "img/plastico6.png", "img/plastico7.png", "img/plastico8.png", "img/vidro4.png", "img/metal4.png", "img/papel4.png", "img/organico4.png" );

var array_organico = Array( "img/organico1.png", "img/organico2.png", "img/organico3.png", "img/organico4.png", "img/organico5.png", "img/organico6.png", "img/organico7.png", "img/organico8.png", "img/vidro5.png", "img/metal5.png", "img/papel5.png", "img/plastico5.png" );

var preload_material = new Array();

var preload_vidro = new Array();
var preload_metal = new Array();
var preload_papel = new Array();
var preload_plastico = new Array();
var preload_organico = new Array();


$(document).ready(function(){

	var alturaTela = $(document).height();
	var larguraTela = $(document).width();

	//colocando o fundo preto
	$('#mascara').css({'width':larguraTela,'height':alturaTela});
	$('#mascara').fadeIn(1000);
	$('#mascara').fadeTo("slow",0.8);

	var left = ($(window).width() /2) - ( $("#carregando").width() / 2 );
	var top = ($(window).height() / 2) - ( $("#carregando").height() / 2 );

	$("#carregando").css({'top':top,'left':left});

	for (i = 0; i < 5; i++) {
		preload_material[i] = new Image();
		preload_material[i].src = array_material[i];
	}

	for (i = 0; i < 12; i++) {
		preload_vidro[i] = new Image();
		preload_metal[i] = new Image();
		preload_papel[i] = new Image();
		preload_plastico[i] = new Image();
		preload_organico[i] = new Image();

		preload_vidro[i].src = array_vidro[i];
		preload_metal[i].src = array_metal[i];
		preload_papel[i].src = array_papel[i];
		preload_plastico[i].src = array_plastico[i];
		preload_organico[i].src = array_organico[i];
	}


	$("#dialog").dialog({
		autoOpen: false,
		buttons: [ { text: "Ok", click: function() { $( this ).dialog( "close" ); } } ],
		draggable: false,
		height: "auto",
		show: "slow",
		minWidth: 400,
		modal: true,
		open: function(event, ui) {
        	$(this).parents(".ui-dialog:first").find(".ui-dialog-titlebar-close").remove();
    	}
	});

	$("#instrucoes").click(function(){
			$("#dialog").dialog("open");
	});

	$("#begin").click(function() {						//Ao clicar em iniciar, inicia a contagem do tempo e a mostrar os alvos.
		showMaterial();
		$(this).attr("disabled", "disabled");
		interval = self.setInterval(showImg, 1000);
	});

	$("#pause").click(function() {						//Pausa o jogo. Deleta os alvos existentes.
		$("#msg").text("");
		$("#begin").removeAttr("disabled");
		deleteImg();
		interval = clearInterval(interval);
	});

	$("#end").click(function() {						//Finaliza o jogo. Vari�veis atualizadas para estado inicial.
		$("#inst").show("normal");
		$("#begin").removeAttr("disabled");
		stopGame();
	});

	$("#game").mouseover(function() {					//Muda o cursor para uma 'mira' quando o cursor est� na tela do jogo.
		$(this).css("cursor","url("+preload_mira.src+"), auto");
	});

    $("#hideaudio").html("<audio id='audioTag' controls><source src='audio/colt45.wav'></audio>");		//Carrega o audio do tiro
	audioEl = document.getElementById("audioTag");
    audioEl.load();

	setTimeout(function () {
		$("#mascara").hide();
	}, 3000);


});

function stopGame(){	//Finaliza o jogo e atualiza as vari�veis para o estado inicial.
	deleteImg();
	interval = clearInterval(interval);
	pont = 0;
	time = 80;
	count = 0;
	$("#pont").text("Pontuação: " + pont);
	$("#time").text("Tempo: " + time);
	$("#material").text("");
	$("#msg").text("");
	if($("#mat")) {  $("#mat").remove(); }
}

function updateTime() {	//Atualiza a contagem do tempo a cada segundo.
	time -= 1;
	if(time < 0)	//Se for menor que zero, jogou acaba e vari�veis s�o atualizadas para o estado inicial
	{
		deleteImg();
		interval = clearInterval(interval);

		if($("#mat")) { $("#mat").remove(); }
		$("#material").text("");
		$("#msg").text("");
		$("#begin").removeAttr("disabled");

		$("#pont").text("Pontuação: 0");
		$("#time").text("Tempo: 80");

		if(pont > 50)
			alert("Parabéns! Você é um amigo da natureza!\nSua pontuação foi: " + pont);
		else if((pont > 0) && (pont < 50))
			alert("Você pode fazer melhor!\nTente novamente!\nSua pontuação foi: " + pont);
		else
			alert("Você precisa melhorar sua Educação Ambiental!\nSua pontuação foi: " + pont);
		pont = 0;
		time = 80;
		count = 0;
		return;
	}
	$("#time").text("Tempo: " + time);
}

function showImg() {
	updateTime();	//A cada segundo, atualiza o tempo do jogo.
	count += 1;
	if(count%3 == 0) { showGoal(); } 		//A cada segundo par, atualiza os alvos
	if(count == 10) { showMaterial(); }		//A cada 10 segundos, mude o tipo de material
}

function showMaterial() {
	ind = getRandomInt(0,4);

	if($("#mat")) { $("#mat").remove(); }

	$("#material").append("<img id='mat' /> ");
	$("#mat").attr("src", preload_material[ind].src);
	material = ind+1;
	count = 0;
}

function showGoal(){

	if($("#goal")) { $("#goal").remove(); }

	ind2 = getRandomInt(0,11);	//Escolha aleatoria do alvo.

	$("#game").append("<img id='goal' />");

	switch(material){
		case 1: $("#goal").attr("src", preload_vidro[ind2].src);    break;
		case 2: $("#goal").attr("src", preload_metal[ind2].src);    break;
		case 3: $("#goal").attr("src", preload_papel[ind2].src);    break;
		case 4: $("#goal").attr("src", preload_plastico[ind2].src); break;
		case 5: $("#goal").attr("src", preload_organico[ind2].src); break;
	}

	//Escolha aleatoria da posi��o do alvo.
	top1 = rand($("#goal").position().top + $("#game").position().top + 15, $("#game").height() - $("#goal").height() - 15);
	left1 = rand($("#goal").position().left + $("#game").position().left + 15, $("#game").width() - $("#goal").width() - 15);


	$("#goal").css({ top: top1, left: left1}).click(function() {
		audioEl.play();		//Toca o audio quando acerta o alvo
		verifyPoint();		//Verifica como ser� a pontua��o
		pont += point;		//Incrementa/Decrementa a pontua��o
		if(point > 0){
			$("#msg").attr("class", "text-success");
			$("#msg").text("Parabéns! Você plantou uma árvore!");
		} else{
			$("#msg").attr("class", "text-error");
			$("#msg").text("Que pena! Você desmatou uma árvore!");
		}

		$("#pont").text("Pontuação: " + pont);	//Atualiza a pontua��o
		$(this).remove();
	});

	setTimeout(function() { //apaga mensagem de acerto/erro ap�s 2seg
	  $("#msg").text("");
	}, 2500 );

	setTimeout(deleteImg, 2500);	//Se o alvo n�o for clicado, desaparece em 1,5seg.
}

function verifyPoint()	//Verifica a pontua��o de acordo com o material e o alvo acertado.
{
	var text = $("#goal").attr("src"); //.valueOf();
	text = text + ""; //Convers�o para String (gambiarra).

	if((text.search("vidro") > 0) && material == 1)
		point = 20;
	else if((text.search("metal") > 0) && material == 2)
		point = 20;
	else if((text.search("papel") > 0) && material == 3)
		point = 20;
	else if((text.search("plastico") > 0) && material == 4)
		point = 20;
	else if((text.search("organico") > 0) && material == 5)
		point = 20;
	else
		point = -10;
}

function deleteImg(){	//Deleta o alvo existente
	$("#goal").remove();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rand(min,max) {	//Gera n�meros aleat�rios em intervalos definidos.
	return Math.random() * (max - min) + min;
}
