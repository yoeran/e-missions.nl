<script>
  export let trees;

  $: arr = Array(Math.round(trees || 0));
</script>

<p class="todo">StreetView (trees in a street)</p>
<div class="calculator-visual">
  <div class="streetview">
    {#each arr as t, i}
      {#if i % 2 === 1}
        <div />
      {/if}
      <span>🎄</span>
    {/each}
  </div>
</div>
