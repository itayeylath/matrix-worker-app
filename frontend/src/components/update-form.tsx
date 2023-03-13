import IdIcon from "../assets/id-icon";
import LocationIcon from "../assets/location-icon";
import ModelIcon from "../assets/model-icon";
import OwnerIcon from "../assets/owner-icon";
import QuantityIcon from "../assets/quantity-icon";
import SzieIcon from "../assets/size-icon";
import YearIcon from "../assets/year-icon";
import { create2DArray } from "../utilities/add-form-func";

interface UpdateFormProps {
  inputsNames: string[];
  handelSubmitUpdate: any;
  updateData: any;
}

const UpdateForm = (props: UpdateFormProps) => {
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
  const arr = create2DArray(props.inputsNames, svgArr, []);
  return (
    <div className="add-form">
      <form onSubmit={props.handelSubmitUpdate}>
        {arr.map((element: string, index: number) => {
          return (
            <div className="add-row" key={index}>
              <div className="add-icon">{element[1]}</div>
              <input
                className="add-input"
                key={index}
                name={element[0]}
                defaultValue={props.updateData.element[element[0]]}
              />
            </div>
          );
        })}
        <input className="btn-confirm" type="submit" value="Confirm"></input>
      </form>
    </div>
  );
};
export default UpdateForm;
