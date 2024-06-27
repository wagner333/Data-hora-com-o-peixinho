// Função para atualizar o relógio e a data
function updateClock() {
    // Obtém a data e hora atual
    let now = new Date();

    // Formata a hora no formato desejado (exemplo: HH:mm:ss)
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    // Atualiza o conteúdo do elemento HTML com a hora formatada
    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;

    // Formata a data no formato desejado (exemplo: DD/MM/AAAA)
    let day = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0'); // Mês começa em 0 (janeiro)
    let year = now.getFullYear();

    // Atualiza o conteúdo do elemento HTML com a data formatada
    document.getElementById('date').textContent = `${day}/${month}/${year}`;

    // Atualiza a cada segundo
    setTimeout(updateClock, 1000);
}

// Inicia a atualização do relógio e da data
updateClock();