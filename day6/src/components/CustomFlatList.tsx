import { FlatList } from "react-native";

export default function CustomFlatList({
  horizontal,
  data,
  renderItem,
  keyExtractor,
  extraData,
  numColumns,
  style,
}) {
  return (
    <FlatList
      horizontal={horizontal}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={extraData}
      style={style}
      numColumns={numColumns}
    />
  );
}
