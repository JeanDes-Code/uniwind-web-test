import { FlatList, Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View className='flex-1 bg-red-500 border-2 border-blue-500 items-center justify-center'>
      <Text className='text-white text-6xl'>Hello World</Text>


      <FlatList 
        data={[{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Jim' }]}
        renderItem={({ item }) => <Text className='text-white text-2xl'>{item.name}</Text>}
        className='flex-1 border-2 border-green-500'
        contentContainerClassName='bg-blue-500'
      />
    </View>
  );
}
