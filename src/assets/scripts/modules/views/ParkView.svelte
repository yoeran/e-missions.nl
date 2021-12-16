<script>
  export let trees;

  $: arr = Array(Math.round(trees));
</script>

<p class="todo">ParkView (Trees in a grid of trees)</p>
<div class="calculator-visual">
  <div class="parkview">
    {#each arr as t, i}
      <div>🎄</div>
    {/each}
  </div>
</div>
