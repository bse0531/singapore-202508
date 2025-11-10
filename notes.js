
// Simple localStorage notes (offline, per-browser)
const KEY = 'trip-notes-v1';
const form = document.getElementById('noteForm');
const list = document.getElementById('notesList');

function load(){
  try{ return JSON.parse(localStorage.getItem(KEY)) || [] }catch{ return [] }
}
function save(items){
  localStorage.setItem(KEY, JSON.stringify(items));
}
function render(){
  const items = load();
  list.innerHTML = '';
  if(items.length === 0){
    const p = document.createElement('p');
    p.className = 'muted';
    p.textContent = '아직 메모가 없어요.';
    list.appendChild(p);
    return;
  }
  items.forEach((item, idx)=>{
    const card = document.createElement('div');
    card.className = 'note-item';
    card.innerHTML = `<strong>${item.title}</strong><p>${item.body}</p>
      <div style="display:flex;gap:8px">
        <button class="btn small" data-edit="${idx}">수정</button>
        <button class="btn small outline" data-del="${idx}">삭제</button>
      </div>`;
    list.appendChild(card);
  });
}
render();

form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const title = document.getElementById('noteTitle').value.trim();
  const body = document.getElementById('noteBody').value.trim();
  if(!title || !body) return;
  const items = load();
  items.unshift({title, body, ts: Date.now()});
  save(items);
  form.reset();
  render();
});

list?.addEventListener('click', (e)=>{
  const del = e.target.closest('[data-del]');
  const edit = e.target.closest('[data-edit]');
  const items = load();
  if(del){
    const idx = +del.dataset.del;
    items.splice(idx,1);
    save(items); render(); return;
  }
  if(edit){
    const idx = +edit.dataset.edit;
    const t = prompt('제목 수정', items[idx].title);
    if(t===null) return;
    const b = prompt('내용 수정', items[idx].body);
    if(b===null) return;
    items[idx].title = t; items[idx].body = b;
    save(items); render(); return;
  }
});
