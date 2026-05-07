import { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from '@/components/ui/checkbox';
import { Text } from '@/components/ui/text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Task from '@/components/Task';

// Key for storing tasks in AsyncStorage
const TASKS_STORAGE_KEY = 'hallpass_tasks';
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
      <Task task={task} />
    </View>
  );
}
