// Para traduzir site entre português e inglês
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');

    // 1. Função para aplicar o idioma
    function applyLanguage(lang) {
        // Troca textos curtos (usando data-attributes)
        document.querySelectorAll('[data-pt]').forEach(el => {
            el.innerText = el.getAttribute(`data-${lang}`);
        });

        // Troca blocos grandes (usando classes)
        document.querySelectorAll('.lang-pt').forEach(el => {
            el.style.display = lang === 'pt' ? 'block' : 'none';
        });
        document.querySelectorAll('.lang-en').forEach(el => {
            el.style.display = lang === 'en' ? 'block' : 'none';
        });

        // Atualiza o texto do botão (mostra o oposto do atual)
        if (langBtn) langBtn.innerText = lang === 'pt' ? 'EN' : 'PT';

        // Salva a escolha no navegador
        localStorage.setItem('preferredLang', lang);

        // Atualiza o atributo lang do HTML (bom para SEO e acessibilidade)
        document.documentElement.lang = lang;
    }

    // 2. Verifica se já existe um idioma salvo, senão define PT como padrão
    const savedLang = localStorage.getItem('preferredLang') || 'pt';
    applyLanguage(savedLang);

    // 3. Evento de clique no botão de troca
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = localStorage.getItem('preferredLang') || 'pt';
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            applyLanguage(newLang);
        });
    }
});