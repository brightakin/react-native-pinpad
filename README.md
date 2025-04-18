# 📌 react-native-pinpad

**react-native-pinpad** is a customizable **React Native PIN pad** component for secure PIN input, designed for **authentication and transaction verification**.  
It supports **styling options and optional masking** for enhanced security.

## ✨ Features
- 🔢 **Customizable PIN pad UI**
- 🎭 **Optional masking for PIN security**
- 🎨 **Supports custom styles and themes**
- ⌨️ **Callback functions for handling input**
- 🗑️ **Customizable delete button**

---

## 📦 Installation

yarn add react-native-pinpad
# or
npm install react-native-pinpad


## 🚀 Usage Example

To use `react-native-pinpad` in your app, follow this example:

```javascript
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pinpad from 'react-native-pinpad';

const App = () => {
  const [pin, setPin] = useState('');

  const handleItemClick = (value) => {
    setPin((prev) => (prev.length < 6 ? prev + value : prev));
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter PIN:</Text>
      <Text style={styles.pinDisplay}>{'*'.repeat(pin.length)}</Text>
      <Pinpad onItemClick={handleItemClick} onDeleteItem={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  pinDisplay: { fontSize: 24, letterSpacing: 8, marginBottom: 20 },
});

export default App;
```
![PinPad Demo](https://user-images.githubusercontent.com/27721091/63924925-d23ebf00-ca51-11e9-993d-553c11c3bcbd.gif)

## 🔧 Props & API Reference

| **Prop**         | **Type**       | **Description** |
|-----------------|---------------|----------------|
| `onItemClick`   | `Function`     | **Called when a number is clicked.** Passes the clicked value. |
| `onDeleteItem`  | `Function`     | **Called when delete (`X`) is clicked.** Useful for handling backspace in PIN entry. |
| `onItemKeyClick` | `Function`     | **Called with metadata about the key press (insert/delete, action ID, etc.).** |
| `disableHaptic` | `boolean`      | **Disables haptic feedback when true.** Default: `false`. |
| `buttonStyle`   | `StyleProp`    | **Custom styling for number buttons.** |
| `textStyle`     | `StyleProp`    | **Custom styling for text inside the buttons.** |
| `deleteIcon`    | `ReactElement` | **Custom delete button component.** Default: `X` icon. |

## ⚡ Customizing the PIN Pad

```javascript
<Pinpad 
  buttonStyle={{ backgroundColor: 'lightblue' }} 
  textStyle={{ color: 'white', fontSize: 24 }} 
/>
```

## 🔹 Custom Delete Icon

```javascript
import { MaterialIcons } from '@expo/vector-icons';

<Pinpad deleteIcon={<MaterialIcons name="backspace" size={24} color="red" />} />
```

## 🛠️ Contributing
We welcome contributions!

To get started:
```
git clone https://github.com/brightakin/react-native-pinpad.git
```
```
cd react-native-pinpad
```
```
yarn install
```

## ⭐ Support the Project
If you find this package useful, star the repo on GitHub! 🌟 
