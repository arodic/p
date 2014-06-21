Polymer({
  label: 'no label',
  expanded: false,
  ready: function() {
    if (this.uuid) {
      if (localStorage[this.uuid+'expanded'] == 'true') this.expanded = true;
      if (localStorage[this.uuid+'expanded'] == 'false') this.expanded = false;
    }
    this.expandedChanged();
  },
  toggle: function() {
    this.expanded = !this.expanded;
  },
  uuidChanged: function() {
    this.ready();
  },
  expandedChanged: function() {
    this.$.headerExpanded.classList.toggle('expanded', this.expanded);
    this.$.headerCollapsed.classList.toggle('expanded', this.expanded);
    this.$.wrapper.classList.toggle('expanded', this.expanded);
    localStorage[this.uuid+'expanded'] = this.expanded;
  }
});