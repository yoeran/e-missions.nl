<script>
  import RangeInput from "../components/RangeInput.svelte";
  import Wrap from "../components/Wrap.svelte";
  import ParkView from "../views/ParkView.svelte";
  import { kwhToInfo } from "./index";

  let textPosts = 6;
  let imagePosts = 4;
  let videoMinutes = 5;
  let followers = 200;

  function calculate(t, i, v) {
    const text = t * 0.000304;
    const image = i * 0.304;
    const video = v * 0.403333333;

    return kwhToInfo((text + image + video) * 0.365);
  }

  $: data = calculate(textPosts, imagePosts, videoMinutes);
</script>

<Wrap
  {...data}
  multiplier={followers}
  multiplierLabel="With your amount of followers:"
>
  <div slot="input">
    <RangeInput
      question="How many text-only posts do you post per day?"
      unit={["post", "posts"]}
      min={1}
      max={100}
      bind:value={textPosts}
    />
    <RangeInput
      question="How many image posts do you post per day?"
      unit={["image", "images"]}
      min={1}
      max={100}
      bind:value={imagePosts}
    />
    <RangeInput
      question="How many minutes of video do you post per day?"
      unit={["minute", "minutes"]}
      min={1}
      max={100}
      bind:value={videoMinutes}
    />

    <RangeInput
      question="How many followers do you have?"
      unit={["follower", "followers"]}
      min={1}
      max={10000}
      step={100}
      bind:value={followers}
    />
  </div>

  <ParkView slot="output" trees={data.trees} />
</Wrap>
