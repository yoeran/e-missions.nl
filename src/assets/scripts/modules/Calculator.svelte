<script>
  export let key;

  import { Type } from "./calculators";
  import AudioStreaming from "./calculators/AudioStreaming.svelte";
  import Blockchain from "./calculators/Blockchain.svelte";
  import CloudStorage from "./calculators/CloudStorage.svelte";
  import Email from "./calculators/Email.svelte";
  import OnlineGaming from "./calculators/OnlineGaming.svelte";
  import Searching from "./calculators/Searching.svelte";
  import SmartDevices from "./calculators/SmartDevices.svelte";
  import SocialMedia from "./calculators/SocialMedia.svelte";
  import VideoConferencing from "./calculators/VideoConferencing.svelte";
  import VideoStreaming from "./calculators/VideoStreaming.svelte";

  const COMPONENT_MAP = {
    [Type.AudioStreaming]: AudioStreaming,
    [Type.Blockchain]: Blockchain,
    [Type.CloudStorage]: CloudStorage,
    [Type.Email]: Email,
    [Type.OnlineGaming]: OnlineGaming,
    [Type.Searching]: Searching,
    [Type.SmartDevices]: SmartDevices,
    [Type.SocialMedia]: SocialMedia,
    [Type.VideoConferencing]: VideoConferencing,
    [Type.VideoStreaming]: VideoStreaming,
  };
</script>

<svelte:component this={COMPONENT_MAP[key]} />
