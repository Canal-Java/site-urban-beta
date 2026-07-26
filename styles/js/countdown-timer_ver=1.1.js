$(document).ready(function() {
    // Seleciona todos os elementos de entrada com a classe countdown-timer
    $('.countdown-timer').each(function() {
        var codAnuncio = $(this).attr('codigo_anuncio');

        var interval = setInterval(function() {
            var endTime = new Date($(this).attr('timer')).getTime(); // Obtém a data final em milissegundos

            var now = new Date().getTime(); // Obtém a data atual em milissegundos
            var timeLeft = endTime - now; // Calcula o tempo restante em milissegundos

            // Calcula os dias, horas, minutos e segundos restantes
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Recupera o elemento para exibir textos
            var element = '.countdown-timer-' + codAnuncio + ' > span';

            // Exibe o contador na página
            $(this).find(element).text(days + "d " + hours + "h " + minutes + "m " + seconds + "s");

            // Verifica se a contagem chegou a zero
            if (timeLeft < 0) {
                // \anuncio-venda
                var elementContentBtns = '.content-btns';
                var elementContentBtnsPlus = '.content-btns-plus';
                var elementInputDarLance = '.dar-lance > input';
                var elementBtnDarLance = '.dar-lance button';
                var elementBtnArrematar = '.arrematar'; 

                // \list-anuncio
                var elementADarLance = 'a[class*="dar-lance"]';

                if (seconds < -20) {
                    clearInterval(interval);

                    $(this).find(elementContentBtns).hide();
                    $(this).find(elementContentBtnsPlus).hide();
                    $(this).find(elementBtnDarLance).prop('disabled', true).text('Encerrado');
                }
                
                $(this).find(element).text("ENCERRADO");
                
                $(this).find(elementInputDarLance).prop('disabled', true);
                $(this).find(elementBtnDarLance).prop('disabled', true);
                $(this).find(elementBtnArrematar).prop('disabled', true);
                $(this).find(elementADarLance).html(
                    '<svg style="fill: #FFFFFF; width: 20px; margin-right: 7px; margin-bottom: 4px;" viewBox="0 0 640 512">'+
                        '<path d="M0,128.21V384H64a32,32,0,0,0,32-32V184L23.83,128.21ZM48,320.1a16,16,0,1,1-16,16A16,16,0,0,1,48,320.1Zm80,31.81h18.3l90.5,81.89a64,64,0,0,0,90-9.3l.2-.2,17.91,15.5a37.16,37.16,0,0,0,52.29-5.39l8.8-10.82L128,208.72Zm416-223.7V352.1a32,32,0,0,0,32,32h64V128.21ZM592,352.1a16,16,0,1,1,16-16A16,16,0,0,1,592,352.1ZM303.33,202.67l59.58-54.57a16,16,0,0,1,21.59,23.61L358.41,195.6,504,313.8a73.08,73.08,0,0,1,7.91,7.7V128L457.3,73.41A31.76,31.76,0,0,0,434.7,64H348.8a31.93,31.93,0,0,0-21.6,8.41l-88.07,80.64-25.64-19.81L289.09,64H205.3a32,32,0,0,0-22.6,9.41L162.36,93.72,45.47,3.38A16,16,0,0,0,23,6.19L3.38,31.46A16,16,0,0,0,6.19,53.91L594.53,508.63A16,16,0,0,0,617,505.82l19.65-25.27a16,16,0,0,0-2.82-22.45Z"/>'+
                    '</svg> Encerrado'
                );
            } else if (days == 0 && hours == 0 && minutes == 0  && seconds >= 0) {
                var element_countdown = '.countdown-timer-' + codAnuncio;
                $(this).find(element_countdown).removeClass('fade-in').addClass('color-changing-timeleft');
            }
            
            if (days < 0 && hours < 0 && minutes < 0  && seconds < 0) {
                var element_countdown = '.countdown-timer-' + codAnuncio;
                $(this).find(element_countdown).removeClass('color-changing-timeleft');
            }

        }.bind(this), 1000); // Define o contexto do this como o elemento atual e intervalo de 1 segundo
    });
});