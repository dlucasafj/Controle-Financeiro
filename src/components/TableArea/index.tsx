import * as C from "./styles";
import { Item } from "../../types/item";
import {TableItem} from '../TableItem/index'
type TableProps = {
  list: Item[];
};
export const TableArea = ({ list }: TableProps) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeaderColumn width={100}>Data</C.TableHeaderColumn>
          <C.TableHeaderColumn width={200}>Category</C.TableHeaderColumn>
          <C.TableHeaderColumn>Title</C.TableHeaderColumn>
          <C.TableHeaderColumn width={150}>Value</C.TableHeaderColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
