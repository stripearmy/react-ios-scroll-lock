# react-ios-scroll-lock

The initial idea was to lock the body scroll on iOS Safari whenever we see fit, turns out we made something that works everywhere on the web<br />This was achieved with overscroll-behaviour css property

Most workarounds involve JavaScript, touchmove event listeners, or weird side effects. I wanted something simpler — so I built react-ios-scroll-lock: a CSS-only scroll lock component that works across iOS, Android, and all major browsers.

⚡️ Pure CSS – no JS scroll hacks (JS used only to measure device height and detect iOS)

🧘 Doesn’t interfere with touch or scroll events

📱 Works on iOS, Android, and desktop

🪶 Minimal performance cost

🧩 Easy to plug into any React project

### Medium Article: [https://stripearmy.medium.com/i-fixed-a-decade-long-ios-safari-problem-0d85f76caec0](https://stripearmy.medium.com/i-fixed-a-decade-long-ios-safari-problem-0d85f76caec0)

### Demo: [https://stripearmy.github.io/ios-scroll-lock-demo/](https://stripearmy.github.io/ios-scroll-lock-demo/)

### Demo (simple yes/no modal): [https://stripearmy.github.io/ios-scroll-lock-demo/simple.html](https://stripearmy.github.io/ios-scroll-lock-demo/simple.html)

### Demo (modal with scrollable content): [https://stripearmy.github.io/ios-scroll-lock-demo/scrollable.html](https://stripearmy.github.io/ios-scroll-lock-demo/scrollable.html)

_LIGHT Package Size:_

[![minzip size](https://badgen.net/bundlephobia/minzip/react-ios-scroll-lock?color=blue)](https://badgen.net/bundlephobia/minzip/react-ios-scroll-lock?color=blue)

## Installation

	$ npm install react-ios-scroll-lock
	or
	$ yarn add react-ios-scroll-lock

## Usage

```javascript
// Import react-ios-scroll-lock
import {IosScrollLock} from 'react-ios-scroll-lock';
// Import css
import 'react-ios-scroll-lock/css';

<IosScrollLock>
  Your content goes here
</IosScrollLock>
```

### Trigger the open state by modifying the "isOpen" (boolean) attribute <br /><br />Note: Is disabled by "isInline" attribute

```javascript
<IosScrollLock isOpen={true}>
```

### Tip: if your CSS breaks the functionality of IosScrollLock just render it using React Portal

```javascript
{createPortal(
  <IosScrollLock isOpen={true}>
    Your content goes here
  </IosScrollLock>,
  document.body
)}
```

### Pass your custom className(s) by using the optional "className" attribute

```javascript
<IosScrollLock className="yourCustomClassName">
```

### Pass your custom background color by using the optional "bgColor" attribute

```javascript
<IosScrollLock bgColor="#000">
// or
<IosScrollLock bgColor="rgba(0, 0, 0, 0.5)">
// or
<IosScrollLock bgColor="var(--yourCustomBgColor)">
```

### Render the component contents ONLY wherever you want by using the optional "isInline" (boolean) attribute<br /><br />Note: Disables the effects of "isOpen" attribute<br/><br/>Can be useful if you don't want to render same component/content twice, once inside a page and once inside a modal, you can achieve both functionalities by utilizing "isInline"

```javascript
<IosScrollLock isInline={true}>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)