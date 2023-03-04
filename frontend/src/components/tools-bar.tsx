import Edit from "../assets/edit-icon";
import Arrow from "../assets/arrow.png";
import "../styles/tools-bar.scss";

interface ToolsBarProps {
    handelButtonAdd: any;
  }
  
  const ToolsBar = (props: ToolsBarProps) => {
    return (
      
        <button className="add-btn-container" onClick={props.handelButtonAdd}>
          <Edit />
          <p className="add-btn-text">הוסף שורה</p>
          <img src={Arrow} />
        </button>
      
    );
  };
  export default ToolsBar;