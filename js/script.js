// VARS GLOBAIS
var qtdeAtivarNotificacoesDeVenda = 0;




/*
* Função para pegar URL do site
* @param tipo = Definir qual tipo de URL(Default, URL completa ou Apenas URL do domínio)
* * @return String = Nova URL
*/
window.url_DIR = function(tipo){
	let url = window.location.href;
	if(url != ""){
		url = url.split("/pv/"); // Separar URL

		if(tipo == "dominio"){
			return url[0];
		}else if(tipo == "pv"){
			return url[0] + "/pv/";
		}else{
			return url;	// Default/Completa		
		}
	}else{
		return "";
	}
}



// Masks
window.maskTelefone = function(){		
	jQuery(".phone").focus(function(){
		jQuery(this).mask('(00) 0 0000-0000');
	});
	jQuery(".phone").blur(function(){
		let numero_digitado = jQuery(this).val();
		if(numero_digitado.length > 15){
			jQuery(this).mask('(00) 0 0000-0000');
		}else{
			jQuery(this).mask('(00) 0000-0000');
		}
	});

	jQuery(".phone2").focus(function(){
		jQuery(this).mask('0 0000-0000');
	});
	jQuery(".ddd").focus(function(){
		jQuery(this).mask('00');
	});
}
maskTelefone();



// Carousel
jQuery('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive:{
        0:{
            items: 1
        },
        767:{
            items: 3
        },
        1000:{
            items: 4
        }
    }
})




/*
* Função rolar página até o elemento
* @param element = Elemento para onde página deve rolar
* @param altura2 = Valor para somar/subitrair nova altura(Personalidado)
* @return Number = ScrollTop com nova altura 
*/
window.scrollTopElements = function(element, altura2){
	let altura = element.offset().top;
	jQuery("body, html").animate({
		scrollTop: altura + (altura2)
	}, 1100);
}





// FUNCTIONS
window.ativarNotificacoesVendas = function(){

	function getRandomInt(min, max) {
	  	min = Math.ceil(min);
	  	max = Math.floor(max);
	 	return Math.floor(Math.random() * (max - min)) + min;
	}

	// Vars
	let qtde = 1;	
	let time = getRandomInt(10000, 15000);

	function mostrarVendas(){
		setInterval(function(){
			// Mostrar Venda
			jQuery(".notificacoes-vendas ul li:nth-child("+qtde+")").animate({
				bottom: "0"
			});
			// Mover botão Whatsapp
			jQuery(".btn-icon-whatsapp-fixed").animate({
				bottom: "60px"
			});

			// Esconder Venda
			setTimeout(function(){
				jQuery(".notificacoes-vendas ul li:nth-child("+qtde+")").animate({
					bottom: "-200%"
				}, 1200);

				// Mover botão Whatsapp
				jQuery(".btn-icon-whatsapp-fixed").animate({
					bottom: "7px"
				});
				qtde++;				
			}, 5000);
		}, time);
	}


	// Mostrar Primeira notificação
	// setTimeout(function(){
	// 	// Mostrar Venda
	// 	jQuery(".notificacoes-vendas ul li:nth-child("+qtde+")").animate({
	// 		bottom: "0"
	// 	});

	// 	// Esconder Venda
	// 	setTimeout(function(){
	// 		jQuery(".notificacoes-vendas ul li:nth-child("+qtde+")").animate({
	// 			bottom: "-200%"
	// 		}, 1200);
	// 		qtde++;

	// 		// Call Functions
	// 		mostrarVendas();		
	// 	}, 7000);

	// }, 10000);

	// ATIVAR NOTIFICAÇÕES DE VENDAS AO PASSAR PELO CERTIFICADO
	let ativarNotificacoesDeVenda = jQuery(".bg-04").offset();

	jQuery(window).scroll(function() {
		// Vars
		let altura = jQuery(window).scrollTop();			

		if(altura >= ativarNotificacoesDeVenda.top && qtdeAtivarNotificacoesDeVenda == 0){			
			// Mostrar Venda
			jQuery(".notificacoes-vendas ul li:nth-child("+qtde+")").animate({
				bottom: "0"
			});
			// Mover botão Whatsapp
			jQuery(".btn-icon-whatsapp-fixed").animate({
				bottom: "60px"
			});

			// Esconder Venda
			setTimeout(function(){
				jQuery(".notificacoes-vendas ul li:nth-child("+qtde+")").animate({
					bottom: "-200%"
				}, 1200);
				// Mover botão Whatsapp
				jQuery(".btn-icon-whatsapp-fixed").animate({
					bottom: "7px"
				});
				qtde++;

				// Call Functions
				mostrarVendas();		
			}, 7000);
			
			qtdeAtivarNotificacoesDeVenda++;
		}
	});
}




// Rolar página até Box de Preços 
window.btnScrollPreco = function(){
	jQuery(".btnScrollPrice").click(function(e) {
		e.preventDefault();

		scrollTopElements(jQuery(".bg-10 .box-preco"), -30);
	});
}



// Rolar página até Box escolhido
window.btnScrollNextBox = function(){
	jQuery(".btnScrollNextBox").click(function(e) {
		e.preventDefault();

		scrollTopElements(jQuery( jQuery(this).attr("data-scroll-src") ), 0);
	});
}



/** 
 *Cronometro modal Desconto
 * var int minutos = 4 -> Default;
 * var int segundos = 59 -> Default;
**/
window.contadorRegressivo = function(horas = 23, minutos = 59, segundos = 59){
	// Vars
	let d = new Date();
	horas = parseInt(horas - d.getHours());
	minutos = parseInt(minutos - d.getMinutes());
	segundos = parseInt(segundos - d.getSeconds());

	setInterval(function(){
		if(horas >= 0){
			if(minutos >= 0){
				if(segundos >= 0){
					// HTML
					jQuery(".hours").html(horas.toString().padStart(2, '0'));
					jQuery(".minutes").html(minutos.toString().padStart(2, '0'));
					jQuery(".seconds").html(segundos.toString().padStart(2, '0'));

					if(horas == 0 || horas == 1){
						jQuery(".txt-hours").html("hora");
					}else{
						jQuery(".txt-hours").html("horas");
					}
					if(minutos == 0 || minutos == 1){
						jQuery(".txt-minutes").html("minuto");
					}else{
						jQuery(".txt-minutes").html("minutos");
					}
					if(segundos == 0 || segundos == 1){
						jQuery(".txt-seconds").html("segundo");
					}else{
						jQuery(".txt-seconds").html("segundos");
					}
				}else{
					// expirou (segundos)
					if(minutos == 0){
						horas--;
						minutos = 59;
					}else{
						minutos--;						
					}
					segundos = 59;

					// HTML
					jQuery(".hours").html(horas.toString().padStart(2, '0'));
					jQuery(".minutes").html(minutos.toString().padStart(2, '0'));
					jQuery(".seconds").html(segundos.toString().padStart(2, '0'));

					if(horas == 0 || horas == 1){
						jQuery(".txt-hours").html("hora");
					}else{
						jQuery(".txt-hours").html("horas");
					}
					if(minutos == 0 || minutos == 1){
						jQuery(".txt-minutes").html("minuto");
					}else{
						jQuery(".txt-minutes").html("minutos");
					}
					if(segundos == 0 || segundos == 1){
						jQuery(".txt-seconds").html("segundo");
					}else{
						jQuery(".txt-seconds").html("segundos");
					}

				}
			}
		}
		
		if(horas == 0 && minutos == 0 && segundos == 0){
			window.location.href = "?pv=uqn&cupom_expired=true&src=CupomExpiredByCronometro";
		}else{
			segundos--;
		}
	}, 1000);

	// Call Functions
	// setCookieModalDesconto(horas*minutos+1);
}


window.contadorRegressivoManual = function(horas = 23, minutos = 59, segundos = 59){
	// Vars	
	setInterval(function(){
		if(horas >= 0){
			if(minutos >= 0){
				if(segundos >= 0){
					// HTML
					jQuery(".hours").html(horas.toString().padStart(2, '0'));
					jQuery(".minutes").html(minutos.toString().padStart(2, '0'));
					jQuery(".seconds").html(segundos.toString().padStart(2, '0'));

					if(horas == 0 || horas == 1){
						jQuery(".txt-hours").html("hora");
					}else{
						jQuery(".txt-hours").html("horas");
					}
					if(minutos == 0 || minutos == 1){
						jQuery(".txt-minutes").html("minuto");
					}else{
						jQuery(".txt-minutes").html("minutos");
					}
					if(segundos == 0 || segundos == 1){
						jQuery(".txt-seconds").html("segundo");
					}else{
						jQuery(".txt-seconds").html("segundos");
					}
				}else{
					// expirou (segundos)
					if(minutos == 0){
						horas--;
						minutos = 59;
					}else{
						minutos--;						
					}
					segundos = 59;

					// HTML
					jQuery(".hours").html(horas.toString().padStart(2, '0'));
					jQuery(".minutes").html(minutos.toString().padStart(2, '0'));
					jQuery(".seconds").html(segundos.toString().padStart(2, '0'));

					if(horas == 0 || horas == 1){
						jQuery(".txt-hours").html("hora");
					}else{
						jQuery(".txt-hours").html("horas");
					}
					if(minutos == 0 || minutos == 1){
						jQuery(".txt-minutes").html("minuto");
					}else{
						jQuery(".txt-minutes").html("minutos");
					}
					if(segundos == 0 || segundos == 1){
						jQuery(".txt-seconds").html("segundo");
					}else{
						jQuery(".txt-seconds").html("segundos");
					}

				}
			}
		}
		
		if(horas == 0 && minutos == 0 && segundos == 0){
			// window.location.href = "?pv=uqn&cupom_expired=true&src=CupomExpiredByCronometro";
		}else{
			segundos--;
		}
	}, 1000);

	// Call Functions
	// setCookieModalDesconto(horas*minutos+1);
}




window.trackPixelFacebook = function(){
	// Vars
	let activePageView = jQuery(".box-certificado").offset(); // Elemento da página que vai ativar ViewContent no Pixel
	var activePageViewQtde = 0;

	// Ativar evento de ViewContent
	jQuery(window).scroll(function() {
		// Vars
		let altura = jQuery(window).scrollTop();
		// Ativar ViewContent
		if(altura >= activePageView.top && activePageViewQtde == 0){
			fbq('track', 'ViewContent');
			// ttq.track('ViewContent');
			activePageViewQtde++;

			console.log("Ativou Evento de ViewContent");		
		} 
	});

	// Ativar evento de BtnOpenWhatsapp
	// jQuery(".icon-whatsapp, .btn-lp-whatsapp").click(function() {
	// 	fbq('track', 'BtnOpenWhatsapp');
	// 	console.log("Ativou Evento de BtnOpenWhatsapp");
	// });
}




/** 
 * CONTADOR DE ÚLTIMAS VAGAS
**/
window.verifyCookieVagasRestantes = function(){
	// Verificar Cookie "VisitedPV79Whatsapp"
	if( $.cookie('enableVagasRestantes') != "" && $.cookie('enableVagasRestantes') == "true" ){
		// Vars
		let qtde = parseInt($.cookie('enableVagasRestantesQTDE'));
		let qtde_update = 0;

		if( qtde < 9 ){ // 3

			// Atualizar Cookie
			$.cookie('enableVagasRestantesQTDE', qtde+1);
			qtde_update = qtde+1;

			// Vars
			let porcetagem = 19 + qtde_update;
			porcetagem = parseInt(porcetagem / 30 * 100);
			let vagas_restantes = 30 - (19 + qtde_update);


			jQuery(".puv-porcentagem-number").html(porcetagem + "%");
			jQuery(".puv-porcentagem-progress").css("width", porcetagem + "%");
			jQuery(".puv-vagas-restantes").html(vagas_restantes + " VAGAS RESTANTES");


		}else{
			jQuery(".progress-ultivas-vagas").hide();
		}

	}else{

		// Setar o Cookie
		$.cookie('enableVagasRestantes', "true", { expires: 7 });
		$.cookie('enableVagasRestantesQTDE', 1, { expires: 7 });

		jQuery(".puv-porcentagem-number").html("66%");
		jQuery(".puv-porcentagem-progress").css("width", "66%");
		jQuery(".puv-vagas-restantes").html("10 VAGAS RESTANTES");


		// DIMINUIR UMA VAGA AO ROLAR PÁGINA
		let progressUltimasVagas = jQuery(".bg-04 .btn").offset();
		let i = 0;

		jQuery(window).scroll(function() {
			// Vars
			let altura = jQuery(window).scrollTop();
			let qtde = parseInt($.cookie('enableVagasRestantesQTDE'));
			let qtde_update = 0;
			
			// Mostrar/Esconder Cronômetro
			if(altura >= progressUltimasVagas.top && i == 0 && qtde <= 8){	
				
				// Atualizar Cookie
				$.cookie('enableVagasRestantesQTDE', qtde+1);
				qtde_update = qtde+1;

				// Vars
				let porcetagem = 19 + qtde_update;
				porcetagem = parseInt(porcetagem / 30 * 100);
				let vagas_restantes = 30 - (19 + qtde_update);

				jQuery(".puv-porcentagem-number").html(porcetagem + "%");
				jQuery(".puv-porcentagem-progress").css("width", porcetagem + "%");
				jQuery(".puv-vagas-restantes").html(vagas_restantes + " VAGAS RESTANTES");

				i++;
			}
		});
	}



	// DIMINUIR UMA VAGA AO ROLAR PÁGINA (GERAL)
	let progressUltimasVagas = jQuery(".section-depoimentos-certificados").offset();
	let i2 = 0;

	jQuery(window).scroll(function() {
		// Vars
		let altura = jQuery(window).scrollTop();
		let qtde = parseInt($.cookie('enableVagasRestantesQTDE'));
		let qtde_update = 0;
		
		// Mostrar/Esconder Cronômetro
		if(altura >= progressUltimasVagas.top && i2 == 0 && qtde <= 8){	
			
			// Atualizar Cookie
			$.cookie('enableVagasRestantesQTDE', qtde+1);
			qtde_update = qtde+1;

			// Vars
			let porcetagem = 19 + qtde_update;
			porcetagem = parseInt(porcetagem / 30 * 100);
			let vagas_restantes = 30 - (19 + qtde_update);

			jQuery(".puv-porcentagem-number").html(porcetagem + "%");
			jQuery(".puv-porcentagem-progress").css("width", porcetagem + "%");
			jQuery(".puv-vagas-restantes").html(vagas_restantes + " VAGAS RESTANTES");

			i2++;
		}
	});

}
verifyCookieVagasRestantes();



// Mostrar Botão do WhatsApp ao rolar página
window.showButtonWhatsappWindowScroll = function(element){
	let qtde_show_whatsapp = 0;

	jQuery(window).scroll(function() {
		// Vars
		let altura = jQuery(window).scrollTop();
		let altura_mostrar_whatsapp = element.offset();				

		// Mostrar Whatsapp
		if(altura >= altura_mostrar_whatsapp.top && qtde_show_whatsapp == 0){
			jQuery(".btn-icon-whatsapp-fixed").animate({
				right: "7px"
			});
			qtde_show_whatsapp++;
		} 
	});
}



function removerInfoYoutube(){
	jQuery(".video-vendas-capa").click(function(){
		jQuery(".video-vendas iframe").each(function(index, el) {
			let url_video = jQuery(this).attr("src");
			jQuery(this).attr("src", url_video + "&amp;autoplay=1");
			setTimeout(function(){
				jQuery(".video-vendas-capa").fadeOut();
			}, 700)
		});
	});
}
removerInfoYoutube();



/** 
 * SALVAR REF AFILIADO AO CLICAR NO BOTÃO DE WHATSAPP
**/	
window.enable_REF_AfiliadoButtonWhatsapp = function(ref, ref_ticket, nome_curso){
	jQuery(".btn-icon-whatsapp-fixed, .icon-whatsapp").click(function(event) {
		// Vars
		let url_atual = window.location.href;

		$.ajax({
			url: url_DIR("dominio") + "/app/Controllers/Save_REF_AfiliadoButtonWhatsapp.php",
			type: 'POST',
			data: {
				ref: ref,
				ref_ticket: ref_ticket,
				nome_curso: nome_curso,
				url_atual: url_atual
			}
		}).done(function(retorno) {
			// console.log(retorno);
		});
	});
}




/** 
 * ACELERADOR DE CHECKOUT
**/	
window.aceleradorCheckout = function(){
	setTimeout(function(){
		$("#aceleradorCheckout").html(` 
			<img src="https://hotmart.s3.amazonaws.com/product_pictures/20bfe643-59cf-450c-a0f6-2ca2d22b99a0/FBPRO.jpg">
			<img src="https://static-media.hotmart.com/bxGUayaIhMXifZ4yUI7MugFS9rg=/700x1080/filters:quality(100)/hotmart/checkout_custom/68aad311-58f3-489e-bed0-08c1746ff946/if0bp6lo.jpg">
			<img src="https://static-media.hotmart.com/KMjCOU-wx7A_GS_4j_6odPB7uRU=/902x1280/filters:quality(100)/hotmart/checkout_custom/a6692125-7db5-45ee-84a3-9089255f1622/o62913wpg.jpeg">
			<img src="https://static-media.hotmart.com/KClGr_nQz48guRD4lB56b4WODkI=/960x1280/filters:quality(100)/hotmart/checkout_custom/20d9b344-cf42-4059-b4a9-77c0038de4bc/vcmhy1sup.jpeg">
			<img src="https://static-media.hotmart.com/BLFmnqhz4K1w5tKGtvb9WKaG0Ao=/768x1024/filters:quality(100)/hotmart/checkout_custom/77e2696f-0c51-44cb-85e0-5aa92ec1b97b/13pr4tqaf.jpeg">
			<img src="https://static-media.hotmart.com/Hxn33ATABaeATffyQAWZWJHGwD0=/375x667/filters:quality(100)/hotmart/checkout_custom/e9608302-e81b-4c22-b331-9e152714c0d3/xbzaavtll.jpg">
			<img src="https://static-media.hotmart.com/CHrE0MXmH9zXvPAD-pAUcL2aDPM=/375x667/filters:quality(100)/hotmart/checkout_custom/4644694c-bb9e-42d9-8666-b9be75bfcd7b/3dxv9jd6l.jpg">
			<img src="https://static-media.hotmart.com/c1GLyebhWnORjIYm6r1r1MKSlZA=/375x667/filters:quality(100)/hotmart/checkout_custom/38e0f72a-bc7c-49c3-9a3c-02859a648111/w4xo81jtd.jpg">
			<img src="https://static-media.hotmart.com/wofgJ9PEcb5J0M-ef69HYeSrbmM=/375x667/filters:quality(100)/hotmart/checkout_custom/9777264f-06c1-4cfc-8c69-cd620c1c3933/jho69k3v8.jpg">
			<img src="https://static-media.hotmart.com/1XJsDsNJNidDERi-0iaE3I30vAM=/375x667/filters:quality(100)/hotmart/checkout_custom/6e7c1518-faff-412a-82d3-f3e061ebf34b/wf7cqhaqk.jpg">
		`);
	}, 12000);
}











