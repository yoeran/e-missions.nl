<script>
  import NumberInput from "../components/NumberInput.svelte";
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { format, translate } from "../components/utils";
  import Wrap from "../components/Wrap.svelte";
  import ParkView from "../views/ParkView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 75;
  let employees = 1;
  let attachmentsPct = 24;

  let bar = [];

  function calculate(emails, attPercentage) {
    const emailsWithAttachments = Math.round(emails * attPercentage);
    const restEmails = emails - emailsWithAttachments;

    // 0.62 = 47% when leaving attachments out the equation
    // 0.076 = 5.8% when leaving attachments out the equation

    const spamPct = Math.round(((restEmails * 0.62) / emails) * 100);
    const thankYouPct = Math.round(((restEmails * 0.076) / emails) * 100);
    const confirmationPct = Math.round(((restEmails * 0.076) / emails) * 100);
    const newsletterPct = Math.round(((restEmails * 0.076) / emails) * 100);
    const updatesPct = Math.round(((restEmails * 0.076) / emails) * 100);
    const ccPct = Math.round(((restEmails * 0.076) / emails) * 100);
    const attachmentsPct =
      100 -
      spamPct -
      thankYouPct -
      confirmationPct -
      newsletterPct -
      updatesPct -
      ccPct;

    const spam = restEmails * 0.62 * 0.365 * 1.2556;
    const thankYou = restEmails * 0.076 * 0.365 * 1.2556;
    const confirmation = restEmails * 0.076 * 0.365 * 1.2556;
    const newsletter = restEmails * 0.076 * 0.365 * 9.5274;
    const updates = restEmails * 0.076 * 0.365 * 4.7706;
    const cc = restEmails * 0.076 * 0.365 * 4.7706;
    const attachments = emailsWithAttachments * 0.365 * 28.637;

    bar = [
      { key: "spam", pct: spamPct },
      { key: "thankYou", pct: thankYouPct },
      { key: "confirmation", pct: confirmationPct },
      { key: "newsletter", pct: newsletterPct },
      { key: "updates", pct: updatesPct },
      { key: "cc", pct: ccPct },
      { key: "attachments", pct: attachmentsPct },
    ];

    return kwhToInfo(
      spam + thankYou + confirmation + newsletter + updates + cc + attachments
    );
  }

  $: data = calculate(serviceUsed, attachmentsPct / 100);
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="emails"
      question={translate("emailsPerDay")}
      unit={["email", "emails"]}
      min={1}
      max={200}
      bind:value={serviceUsed}
    />

    <RangeInput
      name="attachments"
      question={translate("emailsContainingAttachments")}
      unit={["%", "%"]}
      min={0}
      max={100}
      bind:value={attachmentsPct}
    />

    <NumberInput
      name="employees"
      question={translate("peopleInYourCompany")}
      unit={["employee", "employees"]}
      min={1}
      max={5000}
      bind:value={employees}
    />

    <small class="calculator-avg-text">{translate("emailAverage")}</small>
  </div>

  <div slot="stats">
    <StatBlock
      label={translate("yourResults")}
      kwh={data.kwh}
      co2kg={data.co2kg}
    />
    <StatBlock
      label={translate("yourCompany")}
      kwh={data.kwh * employees}
      co2kg={data.co2kg * employees}
      icon="multiplier"
    />
  </div>

  <ParkView slot="visual" trees={data.trees * employees} />

  <div class="result-text" slot="visual-text">
    <ul class="email-legend">
      {#each bar as part}
        <li>
          <span class="email-legend__dot email-legend__dot--{part.key}" />
          {translate(part.key)}
        </li>
      {/each}
    </ul>

    <div class="email-bar">
      {#each bar as part}
        <div
          class="email-bar__part email-legend__dot--{part.key}"
          style="width: {part.pct}%;"
        >
          <span>{translate(part.key)} - {format(part.pct, 0)}%</span>
        </div>
      {/each}
    </div>

    <div class="result-text__stats">
      <TreeStat label={translate("you")} trees={data.trees} />
      <TreeStat
        label={translate("yourCompany")}
        trees={data.trees * employees}
      />
    </div>
  </div>
</Wrap>
