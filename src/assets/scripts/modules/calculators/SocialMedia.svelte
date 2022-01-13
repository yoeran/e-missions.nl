<script>
  import NumberInput from "../components/NumberInput.svelte";
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { format, translate } from "../components/utils";
  import Wrap from "../components/Wrap.svelte";
  import ParkView from "../views/ParkView.svelte";
  import { kwhToInfo } from "./index";

  let textPosts = 6;
  let imagePosts = 4;
  let videoMinutes = 5;
  let followers = 200;

  let showModal = false;

  const oneImage = calculate(0, 1, 0);

  function calculate(t, i, v) {
    const text = t * 0.000304;
    const image = i * 0.304;
    const video = v * 0.403333333;

    return kwhToInfo((text + image + video) * 0.365);
  }

  function toggleModal() {
    showModal = !showModal;
  }

  $: data = calculate(textPosts, imagePosts, videoMinutes);
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="tposts"
      question={translate("socialmediaPosts")}
      unit={["post", "posts"]}
      min={0}
      max={100}
      bind:value={textPosts}
    />
    <RangeInput
      name="iposts"
      question={translate("socialmediaImages")}
      unit={["image", "images"]}
      min={0}
      max={100}
      bind:value={imagePosts}
    />
    <RangeInput
      name="vposts"
      question={translate("socialmediaVideo")}
      unit={["minute", "minutes"]}
      min={0}
      max={100}
      bind:value={videoMinutes}
    />

    <NumberInput
      name="followers"
      question={translate("socialmediaFollowers")}
      min={1}
      max={10000}
      bind:value={followers}
    />

    <small class="calculator-avg-text">
      {translate("socialmediaAverage")}
    </small>
  </div>

  <div slot="stats">
    <StatBlock
      label={translate("yourResults")}
      kwh={data.kwh}
      co2kg={data.co2kg}
    />
    <StatBlock
      label={translate("withFollowers")}
      kwh={data.kwh * followers}
      co2kg={data.co2kg * followers}
      icon="multiplier"
    />
  </div>

  <ParkView slot="visual" trees={data.trees * followers} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat
        label={translate("toFollowers", { followers: format(followers) })}
        trees={data.trees * followers}
      />
    </div>

    <button class="button button--small" on:click={toggleModal}>
      {translate("shareOnFacebook")}
    </button>
  </div>
</Wrap>

{#if showModal}
  <div class="modal">
    <div class="modal__content">
      <button class="modal__close" on:click={toggleModal}>&times;</button>
      <p>
        {@html translate("socialmediaShareText", {
          followers: format(followers),
          trees: format(oneImage.trees * followers, 0),
        })}
      </p>
      <br />

      <button class="button button--small" on:click={toggleModal}>
        {translate("reconsiderSharing")}
      </button>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal__content {
    position: relative;
    padding: 3rem;
    background: #333;
    border-radius: 5px;
    font-size: 1.2rem;
  }

  .modal__close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    font-size: 2rem;
    line-height: 1;
    border: none;
    background: none;
    display: block;
  }

  .modal__content p {
    max-width: 30rem;
  }
</style>
