
const query = location.search;
const urlParams = new URLSearchParams(query);
const currentData = JSON.parse(localStorage.getItem('data'))[urlParams.get('q')]

$('#faq-header').innerHTML = currentData.title;

(function renderFAQ() {
  const list = currentData.contents.map((it, id) => `
  <div class="faq-panel">
    <div class="faq-panel-header">
      ${it.title}
      <button class="fqa-button">
        <svg>
          <use href="#cross" />
        </svg>
      </button>
    </div>
    <div class="faq-panel-body">
      <div class="x-collapse">
        <div class="content">
          ${it.detail}
        </div>
      </div>
    </div>
  </div>
  `).join('');
  $('#collapse-root').innerHTML = list;
})();


$$('.faq-panel').forEach(e => {
  let expand = false;
  const [header, body] = e.children;
  const expandBtn = header.children[0];
  expandBtn.addEventListener('click', () => {
    body.classList.toggle('expand');
    expandBtn.classList.toggle('expand');
    if(body.clientHeight) {
      body.style.height = 0;
    } else {
      body.style.height = body.children[0].clientHeight + 'px'
    }
  })
})