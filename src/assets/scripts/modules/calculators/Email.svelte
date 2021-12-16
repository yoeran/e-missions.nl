<script>
  import RangeInput from "../components/RangeInput.svelte";
  import Wrap from "../components/Wrap.svelte";
  import ParkView from "../views/ParkView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 75;
  let employees = 1;
  let attachmentsPct = 24;

  function calculate(emails, attPercentage) {
    // const desktopUsage = 7.1;
    // const mobileUsage = 0.19;
    // const avgUsage = desktopUsage; // (desktopUsage + mobileUsage) / 2;

    const emailsWithAttachments = Math.round(emails * attPercentage);
    const restEmails = emails - emailsWithAttachments;

    // 0.62 = 47% when leaving attachments out the equation
    // 0.076 = 5.8% when leaving attachments out the equation

    const spam = restEmails * 0.62 * 0.365 * 1.2556;
    const thankYou = restEmails * 0.076 * 0.365 * 1.2556;
    const confirmation = restEmails * 0.076 * 0.365 * 1.2556;
    const newsletter = restEmails * 0.076 * 0.365 * 9.5274;
    const updates = restEmails * 0.076 * 0.365 * 4.7706;
    const cc = restEmails * 0.076 * 0.365 * 4.7706;
    const attachments = emailsWithAttachments * 0.365 * 28.637;

    return kwhToInfo(
      spam + thankYou + confirmation + newsletter + updates + cc + attachments
    );
  }

  $: data = calculate(serviceUsed, attachmentsPct / 100);
</script>

<Wrap
  {...data}
  multiplier={employees}
  multiplierLabel="Your company's results:"
>
  <div slot="input">
    <RangeInput
      question="How many emails do you send per day?"
      unit={["email", "emails"]}
      min={1}
      max={200}
      bind:value={serviceUsed}
    />

    <RangeInput
      question="How many of those emails contain attachments?"
      unit={["%", "%"]}
      min={0}
      max={100}
      bind:value={attachmentsPct}
    />

    <RangeInput
      question="How big is the company you are working for?"
      unit={["employee", "employees"]}
      min={1}
      max={5000}
      bind:value={employees}
    />
  </div>

  <ParkView slot="output" trees={data.trees} />
</Wrap>
