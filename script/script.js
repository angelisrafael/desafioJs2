window.onload = function(){

    

    function result(dadosCep){

        for( let campo in dadosCep){
            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value= dadosCep[campo];
            }
        }

    }

    let dadosCep = async function(cep){
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        //try{
            let dadosFetch = await fetch(url);

            let dadosJson = await dadosFetch.json();
            
            result(dadosJson);
        //} catch(error){
        //    alert(error);
        //}

    }

    //dadosCep('87083026');
    const btnBuscar = document.querySelector("#botaoBuscar");
    const cxCep = document.querySelector("#cep");

    btnBuscar.addEventListener('click', function(){
        dadosCep(cxCep.value);
    })

}