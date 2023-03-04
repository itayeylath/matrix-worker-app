import IdIcon from "../assets/id-icon";
import LocationIcon from "../assets/location-icon";
import ModelIcon from "../assets/model-icon";
import OwnerIcon from "../assets/owner-icon";
import QuantityIcon from "../assets/quantity-icon";
import SzieIcon from "../assets/size-icon";
import YearIcon from "../assets/year-icon";
import { create2DArray } from "../utilities/add-form-func";
import "../styles/add-form.scss";

interface AddFormProps {
  inputsNames: string[];
  placeholdersNames: string[];
  handelSubmitAdd: any;
}

const AddForm = (props: AddFormProps) => {
  const svgArr: any = [
    <IdIcon />,
    <ModelIcon />,
    <QuantityIcon />,
    <SzieIcon />,
    <YearIcon />,
    <LocationIcon />,
    <OwnerIcon />,
    <IdIcon />,
    <ModelIcon />,
    <QuantityIcon />,
    <SzieIcon />,
    <YearIcon />,
    <LocationIcon />,
    <OwnerIcon />,
    <YearIcon />,
    <LocationIcon />,
    <OwnerIcon />,
  ];
  const arr = create2DArray(props.inputsNames, props.placeholdersNames, svgArr);

  return (
    <div className="add-form">
      <form onSubmit={props.handelSubmitAdd}>
        {arr.map((element: any, index: number) => {
          return (
            <div className="add-row">
              <div className="add-icon">{element[2]}</div>
              <input
                className="add-input"
                key={index}
                name={element[0]}
                placeholder={element[1]}
              />
            </div>
          );
        })}
        <input className="btn-confirm" type="submit" value="Confirm"></input>
      </form>
    </div>
  );
};
export default AddForm;
