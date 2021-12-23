<script>
  export let trees;

  $: arr = Array(Math.round(trees || 0));

  $: gcount = Math.ceil(Math.sqrt(trees));
  $: size = Math.max(1.5 - gcount / 15, 0.4);
  $: animspeed = trees > 100 ? 0 : 400;
</script>

<div class="calculator-visual">
  <div
    class="parkview"
    style="--gcount: {gcount}; --animspeed: {animspeed}ms; font-size: {size}rem;"
  >
    <div class="parkview__grid">
      {#if arr.length === 0}
        <div class="parkview__box">
          <div class="parkview__placeholder">&nbsp;</div>
        </div>
      {/if}

      {#each arr as t, i}
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
