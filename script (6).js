/* ==========================================================================
  JEFFERSON SANTA ROSA: SITE OFICIAL
  script.js: dados editáveis e lógica do site
   ========================================================================== */

// ==========================================
// CONFIGURAÇÕES DO ARTISTA
// ==========================================
const artista = {
  nome: "JEFFERSON SANTA ROSA",
  slogan: "",
  // Instagram: endereço informado para o artista. CONFIRMAR visualmente que o
  // perfil é dele antes de divulgar como canal oficial.
  instagram: "https://www.instagram.com/jeffersonsantarosaoficial/",
  youtube: "https://www.youtube.com/channel/UCWbxsTkwXt1elTQc2DmZf7A",
  tiktok: "",
  spotify: "",
  facebook: ""
};

// Links externos de plataformas musicais.
// PENDENTES DE CONFIRMAÇÃO: página de artista no Amazon Music e demais
// plataformas: sem endereço verificado, não é divulgado nenhum link.
// Cada item: { label, url }
const plataformas = [
  { label: "Ver canal no YouTube", url: "https://www.youtube.com/channel/UCWbxsTkwXt1elTQc2DmZf7A" }
];

const contato = {
  telefone: "",
  whatsapp: "+55 81 8467-9901",
  email: "",
  assessoria: "",
  imprensa: ""
};

const midiaCards = [
  {
    medio: "Domingo Espetacular",
    titulo: "Dona Lila e a viralização nacional",
    descricao: "Em 2025, a gravação da apresentação de Dona Lila alcançou repercussão nacional e foi exibida pelo Domingo Espetacular, da Record TV.",
    ano: "2025"
  },
  {
    medio: "Diário de Pernambuco",
    titulo: "Forrozão do Galo",
    descricao: "Jefferson Santa Rosa esteve presente na programação da edição do evento celebrada em Recife, reforçando sua presença no calendário cultural pernambucano.",
    ano: "2025"
  },
  {
    medio: "Jornal do Commercio",
    titulo: "Participação no Forrozão do Galo",
    descricao: "Também há registro de presença em edições anteriores do evento, mostrando continuidade da trajetória em um dos maiores encontros do forró e da cultura popular do estado.",
    ano: "2024"
  }
];

// Cada item: { nome, capa, descricao, spotify, youtube, outra, categoria }
// categoria: "lancamento" | "participacao" | "outra"
//
// Lançamentos creditados a Jefferson Santa Rosa e à JBSR Produções nas
// plataformas consultadas. Sem endereço de faixa verificado por música,
// os campos de link ficam vazios (a página não exibe links que não existem).
const musicas = [
  {
    nome: "Dona do Meu Coração",
    descricao: "Jefferson Santa Rosa",
    capa: "https://i.ytimg.com/vi/MM-EgmVRqHM/hqdefault.jpg",
    youtube: "https://www.youtube.com/watch?v=MM-EgmVRqHM",
    categoria: "lancamento"
  },
  {
    nome: "Tá Com o Bumbum Perna Grossa!",
    descricao: "Jefferson Santa Rosa",
    capa: "https://i.ytimg.com/vi/Z_9O3oSS1jM/hqdefault.jpg",
    youtube: "https://www.youtube.com/watch?v=Z_9O3oSS1jM",
    categoria: "lancamento"
  },
  {
    nome: "Mamadeira do Papai",
    descricao: "Jefferson Santa Rosa",
    capa: "https://i.ytimg.com/vi/Hd6v4TsFjOI/hqdefault.jpg",
    youtube: "https://www.youtube.com/watch?v=Hd6v4TsFjOI",
    categoria: "lancamento"
  },
  {
    nome: "Zero a Um",
    descricao: "Jefferson Santa Rosa",
    capa: "https://i.ytimg.com/vi/btlyYijAl1M/hqdefault.jpg",
    youtube: "https://www.youtube.com/watch?v=btlyYijAl1M",
    categoria: "lancamento"
  }
];

// Composições: Jefferson Santa Rosa como autor, a partir dos créditos
// registrados nas obras.
// Cada item: { nome, credito, nota }
const composicoes = [
  {
    nome: "Dona do Meu Coração",
    credito: "Jefferson Santa Rosa e Cassiano Produções",
    nota: "Gravada por Jefferson Santa Rosa"
  },
  {
    nome: "Além do Prazer",
    credito: "Jefferson Santa Rosa e José Victor Barbosa de Lima",
    nota: "Registrada no repertório da Banda Shakespeare"
  }
];

// Cada item: { data, cidade, estado, local, horario, evento, ingressos }
// IMPORTANTE: mantenha a lista ordenada por data (mais próxima primeiro).
// Nenhuma data futura confirmada até o momento: a agenda está em atualização.
const agenda = [];

// Histórico de apresentações confirmadas em fonte oficial ou institucional.
// Cada item: { data, evento, local, cidade, estado, nota }
const historicoShows = [
  {
    data: "17.02.2026",
    evento: "Carnaval de Olinda",
    local: "Polo Alafin Oyó",
    cidade: "Olinda",
    estado: "PE",
    nota: "Programação oficial do Carnaval 2026 · apresentação às 22h"
  },
  {
    data: "02.03.2025",
    evento: "Carnaval de Sirinhaém",
    local: "Distrito de Santo Amaro",
    cidade: "Sirinhaém",
    estado: "PE",
    nota: "Registro oficial de contratação da Prefeitura de Sirinhaém para show artístico"
  },
  {
    data: "23.06.2025",
    evento: "Arrasta Pé Jardim Atlântico",
    local: "Jardim Atlântico",
    cidade: "Olinda",
    estado: "PE",
    nota: "Registro oficial de contratação · representação Trakejo Produção e Assessoria Ltda."
  },
  {
    data: "30.05.2025",
    evento: "15º Forrozão do Galo",
    local: "Praça Sérgio Loreto",
    cidade: "Recife",
    estado: "PE",
    nota: "Listado entre as atrações principais do palco · representação Trakejo Produção e Assessoria Ltda."
  },
  {
    data: "08.06.2024",
    evento: "14º Forrozão do Galo",
    local: "Praça Sérgio Loreto",
    cidade: "Recife",
    estado: "PE",
    nota: "Participação no show de Gustavo Travassos · contratação via Pina Produções e Eventos Ltda. (Diário Oficial)"
  },
  {
    data: "23.06.2024",
    evento: "São João do Alto do Céu",
    local: "Alto do Céu",
    cidade: "Igarassu",
    estado: "PE",
    nota: "Registro oficial de apresentação"
  },
  {
    data: "2023",
    evento: "Galo da Madrugada",
    local: "Recife",
    cidade: "Recife",
    estado: "PE",
    nota: "Convidado da Orquestra Metais, ao lado de Ed Carlos"
  }
];

// Linha do tempo da página /sobre: shows e lançamentos em ordem decrescente
// (mais recente primeiro).
// Cada item: { data, titulo, texto, tipo }
// tipo: "Show" | "Lançamento"
const trajetoria = [
  {
    data: "17.02.2026",
    titulo: "Carnaval de Olinda",
    texto: "Apresentação na programação oficial do Carnaval, no Polo Alafin Oyó, em Olinda, às 22h.",
    tipo: "Show"
  },
  {
    data: "23.06.2025",
    titulo: "Arrasta Pé Jardim Atlântico",
    texto: "Apresentação em Olinda, com registro oficial de contratação, via Trakejo Produção e Assessoria Ltda.",
    tipo: "Show"
  },
  {
    data: "18.06.2025",
    titulo: "Lançamento de “Dona do Meu Coração”",
    texto: "Single lançado nas plataformas digitais, com composição creditada a Jefferson Santa Rosa e Cassiano Produções.",
    tipo: "Lançamento"
  },
  {
    data: "30.05.2025",
    titulo: "15º Forrozão do Galo",
    texto: "Na Praça Sérgio Loreto, no Recife, listado entre as atrações principais do palco.",
    tipo: "Show"
  },
  {
    data: "31.01.2025",
    titulo: "Lançamento de “Tá Com o Bumbum Perna Grossa!”",
    texto: "Single lançado nas plataformas digitais.",
    tipo: "Lançamento"
  },
  {
    data: "17.01.2025",
    titulo: "Esquenta de Carnaval 2025",
    texto: "Participação na faixa “Arrêa a Lenha / É Tanto Amor”, de Victor Moury com Jefferson Santa Rosa.",
    tipo: "Participação"
  },
  {
    data: "16.12.2024",
    titulo: "Lançamento de “Mamadeira do Papai”",
    texto: "Single lançado nas plataformas digitais.",
    tipo: "Lançamento"
  },
  {
    data: "23.06.2024",
    titulo: "São João do Alto do Céu",
    texto: "Apresentação em Igarassu, com registro oficial de contratação.",
    tipo: "Show"
  },
  {
    data: "08.06.2024",
    titulo: "14º Forrozão do Galo",
    texto: "Na Praça Sérgio Loreto, no Recife, como participação no show de Gustavo Travassos.",
    tipo: "Show"
  },
  {
    data: "28.05.2024",
    titulo: "Lançamento de “Zero a Um”",
    texto: "Single lançado nas plataformas digitais.",
    tipo: "Lançamento"
  },
  {
    data: "28.12.2023",
    titulo: "Lançamento de “Incendeia”",
    texto: "Single lançado nas plataformas digitais.",
    tipo: "Lançamento"
  },
  {
    data: "18.07.2023",
    titulo: "Lançamento de “Te Peço Desculpas”",
    texto: "Single lançado nas plataformas digitais.",
    tipo: "Lançamento"
  },
  {
    data: "2023",
    titulo: "Galo da Madrugada",
    texto: "Participação como convidado da Orquestra Metais, ao lado de Ed Carlos, no Recife.",
    tipo: "Show"
  }
];

// Cada item: { src, alt, categoria }
// categoria: "shows" | "eventos" | "bastidores" | "artista" | "outros"
// Exibidas na galeria da seção "História" (página Sobre) e, quando houver
// uma grade de fotos na Home, também na prévia (até 6 itens).
const galeria = [
  {
    src: "assets/images/logo/trajetoria/image.png",
    alt: "Registro visual da trajetória de Jefferson Santa Rosa",
    categoria: "artista"
  },
  {
    src: "assets/images/logo/logo/image.png",
    alt: "Jefferson Santa Rosa em registro de apresentação",
    categoria: "shows"
  },
  {
    src: "assets/images/logo/trajetoria/image copy.png",
    alt: "Registro de apresentação ligado à trajetória de Jefferson Santa Rosa",
    categoria: "artista"
  }
];

// Vídeos da seção "NO PALCO".
// Cada item: { src, poster, titulo, tag, destaque, link }
// - src: arquivo local em assets/videos/ (abre no lightbox do site)
// - link: endereço externo, ex.: YouTube (abre em nova aba)
// destaque: true → clipe principal grande (recomendado para o vídeo de Carnaval)
// Itens sem `src` e sem `link` NÃO são exibidos.
const videos = [
  {
    link: "https://www.youtube.com/watch?v=MM-EgmVRqHM",
    poster: "https://i.ytimg.com/vi/MM-EgmVRqHM/hqdefault.jpg",
    titulo: "Dona do Meu Coração",
    tag: "Jefferson Santa Rosa",
    destaque: true
  },
  {
    // Clipe "Arrêa a Lenha / É Tanto Amor": Victor Moury e Jefferson Santa
    // Rosa (Esquenta de Carnaval 2025). PENDENTE: cole o endereço do vídeo
    // no campo `link` para que o card apareça no site.
    link: "https://www.youtube.com/watch?v=Z_9O3oSS1jM",
    poster: "https://i.ytimg.com/vi/Z_9O3oSS1jM/hqdefault.jpg",
    titulo: "Tá Com o Bumbum Perna Grossa!",
    tag: "Jefferson Santa Rosa",
    destaque: false
  },
  {
    link: "https://www.youtube.com/watch?v=Hd6v4TsFjOI",
    poster: "https://i.ytimg.com/vi/Hd6v4TsFjOI/hqdefault.jpg",
    titulo: "Mamadeira do Papai",
    tag: "Jefferson Santa Rosa",
    destaque: false
  },
  {
    link: "https://www.youtube.com/watch?v=btlyYijAl1M",
    poster: "https://i.ytimg.com/vi/btlyYijAl1M/hqdefault.jpg",
    titulo: "Zero a Um",
    tag: "Jefferson Santa Rosa",
    destaque: false
  }
];

// Retorna apenas os vídeos que realmente podem ser reproduzidos
// (arquivo local ou endereço externo). Evita cards sem destino.
function videosDisponiveis() {
  return videos.filter((item) => item.src || item.link);
}

const redesSociais = {
  instagram: artista.instagram,
  youtube: artista.youtube,
  tiktok: artista.tiktok,
  spotify: artista.spotify,
  facebook: artista.facebook
};

// ==========================================
// INICIALIZAÇÃO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  aplicarDadosBasicos();
  initHeader();
  initMenuMobile();
  initScrollSuave();
  initHeroVideo();
  renderMusicas();
  renderMusicasPagina();
  renderProximoShow();
  renderAgenda();
  renderPalco();
  renderGaleria();
  renderRedesSociais();
  renderPlataformas();
  renderComposicoes();
  renderHistoricoShows();
  renderTrajetoria();
  renderMidia();
  renderContato();
  initLightbox();
  initReveal();
  initAnoFooter();
  initParallax();
  initFallbackImagens();
  initBotoesContratacao();
  initContatoForm();
});

// ==========================================
// HERO: vídeo de fundo (autoplay)
// ==========================================
// O vídeo REAL do Carnaval é o fundo da primeira tela em TODAS as larguras.
// - Autoplay mudo + loop + playsinline (exigências das políticas dos navegadores).
// - Se o navegador bloquear o autoplay, tenta novamente no 1º toque/clique.
// - Poster só entra como FALLBACK: aparece antes do vídeo e se o arquivo
//   realmente não puder ser carregado (erro de rede/formato).
function initHeroVideo() {
  const video = document.getElementById("hero-video");
  if (!video) return;

  // Garante os atributos necessários para autoplay em qualquer dispositivo.
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.loop = true;

  // Mostra o vídeo apenas quando ele realmente tem um quadro para exibir.
  const revelarVideo = () => {
    video.style.display = "";
  };

  const tentarReproduzir = () => {
    const tentativa = video.play();
    if (tentativa && typeof tentativa.then === "function") {
      tentativa.then(revelarVideo).catch(() => {
        // Autoplay bloqueado pelo navegador: mantém o poster visível.
        // O vídeo tenta rodar de novo no primeiro toque/clique do usuário.
        const tentarDeNovo = () => {
          video
            .play()
            .then(revelarVideo)
            .catch(() => {})
            .finally(() => {
              window.removeEventListener("pointerdown", tentarDeNovo);
              window.removeEventListener("touchstart", tentarDeNovo);
              window.removeEventListener("keydown", tentarDeNovo);
            });
        };
        window.addEventListener("pointerdown", tentarDeNovo, { once: true });
        window.addEventListener("touchstart", tentarDeNovo, { once: true });
        window.addEventListener("keydown", tentarDeNovo, { once: true });
      });
    }
  };

  // Fallback real: se o vídeo não carregar, permanece apenas o poster.
  video.addEventListener("error", () => {
    video.style.display = "none";
  });

  if (video.readyState >= 2) {
    revelarVideo();
    tentarReproduzir();
  } else {
    video.addEventListener("loadeddata", () => {
      revelarVideo();
      tentarReproduzir();
    }, { once: true });
  }
}

// ==========================================
// DADOS BÁSICOS (slogan, textos que dependem de `artista`)
// ==========================================
function aplicarDadosBasicos() {
  const slogan = document.getElementById("hero-slogan");
  if (slogan) {
    slogan.textContent = artista.slogan || "";
    slogan.hidden = !artista.slogan;
  }
}

// ==========================================
// HEADER: muda de aparência ao sair do hero
// ==========================================
function initHeader() {
  const header = document.getElementById("site-header");
  const hero = document.querySelector(".hero");

  if (!header) return;

  if (!hero) {
    header.classList.add("is-solid");
    return;
  }

  const aoRolar = () => {
    const limite = hero.offsetHeight * 0.6;
    if (window.scrollY > limite) {
      header.classList.add("is-solid");
    } else {
      header.classList.remove("is-solid");
    }
  };

  aoRolar();
  window.addEventListener("scroll", aoRolar, { passive: true });
}

// ==========================================
// MENU MOBILE
// ==========================================
function initMenuMobile() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  const fechar = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    toggle.classList.remove("is-active");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  const abrir = () => {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    toggle.classList.add("is-active");
    nav.classList.add("is-open");
    document.body.classList.add("nav-open");
  };

  toggle.addEventListener("click", () => {
    const aberto = toggle.getAttribute("aria-expanded") === "true";
    aberto ? fechar() : abrir();
  });

  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", fechar);
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fechar();
  });
}

// ==========================================
// SCROLL SUAVE (para links de âncora dentro da mesma página)
// ==========================================
function initScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (evento) => {
      const destinoId = link.getAttribute("href");
      if (!destinoId || destinoId === "#") return;

      const destino = document.querySelector(destinoId);
      if (!destino) return;

      evento.preventDefault();
      destino.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ==========================================
// MÚSICAS
// ==========================================
function criarCardMusica(musica) {
  const links = [];
  if (musica.spotify) {
    links.push(`<a href="${musica.spotify}" target="_blank" rel="noopener">Spotify</a>`);
  }
  if (musica.youtube) {
    links.push(`<a href="${musica.youtube}" target="_blank" rel="noopener">Ouvir no YouTube</a>`);
  }
  if (musica.outra) {
    links.push(`<a href="${musica.outra}" target="_blank" rel="noopener">${musica.outraLabel || "Ouvir"}</a>`);
  }

  const capa = musica.capa
    ? `<img src="${musica.capa}" alt="Capa de ${musica.nome}" loading="lazy">`
    : `<div class="musica-card__placeholder">${(musica.nome || "?").charAt(0)}</div>`;

  return `
    <article class="musica-card reveal">
      <div class="musica-card__cover">${capa}</div>
      <h3 class="musica-card__nome">${musica.nome || "[NOME DA MÚSICA]"}</h3>
      <p class="musica-card__descricao">${musica.descricao || ""}</p>
      ${links.length ? `<div class="musica-card__links">${links.join("")}</div>` : ""}
    </article>
  `;
}

// Home: prévia (até 4 músicas, qualquer categoria)
function renderMusicas() {
  const track = document.getElementById("musicas-track");
  if (!track) return;

  if (musicas.length === 0) {
    track.innerHTML = '<p class="empty-state">EM BREVE</p>';
    return;
  }

  track.innerHTML = musicas.slice(0, 4).map(criarCardMusica).join("");

  initFallbackImagens();
  observarNovosReveals(track);
}

// Página /musicas: organizado por categoria
function renderMusicasPagina() {
  const grupos = {
    lancamento: document.getElementById("musicas-lancamentos"),
    participacao: document.getElementById("musicas-participacoes"),
    outra: document.getElementById("musicas-outras")
  };

  const algumGrupoExiste = Object.values(grupos).some(Boolean);
  if (!algumGrupoExiste) return;

  const porCategoria = {
    lancamento: musicas.filter((m) => (m.categoria || "outra") === "lancamento"),
    participacao: musicas.filter((m) => m.categoria === "participacao"),
    outra: musicas.filter((m) => !m.categoria || m.categoria === "outra")
  };

  Object.entries(grupos).forEach(([chave, container]) => {
    if (!container) return;
    const lista = porCategoria[chave];
    container.innerHTML = lista.length
      ? lista.map(criarCardMusica).join("")
      : '<p class="empty-state">EM BREVE</p>';
  });

  initFallbackImagens();
  document.querySelectorAll(".musicas-grupo").forEach((grupo) => observarNovosReveals(grupo));
}

// Página /musicas: composições creditadas a Jefferson Santa Rosa
function renderComposicoes() {
  const lista = document.getElementById("composicoes-list");
  if (!lista) return;

  if (composicoes.length === 0) {
    lista.innerHTML = '<li class="empty-state">EM BREVE</li>';
    return;
  }

  lista.innerHTML = composicoes
    .map(
      (item) => `
        <li class="composicao-item reveal">
          <h3 class="composicao-item__nome">${item.nome}</h3>
          <p class="composicao-item__credito">Composição: ${item.credito}</p>
          ${item.nota ? `<p class="composicao-item__nota">${item.nota}</p>` : ""}
        </li>
      `
    )
    .join("");

  observarNovosReveals(lista);
}

// ==========================================
// NO PALCO: galeria de vídeos (Home)
// ==========================================
function criarVideoCard(videoItem, indice) {
  const ehPrincipal = videoItem.destaque;
  const classePrincipal = ehPrincipal ? "video-card--main" : "video-card--side";
  const tag = videoItem.tag ? `<span class="video-card__tag">${videoItem.tag}</span>` : "";
  const titulo = videoItem.titulo || "Vídeo";

  // Para vídeos hospedados no próprio site, o próprio vídeo fornece o quadro
  // de capa: evita um card vazio quando ainda não existe imagem de poster.
  const quadro = videoItem.src
    ? `<video src="${videoItem.src}#t=0.5" preload="metadata" muted playsinline aria-hidden="true" tabindex="-1"></video>`
    : "";

  // O poster, quando existe, fica sobreposto ao quadro do vídeo.
  const poster = videoItem.poster
    ? `<img class="video-card__poster" src="${videoItem.poster}" alt="${titulo}" loading="lazy">`
    : "";

  const capa = quadro + poster;

  return `
    <a class="video-card ${classePrincipal} reveal" data-video-index="${indice}" href="${videoItem.link}" target="_blank" rel="noopener" aria-label="Assistir no YouTube: ${titulo}">
      <span class="video-card__media">${capa}</span>
      <span class="video-card__overlay"></span>
      <span class="video-card__play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </span>
      <span class="video-card__meta">
        ${tag}
        <span class="video-card__title">${titulo}</span>
      </span>
    </a>
  `;
}

function renderPalco() {
  const grid = document.getElementById("palco-grid");
  if (!grid) return;

  const disponiveis = videosDisponiveis();

  if (disponiveis.length === 0) {
    grid.innerHTML = '<p class="empty-state">EM BREVE</p>';
    return;
  }

  // Principal primeiro, demais na sequência.
  const ordenados = [...disponiveis].sort((a, b) => Number(!!b.destaque) - Number(!!a.destaque));
  // O lightbox navega apenas entre os vídeos hospedados no próprio site.
  const locais = ordenados.filter((item) => item.src);

  grid.innerHTML = ordenados.map(criarVideoCard).join("");

  grid.querySelectorAll("[data-video-index]").forEach((botao) => {
    botao.addEventListener("click", () => {
      const item = ordenados[Number(botao.dataset.videoIndex)];
      if (!item) return;

      // Vídeo hospedado fora do site (ex.: YouTube): abre em nova aba.
      if (!item.src && item.link) {
        window.open(item.link, "_blank", "noopener");
        return;
      }

      const indiceLocal = locais.indexOf(item);
      abrirLightboxVideo(indiceLocal >= 0 ? indiceLocal : 0, locais);
    });
  });

  initFallbackImagens();
  observarNovosReveals(grid);
}

// ==========================================
// AGENDA
// ==========================================
function criarItemAgenda(evento) {
  const ingressos = evento.ingressos
    ? `<a class="agenda-item__ingressos" href="${evento.ingressos}" target="_blank" rel="noopener">Ingressos</a>`
    : "";

  return `
    <div class="agenda-item reveal">
      <div class="agenda-item__data">${evento.data || "[DATA]"}</div>
      <div class="agenda-item__local">
        <strong>${evento.evento || evento.local || "[EVENTO]"}</strong>
        <span>${evento.local ? evento.local + " · " : ""}${evento.cidade || "[CIDADE]"}${evento.estado ? ", " + evento.estado : ""}${evento.horario ? " · " + evento.horario : ""}</span>
      </div>
      ${ingressos}
    </div>
  `;
}

// Home: apenas o próximo show (primeiro item da lista)
function renderProximoShow() {
  const container = document.getElementById("proximo-show");
  if (!container) return;

  if (agenda.length === 0) {
    container.innerHTML = '<p class="empty-state">EM BREVE</p>';
    return;
  }

  const proximo = agenda[0];
  container.innerHTML = `
    <div class="proximo-show__card reveal">
      <div class="proximo-show__data">${proximo.data || "[DATA]"}</div>
      <div class="proximo-show__info">
        <h3 class="proximo-show__evento">${proximo.evento || "[EVENTO]"}</h3>
        <p class="proximo-show__local">${proximo.local || "[LOCAL]"}</p>
        <p class="proximo-show__cidade">${proximo.cidade || "[CIDADE]"}${proximo.estado ? ", " + proximo.estado : ""}${proximo.horario ? " · " + proximo.horario : ""}</p>
      </div>
      ${proximo.ingressos ? `<a class="btn btn--outline" href="${proximo.ingressos}" target="_blank" rel="noopener">Ingressos</a>` : ""}
    </div>
  `;

  observarNovosReveals(container);
}

// Página /agenda: lista completa
function renderAgenda() {
  const lista = document.getElementById("agenda-list");
  if (!lista) return;

  if (agenda.length === 0) {
    lista.innerHTML = `
      <p class="empty-state">EM BREVE</p>
      <p class="agenda__aviso">A agenda de novas datas está em atualização. Para contratar o show ou confirmar disponibilidade, <a href="contato.html">fale com a equipe</a>.</p>
    `;
    return;
  }

  lista.innerHTML = agenda.map(criarItemAgenda).join("");
  observarNovosReveals(lista);
}

// Página /agenda: histórico de apresentações já realizadas
function renderHistoricoShows() {
  const lista = document.getElementById("historico-list");
  if (!lista) return;

  if (historicoShows.length === 0) {
    lista.innerHTML = '<li class="empty-state">EM BREVE</li>';
    return;
  }

  lista.innerHTML = historicoShows
    .map(
      (show) => `
        <li class="agenda-item agenda-item--passado reveal">
          <div class="agenda-item__data">${show.data}</div>
          <div class="agenda-item__local">
            <strong>${show.evento}</strong>
            <span>${show.local ? show.local + " · " : ""}${show.cidade}${show.estado ? ", " + show.estado : ""}</span>
            ${show.nota ? `<span class="agenda-item__nota">${show.nota}</span>` : ""}
          </div>
        </li>
      `
    )
    .join("");

  observarNovosReveals(lista);
}

// Página /sobre: linha do tempo da trajetória
function renderTrajetoria() {
  const lista = document.getElementById("trajetoria-lista");
  if (!lista) return;

  if (trajetoria.length === 0) {
    lista.innerHTML = '<li class="empty-state">EM BREVE</li>';
    return;
  }

  lista.innerHTML = trajetoria
    .map(
      (item) => `
        <li class="agenda-item reveal">
          <div class="agenda-item__data">${item.data}</div>
          <div class="agenda-item__local">
            <strong>${item.titulo}</strong>
            <span>${item.texto}</span>
          </div>
          ${item.tipo ? `<span class="agenda-item__tipo">${item.tipo}</span>` : ""}
        </li>
      `
    )
    .join("");

  observarNovosReveals(lista);
}

// ==========================================
// GALERIA / FOTOS
// ==========================================
let galeriaIndiceAtual = 0;
let galeriaAtual = galeria;

// A foto é um botão: abre o lightbox e é acessível por teclado (Enter/Espaço).
function criarItemGaleria(foto, indice) {
  const legenda = foto.alt || "Foto " + (indice + 1);
  return `
    <button type="button" class="galeria-item reveal" data-index="${indice}" aria-label="Ampliar foto: ${legenda}">
      <img src="${foto.src}" alt="${legenda}" loading="lazy">
    </button>
  `;
}

function vincularCliquesGaleria(grid) {
  grid.querySelectorAll(".galeria-item").forEach((item) => {
    item.addEventListener("click", () => abrirLightbox(Number(item.dataset.index)));
  });
}

// Home: prévia (até 6 fotos)
function renderGaleria() {
  const grid = document.getElementById("galeria-grid");
  if (!grid) return;

  galeriaAtual = galeria.slice(0, 6);

  if (galeriaAtual.length === 0) {
    grid.innerHTML = '<p class="empty-state">EM BREVE</p>';
    return;
  }

  grid.innerHTML = galeriaAtual.map(criarItemGaleria).join("");
  vincularCliquesGaleria(grid);

  initFallbackImagens();
  observarNovosReveals(grid);
}

// Página /fotos: galeria completa
function renderGaleriaPagina() {
  const grid = document.getElementById("galeria-grid-completa");
  if (!grid) return;

  galeriaAtual = galeria;

  if (galeriaAtual.length === 0) {
    grid.innerHTML = '<p class="empty-state">EM BREVE</p>';
    return;
  }

  grid.innerHTML = galeriaAtual.map(criarItemGaleria).join("");
  vincularCliquesGaleria(grid);

  initFallbackImagens();
  observarNovosReveals(grid);
}

// ==========================================
// LIGHTBOX (fotos e vídeos)
// ==========================================
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const btnFechar = document.getElementById("lightbox-close");
  const btnAnterior = document.getElementById("lightbox-prev");
  const btnProximo = document.getElementById("lightbox-next");

  if (!lightbox || !btnFechar || !btnAnterior || !btnProximo) return;

  btnFechar.addEventListener("click", fecharLightbox);
  btnAnterior.addEventListener("click", () => navegarLightbox(-1));
  btnProximo.addEventListener("click", () => navegarLightbox(1));

  lightbox.addEventListener("click", (evento) => {
    if (evento.target === lightbox) fecharLightbox();
  });

  document.addEventListener("keydown", (evento) => {
    if (lightbox.hasAttribute("hidden")) return;
    if (evento.key === "Escape") fecharLightbox();
    if (evento.key === "ArrowLeft") navegarLightbox(-1);
    if (evento.key === "ArrowRight") navegarLightbox(1);
  });
}

// Modo atual do lightbox: "fotos" ou "videos".
let lightboxModo = "fotos";
let videosAtual = videos;

function abrirLightbox(indice) {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox || galeriaAtual.length === 0) return;

  lightboxModo = "fotos";
  galeriaIndiceAtual = indice;
  atualizarImagemLightbox();
  lightbox.removeAttribute("hidden");
  requestAnimationFrame(() => lightbox.classList.add("is-open"));
  document.body.classList.add("nav-open");
}

// Abre um vídeo no mesmo lightbox (foto escondida, vídeo exibido).
function abrirLightboxVideo(indice, lista) {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  lightboxModo = "videos";
  videosAtual = lista && lista.length ? lista : videos;
  galeriaIndiceAtual = indice;

  atualizarVideoLightbox();
  lightbox.removeAttribute("hidden");
  requestAnimationFrame(() => lightbox.classList.add("is-open"));
  document.body.classList.add("nav-open");
}

function fecharLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const video = document.getElementById("lightbox-video");
  if (video) {
    video.pause();
    video.removeAttribute("src");
    video.load();
    video.hidden = true;
  }

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("hidden", "");
  document.body.classList.remove("nav-open");
}

function navegarLightbox(direcao) {
  const lista = lightboxModo === "videos" ? videosAtual : galeriaAtual;
  if (lista.length === 0) return;

  galeriaIndiceAtual = (galeriaIndiceAtual + direcao + lista.length) % lista.length;

  if (lightboxModo === "videos") {
    atualizarVideoLightbox();
  } else {
    atualizarImagemLightbox();
  }
}

function atualizarImagemLightbox() {
  const imagem = document.getElementById("lightbox-image");
  const video = document.getElementById("lightbox-video");
  const foto = galeriaAtual[galeriaIndiceAtual];
  if (!imagem || !foto) return;

  if (video) {
    video.pause();
    video.hidden = true;
  }
  imagem.hidden = false;
  imagem.src = foto.src;
  imagem.alt = foto.alt || "";
}

function atualizarVideoLightbox() {
  const imagem = document.getElementById("lightbox-image");
  const video = document.getElementById("lightbox-video");
  const item = videosAtual[galeriaIndiceAtual];
  if (!video || !item) return;

  if (imagem) imagem.hidden = true;
  video.hidden = false;
  video.src = item.src;
  if (item.poster) video.setAttribute("poster", item.poster);

  const tentativa = video.play();
  if (tentativa && typeof tentativa.catch === "function") tentativa.catch(() => {});
}

// ==========================================
// PARALLAX LEVE (hero): respeita reduced-motion
// ==========================================
function initParallax() {
  const hero = document.querySelector(".hero");
  const media = document.querySelector(".hero__media");
  if (!hero || !media) return;

  const prefereReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefereReduzido) return;

  let ticking = false;

  const atualizar = () => {
    const deslocamento = Math.min(window.scrollY, window.innerHeight);
    // Movimento sutil: no máximo ~12% da altura da tela.
    media.style.transform = `translate3d(0, ${deslocamento * 0.12}px, 0)`;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(atualizar);
      }
    },
    { passive: true }
  );
}

// ==========================================
// MÍDIA / IMPRENSA
// ==========================================
function renderMidia() {
  const grid = document.getElementById("midia-grid");
  if (!grid) return;

  if (!midiaCards || midiaCards.length === 0) {
    grid.innerHTML = '<p class="empty-state">EM BREVE</p>';
    return;
  }

  grid.innerHTML = midiaCards
    .map(
      (item) => `
        <article class="midia-card reveal">
          <span class="midia-card__tag">${item.medio}</span>
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
          <div class="midia-card__meta">
            <span>${item.ano}</span>
            <span>Matéria</span>
          </div>
        </article>
      `
    )
    .join("");

  observarNovosReveals(grid);
}

// ==========================================
// REDES SOCIAIS
// ==========================================
const REDES_LABELS = {
  instagram: "Instagram",
  youtube: "YouTube",
  tiktok: "TikTok",
  spotify: "Spotify",
  facebook: "Facebook"
};

function renderRedesSociais() {
  const lista = document.getElementById("redes-list");
  const footerLista = document.getElementById("footer-redes");

  const itens = Object.entries(redesSociais).filter(([, url]) => url);

  const html = itens
    .map(
      ([chave, url]) =>
        `<a href="${url}" target="_blank" rel="noopener" aria-label="${REDES_LABELS[chave] || chave}">${REDES_LABELS[chave] || chave}</a>`
    )
    .join("");

  const htmlFooter = itens
    .map(
      ([chave, url]) =>
        `<li><a href="${url}" target="_blank" rel="noopener">${REDES_LABELS[chave] || chave}</a></li>`
    )
    .join("");

  if (lista) {
    if (itens.length === 0) {
      lista.innerHTML = '<li class="empty-state">EM BREVE</li>';
    } else {
      lista.innerHTML = html
        .replace(/<a /g, "<li><a ")
        .replace(/<\/a>/g, "</a></li>");
    }
  }

  if (footerLista) {
    footerLista.innerHTML = htmlFooter;
  }
}

// ==========================================
// PLATAFORMAS DE STREAMING (página /musicas)
// ==========================================
function renderPlataformas() {
  const lista = document.getElementById("plataformas-list");
  if (!lista) return;

  const itens = plataformas.filter((item) => item.url);

  if (itens.length === 0) {
    lista.innerHTML = '<li class="empty-state">EM BREVE</li>';
    return;
  }

  lista.innerHTML = itens
    .map((item) => `<li><a href="${item.url}" target="_blank" rel="noopener">${item.label}</a></li>`)
    .join("");
}

// ==========================================
// CONTATO
// ==========================================
function renderContato() {
  const grid = document.getElementById("contato-grid");
  if (!grid) return;

  const blocos = [
    {
      titulo: "Shows e Eventos",
      campos: [
        ["Telefone", contato.telefone],
        ["WhatsApp", contato.whatsapp],
        ["E-mail", contato.email]
      ]
    },
    {
      titulo: "Parcerias",
      campos: [["E-mail", contato.assessoria]]
    },
    {
      titulo: "Contato Profissional",
      campos: [["E-mail", contato.imprensa]]
    }
  ];

  grid.innerHTML = blocos
    .map((bloco) => {
      const camposComValor = bloco.campos.filter(([, valor]) => valor);

      const camposHtml = camposComValor.length
        ? camposComValor
            .map(([rotulo, valor]) => {
              const ehEmail = rotulo === "E-mail";
              const ehTelefone = rotulo === "Telefone" || rotulo === "WhatsApp";
              let href = "";
              if (ehEmail) href = `mailto:${valor}`;
              if (ehTelefone) href = `tel:${valor.replace(/\D/g, "")}`;

              return `
                <dt>${rotulo}</dt>
                <dd>${href ? `<a href="${href}">${valor}</a>` : valor}</dd>
              `;
            })
            .join("")
        : `<dt>&nbsp;</dt><dd class="empty-state" style="padding:0;border:0;font-size:0.95rem;">EM BREVE</dd>`;

      return `
        <div class="contato-bloco reveal">
          <h3>${bloco.titulo}</h3>
          <dl>${camposHtml}</dl>
        </div>
      `;
    })
    .join("");

  observarNovosReveals(grid);
}

// ==========================================
// BOTÕES DE CONTRATAÇÃO: prioriza o WhatsApp
// ==========================================
// Se houver número de WhatsApp configurado, os botões "Contrate"
// apontam direto para a conversa. Caso contrário, mantêm o link padrão.
function initBotoesContratacao() {
  const numero = (contato.whatsapp || "").replace(/\D/g, "");
  if (!numero) return;

  const link = `https://wa.me/${numero}`;
  document.querySelectorAll("#btn-contrate, #hero-contrate").forEach((botao) => {
    botao.setAttribute("href", link);
    botao.setAttribute("target", "_blank");
    botao.setAttribute("rel", "noopener");
  });
}

function initContatoForm() {
  const formulario = document.querySelector(".contato-form");
  if (!formulario) return;

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = formulario.querySelector("#contato-nome")?.value?.trim() || "Cliente";
    const email = formulario.querySelector("#contato-email")?.value?.trim() || "";
    const tipoEvento = formulario.querySelector("#contato-evento")?.value || "Evento";
    const mensagem = formulario.querySelector("#contato-mensagem")?.value?.trim() || "";
    const numero = (contato.whatsapp || "").replace(/\D/g, "");

    if (!numero) return;

    const texto = [
      "Olá! Meu nome é " + nome + ".",
      email ? "E-mail: " + email : "",
      "Tipo de evento: " + tipoEvento + ".",
      mensagem ? "Mensagem: " + mensagem : "",
      "Gostaria de saber mais sobre a disponibilidade e o orçamento."
    ].filter(Boolean).join("%0A");

    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, "_blank", "noopener");
    formulario.reset();
  });
}

// ==========================================
// FALLBACK PARA IMAGENS AUSENTES
// ==========================================
function initFallbackImagens() {
  const tratarFalha = (img) => {
    // Imagem ausente/ilegível: esconde a própria imagem e marca o container
    // para que ele também colapse (evita blocos vazios na página).
    img.style.display = "none";
    img.classList.add("is-broken");

    const container = img.closest(
      ".sobre-home__figure, .sobre-foto__figure, .galeria-item, .musica-card__cover, .brand, .video-card__media"
    );
    if (container) container.classList.add("is-empty");
  };

  document.querySelectorAll("img").forEach((img) => {
    if (img.dataset.fallbackBound) return;
    if (!img.getAttribute("src")) return;
    img.dataset.fallbackBound = "true";

    img.addEventListener("error", () => tratarFalha(img));
  });
}

// ==========================================
// ANIMAÇÃO DE ENTRADA (reveal): IntersectionObserver
// ==========================================
let revealObserver;

function initReveal() {
  const prefereReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefereReduzido) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          revealObserver.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

// Observa elementos .reveal inseridos dinamicamente (cards renderizados via JS)
function observarNovosReveals(container) {
  const prefereReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefereReduzido) {
    container.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) return;
  container.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

// ==========================================
// ANO AUTOMÁTICO DO FOOTER
// ==========================================
function initAnoFooter() {
  const anoEl = document.getElementById("footer-year");
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }
}
