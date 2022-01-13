<script>
  import { format, translate } from "./utils";

  export let label;
  export let trees;
</script>

<div class="tree-stat">
  <svg role="img" aria-hidden="true" aria-label={translate("amountOfTrees")}>
    <use xlink:href="#svg-tree" />
  </svg>

  <div class="tree-stat__info">
    {#if label}
      <h6>{label}</h6>
    {/if}
    <strong>{format(trees, 0)}</strong>
  </div>
</div>
