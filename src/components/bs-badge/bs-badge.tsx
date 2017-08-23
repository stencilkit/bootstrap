import { Component, Prop, PropDidChange, State } from '@stencil/core';

@Component({
  tag: 'bs-badge',
  styleUrl: 'bs-badge.scss'
})
export class BsBadge {

  @State() themeColor: boolean = false;

  @Prop() color: string;

  @Prop() href: string;

  @Prop() pill: boolean;

  @PropDidChange('color')
  colorChanged() {
    let m = false;
    m = (this.color.substr(0, 1) == '#') || (this.color.substr(0, 3) == 'rgb');
    console.log(m);
    if (m) {
      this.themeColor = false;
    } else {
      this.themeColor = true;
    }
  }

  componentDidLoad() {
    let m = false;
    m = (this.color.substr(0, 1) == '#') || (this.color.substr(0, 3) == 'rgb');
    console.log(m);
    if (m) {
      this.themeColor = false;
    } else {
      this.themeColor = true;
    }
  }

  render() {
    let styles = {};
    let classes = {};
    console.log(this.themeColor);
    if (this.color && !this.themeColor) {
      styles = {
        'background-color': this.color
      }
    }
    if (this.color && this.themeColor) {
      classes['badge-' + this.color] = true;
    }
    console.log(styles, classes);
    if (!this.href) {
      return (
        <span class={{ "badge": true, 'pill': this.pill, ...classes }} style={styles}>
          <slot />
        </span>
      )
    } else {
      return (
        <span class={{ "badge": true, 'pill': this.pill, ...classes }} style={styles}>
          <a href={this.href}>
            <slot />
          </a>
        </span>
      )
    }
  }
}