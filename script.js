console.log('JS OK');

/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/

// ! OPERAZIONI PRELIMINARI
// Prendo gli elementi dal DOM
const container = document.getElementById('container');

// ! SVOLGIMENTO
// Creo un array di oggetti
const posts = [
    {
      id: 1,
      nomeAutore: 'Napoleone Bonaparte',
      fotoAutore: 'img/gioconda.jpg',
      data: '12-22-2022', 
      testo: 'Per essere dei grandi leader è necessario diventare studiosi del successo e il miglior modo che conosco è quello di conoscere la storia e la biografia degli uomini che già hanno avuto successo. Così la loro esperienza diventa la mia esperienza.',
      immagine: 'img/cappella-sistina.jpg',
      likes: '800',
    }, {
      id: 2,
      nomeAutore: 'Leonardo Da Vinci',
      fotoAutore: 'img/klimt.jpg',
      data: '12-22-2022', 
      testo: 'Per essere dei grandi leader è necessario diventare studiosi del successo e il miglior modo che conosco è quello di conoscere la storia e la biografia degli uomini che già hanno avuto successo. Così la loro esperienza diventa la mia esperienza.',
      immagine: 'img/notte-stellata.jpg',
      likes: '800',
    }, {
      id: 3,
      nomeAutore: 'George Washington',
      fotoAutore: 'img/urlo.jpg',
      data: '12-22-2022', 
      testo: 'Per essere dei grandi leader è necessario diventare studiosi del successo e il miglior modo che conosco è quello di conoscere la storia e la biografia degli uomini che già hanno avuto successo. Così la loro esperienza diventa la mia esperienza.',
      immagine: 'img/parchetto-vintage.jpg',
      likes: '800',
    }, {
      id: 4,
      nomeAutore: 'Alessandro Magno',
      fotoAutore: 'img/dalì.jpg',
      data: '12-22-2022', 
      testo: 'Per essere dei grandi leader è necessario diventare studiosi del successo e il miglior modo che conosco è quello di conoscere la storia e la biografia degli uomini che già hanno avuto successo. Così la loro esperienza diventa la mia esperienza.',
      immagine: 'img/guernica.jpg',
      likes: '800',
    }, {
      id: 5,
      nomeAutore: 'Adolf Hitler',
      fotoAutore: 'img/goya.jpg',
      data: '12-22-2022', 
      testo: 'Per essere dei grandi leader è necessario diventare studiosi del successo e il miglior modo che conosco è quello di conoscere la storia e la biografia degli uomini che già hanno avuto successo. Così la loro esperienza diventa la mia esperienza.',
      immagine: 'img/nascita-venere.jpg',
      likes: '800',
    }
  ];

    
// Stampare su console, per ogni post, le varie informazioni.
let content = '';
for (let post of posts){
  // Inserisco contenuti nel DOM
  content += `
  <div class="post">
  <div class="post__header">
    <div class="post-meta">
      <div class="post-meta__icon">
        <img class="profile-pic" src="${posts.fotoAutore}" alt="${posts.nomeAutore}">
      </div>
      <div class="post-meta__data">
        <div class="post-meta__author">${posts.nomeAutore}</div>
        <div class="post-meta__time">${posts.data}</div>
      </div>
    </div>
  </div>
  <div class="post__text">
  ${posts.testo}
  </div>
  <div class="post__image">
    <img src="${posts.immagine}" alt="${posts.nomeAutore}">
  </div>
  <div class="post__footer">
    <div class="likes js-likes">
      <div class="likes__cta">
        <button class="like-button js-like-button" href="#" data-postid="${posts.id}">
          <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
          <span class="like-button__label">Mi Piace</span>
        </button>
      </div>
      <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">alt="${posts.likes}"</b> persone</div>
    </div>
  </div>
</div>
    `;
}

// Stampo in pagina
 container.innerHTML = content;