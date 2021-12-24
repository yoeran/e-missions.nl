<script>
  export let trees;

  $: count = Math.min(Math.round(trees || 0), 2000);

  $: gcount = Math.ceil(Math.sqrt(count));
  $: size = Math.max(1.5 - gcount / 15, 0.4);
  $: animspeed = count > 100 ? 0 : 400;
</script>

<div class="calculator-visual">
  <div
    class="parkview"
    style="--gcount: {gcount}; --animspeed: {animspeed}ms; font-size: {size}rem;"
  >
    <div class="parkview__grid">
      {#if count === 0}
        <div class="parkview__box">
          <div class="parkview__placeholder">&nbsp;</div>
        </div>
      {/if}

      {#each Array(count) as t, i}
        <div class="parkview__box">
          <div class="parkview__cell">&nbsp;</div>
          <div class="parkview__tree">
            <svg>
              <use href="#svg-tree" />
            </svg>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
