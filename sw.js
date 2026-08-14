self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // Apenas repassa a requisição normalmente para funcionar online.
    // Isso é o suficiente para o navegador aceitar o site como um PWA instalável.
});
