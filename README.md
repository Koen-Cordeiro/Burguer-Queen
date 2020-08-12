# Chase Burguer
![logo Chase burguer](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f1732d50789a8522b2908ed/f7afdc2d433ff28234bde086c11926df/Captura_de_Tela_2020-07-21_%C3%A0s_15.25.23.png)

Com a crescente fama dos empreendimentos de escape rooms, onde os usuários são imersos em um ambiente de mistérios e devem buscar a solução para os mesmos, nasceu a Chase Burguer, uma hamburgueria ambientada no universo dos mistérios onde lendas como Sherlock Holmes e Poirot cresceram.
## Desenvolvimento
### - Definição de produto
A demanda para o desenvolvimento do projeto veio quando houve um aumento significativo no movimento do empreendimento, e com isso, ter um sistema próprio que auxiliasse tanto os funcionários do salão e da cozinha, quanto a própria gerência, a controlar o fluxo de pedidos se tornou fundamental.
A principal exigência do cliente quanto ao projeto, era ter uma tela feita para utilização principalmente em tablets, com fácil usabilidade para que seus funcionários conseguissem se mover pela plataforma com facilidade, conforme apresentado na imagem abaixo.
![enter image description here](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)
### - Usuários 
Pensando nos pedidos  do cliente, optamos por criar duas personas principais para trabalhar neste projeto, Agatha Christie (uma das cozinheiras da hamburgueria) e Sherlock Holmes (o garçom).
Ambos, mesmo que trabalhassem em áreas diferentes, tinham um ponto em comum, necessitavam conseguir fazer seu registro com facilidade e ao logar, serem encaminhados para suas respectivas áreas sem maiores problemas.
Contudo, haviam outras questões que precisavam ser consideradas para esse usuário.

#### - Sherlock 
(Sherlock Holmes - Salão)
Sherlock Holmes é um funcionário novo na Hamburgueria, foi contratado a poucas semanas devido ao aumento do movimento e está tendo alguma dificuldade em se adaptar. Ele precisa de uma forma fácil de visualizar o menu, de preferência que fique na mesma tela onde o pedido é anotado, para que ele consiga anotar os pedidos rapidamente.
Falar sobre a tela de pedidos

Como alguns clientes são indecisos, seria interessante que ele pudesse alterar as quantidades diretamente na tela, além de anotar as informações dos usuários e ser capaz de informar o valor final antes de fecharem o pedido.

#### - Agatha Christie 
Agatha trabalha desde o começo da hamburgueria e está muito habituada a rotina da cozinha, contudo ela sente falta de ter uma forma melhor de acompanhar os pedidos, para saber quais estão abertos a mais tempo e quais ela pode enviar para o salão servir.

Para ela também seria interessante poder avisar para o salão quando um pedido efetivamente começou a ser preparado e quando ele apenas foi enviado, sem que ninguém na cozinha o tenha aceito, para evitar conflitos sobre a demora de um pedido no preparo.
(Agatha Christie - Cozinha - Foto dela aqui)



### - Prototipação

#### Usabilidade

Partindo do uso preferencial em tablets, e suas particularidades de leitura tanto em modelo paisagem como retrato, foram aplicadas boas práticas apresentadas no relatório [Tablet Website and Application UX](https://www.nngroup.com/reports/tablets/) da Nielsen Norman Group, abaixo as principais referências:

- Crie áreas de clique grandes o suficiente. Recomendado: 1 x 1 cm.
- Adicione dimensionalidade 3D apenas aos elementos clicáveis.
- Garanta que seu aplicativo funcione em todas as orientações possíveis.
- Confirme que os usuários possam ver o que digitam em ambas as orientações.

#### SALÃO

>Fácil acesso as informações de menu e pedidos em andamento para os garçons.

Para rápida visualização do cardápio e retirada de pedido, foi criada a tela **Menu**:

 - Divisão do cardápio com palavras diretas e curtas: DIA e CAFÉ.
 - Criação de grid 2 x 1 para cada seção do menu, visto o padrão de dois items em cada.
 - Cartões clicáveis de adição para cada item com: ícone figurativo, nome e preço.
 - Comanda de preenchimento do nome do cliente e do número da mesa no topo, prevendo a área ocupada pelo teclado digital.
 - Área de resumo com botões de adição e exclusão de itens.
 - Ao final botões de cancelar e envio, com notificação visual de confirmação.

Já na tela **Pedidos** temos o acompanhamento das comandas enviadas à cozinha:

 - Abas da situação do pedido: Abertos, Prontos e Entregues.
 - Comandas com: 
 - [ ] Informações do cliente – número do pedido, nome e mesa;
 - [ ] Atendimento – horário de retirada do pedido e tempo de preparo; 
 - [ ] Resumo – itens para preparo e preço total para conferência;
 - [ ] Situação de entrega:
	- pendente (cozinha não aceitou);
	- entregar (cozinha finalizou);
	- e entregue (mesa).

#### COZINHA

>Fácil acesso as entradas e saídas de pedidos para os cozinheiros.

Similar a tela de Pedidos do Salão temos as abas: **Abertos**, **Prontos** e **Entregues**.
Com a diferença nos textos da situação de entrega: aceitar, finalizar e entregue.

#### Interface
Ainda sobre a inter leis conceitos de heurística foram utilizados nas seguintes decisões de interação do usuário:

#### Baixa fidelidade
- Tela de menu
![Versão de baixa fidelidade do menu](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f21bddadb9757047338a1f1/1fbd0bfab5fbca885235bae1745a3d44/baixaf.png)
- Tela de pedidos 
- ![Versão de baixa fidelidade dos pedidos](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f2b334415ed80851c950fac/8493b79aeecdaa6bb04133008d9b4277/baixafpedidos.png)


#### Wireframe
- Tela de Login
![Wireframe login](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f1732e571a6e1624b3ddafb/e2fa4432a9331d9734931dcdef8a5f9c/Captura_de_Tela_2020-07-21_%C3%A0s_16.37.45.png)
- Tela de Registro
![Wireframe Registro](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f1732ebea37c33577d13d93/78e202c5b559c82e4c29a8c30b6262fd/Captura_de_Tela_2020-07-21_%C3%A0s_16.37.50.png)
- Tela de Menu
![Wireframe menu](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f21bddadb9757047338a1f1/5d9bb53245101e4ad578295f4f4cfd8b/Captura_de_Tela_2020-07-29_%C3%A0s_15.19.34.png)
- Versão Mobile
![Wireframe versão mobile](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f21bddadb9757047338a1f1/5324001649c46cc95507d9e806209d5e/Captura_de_Tela_2020-07-30_%C3%A0s_14.30.17.png)

#### Alta fidelidade
- Tela de login 
![Tela de login](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f1732e571a6e1624b3ddafb/241051552c525fd0a541936f6b49a65f/Login-2.png)
- Tela de Registro
![Tela de registro](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f1732ebea37c33577d13d93/ddabdf1d793c1198f5202e3c3d2ce4a2/Registro.png)
- Tela de menu
![Tela de pedidos](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f21bddadb9757047338a1f1/261844ee0d12b3a9ac90eabc8e977229/Captura_de_Tela_2020-08-03_%C3%A0s_12.57.34.png)
- Tela de pedidos
![enter image description here](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f2b334415ed80851c950fac/09a04af167a03e30a457c48a9b528082/Captura_de_Tela_2020-08-05_%C3%A0s_19.31.15.png)
- Tela da Cozinha
![Tela da cozinha](https://trello-attachments.s3.amazonaws.com/5f0f71b2a4217c75a2a906cb/5f31a64ad4d5f13323e32be1/aa40d457f608ec0d096ae1854b26ade4/tela_da_cozinha.png)



## Dados técnicos sobre as ferramentas utilizadas neste projeto

**MacOS Catalina - 10.15.4**

Node - 12.13.0

NPM - 6.14.6

**Windows 10 Home - 64 bits**

Node - 12.16.1

NPM - 6.14.6


## Autores
Desenvolvido por [Caroline Pinheiro](https://github.com/carolpinheiro) e [Tamires Cordeiro](https://github.com/mirescordeiro/)
