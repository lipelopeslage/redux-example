# Redux Hello World

Redux é uma implementação de arquitetura de software criada pelo Facebook, chamada Flux.
Essa arquitetura é simples: uma view dispara um evento (ex: click) que por sua vez representa uma 'ação', que vai para um roteador de ações, ou 'dispatcher'. O dispatcher sabe o que fazer com as ações, então ele resolve a ação enviada - ou 'store' (ação + estado), que entrega um novo estado para a aplicação que será lido na 'view'.
Um componente do react, por ser reativo, irá se atualizar toda vez que seu estado for modificado.
Portanto, o redux implementa a arquitetura flux atuando como um intermediário entre o 'dispatcher' e o 'store', manipulando o estado recebido - entregando outro - seguindo 3 importantes princípios:
1- Store é única fonte de verdade, ele armazena o estado da sua aplicação, consultado por todos seus componentes.
2- O store é somente leitura. Os componentes não devem manipular uma store diretamente.
3- Toda manipulação de um store é feita por uma função pura, chamada reduce, que recebe um estado e uma ação. O reduce verifica qual a ação e indica melhor estado a ser retornado.


--

Redux is an implementation from Flux, a software architecture created by Facebook.
It is simple: a view dispatches an event (ex: button click) wich represents an 'action', through an action router, or 'dispatcher'. The dispatcher knows what to do with theses actions, so it returns a state with a state depending on the giving 'store' (action+state), delivering a new state to the application to be used by it's 'view'.
A react component, giving it's reactive nature, will update itself every time this state changes.
Therefore, redux implements flux's architecture acting as bridge between the 'dispatcher' and the 'store', manipulating the state - and deliverying another - following 3 important principles:
1- Store is the unique source of thuth, it stores you application's state, accessible throughout it's components.
2- Every store must be read-only. The components should not manipulate storers directly.
3- All store manipulation is must be done by pure functions, called reduce, wich receives a state and an action. The reduce checks the action and works on the appropriate state to be returned.
