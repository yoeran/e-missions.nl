<script>
  import { format } from "../components/utils";

  export let trees;
  export let multiplier;

  const amsterdamKm2 = 240;
  const treesPerCity = 10;

  function toAmsterdams(t, m) {
    return (t * m) / 100000 / amsterdamKm2;
  }

  function toRows(a) {
    let c = a;

    const arr = [];
    while (c > 0) {
      if (c > 1) {
        arr.push(Array(treesPerCity));
        c -= 1;
      } else {
        const t = Math.round(treesPerCity * c);
        if (t > 0) {
          arr.push(Array(t));
        }
        c = 0;
      }
    }

    return arr;
  }

  $: amsterdams = toAmsterdams(trees, multiplier);
  $: rows = toRows(amsterdams);
  $: size = 1.2 - Math.floor(amsterdams) * 0.1;
</script>

<div class="calculator-visual calculator-visual--autoheight">
  <div class="mapview" style="font-size: {size}rem;">
    {#each rows as trees}
      <div class="mapview__row">
        <img
          src="/assets/images/amsterdam-skyline.png"
          alt=""
          class="mapview__skyline"
        />

        <div class="mapview__trees">
          {#each trees as t}
            <svg>
              <use href="#svg-tree" />
            </svg>
          {/each}
        </div>
      </div>
    {/each}

    <div class="mapview__label">
      {format(amsterdams)}x Amsterdam
    </div>
  </div>
</div>
