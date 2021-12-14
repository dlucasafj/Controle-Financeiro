import * as C from "./App.style";
import "./App.css";
import { useState, useEffect } from "react";
import { Item } from "./types/item";
import { items } from "./data/items";
import { category } from "./data/category";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { Category } from "./components/TableItem/styles";
import { InputArea } from "./components/InputArea";
function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income,setIncome] = useState(0)
  const [expense,setExpense] = useState(0)

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const hanleAddItem =(item:Item)=>{
    let newList = [...list];
    newList.push(item);
    setList(newList)
  }
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount  = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(category[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
    
  },[filteredList])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income = {income}
          expense = {expense}
        />
        <InputArea  onAdd = {hanleAddItem}/>
        <TableArea list={filteredList}></TableArea>
      </C.Body>
    </C.Container>
  );
}

export default App;
