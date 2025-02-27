<template>
    <div class="flex justify-center items-center main">
      <a href="https://www.linkedin.com/in/natanssilva/" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon" size="2x"/>
      </a>
      <a href="https://github.com/Natanssilva" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'github']" class="icon" size="2x"/>
      </a>
      <a href="mailto:natanportoms@outlook.com" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fas', 'envelope']" class="icon" size="2x" />
      </a>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  
  a {
    text-decoration: none; 
    color: inherit; 
  }
  .main {
    gap: 25px;
  }
  .icon {
    transition: all 0.3s;
    padding: 3px;
  }
  
  .icon:hover {
    cursor: pointer;
    animation: fa-beat 1s ;
  }
  </style>
  