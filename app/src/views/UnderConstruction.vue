<template>
  <div class="construction-container">
    <div class="message-container">
      <h1>Site em andamento!!</h1>
      <p>Estou trabalhando para apresentar algo incrível. Volte em breve!</p>
      <p>
        Fique de olho em atualizações no meu
        <a class="bg-red-50" href="https://github.com/Natanssilva" target="_blank" rel="github">Github</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnderConstruction',
}
</script>

<style scoped>
/* Garantir que o body e html ocupem toda a altura da tela */
html,
body {
  height: 100%;
  margin: 0;
  background-color: brown; /* Definir a cor de fundo aqui */
}

/* Centralizando e ajustando a imagem de fundo */
.construction-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Usar 100vh para garantir que ocupe toda a altura da tela */
  background: url('../assets/img/cool-background.png') no-repeat center center fixed;
  background-size: cover;
  background-position: center;
  overflow: hidden; /* Garantir que não haja rolagem */
}

/* Centralizando o conteúdo da mensagem */
.message-container {
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  box-sizing: border-box;
  width: 100%;
  margin: 0 10px;
}

/* Estilo do título */
h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

/* Estilo do parágrafo */
p {
  font-size: 1.5rem;
}

/* Responsividade: ajustes para telas menores */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem; /* Ajuste de tamanho de título */
  }

  p {
    font-size: 1.2rem; /* Ajuste de tamanho de parágrafo */
  }

  .message-container {
    padding: 15px;
    max-width: 90%;
  }
}

/* Responsividade para telas pequenas (smartphones) */
@media (max-width: 480px) {
  h1 {
    font-size: 2rem; /* Título menor em telas pequenas */
  }

  p {
    font-size: 1rem; /* Texto menor */
  }

  .message-container {
    padding: 10px;
  }
}
</style>
