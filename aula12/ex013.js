var agora=new Date()
var diaDaSemana=agora.getDay()

diaDaSemana= 6
switch (diaDaSemana) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('segunda-feira')
        break;
    case 2:
        console.log('terca-feira')
        break;
    case 3:
        console.log('Quarta-feira')
        break;
    case 4:
        console.log('Quinta-feira')
        break;
    case 5:
        console.log('Sexta')
        break; 
    case 6:
        console.log('Sabado')   
        break;
    default:
        console.log('[ERROR]:Invalid day');
        break;
}