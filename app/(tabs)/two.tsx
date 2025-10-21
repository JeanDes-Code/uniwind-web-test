import { Text, View } from '@/components/Themed';
import { FlatList } from 'react-native';

interface Item {
  id: string;
  name: string;
}

interface Category {
  id: string;
  title: string;
  items: Item[];
}

const DATA: Category[] = [
  {
    id: '1',
    title: 'Fruits',
    items: [
      { id: '1-1', name: 'Apple' },
      { id: '1-2', name: 'Banana' },
      { id: '1-3', name: 'Orange' },
      { id: '1-4', name: 'Mango' },
    ],
  },
  {
    id: '2',
    title: 'Vegetables',
    items: [
      { id: '2-1', name: 'Carrot' },
      { id: '2-2', name: 'Broccoli' },
      { id: '2-3', name: 'Spinach' },
    ],
  },
  {
    id: '3',
    title: 'Dairy',
    items: [
      { id: '3-1', name: 'Milk' },
      { id: '3-2', name: 'Cheese' },
      { id: '3-3', name: 'Yogurt' },
      { id: '3-4', name: 'Butter' },
    ],
  },
];

export default function TabTwoScreen() {
  const renderItem = ({ item }: { item: Item }) => (
    <View className="py-2 px-3 my-1 bg-white rounded border-l-4 border-blue-500">
      <Text className="text-base text-gray-600">{item.name}</Text>
    </View>
  );

  const renderCategory = ({ item }: { item: Category }) => (
    <View className="mb-6 rounded-lg p-4 bg-gray-100">
      <Text className="text-xl font-semibold mb-3 text-gray-800">{item.title}</Text>
      <FlatList
        data={item.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </View>
  );

  return (
    <View className="flex-1 pt-12">
      <Text className="text-2xl font-bold text-center mb-5">Nested FlatList Example</Text>
      <FlatList
        data={DATA}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        contentContainerClassName="px-4"
      />
    </View>
  );
}
