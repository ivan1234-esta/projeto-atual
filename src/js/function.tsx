    //Função para somar numeros//
    function somar(n1:number, n2:number):number {
        return( n1 + n2 );
    }

    //Função Somar Variaveis//
    let num1 = 5;
    let num2 = 9;

    function somarVariaveis(num1:number,num2:number) : number{
        return(num1+num2);
    }

    // Função para calcular media//
    function media(num1:number,num2:number,num3:number):number {
        return((num1+num2+num3)/3);

    }

    // Função para apresentar nome completo//
    let PrimeiroNome = 'João';
    let Sobrenome = 'Damasceno';
        function ExibirNomeCompleto(){
            return(PrimeiroNome +" " + Sobrenome);

        }

    

        <div className='cabecalho'>
         O resultado é {somar(1,10)}<br/>
         A soma das variaveis é {somarVariaveis(num1,num2)}<br/>
          A media é {media(7,5,3)}<br/>
          O nome completo é {ExibirNomeCompleto()}<br/>
        </div>
    