import { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from '@/components/ui/checkbox';
import { Text } from '@/components/ui/text';

export interface ITask {
  title: string;
  category: string;
  isChecked: boolean;
}

export default function HomeScreen() {
  const [checked, setChecked] = useState(false);

  const task: ITask = {
    title: 'My test item',
    category: 'Test category',
    isChecked: false,
  };

  return (
    <View className="bg-background flex flex-1">
      <View className="flex flex-row py-4">
        <View className="flex w-16 items-center justify-center">
          <Checkbox checked={checked} onCheckedChange={setChecked} className="border-2" />
        </View>

        <View className="border-b-foreground-transparent flex-1 border-b py-4">
          <Text className="text-foreground">submit assignment</Text>
          <Text className="text-foreground">Due: Oct 20</Text>
        </View>
      </View>
    </View>
  );
}
