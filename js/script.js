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

            email:{
               required: true,
               email: true
            },

            cidade:{
               required: true
            },

            instagram:{
                init:true //chamada do método customizado.
            },

            numero:{
                digits:true
            },

            cpf:{
                cpfBR:true
            }
        },

        //Quando todo o formulario passar por todas as validações faça algo
        submitHandler: function(form){
            //Mensagem de sucesso
        }
    })
})