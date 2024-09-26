\*\*

## Zap Hunt - Product Discovery Platform

**Zap Hunt** é uma plataforma para descobrir e lançar novos produtos de tecnologia. Este projeto é uma interface simples que lista produtos populares, permite navegar entre eles e exibe detalhes sobre cada um em um modal.

**Tecnologias Utilizadas**

**React** - Biblioteca para construir interfaces de usuário.

**Next.js** - Framework React com renderização do lado do servidor e rotas baseadas em arquivos.

**Lucide-react** - Pacote de ícones para React.

**Tailwind CSS** - Framework de CSS utilitário para estilização.

**TypeScript** - Suporte a tipagem estática no JavaScript.

**Estrutura de Componentes**

**Header**: Componente que representa o cabeçalho da aplicação.

**SideTab**: Um painel lateral, com navegação complementar.

**Button**: Um botão reutilizável importado de @/components/ui/button.

**Funcionalidades**

**Lista de Produtos:** Um array de objetos com dados como nome, descrição, upvotes, tags e uma imagem de cada produto.

**Navegação entre Produtos:** Modal para exibir informações detalhadas de um produto selecionado, com botões de navegação para o próximo e o anterior.

**Modal de Produto:** Mostra os detalhes de um produto, incluindo a imagem, descrição e tags.

**Upvotes e Compartilhamento:** Cada produto permite upvotes, e há botões para compartilhar.

**Como Executar Localmente**

**Clone este repositório.**

```bash
git clone https://github.com/delfimcelestino/zap-hunt.git
```

**Instale as dependências.**

```bash
npm install
```

**Execute o projeto.**

```bash
npm run dev
```

Abra http://localhost:3000 no seu navegador para visualizar a aplicação.

**O que é use client?**

A diretiva use client no Next.js 13 e posterior indica que um arquivo ou um componente React deve ser renderizado no cliente. Por padrão, o Next.js utiliza renderização no servidor, mas em casos como manipulação de estado local ou hooks como useState e useEffect, o componente precisa ser renderizado no cliente. Essa diretiva ajuda a diferenciar entre componentes do lado do servidor e do lado do cliente.

No contexto deste projeto, o componente Component usa `useState` e `useEffect`, então é necessário que ele seja renderizado no lado do cliente. Por isso, pode ser necessário adicionar use client no início do arquivo para evitar problemas de compatibilidade com renderização do lado do servidor.

**Licença**

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.Zap Hunt - Product Discovery Platform
