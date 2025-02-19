<template>
    <div class="flex justify-center items-center main">
      <a href="https://www.linkedin.com/in/natanssilva/" target="_blank" rel="linkedin"
        ><font-awesome-icon :icon="['fab', 'linkedin']" class="icon" size="2x" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'square-github']" class="icon" size="2x" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
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
    border: 3px solid black;
    border-radius: 25%;
    padding: 10px;
  }
  
  .my-app-dark .icon {
    border: 3px solid white;
  }
  
  .icon:hover {
    cursor: pointer;
    animation: fa-beat 1s infinite;
  }
  </style>
  