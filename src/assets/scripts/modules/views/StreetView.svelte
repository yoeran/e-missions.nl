<script>
  export let trees;

  $: arr = Array(Math.round(trees || 0));

  $: size = Math.max(2 - trees / 35, 0.6);
</script>

<div class="calculator-visual">
  <div
    class="parkview"
    style="--gcount: 3; --animspeed: 400ms; font-size: {size}rem;"
  >
    <div class="parkview__grid">
      {#if arr.length === 0}
        <div class="parkview__box">
          <div class="parkview__placeholder">&nbsp;</div>
        </div>
      {/if}

      {#each arr as t, i}
        {#if i % 2 === 1}
          <div class="parkview__box">
            <div class="parkview__street">&nbsp;</div>
          </div>
        {/if}

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
