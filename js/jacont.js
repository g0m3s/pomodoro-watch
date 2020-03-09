var valor
var segundos = 60
var pausa = 0
var som = 1
const audio = document.querySelector('audio')

var btnVinte = document.querySelector('#vinte')
var btnVinteCinco = document.querySelector('#vinteCinco')
var btnTrinta = document.querySelector('#trinta')

function defineValor (minutos){

    switch(minutos){

        case 20:

            valor = 20
            setInterval(contaMin, 1000)
            btnVinteCinco.style.display = 'none'
            btnVinte.style.display = 'none'


        break

        case 25:

            valor = 25
            setInterval(contaMin, 1000)
            btnVinteCinco.style.display = 'none'
            btnTrinta.style.display = 'none'

        break

        case 30:

            valor = 30
            setInterval(contaMin, 1000)
            btnTrinta.style.display = 'none'
            btnVinte.style.display = 'none'

        break

        case 0:

            if(som == 1){

                document.querySelector('audio').src = '#'
                som = 0
                alert('Som desativado!')

            }
            else{

                document.querySelector('audio').src = 'alarm/alarm.mp3'
                som = 1
                alert('Som ativado!')
            }

        break

    }

}


function contaMin (  ){

    if( valor >= 0){

        document.getElementById("min").innerHTML = (valor-1)
        document.getElementById("seg").innerHTML = (segundos)
        
        if(segundos == 0){

            valor--
            segundos = 60

            if(valor == 0 && pausa == 0){

                audio.play()
                alert('Dê uma pausa de 5min')
                valor = 5
                pausa = 1

            } else if (valor == 0){

                audio.play()
                alert('Hora de voltar ao trabalho!')
                valor = -1
                pausa = 0

            }

        }else

            segundos--

    }

}