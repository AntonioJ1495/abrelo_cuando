// main.js
// Lógica para la app "Ábrelo cuando..."

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const btnSiguiente = document.getElementById('btn-siguiente');

  btnSiguiente.addEventListener('click', () => {
    mostrarPantallaSobres();
  });

  // Muestra la segunda pantalla (placeholder de sobres)
  function mostrarPantallaSobres() {
    app.innerHTML = `
      <h2 class="titulo">Elige un sobre para abrir 💌</h2>
      <div class="grid-sobres">
        <div class="sobre rojo"><span class="sobre-titulo">¿Estás feliz? 😊</span></div>
        <div class="sobre rojo"><span class="sobre-titulo">¿Estás pasando por un momento difícil? 😞</span></div>
        <div class="sobre rojo"><span class="sobre-titulo">¿Estás triste? 😢</span></div>
        <div class="sobre negro"><span class="sobre-titulo">¿Estás aburrida? 💤</span></div>
        <div class="sobre negro"><span class="sobre-titulo">¿Me extrañas? 🥺</span></div>
        <div class="sobre negro"><span class="sobre-titulo">¿Tuviste un mal día? 😖</span></div>
        <div class="sobre azul"><span class="sobre-titulo">¿Te sientes mal por tu físico? 💖</span></div>
        <div class="sobre azul"><span class="sobre-titulo">¿Te sientes rara? 🤔</span></div>
        <div class="sobre azul"><span class="sobre-titulo">¿No puedes dormir? 🌙</span></div>
      </div>
    `;
  }

  // Delegar clicks en sobres
  app.addEventListener('click', function(e) {
    if (e.target.classList.contains('sobre')) {
      const sobres = [
        {
          titulo: '¿Estás feliz? 😊',
          clase: 'carta-feliz',
          fondo: 'alegre',
          emoji: '😊',
          placeholder: 'Escribe tu mensaje alegre aquí...'
        },
        {
          titulo: '¿Estás pasando por un momento difícil? 😞',
          clase: 'carta-animo',
          fondo: 'animo',
          emoji: '😞',
          placeholder: 'Escribe palabras de ánimo...'
        },
        {
          titulo: '¿Estás triste? 😢',
          clase: 'carta-triste',
          fondo: 'triste',
          emoji: '😢',
          placeholder: 'Escribe algo reconfortante...'
        },
        {
          titulo: '¿Estás aburrida? 💤',
          clase: 'carta-aburrida',
          fondo: 'aburrida',
          emoji: '💤',
          placeholder: 'Escribe algo divertido...'
        },
        {
          titulo: '¿Me extrañas? 🥺',
          clase: 'carta-extranas',
          fondo: 'extranas',
          emoji: '🥺',
          placeholder: 'Escribe cuánto la extrañas...'
        },
        {
          titulo: '¿Tuviste un mal día? 😖',
          clase: 'carta-mal-dia',
          fondo: 'mal-dia',
          emoji: '😖',
          placeholder: 'Escribe algo para animar...'
        },
        {
          titulo: '¿Te sientes mal por tu físico? 💖',
          clase: 'carta-fisico',
          fondo: 'fisico',
          emoji: '💖',
          placeholder: 'Escribe palabras de amor propio...'
        },
        {
          titulo: '¿Te sientes rara? 🤔',
          clase: 'carta-rara',
          fondo: 'rara',
          emoji: '🤔',
          placeholder: 'Escribe algo especial...'
        },
        {
          titulo: '¿No puedes dormir? 🌙',
          clase: 'carta-noche',
          fondo: 'noche',
          emoji: '🌙',
          placeholder: 'Escribe palabras para la noche...'
        }
      ];
      const index = Array.from(document.querySelectorAll('.sobre')).indexOf(e.target);
      mostrarCarta(index);
    }
  });

  // Función para mostrar carta animada
  function mostrarCarta(idx) {
    const sobres = [
      {
        titulo: '¿Estás feliz? 😊',
        clase: 'carta-feliz',
        fondo: 'alegre',
        emoji: '😊',
        placeholder: 'Escribe tu mensaje alegre aquí...'
      },
      {
        titulo: '¿Estás pasando por un momento difícil? 😞',
        clase: 'carta-animo',
        fondo: 'animo',
        emoji: '😞',
        placeholder: 'Escribe palabras de ánimo...'
      },
      {
        titulo: '¿Estás triste? 😢',
        clase: 'carta-triste',
        fondo: 'triste',
        emoji: '😢',
        placeholder: 'Escribe algo reconfortante...'
      },
      {
        titulo: '¿Estás aburrida? 💤',
        clase: 'carta-aburrida',
        fondo: 'aburrida',
        emoji: '💤',
        placeholder: 'Escribe algo divertido...'
      },
      {
        titulo: '¿Me extrañas? 🥺',
        clase: 'carta-extranas',
        fondo: 'extranas',
        emoji: '🥺',
        placeholder: 'Escribe cuánto la extrañas...'
      },
      {
        titulo: '¿Tuviste un mal día? 😖',
        clase: 'carta-mal-dia',
        fondo: 'mal-dia',
        emoji: '😖',
        placeholder: 'Escribe algo para animar...'
      },
      {
        titulo: '¿Te sientes mal por tu físico? 💖',
        clase: 'carta-fisico',
        fondo: 'fisico',
        emoji: '💖',
        placeholder: 'Escribe palabras de amor propio...'
      },
      {
        titulo: '¿Te sientes rara? 🤔',
        clase: 'carta-rara',
        fondo: 'rara',
        emoji: '🤔',
        placeholder: 'Escribe algo especial...'
      },
      {
        titulo: '¿No puedes dormir? 🌙',
        clase: 'carta-noche',
        fondo: 'noche',
        emoji: '🌙',
        placeholder: 'Escribe palabras para la noche...'
      }
    ];
    const sobre = sobres[idx];
    let extraContent = '';
    // Sopa de letras solo para la carta aburrida
    if (sobre.clase === 'carta-aburrida') {
      extraContent = `<div id="sopa-letras-container"></div>`;
    }
    // Campo para mostrar foto fija solo para la carta físico
    if (sobre.clase === 'carta-fisico') {
      extraContent = `
        <div class="subir-foto-container">
          <div class="foto-decorada">
            <span class="emoji-foto emoji-foto-izq">💖</span>
            <div id="preview-foto" class="preview-foto">
              <img src="ella.jpg" alt="Foto de ella" class="img-preview">
            </div>
            <span class="emoji-foto emoji-foto-der">✨</span>
          </div>
        </div>
      `;
    }
    // Decoraciones flotantes dentro de la carta
    const decoraciones = `
      <span class="decoracion-flotante" style="left:1.2rem;top:2.2rem;">💖</span>
      <span class="decoracion-flotante decoracion-flotante2">✨</span>
      <span class="decoracion-flotante decoracion-flotante3">💌</span>
      <span class="decoracion-costado decoracion-costado-izq">💕</span>
      <span class="decoracion-costado decoracion-costado-der">🌸</span>
    `;
    // Mensajes predeterminados para cada carta
    const cartasPredeterminadas = [
      // Carta 1: ¿Estás feliz? 😊
      `<p>Hola, mi princesita 💖</p>
<p>Si estás leyendo esto, es porque hay una sonrisa en tu rostro… y solo puedo imaginar lo preciosa que te ves cuando estás así. Qué ganas de poder verte en este momento, de tomar tu mano y decirte que esa alegría que sientes también me hace feliz a mí. Porque tu felicidad es la mía, porque no hay nada que me haga más completo que saber que tú estás bien, tranquila, llena de luz.</p>
<p>Quiero que sepas que en los momentos felices también estoy contigo. No solo quiero abrazarte cuando estés triste, también quiero estar a tu lado para celebrar cada victoria, cada pequeña alegría que te saque una sonrisa. Porque tú mereces días hermosos, risas que no terminan y motivos infinitos para sentirte afortunada.</p>
<p>Gracias por existir, por ser como eres, por tener ese corazón tan noble, tan lleno de amor. Eres mi lugar seguro, mi alegría, mi motor para todo. Nunca olvides que, aunque estemos lejos, te pienso en cada momento. Eres el pensamiento bonito que me acompaña a todas partes.</p>
<p>Disfruta este momento, mi amor. Vívelo, celébralo… y si en medio de tu felicidad pensaste en mí, gracias por compartirla conmigo.<br>Te amo, más de lo que las palabras saben decir.</p>
<p>Con todo mi corazón, de quien te piensa cada dia💌</p>`,

      // Carta 2: ¿Estás pasando por un momento difícil? 😞
      `<p>Hola, amor 🖤</p>
<p>Me duele saber que quizás no la estás pasando bien ahora… Quisiera estar ahí, cerca de ti, tomarte la mano, abrazarte sin decir una sola palabra hasta que todo vuelva a estar bien. Pero si no puedo hacerlo físicamente, quiero hacerlo con estas palabras, con este pedacito de mí que está contigo aunque no me veas.</p>
<p>Recuerda que no estás sola. Estoy contigo en cada pensamiento, en cada silencio, en cada lágrima que intentes esconder. Te acompaño desde la distancia, te abrazo con cada latido. Eres más fuerte de lo que crees, más valiente de lo que piensas. Y sé que vas a salir adelante como siempre lo haces, con ese corazón inmenso que nunca se rinde.</p>
<p>Permítete sentir, llorar si lo necesitas, descansar si lo requiere tu alma. No tienes que cargar con todo tú sola. Tienes este espacio, esta carta, y tienes mi amor, que es tuyo sin condiciones.</p>
<p>No importa cuán difícil se ponga el camino, aquí estoy. Siempre. Y cuando todo pase —porque pasará— aquí estaré también, para sonreír contigo.</p>
<p>Tú eres mi guerrera, mi amor eterno.<br>Nunca dudes de lo importante que eres para mí.</p>
<p>Te abrazo con todo 🌌</p>`,

      // Carta 3: ¿Estás triste? 😢
      `<p>Mi corazón 💔</p>
<p>Leer esto significa que hay algo que te pesa… y no sabes cuánto daría por estar justo ahora a tu lado, sostener tu carita, secar tus lágrimas y decirte: "Todo va a estar bien, mi amor". Porque va a estarlo. Porque aunque ahora duela, aunque el mundo parezca un poco más gris, esto va a pasar.</p>
<p>Te entiendo, y aunque no sepa exactamente por qué estás así, quiero que sepas que aquí me tienes. Siempre. Cuando no sepas qué hacer, recuerda que puedes cerrar los ojos y pensar en mí, en nosotros, en los momentos donde todo era calma… y volverán, lo prometo.</p>
<p>No eres débil por sentir. Al contrario, eres tan valiente por seguir adelante incluso cuando el mundo se siente pesado. Si pudiera, te envolvería en una cobijita, te daría chocolate caliente y pondría una película para que solo existiera paz en tu alrededor. Pero por ahora, tengo estas letras para darte calor, para decirte que no hay oscuridad que dure para siempre.</p>
<p>Llora si necesitas. Descansa. Pero nunca olvides que vales más de lo que tú misma crees.</p>
<p>Aquí estoy, amor. Siempre contigo.<br>Y más cerca de lo que imaginas. ❤️</p>`,

      // Carta 4: ¿Estás aburrida? 💤
      `<p>Mi princesita inquieta 💫</p>
<p>¡Vaya! ¿El tiempo va lento hoy? ¿Te sientes atrapada en la rutina o simplemente no sabes qué hacer? Bueno, aquí estoy yo, desde este rincón, para decirte que aún los días más monótonos tienen algo hermoso si tú estás en ellos.</p>
<p>Te propongo un juego, una pequeña aventura en letras:<br>Hay una sopa de letras esperándote abajo 🧩. Pero no es cualquier sopa, no…<br>Dentro de ella están escondidas unas palabras muy muy lindas: <strong>AMOR, SENTIMIENTOS, EMOCIONES, RESPETO, CARIÑO, FELICIDAD, NOVIOS, BESO</strong>.<br>Cada una representa algo que compartimos, un momento, una mirada, una risa.<br>Encuentra cada palabra y piensa en lo que significa para ti... para nosotros.</p>
<p>Y si al terminar aún quieres más, recuerda: te tengo preparada otra carta, otra sorpresa, o simplemente puedes cerrar los ojos y pensar en el último momento bonito que tuvimos. Estoy seguro de que tu sonrisa aparecerá sola.</p>
<p>Tú haces mágicos incluso los días aburridos.<br>Te amo. Mucho. 💞</p>`,

      // Carta 5: ¿Me extrañas? 🥺
      `<p>Hola, corazón 🤍</p>
<p>No sabes lo mucho que me emociona saber que me estás pensando… porque yo también te extraño. Más de lo que imaginas. A veces me sorprendo quedándome en silencio, recordando cómo sonríes, cómo me miras, cómo tomas mi mano y haces que todo lo demás deje de importar.</p>
<p>Estar lejos no es fácil, lo sé. Pero si estamos conectados por el alma, la distancia solo es un detalle. Imagíname justo ahora cerrando los ojos, deseando estar contigo, abrazarte por la espalda y decirte bajito: "Ya estoy aquí, amor".</p>
<p>Esta carta es para recordarte que sigo aquí. Que no me voy. Que cada cosa que me pasa quisiera contarla contigo al lado. Y que tú eres lo mejor que me ha pasado.</p>
<p>Así que sí, amor… yo también te extraño.<br>Y te prometo que cada vez que estemos lejos, siempre encontrarás en estas palabras un cachito de mí.</p>
<p>Te amo a cada instante 🕊️</p>`,

      // Carta 6: ¿Tuviste un mal día? 😖
      `<p>Hola, mi vida 🌧️</p>
<p>Si el día te trató mal, si todo se sintió cuesta arriba, si nada salió como esperabas… quiero que sepas que está bien. Que no tienes que ser fuerte todo el tiempo. Que incluso los días grises necesitan de un respiro, de un "ya basta", de un "te entiendo".</p>
<p>Aquí estoy, con estas letras, para abrazarte como lo haría con todo mi cuerpo. Quiero que imagines que llegas a casa, te tumbas en la cama y yo me acerco a ti en silencio, te acaricio el cabello y solo te digo: "Descansa, mi amor. Ya pasó".</p>
<p>Los días malos no te definen. Lo que te define es cómo, incluso después de ellos, sigues siendo la mujer más maravillosa que he conocido. No estás sola. Yo estoy aquí para recordarte quién eres y cuánto vales.</p>
<p>Mañana será otro día. Uno nuevo. Y yo estaré aquí también.<br>Siempre para ti. Siempre contigo. 💗</p>`,

      // Carta 7: ¿Te sientes mal por tu físico? 💖
      `<p>Mi princesita hermosa ✨</p>
<p>Ojalá pudiera verte ahora mismo. Verte como yo te veo. Porque si lo hicieras, si pudieras por un segundo tener mis ojos, entenderías por qué te llamo perfecta.</p>
<p>No existe un solo rincón de ti que no adore. Tu sonrisa, tus ojos, tu forma de moverte, hasta cuando crees que no luces bien… para mí, siempre luces preciosa. Porque no es solo lo de afuera, es todo lo que eres: tu dulzura, tu energía, tu ternura, tu magia.</p>
<p>No dejes que el mundo te haga sentir menos. Tú no viniste a encajar, viniste a brillar. Y para mí, tú eres la más brillante de todas.</p>
<p>Abajo puedes poner una foto tuya que te encante. Y cada vez que la mires, recuerda: esa mujer que ves ahí es la razón por la que yo sonrío todos los días.</p>
<p>Eres y siempre serás hermosa.<br>Te amo con los ojos del alma. 💕</p>`,

      // Carta 8: ¿Te sientes rara? 🤔
      `<p>Amor mío 🌙</p>
<p>¿Hoy no sabes ni cómo te sientes? ¿Te sientes desconectada, fuera de lugar, como si algo no encajara? Está bien. No siempre tenemos que tener respuestas.</p>
<p>Hay días donde todo se siente extraño. Donde el corazón late distinto y la mente se llena de preguntas que no sabemos responder. Pero incluso en esos días, quiero que sepas que yo estoy contigo. Que aunque tú no te entiendas, yo te entiendo. Y te amo así, completa, en cada versión.</p>
<p>Tómate un momento, respira profundo. No trates de forzarlo. A veces solo hay que dejar que el alma hable bajito. Y en ese silencio, te juro que me encontrarás.</p>
<p>No estás sola. Nunca.<br>Aquí estoy, siendo tu calma, tu refugio y tu paz.</p>
<p>Con todo mi amor,<br>Tu lugar seguro. 🌌</p>`,

      // Carta 9: ¿No puedes dormir? 🌙
      `<p>Hola, mi amor de estrellas 🌠</p>
<p>Si estás leyendo esto de noche, con los ojos pesados y el corazón inquieto… ven, acércate, que te quiero arrullar con palabras.</p>
<p>Cierra los ojos un momento y escucha mi voz en tu mente: "Estoy contigo. Todo está bien. No tienes que preocuparte ahora. Yo cuido de ti". Imagina que me recuesto a tu lado, te abrazo por detrás, y con un susurro te digo: "Duerme tranquila, corazón. Estoy aquí".</p>
<p>El mundo puede esperar. Mañana será otro día. Hoy solo quiero que descanses. Que tus pensamientos se calmen. Que tu alma encuentre su paz.</p>
<p>Y si no puedes dormir… entonces quédate un rato conmigo aquí.<br>No hay lugar más seguro que este: tú y yo, en palabras que también abrigan.</p>
<p>Dulces sueños, mi vida.<br>Te amo hasta en sueños. 🌙💤</p>`
    ];
    app.innerHTML = `
      <div class="carta-animada ${sobre.clase}">
        <div class="carta-flip">
          <div class="carta-front"></div>
          <div class="carta-back ${sobre.fondo}">
            ${decoraciones}
            <h3 class="carta-titulo">${sobre.titulo}</h3>
            <div class="carta-emoji">${sobre.emoji}</div>
            <div class="carta-contenido">${cartasPredeterminadas[idx]}</div>
            ${extraContent}
            <button class="btn-principal btn-volver">Volver</button>
          </div>
        </div>
      </div>
    `;
    setTimeout(() => {
      document.querySelector('.carta-animada').classList.add('abierta');
    }, 100);
    document.querySelector('.btn-volver').onclick = () => mostrarPantallaSobres();
    // Si es la carta aburrida, inicializar sopa de letras
    if (sobre.clase === 'carta-aburrida') {
      crearSopaDeLetras();
    }
    // Si es la carta físico, inicializar subida de foto
    // Eliminar inicializarSubidaFoto para carta-fisico
  }

  // Sopa de letras interactiva mejorada para la carta aburrida
  function crearSopaDeLetras() {
    const palabras = [
      'AMOR', 'SENTIMIENTOS', 'EMOCIONES', 'RESPETO', 'CARIÑO', 'FELICIDAD', 'NOVIOS', 'BESO'
    ];
    // Generar una grilla vacía de 14x14
    const size = 14;
    let grid = Array.from({ length: size }, () => Array(size).fill(''));
    // Palabras y direcciones posibles
    const directions = [
      { x: 1, y: 0 },   // derecha
      { x: -1, y: 0 },  // izquierda
      { x: 0, y: 1 },   // abajo
      { x: 0, y: -1 },  // arriba
      { x: 1, y: 1 },   // diagonal abajo-derecha
      { x: -1, y: 1 },  // diagonal abajo-izquierda
      { x: 1, y: -1 },  // diagonal arriba-derecha
      { x: -1, y: -1 }  // diagonal arriba-izquierda
    ];
    // Coloca una palabra en la grilla en una dirección aleatoria
    function colocarPalabra(palabra) {
      let colocado = false;
      let intentos = 0;
      while (!colocado && intentos < 100) {
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const startX = Math.floor(Math.random() * size);
        const startY = Math.floor(Math.random() * size);
        let x = startX, y = startY;
        let puede = true;
        for (let l = 0; l < palabra.length; l++) {
          if (
            x < 0 || x >= size || y < 0 || y >= size ||
            (grid[y][x] && grid[y][x] !== palabra[l])
          ) {
            puede = false;
            break;
          }
          x += dir.x;
          y += dir.y;
        }
        if (puede) {
          x = startX; y = startY;
          for (let l = 0; l < palabra.length; l++) {
            grid[y][x] = palabra[l];
            x += dir.x;
            y += dir.y;
          }
          colocado = true;
        }
        intentos++;
      }
    }
    palabras.forEach(colocarPalabra);
    // Rellenar espacios vacíos con letras aleatorias
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (!grid[i][j]) {
          grid[i][j] = letras[Math.floor(Math.random() * letras.length)];
        }
      }
    }
    // Renderizar la sopa de letras
    const container = document.getElementById('sopa-letras-container');
    container.innerHTML = `<div class="sopa-letras-titulo">Sopa de letras: <span class="sopa-palabras">${palabras.join(', ')}</span></div><div class="sopa-letras-grid"></div><div class="sopa-letras-estado"></div>`;
    const gridDiv = container.querySelector('.sopa-letras-grid');
    gridDiv.style.display = 'grid';
    gridDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridDiv.style.gap = '2px';
    // Renderizar letras
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const cell = document.createElement('div');
        cell.className = 'sopa-letra';
        cell.textContent = grid[i][j];
        cell.dataset.row = i;
        cell.dataset.col = j;
        gridDiv.appendChild(cell);
      }
    }
    // Selección de letras mejorada
    let seleccion = [];
    let seleccionando = false;
    let startCell = null;
    let palabrasEncontradas = [];
    gridDiv.addEventListener('mousedown', e => {
      if (e.target.classList.contains('sopa-letra')) {
        seleccionando = true;
        seleccion = [e.target];
        startCell = e.target;
        e.target.classList.add('sopa-letra-sel');
      }
    });
    gridDiv.addEventListener('mouseover', e => {
      if (seleccionando && e.target.classList.contains('sopa-letra')) {
        // Solo permitir selección en línea recta
        if (!seleccion.includes(e.target)) {
          const last = seleccion[seleccion.length - 1];
          const dx = e.target.dataset.col - startCell.dataset.col;
          const dy = e.target.dataset.row - startCell.dataset.row;
          if (seleccion.length === 1 ||
            (Math.abs(dx) === Math.abs(dy) || dx === 0 || dy === 0)) {
            seleccion.push(e.target);
            e.target.classList.add('sopa-letra-sel');
          }
        }
      }
    });
    document.addEventListener('mouseup', () => {
      if (seleccionando) {
        const palabra = seleccion.map(c => c.textContent).join('');
        const palabraRev = seleccion.map(c => c.textContent).reverse().join('');
        let encontrada = null;
        for (let p of palabras) {
          if ((palabra === p || palabraRev === p) && !palabrasEncontradas.includes(p)) {
            encontrada = p;
            break;
          }
        }
        if (encontrada) {
          seleccion.forEach(c => c.classList.add('sopa-letra-ok'));
          palabrasEncontradas.push(encontrada);
          mostrarEstadoSopa(`¡Encontraste: ${encontrada}! 🎉`);
          // Tachar palabra encontrada
          const palabrasSpan = container.querySelector('.sopa-palabras');
          palabrasSpan.innerHTML = palabras.map(w => palabrasEncontradas.includes(w) ? `<span style='text-decoration:line-through;opacity:.5;'>${w}</span>` : w).join(', ');
          // Animación de victoria si todas encontradas
          if (palabrasEncontradas.length === palabras.length) {
            container.querySelector('.sopa-letras-estado').innerHTML = '<span style="font-size:1.3rem;">¡Felicidades! 🎊 Has encontrado todas las palabras.</span>';
            gridDiv.classList.add('sopa-letras-victoria');
          }
        } else {
          seleccion.forEach(c => c.classList.remove('sopa-letra-sel'));
          mostrarEstadoSopa('Sigue buscando...');
        }
        seleccion = [];
        seleccionando = false;
        startCell = null;
      }
    });
    function mostrarEstadoSopa(msg) {
      container.querySelector('.sopa-letras-estado').textContent = msg;
      setTimeout(() => {
        container.querySelector('.sopa-letras-estado').textContent = '';
      }, 1500);
    }
  }

  // Subida de foto y previsualización
  // Eliminar inicializarSubidaFoto para carta-fisico

  // Fondo animado de corazones
  function crearCorazonesAnimados() {
    const fondo = document.querySelector('.fondo-corazones');
    if (!fondo) return;
    fondo.innerHTML = '';
    const colores = ['#e07a8c', '#f7c6c7', '#e0b7d7', '#ffe3e3', '#ffd6e0', '#b3c6ff'];
    for (let i = 0; i < 18; i++) {
      const corazon = document.createElement('div');
      corazon.className = 'corazon-animado';
      corazon.textContent = '💖';
      corazon.style.left = Math.random() * 100 + 'vw';
      corazon.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
      corazon.style.animationDuration = (7 + Math.random() * 5) + 's';
      corazon.style.opacity = 0.12 + Math.random() * 0.18;
      corazon.style.color = colores[Math.floor(Math.random() * colores.length)];
      corazon.style.animationDelay = (Math.random() * 6) + 's';
      fondo.appendChild(corazon);
    }
  }
  crearCorazonesAnimados();
}); 
