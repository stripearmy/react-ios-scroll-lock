# react-ios-scroll-lock

The initial idea was to lock the body scroll on iOS Safari whenever we see fit, turns out we made something that works everywhere on the web<br />This was achieved with overscroll-behaviour css property

### Medium Article: [https://stripearmy.medium.com/i-fixed-a-decade-long-ios-safari-problem-0d85f76caec0](https://stripearmy.medium.com/i-fixed-a-decade-long-ios-safari-problem-0d85f76caec0)

### Demo: (desktop demo will be available soon) [https://stripearmy.github.io/ios-scroll-lock-demo/](https://stripearmy.github.io/ios-scroll-lock-demo/)

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

### Render the component contents ONLY wherever you want by using the optional "isInline" (boolean) attribute<br /><br />Note: Disables the effects of "isOpen" attribute 

```javascript
<IosScrollLock isInline={true}>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)