import { View } from 'react-native';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';

export default function HomeScreen() {
  return (
    <View className="bg-background flex flex-1">
      <View className="flex flex-row py-4">
        <View className="jutify-center flex w-16 items-center">
          <Checkbox checked={false} className="border-2" />
        </View>
        <View className="border-b-foreground-transparent flex-1 border-b py-4">
          <View className="text-foreground"> sumbit assignment</View>
          <View className="text-foreground"> Due: Oct 20</View>
        </View>
      </View>
    </View>
  );
}
