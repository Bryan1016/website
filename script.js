function showCard() {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector('.card');
    const continueBtn = document.querySelector('.continue-btn');
    
    // Ocultar el sobre y mostrar la tarjeta
    envelope.style.display = 'none';
    card.style.display = 'block';

    // Obtener todos los mensajes y mostrarlos uno por uno
    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.style.opacity = '1'; // Hacer que el mensaje sea visible
            message.style.animation = 'fadeIn 1s forwards'; // Aplicar animación
        }, index * 1000); // Mostrar cada mensaje cada segundo
    });

    // Mostrar el botón continuar después de mostrar todos los mensajes
    setTimeout(() => {
        continueBtn.style.visibility = 'visible';
    }, messages.length * 1000);

    // Crear corazones animados
    createHearts(50);

    // Reproducir el audio
    const audio = new Audio('audio/viernes13.mp3');
    audio.play().catch(error => {
        console.error("No se pudo reproducir el audio:", error);
    });
}

function createHearts(num) {
    const body = document.body;
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';
        heart.style.left = Math.random() * 100 + 'vw'; // Posición aleatoria
        heart.style.top = Math.random() * 100 + 'vh'; // Posición aleatoria
        body.appendChild(heart);

        // Eliminar el corazón después de 3 segundos
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

function showNextMessage() {
    const card = document.querySelector('.card');
    const nextMessage = document.getElementById('nextMessage');
    const continueBtn = document.querySelector('.continue-btn');
    const backBtn = document.querySelector('.back-btn');
    
    // Cambiar la visualización de la tarjeta y el mensaje
    card.style.display = 'none';
    nextMessage.style.display = 'block';
    continueBtn.style.visibility = 'hidden';
    backBtn.style.visibility = 'visible';
}

function goBack() {
    const card = document.querySelector('.card');
    const nextMessage = document.getElementById('nextMessage');
    const continueBtn = document.querySelector('.continue-btn');
    const backBtn = document.querySelector('.back-btn');
    
    // Regresar a la tarjeta principal
    nextMessage.style.display = 'none';
    continueBtn.style.visibility = 'visible';
    backBtn.style.visibility = 'hidden';
    card.style.display = 'block';
}