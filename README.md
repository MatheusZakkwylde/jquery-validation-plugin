# jquery-validation-plugin
Validação de formulário html jquery-validation-plugin. Métodos básicos. Status: Funcionando.

	A bibliotea funciona da seguinte maneira:
- Crie um form e adicone um id de indentificação. No exemplo usaremos o exemplo id="validation-form".

< form id='validation-form' >
< /form >

1- Atraves do id do formulário indentificamos quais campos devem ser validados pelo seu name:

< form id="validation-form" >
    < input name="nome" >
< /form >



- Podemos também criar validações customizadas usando o jQuery.validator adicionando um metodo pelo seu nome e uma função a ser executada pelo chamada do nome criando.

	No exemplo a baixo demonstramos a conrtução de validação do instragram em que devemos adicionar @ no começo do indentifiador do instragram. Assim usando o método addMethod da Jquery.validator inicamos a função com o nome init e adicionamos uma ação a ser condicionada. Se haver algum valor como @ no inicio do indentifador do instagram retorne true, se não retorna false. Se retorna false a frase 'Adicione um @ no inicio. Ex: @math' será chamada, se true a validação foi bem sucedidada.

//Executar apenas quando todo o documento for carregado.

$(document).ready(function(){

    //Criando validação para o instragram.
    jQuery.validator.addMethod('init',
        function instagram(value){
            if(value.indexOf("@") === 0){
                return true
            }else{
                return false
           }
        },'Adicione um @ no inicio. Ex: @math'
    )
     
    //Verifica o form que tem como id validate-form
    $('#validate-form').validate({
        //Regras
        rules:{

            nome:{
                maxlength: 10,
                minlength: 3,
                required: true,
                //Método extra. Pelo menos dois nomes
                minWords:2
            },

            instagram:{
                init:true //chamada do método customizado.
           }
        },

        //Quando todo o formulario passar por todas as validações faça algo
        submitHandler: function(form){
            //Mensagem de sucesso
        }
    })
})
