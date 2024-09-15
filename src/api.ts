export const ModuloApi = {
    CarregarUsuarios: async () => {
        let response = await fetch('http://localhost:3001/doadores');
        let json = await response.json();
        return json;
    },

    AdicionarUsuario: async (
        nome: string,
        email: string,
        telefone: string,
        senha: string,
        data: string,
        tipoSanguineo: string
    ): Promise<boolean> => {
        try {
            let response = await fetch('http://localhost:3001/doadores', {
                method: 'POST',
                body: JSON.stringify({
                    nome,
                    email,
                    telefone,
                    senha,
                    data,
                    tipoSanguineo
                }),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            });

            if (response.ok) {
                console.log('Item adicionado com sucesso');
                return true; // Retorna true para indicar sucesso
            } else {
                console.error('Erro ao adicionar o item');
                return false; // Retorna false para indicar falha
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            return false; // Retorna false em caso de erro
        }
    }
}
