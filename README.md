# 💅 Esmaltação em Gel Lucrativa - Landing Page

Landing Page profissional para o curso de Esmaltação em Gel da **Fernanda Bento**, Nail Designer e Instrutora com mais de 5 anos de experiência.

## 🎨 Design

### Paleta de Cores Premium
- **Primary:** `#EDB7E9` (Rosa/Lavanda)
- **Secondary:** `#C88DD9` (Roxo Suave)
- **Accent:** `#E8C4A2` (Dourado)
- **Dark:** `#2D1B3D` (Roxo Escuro)
- **Light:** `#FAF7FB` (Branco Rosado)

### Tipografia
- **Headings:** Playfair Display (Serif elegante)
- **Body:** Poppins (Sans-serif moderna)

## 📋 Estrutura do Projeto

```
fmr-lp-vendas/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos principais
│   ├── js/
│   │   └── script.js       # Interações JavaScript
│   └── images/             # Imagens (adicionar conforme necessário)
└── README.md
```

## ✨ Funcionalidades

### 🎯 Seções da Landing Page

1. **Hero Section**
   - Headline impactante
   - CTA principal com preço
   - Features em destaque

2. **Social Proof**
   - Estatísticas de sucesso
   - Anos de experiência
   - Número de alunas formadas

3. **Sobre a Instrutora**
   - Bio completa da Fernanda Bento
   - Destaques profissionais
   - Link para Instagram

4. **Conteúdo do Curso**
   - 7 aulas detalhadas
   - Descrição de cada módulo
   - Cards interativos com hover

5. **Benefícios**
   - 6 principais benefícios
   - Ícones ilustrativos
   - Foco em transformação

6. **Bônus**
   - Lista de tudo que está incluso
   - Certificado
   - Lista de materiais

7. **Para Quem É**
   - Público-alvo ideal
   - Quem NÃO deve fazer o curso

8. **FAQ**
   - Accordion interativo
   - 8 perguntas frequentes
   - Respostas detalhadas

9. **CTA Final**
   - Resumo da oferta
   - Preço destacado
   - Badges de segurança

10. **Footer**
    - Informações de contato
    - Links sociais
    - Informações legais

### 🔧 Interações JavaScript

- **FAQ Accordion:** Expande/colapsa perguntas
- **Smooth Scroll:** Rolagem suave entre seções
- **Scroll Animations:** Elementos aparecem ao rolar a página
- **CTA Tracking:** Rastreamento de cliques (preparado para Analytics)
- **Responsive Design:** Adaptação automática para mobile

## 🚀 Como Usar

### Visualizar Localmente

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em seu navegador
3. Ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

Acesse: `http://localhost:8000`

### Deploy

#### GitHub Pages
1. Faça push do código para o GitHub
2. Vá em Settings > Pages
3. Selecione a branch `main` e pasta `/root`
4. Acesse: `https://seu-usuario.github.io/fmr-lp-vendas/`

#### Netlify
1. Arraste a pasta para o Netlify Drop
2. Ou conecte ao repositório GitHub
3. Deploy automático

#### Vercel
```bash
npm i -g vercel
vercel
```

## 📱 Responsividade

A Landing Page é totalmente responsiva e otimizada para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🎨 Personalização

### Alterar Cores

Edite as variáveis CSS em `assets/css/styles.css`:

```css
:root {
    --primary: #EDB7E9;
    --secondary: #C88DD9;
    --accent: #E8C4A2;
    /* ... */
}
```

### Adicionar Imagens

1. Adicione imagens na pasta `assets/images/`
2. Substitua os placeholders no HTML:

```html
<!-- Substituir SVG placeholder por imagem real -->
<img src="assets/images/fernanda-perfil.jpg" alt="Fernanda Bento">
```

### Alterar Conteúdo

Todo o conteúdo está no arquivo `index.html`. Basta editar os textos diretamente.

## 📊 Integração com Analytics

### Google Analytics

Adicione antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel

Adicione antes do `</head>`:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🎯 Otimizações SEO

- ✅ Meta tags completas
- ✅ Open Graph para redes sociais
- ✅ Títulos semânticos (H1, H2, H3)
- ✅ Alt text em imagens
- ✅ Schema markup ready
- ✅ URLs amigáveis
- ✅ Performance otimizada

### Melhorias Futuras (Opcional)

- [ ] Adicionar schema.org (Course markup)
- [ ] Otimizar imagens com WebP
- [ ] Implementar Service Worker para PWA
- [ ] Adicionar AMP version

## 🔗 Links Importantes

- **Checkout:** https://pay.hotmart.com/W102880769E
- **Instagram:** [@fernandabentonails](https://www.instagram.com/fernandabentonails/)

## 📄 Informações do Curso

- **Nome:** Esmaltação em Gel Lucrativa
- **Formato:** Online gravado
- **Duração:** 7 aulas
- **Nível:** Iniciante
- **Preço:** R$ 47,90 (ou 6x R$ 8,99)
- **Inclui:** Certificado + Lista de Materiais

## 🛠️ Tecnologias

- HTML5 Semântico
- CSS3 (Variables, Flexbox, Grid)
- JavaScript Vanilla (ES6+)
- Google Fonts (Playfair Display, Poppins)
- SVG Icons

## 📝 Licença

© 2024 Fernanda Bento. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para profissionalizar o ensino de Nail Design**
