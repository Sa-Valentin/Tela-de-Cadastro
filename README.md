# Tela de Cadastro

Este documento descreve as decisões tomadas durante o desenvolvimento do código, inicialmente concebido para representar uma única tela de cadastro, mas não me aprofundei muito neste aspecto.

⚫ Armazenamento de Dados do Usuário

Para o armazenamento de informações do usuário, foi implementada uma solução inicialmente simples, com a criação da função "dados_usuario(email, senha, nome)". No entanto, reconheço a necessidade de aprimoramentos futuros nesta área.

# Validações de Dados

⚫ Foram incorporadas validações rigorosas para garantir a integridade dos dados inseridos pelo usuário:

ᐅ Validação de Email: Não são permitidos espaços em branco ou símbolos '@' duplicados.

ᐅ Validação de Nome: Aceita apenas caracteres alfabéticos, incluindo caracteres acentuados.

ᐅ Validação de Senha: Exige um mínimo de 8 caracteres, incluindo pelo menos uma letra maiúscula e um número.

# Progresso na Tela

⚫ A tela de cadastro passa por dois estágios principais:

ᐅ Etapa de Nome

Após informar o email, o usuário é solicitado a inserir seu nome de perfil. A mensagem orienta o usuário a fornecer seu nome desejado.

ᐅ Etapa de Senha

Em seguida, é apresentada uma transformação na aparência da tela. O usuário é solicitado a criar uma senha, e uma funcionalidade foi incorporada para permitir a exibição ou ocultação da senha.

# Confirmação e Redirecionamento

Após o preenchimento bem-sucedido de todas as informações, uma mensagem de confirmação é exibida, e o usuário é redirecionado para uma nova página. Um link para o login também é fornecido, caso o redirecionamento não ocorra.

ᐅ Funcionalidade de Alternância de Senha

Foi adicionada uma funcionalidade de alternância para exibir ou ocultar a senha do usuário, acionada pelo ícone de um olho aberto/fechado.

# Considerações Finais

A utilização de uma variável global, denominada "q_click," foi adotada como uma solução temporária para controlar o fluxo do código. Pretendo encontrar alternativas mais eficazes à medida que o projeto evolui.
