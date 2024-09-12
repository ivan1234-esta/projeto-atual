export const ModuloApi = {
    CarregarUsuarios: async () => {
    let response = await
     fetch('https://jsonplaceholder.typicode.com/todos/');
     let json = await response.json();
     return json;
   },
   
   AdicionarUsuario: async (title:string,body:string,userId:number) => {
        let response = await  fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });

        if (!response.ok) {
            console.error('Erro ao adicionar o item');
        } else {
            console.log('Item adicionado com sucesso');
        }
    }
}
