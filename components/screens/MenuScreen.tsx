import { View,StyleSheet } from 'react-native'
import { Text } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
export function MenuScreen(){
  const { colors } = useTheme();
return (
<View style={{ ...styles.container, backgroundColor: colors.surface }}>
    <Text variant='titleLarge'>MenuScreen</Text>
</View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
