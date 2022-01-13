<script>
  import { translate } from "./utils";
</script>

<div class="calculator__wrap">
  <div class="calculator__aside">
    <div class="calculator__input">
      <slot name="input" />
    </div>

    <div class="calculator__stats">
      <slot name="stats" />
    </div>

    <div class="calculator-disclaimer">
      <a href="{translate('aboutPath')}#disclaimer">Disclaimer</a> -
      <a href={translate("topicsPath")}> {translate("calculateMore")}</a>
    </div>
  </div>

  <div class="calculator__output">
    <slot name="visual" />
    <slot name="visual-text" />
  </div>
</div>
