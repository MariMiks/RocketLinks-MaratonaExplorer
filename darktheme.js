function dark() {
   const mybody = document.body;
   mybody.classList.toggle('dark');

   const lamp = document.getElementById('lamp');
   if (mybody.className == 'dark') {
      lamp.setAttribute('src', 'imagens/lampada-apagada-128.svg');
      lamp.setAttribute('alt', 'icon de lâmpada apagada');
   } else {
      lamp.setAttribute('src', 'imagens/lampada-128.svg');
      lamp.setAttribute('alt', 'icon de lâmpada acesa');
   }

}
