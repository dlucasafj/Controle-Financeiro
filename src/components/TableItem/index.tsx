import { Item } from "../../types/item";
import * as C from "./styles";
import { formatDate } from "../../helpers/dateFilter";
import { category } from "../../data/category";

type ItemProps = {
  item: Item;
};

export const TableItem = ({ item }: ItemProps) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={category[item.category].color}>{category[item.category].title}</C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color = {category[item.category].expense ? "red" : "green"}>
          R$ {item.value}  
        </C.Value>  
      </C.TableColumn>
    </C.TableLine>
  );
};
