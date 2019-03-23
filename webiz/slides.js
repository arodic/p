import {html, IoElement} from "../../io/build/io.js";

export class IoSlides extends IoElement {
  static get style() {
    return html`<style>
      :host {
      }
      :host > io-button {
        position: absolute;
        height: 100%;
        padding: 0 0.25em;
        border: none;
        z-index: 2;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 2em;
      }
      :host > io-button:hover {
        opacity: 0.5;
      }
      :host > io-button.next {
        top: 0;
        right: 0;
      }
      :host > div {
        display: flex;
        flex-direction: row;
        position: relative;
        overflow: auto;
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
        width: 100%;
        height: 100%;
      }
      :host > div > * {
        border: none;
        padding: 0;
        margin: 0;
        width: 100%;
        flex: 1 0 100%;
        scroll-snap-align: center;
      }
      :host > div > .terminator {
        flex: 1 0 1px;
        visibility: hidden;
        padding: 0;
        margin: 0;
        display: inline;
        scroll-snap-align: none;
      }
    </style>`;
  }
  static get properties() {
    return {
      elements: Array,
      selected: Number,
      precache: false,
      cache: true,
    };
  }
  prev() {
    this.selected = Math.max(this.selected - 1, 0);
  }
  next() {
    this.selected = Math.min(this.selected + 1, this.elements.length - 1);
  }
  onScroll(event) {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    this._scroll = event.target.scrollLeft / event.target.getBoundingClientRect().width;
    this._timeout = setTimeout(this.setPage, 100);
  }
  setPage() {
    if (Math.abs(this._scroll - Math.round(this._scroll)) < 0.5) this.selected = Math.round(this._scroll);
  }
  changed() {
    const options = [];
    for (let i = 0; i < this.elements.length; i++) {
      const props = this.elements[i][1] || {};
      const label = props.label || props.title || props.name || this.elements[i][0] + '[' + i + ']';
      options.push({
        value: i,
        label: label,
      });
    }
    this.template([
      ['io-button', {className: 'prev', label: '◁', action: this.prev}],
      ['div', {id: 'content', className: 'content', 'on-scroll': this.onScroll}, [...this.elements, ['span', {className: 'terminator'}]]],
      ['io-button', {className: 'next', label: '▷', action: this.next}],
    ]);
    setTimeout(() => {
      this.$.content.childNodes[this.selected].scrollIntoView({behavior: 'smooth'});
    }, 100); // TODO: find better way to scroll on init.
  }
}

IoSlides.Register();
