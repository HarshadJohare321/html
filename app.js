const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/HarshadJohare321/html/copilot/create-static-html-docs-portal';

const modules = [
  'Identity_and_Access',
  'Vendor_Management',
  'Catalog',
  'Inventory',
  'Cart',
  'Ordering',
  'Payment',
  'Delivery',
  'Pickup',
  'Dispute',
  'Finance',
  'Notification',
  'Audit'
].map((key) => ({
  key,
  name: key.replaceAll('_', ' '),
  useCase: `${GITHUB_RAW_URL}/USE_CASES_${key}_v1.md`,
  userStory: `${GITHUB_RAW_URL}/USER_STORIES_${key}_v1.md`
}));

const grid = document.getElementById('moduleGrid');
const searchInput = document.getElementById('searchInput');

function render(filter = '') {
  const term = filter.trim().toLowerCase();
  const filtered = modules.filter((module) => {
    return (
      module.name.toLowerCase().includes(term) ||
      module.useCase.toLowerCase().includes(term) ||
      module.userStory.toLowerCase().includes(term)
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
          <summary>${module.name}</summary>
          <div class="module-links">
            <a class="doc-link" href="${module.useCase}" target="_blank" rel="noopener">Use Cases</a>
            <a class="doc-link" href="${module.userStory}" target="_blank" rel="noopener">User Stories</a>
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