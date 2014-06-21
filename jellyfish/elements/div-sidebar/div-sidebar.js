Polymer({
  expanded: true,
  width: 300,
  _currentWidth: 0,
  ready: function() {
    this.style.width = this.width+'px';
    if (this.uuid) {
      if (localStorage[this.uuid+'expanded'] == 'true') this.expanded = true;
      if (localStorage[this.uuid+'expanded'] == 'false') this.expanded = false;
    }
    this.expandedChanged();
  },
  toggle: function() {
    this.expanded = !this.expanded;
    this.classList.toggle('expanded', this.expanded);
  },
  expandedChanged: function() {
    this.classList.toggle('expanded', this.expanded);
    if (this.expanded) {
      this.style.width = this.width+'px';
      this._currentWidth = this.width;
      this.fire('div-sidebar-expanded', this);
    } else {
      this.style.width = '32px';
      this._currentWidth = 32;
      this.fire('div-sidebar-collapsed', this);
    }
    if (this.uuid) localStorage[this.uuid+'expanded'] = this.expanded;
  }
});