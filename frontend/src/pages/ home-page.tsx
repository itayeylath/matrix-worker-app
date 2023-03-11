import { useState } from "react";
import AddForm from "../components/add-form";
import TasksTable from "../components/tasks-table";
import ToolsBar from "../components/tools-bar";
import UpdateForm from "../components/update-form";
import { fakeData } from "../fake-data";

const HomePage = () => {
  const [data, setData] = useState<any[] | []>(fakeData);
  const [addButton, setAddButton] = useState<boolean>(false);
  const [updatebutton, setUpdatebutton] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState<any | undefined>();

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
    setData((value: any) => [...value, Object.fromEntries(data)]);
  };

  // Click on delete button.
  const handelButtonDelete = async (index: number) => {
    // TODO: add Server request.

    // TODO: expport to utilis (?)
    let newData = [];

    for (let i = 0; i < data.length; i++) {
      if (i !== index) {
        newData.push(data[i]);
      }
    }

    setData(newData);
  };

  // Click on update button.
  const handelButtonUpdate = async (element: any, index: number) => {
    setUpdateData({
      element: element,
      index: index,
    });
    setUpdatebutton(!updatebutton);
    setAddButton(false);
  };

  // Submit form data to server for update.
  const handelSubmitUpdate = async (event: any) => {
    event.preventDefault();
    const element = Object.fromEntries(new FormData(event.target));
    // Server request.
    // TODO: expport to utilis (?)
    let newData = [];

    for (let i = 0; i < data.length; i++) {
      if (i !== updateData.index) {
        newData.push(data[i]);
      } else {
        newData.push(element);
      }
    }
    setData(newData);
    console.log(newData);
  };

  return (
    <div>
      <ToolsBar handelButtonAdd={handelButtonAdd} />

      <TasksTable
        head={tableHeadlist}
        body={data}
        elementTypes={formInputList}
        handelButtonDelete={handelButtonDelete}
        handelButtonUpdate={handelButtonUpdate}
      />

      <div className="hidden-divs">
        {addButton && (
          <AddForm
            inputsNames={formInputList}
            placeholdersNames={tableHeadlist}
            handelSubmitAdd={handelSubmitAdd}
          />
        )}
        {updatebutton && (
          <UpdateForm
            inputsNames={formInputList}
            handelSubmitUpdate={handelSubmitUpdate}
            updateData={updateData}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
