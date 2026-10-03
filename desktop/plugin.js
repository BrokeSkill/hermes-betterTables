const ID = 'nice-tables'
const STYLE_ID = `${ID}-styles`

const CSS = `
.aui-md-table{
  border-radius:.625rem;
  border-color:var(--ui-stroke-secondary);
  box-shadow:0 1px 2px rgba(0,0,0,.05),0 10px 28px -20px rgba(0,0,0,.45);
}
.aui-md-table>table{font-variant-numeric:tabular-nums}
.aui-md-table thead{background:color-mix(in srgb,var(--ui-accent) 10%,transparent)}
.aui-md-table thead tr{border-bottom:1px solid color-mix(in srgb,var(--ui-accent) 35%,transparent)}
.aui-md-table thead th{
  padding:.5rem .75rem;
  font-size:.6875rem;
  font-weight:600;
  letter-spacing:.06em;
  text-transform:uppercase;
  color:var(--ui-text-secondary);
}
.aui-md-table tbody td{padding:.5rem .75rem}
.aui-md-table tbody tr{transition:background-color .12s ease}
.aui-md-table tbody tr:nth-child(even){background:color-mix(in srgb,var(--ui-text-primary) 7%,transparent)}
.aui-md-table tbody tr:hover{background:color-mix(in srgb,var(--ui-accent) 10%,transparent)}

[data-slot="tool-block"] table{font-variant-numeric:tabular-nums}
[data-slot="tool-block"] thead{background:color-mix(in srgb,var(--ui-accent) 10%,transparent)}
[data-slot="tool-block"] thead tr{border-bottom:1px solid color-mix(in srgb,var(--ui-accent) 35%,transparent)}
[data-slot="tool-block"] th{padding:.375rem .625rem;color:var(--ui-text-secondary)}
[data-slot="tool-block"] td{padding:.375rem .625rem}
[data-slot="tool-block"] tbody tr:nth-child(even){background:color-mix(in srgb,var(--ui-text-primary) 7%,transparent)}
[data-slot="tool-block"] tbody tr:hover{background:color-mix(in srgb,var(--ui-accent) 10%,transparent)}
[data-slot="tool-block"] div:has(>table){border-radius:.5rem;border-color:var(--ui-stroke-secondary)}

[data-preview-markdown] table{font-variant-numeric:tabular-nums}
[data-preview-markdown] thead{background:color-mix(in srgb,var(--ui-accent) 10%,transparent)}
[data-preview-markdown] thead tr{border-bottom:1px solid color-mix(in srgb,var(--ui-accent) 35%,transparent)}
[data-preview-markdown] th{
  padding:.5rem .75rem;
  font-size:.6875rem;
  font-weight:600;
  letter-spacing:.06em;
  text-transform:uppercase;
  color:var(--ui-text-secondary);
}
[data-preview-markdown] td{padding:.5rem .75rem}
[data-preview-markdown] tbody tr:nth-child(even){background:color-mix(in srgb,var(--ui-text-primary) 7%,transparent)}
[data-preview-markdown] tbody tr:hover{background:color-mix(in srgb,var(--ui-accent) 10%,transparent)}
[data-preview-markdown] div:has(>table){
  border-radius:.625rem;
  border-color:var(--ui-stroke-secondary);
  box-shadow:0 1px 2px rgba(0,0,0,.05),0 10px 28px -20px rgba(0,0,0,.45);
}
`

function applyStyles(ctx) {
  if (typeof document === 'undefined') {
    return
  }

  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('style')
    style.id = STYLE_ID
    style.textContent = CSS
    document.head.appendChild(style)
  }

  ctx.onDispose(() => {
    document.getElementById(STYLE_ID)?.remove()
  })
}

export default {
  id: ID,
  name: 'Better Tables',
  register(ctx) {
    applyStyles(ctx)
  }
}
