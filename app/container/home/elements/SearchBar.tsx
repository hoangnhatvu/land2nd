import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../../utils';
import { FONT_FAMILY_REGULAR } from '../../../utils/styles/typography';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch?: () => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onSearch,
  placeholder = 'Tìm kiếm sản phẩm',
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.PLACEHOLDER_TEXT}
      />
      <TouchableOpacity onPress={onSearch} style={styles.searchButton}>
        <Icon name="magnify" size={24} color={Colors.PRIMARY_TEXT} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginHorizontal: 16,
    marginTop: 24,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: '500',
    color: Colors.PRIMARY_TEXT,
    padding: 0,
  },
  searchButton: {
    marginLeft: 8,
  },
});

export default SearchBar;