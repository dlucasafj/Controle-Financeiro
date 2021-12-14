import { useState } from "react";
import { category } from "../../data/category";
import { Item } from "../../types/item";
import * as C from "./styles";

type InputAreaProps = {
  onAdd: (item: Item) => void;
};
export const InputArea = ({ onAdd }: InputAreaProps) => {
  const [dateField, setDateField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(category);

  const handleAddEvent = () => {
    // verificação dos Erros
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria Inválida");
    }
    if (titleField === "") {
      errors.push("Titulo vazio");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      //Adiciono novo Item
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });

      clearFields();
    }
  };
  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          id="date"
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        ></C.Input>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <option></option>
          {categoryKeys.map((key, index) => (
            <option key={index} value={key}>
              {category[key].title}
            </option>
          ))}
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Titulo</C.InputTitle>
        <C.Input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        ></C.Input>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        ></C.Input>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};
