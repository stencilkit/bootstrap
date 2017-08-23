import { Component, Prop, PropDidChange, State } from '@stencil/core';

import { isColor } from '../../util/util';

@Component({
  tag: 'bs-badge'
})
export class BsBadge {

  @State() private themeColor: boolean = false;

  @Prop() color: string;

  @Prop() href: string;

  @Prop() pill: boolean;

  @PropDidChange('color')
  colorChanged() {
    if (isColor(this.color || '')) {
      this.themeColor = false;
    } else {
      this.themeColor = true;
    }
  }

  componentDidLoad() {
    this.colorChanged();
  }

  render() {
    let styles = {};
    let classes = {};
    if (this.color && !this.themeColor) {
      styles = {
        'background-color': this.color
      }
    }
    if (this.color && this.themeColor) {
      classes['badge-' + this.color] = true;
    }
    if (!this.href) {
      return (
        <span class={{ "badge": true, 'pill': this.pill, ...classes }} style={styles}>
          <slot />
        </span>
      )
    } else {
      return (
        <a href={this.href} class={{ "badge": true, 'pill': this.pill, ...classes }} style={styles}>
          <slot />
        </a>
      )
    }
  }
}