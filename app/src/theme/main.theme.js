// src/theme/myPreset.js
import { definePreset } from 'primevue/config';
import Aura from '@primevue/themes/lara';
// import Aura from '@primevue/themes/aura/theme.css'; 

const MyPreset = definePreset(Aura, {
    // Customizando cores principais e secundárias
    colors: {
        primary: '#ff6347', // Cor primária
        secondary: '#2e8b57', // Cor secundária
        accent: '#1e90ff', // Cor de destaque
        background: '#f5f5f5', // Cor de fundo
        text: '#333333', // Cor do texto
    },
    
    // Outras customizações específicas de componentes podem ser feitas aqui
    components: {
        Button: {
            // Personalizando o estilo dos botões
            borderRadius: '8px',
            padding: '10px 20px',
        },
        InputText: {
            // Customizando o InputText (exemplo)
            backgroundColor: '#f0f0f0',
            borderColor: '#ddd',
        },
    },
});

export default MyPreset;
