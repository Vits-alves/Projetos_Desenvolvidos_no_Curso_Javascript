function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if ( fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO[] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero=' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')//criando um id

        if (fsex[0].checked) {
            genero = 'Homem'

            if(idade > 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criancamasc.jpg')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'jovemmasc.jpg')
            } else if(idade <50){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade > 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criancafem.jpg')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'jovemfem.jpg')
            } else if(idade <50){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'idosafem.jpg')
            }
        }
        res.style.textAlign = 'center' //centralizar texto em JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}