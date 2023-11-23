import { View, Text, StyleSheet } from 'react-native';

const ContentElement = ({ content }: { content: string }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={6} style={styles.text}>
        {content}
      </Text>
    </View>
  );
};

export default ContentElement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    flex: 1,
    fontSize: 14,
  },
});
