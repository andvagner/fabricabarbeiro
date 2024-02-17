/** 
 * MOSTRAR SEÇÃO DOS MÓDULOS
**/
window.showSectionModulos = function(){
	// .ShowSectionModulos
	setTimeout(function(){
		$.ajax({
		url: '_includes/modulos.php',
			type: 'POST',
		})
		.done(function(retorno) {
			$(".ShowSectionModulos").html(retorno);

			// Call Functions
			btnScrollPreco();
		});
	}, 3000);
}


/** 
 * MOSTRAR SEÇÃO DOS MÓDULOS - V3
**/
window.showSectionModulos_V3 = function(url_checkout){
	
	// Vars
	var url_checkout = url_checkout;

	setTimeout(function(){
		$.ajax({
			url: '_includes/modulos_v3.php',
			type: 'POST',
			data: {
				url_checkout: url_checkout
			}
		})
		.done(function(retorno) {
			$(".ShowSectionModulos").html(retorno);

			// Call Functions
			// btnScrollPreco();
		});
	}, 7000);
}


/** 
 * MOSTRAR SEÇÃO PROVAS SOCIAIS
**/
window.showSectionProvasSociais_V3 = function(url_checkout){
	
	// Vars
	var url_checkout = url_checkout;

	setTimeout(function(){
		$.ajax({
		url: '_includes/provas-sociais_v3.php',
			type: 'POST',
			data: {
				url_checkout: url_checkout
			}
		})
		.done(function(retorno) {
			$(".section-depoimentos-certificados").html(retorno);

			// Call Functions
			// btnScrollPreco();


			$('.owl-carousel').owlCarousel({
			    loop: true,
			    margin: 30,
			    nav: true,
			    responsive:{
			        0:{
			            items: 1
			        },
			        600:{
			            items: 3
			        },
			        1000:{
			            items: 4
			        }
			    }
			});
		});
	}, 3000);

	// .ShowSectionModulos 2
	setTimeout(function(){
		$.ajax({
		url: '_includes/provas-sociais_v3.2.php',
			type: 'POST',
		})
		.done(function(retorno) {
			$(".section-depoimentos-certificados-2").html(retorno);

			// Call Functions
			btnScrollPreco();

		});
	}, 3000);
}

/** 
 * MOSTRAR SEÇÃO PROVAS SOCIAIS - 2 CERTIFICADOS
**/
window.showSectionProvasSociais_2C = function(url_checkout){

	// Vars
	var url_checkout = url_checkout;

	setTimeout(function(){
		$.ajax({
			url: '_includes/provas-sociais_2C.php',
			type: 'POST',
			data: {
				url_checkout: url_checkout
			}
		})
		.done(function(retorno) {
			$(".section-depoimentos-certificados").html(retorno);

			// Call Functions
			// btnScrollPreco();

			$('.owl-carousel').owlCarousel({
			    loop: true,
			    margin: 30,
			    nav: true,
			    responsive:{
			        0:{
			            items: 1
			        },
			        600:{
			            items: 3
			        },
			        1000:{
			            items: 4
			        }
			    }
			});
		});
	}, 3000);

	// .ShowSectionModulos 2
	setTimeout(function(){
		$.ajax({
		url: '_includes/provas-sociais_2C.2.php',
			type: 'POST',
		})
		.done(function(retorno) {
			$(".section-depoimentos-certificados-2").html(retorno);

			// Call Functions
			btnScrollPreco();

		});
	}, 3000);
}



/** 
 * MOSTRAR SEÇÃO DOS MÓDULOS - 3 CERTIFICADOS
**/
window.showSectionModulos_3C = function(){
	// .ShowSectionModulos
	setTimeout(function(){
		$.ajax({
		url: '_includes/modulos_3C.php',
			type: 'POST',
		})
		.done(function(retorno) {
			$(".ShowSectionModulos").html(retorno);

			// Call Functions
			btnScrollPreco();
		});
	}, 7000);
}



/** 
 * MOSTRAR SEÇÃO PROVAS SOCIAIS  - 3 CERTIFICADOS
**/
window.showSectionProvasSociais_3C = function(){
	// .ShowSectionModulos
	setTimeout(function(){
		$.ajax({
		url: '_includes/provas-sociais_3C.php',
			type: 'POST',
		})
		.done(function(retorno) {
			$(".section-depoimentos-3C").html(retorno);

			// Call Functions
			btnScrollPreco();


			$('.owl-carousel').owlCarousel({
			    loop: true,
			    margin: 30,
			    nav: true,
			    responsive:{
			        0:{
			            items: 1
			        },
			        600:{
			            items: 3
			        },
			        1000:{
			            items: 4
			        }
			    }
			});
		});
	}, 3000);
}



/** 
 * ATIVAR DELAY NA PÁGINA DE VENDAS
**/	
window.ativarDelay_PV_VSL = function(time = 300000){
	// Vars
	var time = time;

	// Verificar Cookie "VisitedPV79Whatsapp"
	if( $.cookie('viewVSLCompleted') != "" && $.cookie('viewVSLCompleted') == "true" ){
		$(".pv-new.PV-VSL-DELAY .PV-VSL-DELAY-content, .pv-new.PV-VSL-DELAY .btn-open-aviso-desconto").fadeIn();
	}else{
		setTimeout(function(){
			$(".pv-new.PV-VSL-DELAY .PV-VSL-DELAY-content, .pv-new.PV-VSL-DELAY .btn-open-aviso-desconto").fadeIn();

			// Setar cookie
			$.cookie('viewVSLCompleted', "true", { expires: 7 });
		}, time);
	}
}






