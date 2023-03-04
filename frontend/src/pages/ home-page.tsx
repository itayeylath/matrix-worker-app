import { useState } from "react";
import AddForm from "../components/add-form";
import TasksTable from "../components/tasks-table";
import ToolsBar from "../components/tools-bar";
import { fakeData } from "../fake-data";

const HomePage = () => {
  const [isAdd, setIsAdd] = useState<boolean>(true);
  const [data, setData] = useState<any[] | []>(fakeData);
  const [addButton, setAddButton] = useState<boolean>(false);
  const [updatebutton, setUpdatebutton] = useState<boolean>(false);

  const tableHeadlist: string[] = [
    "תאריך קבלת משימה",
    "מס' משימה/קריאה",
    "מהות",
    "מחיצה",
    "חתימה",
    "CLASS",
    "תכנית",
    "לייבל",
    "תכניות קשורות",
    "שרת פיתוח",
    "עדכון שרת טסט",
    "עדכון שרת 4",
    "עלה לחי",
    "מיישם/מנהל פרויקט",
    "לקוח",
    "סטטוס ביצוע",
    "הערות",
  ];
  const formInputList: string[] = [
    "date",
    "task_num",
    "task_details",
    "name_space",
    "signature",
    "class",
    "program_name",
    "label",
    "related_programs",
    "dev_server",
    "update_dev_server",
    "update_4_server",
    "update_prod_server",
    "project_manager",
    "client",
    "status",
    "comments",
  ];

  // Click on add button.
  const handelButtonAdd = () => {
    setAddButton(!addButton);
    setUpdatebutton(false);
  };

  // Submit form data to server for add.
  const handelSubmitAdd = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // Server request.
    //await reqAddContainer(Object.fromEntries(data) as unknown as Container);
    console.log(Object.fromEntries(data));
    setData((value: any) => [...value, Object.fromEntries(data)]);
    setIsAdd(!isAdd);
  };

  return (
    <div>
      <ToolsBar handelButtonAdd={handelButtonAdd} />

      <TasksTable
        head={tableHeadlist}
        body={data}
        elementTypes={formInputList}
      />

      <div className="hidden-divs">
        {addButton && (
          <AddForm
            inputsNames={formInputList}
            placeholdersNames={tableHeadlist}
            handelSubmitAdd={handelSubmitAdd}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
