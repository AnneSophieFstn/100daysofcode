import { FlatList } from "react-native";

export default function CustomFlatList({
  data,
  renderItem,
  keyExtractor,
  extraData,
}) {
  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={extraData}
    />
  );
}
