Polymer({
  label: '',
  expandedChanged: function() {
    this.super();
    if (this.expanded) this.label = "show less";
    else this.label = "show more";
  }
});