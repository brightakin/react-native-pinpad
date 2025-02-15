import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PinPad from 'react-native-pinpad'; // Import your package

const App = () => {
  const [pin, setPin] = useState('');

  const handlePinPress = (value: string) => {
    if (value === 'X') {
      setPin((prev) => prev.slice(0, -1)); // Delete last digit
    } else {
      setPin((prev) => prev + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter PIN:</Text>
      <Text style={styles.pinDisplay}>{pin || '----'}</Text>
      <PinPad
        onItemClick={handlePinPress}
        onItemKeyClick={(data: any) => console.log('Key Pressed:', data)}
        onDeleteItem={() => setPin((prev) => prev.slice(0, -1))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  pinDisplay: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 4,
    marginBottom: 20,
  },
});

export default App;
