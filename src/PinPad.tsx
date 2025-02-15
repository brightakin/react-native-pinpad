import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  type ViewStyle,
  type TextStyle,
} from 'react-native';

// Define the component props
export interface PinPadProps {
  onItemClick?: (num: string) => void;
  onItemKeyClick?: (data: {
    value: string;
    actionType: 'insert' | 'delete';
    actionId: number;
  }) => void;
  onSubmit?: () => void;
  onDeleteItem?: () => void;
  deleteIcon?: React.ReactNode;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const PinPad: React.FC<PinPadProps> = ({
  onItemClick,
  onItemKeyClick,
  onDeleteItem,
  deleteIcon,
  buttonStyle,
  textStyle,
}) => {
  const [actionId, setActionId] = useState<number>(0);
  const numberRange = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    '0',
    'X',
  ];

  const onButtonPress = (item: string) => {
    setActionId(actionId + 1);
    if (item === 'X') {
      onItemKeyClick?.({ value: item, actionType: 'delete', actionId });
      onDeleteItem?.();
    } else {
      onItemClick?.(item);
      onItemKeyClick?.({ value: item, actionType: 'insert', actionId });
    }
  };

  return (
    <View>
      <FlatList
        data={numberRange}
        horizontal={false}
        scrollEnabled={false}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.rippleContainer, buttonStyle]}
            onPress={() => {
              onButtonPress(item);
            }}
          >
            {item === 'X' ? (
              deleteIcon || (
                <Text style={[styles.numberText, textStyle]}>X</Text>
              )
            ) : (
              <Text style={[styles.numberText, textStyle]}>{item}</Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  numberText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rippleContainer: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PinPad;
