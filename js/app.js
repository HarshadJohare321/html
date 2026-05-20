const modules = [
  { name: 'Identity and Access', folder: 'identity-access' },
  { name: 'Vendor Management', folder: 'vendor-management' },
  { name: 'Catalog', folder: 'catalog' },
  { name: 'Inventory', folder: 'inventory' },
  { name: 'Cart', folder: 'cart' },
  { name: 'Ordering', folder: 'ordering' },
  { name: 'Payment', folder: 'payment' },
  { name: 'Delivery', folder: 'delivery' },
  { name: 'Pickup', folder: 'pickup' },
  { name: 'Dispute', folder: 'dispute' },
  { name: 'Finance', folder: 'finance' },
  { name: 'Notification', folder: 'notification' },
  { name: 'Audit', folder: 'audit' }
].map(item => ({
  ...item,
  useCases: `docs/modules/${item.folder}/USE_CASES_${item.folder.replace(/-/g, '_')}_v1.md`,
  userStories: `docs/modules/${item.folder}/USER_STORIES_${item.folder.replace(/-/g, '_')}_v1.md`
}));

const grid = document.getElementById('moduleGrid');
const searchInput = document.getElementById('searchInput');

function render(filter = '') {
  const term = filter.trim().toLowerCase();
  const filtered = modules.filter((module) => {
    return (
      module.name.toLowerCase().includes(term) ||
      module.useCases.toLowerCase().includes(term) ||
      module.userStories.toLowerCase().includes(term)
    );
  });

  if (!filtered.length) {
    grid.innerHTML = '<p class="empty-state">No modules match your search.</p>';
    return;
  }

  grid.innerHTML = filtered
    .map(
      (module) => `
      <article class="module">
        <details>
          <summary>📦 ${module.name}</summary>
          <div class="module-links">
            <a class="doc-link" href="${module.useCases}" target="_blank" rel="noopener">📄 Use Cases</a>
            <a class="doc-link" href="${module.userStories}" target="_blank" rel="noopener">👥 User Stories</a>
          </div>
        </details>
      </article>
    `
    )
    .join('');
}

searchInput.addEventListener('input', (event) => {
  render(event.target.value);
});

render();