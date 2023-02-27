import { useState } from "react";
import TasksTable from "../components/tasks-table";

const HomePage = () => {
  const tableHeadlist: string[] = [
    "| הערות",
    "| סטטוס ביצוע",
    "| לקוח",
    "| מיישם/מנהל פרויקט",
    "| עלה לחי",
    "| עדכון שרת 4",
    "| עדכון שרת טסט",
    "| שרת פיתוח",
    "| תכניות קשורות",
    "| לייבל",
    "| תכנית",
    "| CLASS",
    "| חתימה",
    "| מחיצה",
    "| מהות",
    "| מס' משימה/קריאה",
    "| תאריך קבלת משימה",
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
  const data: any = [
    {
      date: "02/27/2023",
      task_num: 1001,
      task_details: "פירוט משימה לדגומא",
      name_space: "ACC",
      signature: "Itay Eylath",
      class: "class",
      program_name: "WBLR",
      label: "label",
      related_programs: "WBLR",
      dev_server: "example cache test (111.222.333.44)",
      update_dev_server: "02/27/2023",
      update_4_server: "02/27/2023",
      update_prod_server: "update_prod_server",
      project_manager: "יוני חנוני",
      client: "גשר גולן",
      status: "בוצע",
      comments: "הערה לדוגמא",
    },
    {
      date: "02/27/2023",
      task_num: 1001,
      task_details: "פירוט משימה לדגומא",
      name_space: "ACC",
      signature: "Itay Eylath",
      class: "class",
      program_name: "WBLR",
      label: "label",
      related_programs: "WBLR",
      dev_server: "example cache test (111.222.333.44)",
      update_dev_server: "02/27/2023",
      update_4_server: "02/27/2023",
      update_prod_server: "update_prod_server",
      project_manager: "יוני חנוני",
      client: "גשר גולן",
      status: "בוצע",
      comments: "הערה לדוגמא",
    },
    {
      date: "02/27/2023",
      task_num: 1002,
      task_details: "פירוט משימה לדגומא",
      name_space: "ACC",
      signature: "Itay Eylath",
      class: "class",
      program_name: "WBLR",
      label: "label",
      related_programs: "WBLR",
      dev_server: "example cache test (111.222.333.44)",
      update_dev_server: "02/27/2023",
      update_4_server: "02/27/2023",
      update_prod_server: "update_prod_server",
      project_manager: "יוני חנוני",
      client: "גשר גולן",
      status: "בוצע",
      comments: "הערה לדוגמא",
    },
    {
      date: "02/27/2023",
      task_num: 1003,
      task_details: "פירוט משימה לדגומא",
      name_space: "ACC",
      signature: "Itay Eylath",
      class: "class",
      program_name: "WBLR",
      label: "label",
      related_programs: "WBLR",
      dev_server: "example cache test (111.222.333.44)",
      update_dev_server: "02/27/2023",
      update_4_server: "02/27/2023",
      update_prod_server: "update_prod_server",
      project_manager: "יוני חנוני",
      client: "גשר גולן",
      status: "בוצע",
      comments: "הערה לדוגמא",
    },
    {
      date: "02/27/2023",
      task_num: 1004,
      task_details: "פירוט משימה לדגומא",
      name_space: "ACC",
      signature: "Itay Eylath",
      class: "class",
      program_name: "WBLR",
      label: "label",
      related_programs: "WBLR",
      dev_server: "example cache test (111.222.333.44)",
      update_dev_server: "02/27/2023",
      update_4_server: "02/27/2023",
      update_prod_server: "update_prod_server",
      project_manager: "יוני חנוני",
      client: "גשר גולן",
      status: "בוצע",
      comments: "הערה לדוגמא",
    },
  ];

  return (
    <div>
      <h1>אקסל פיתוחים</h1>
      <TasksTable
        head={tableHeadlist}
        body={data}
        elementTypes={formInputList}
      />
    </div>
  );
};

export default HomePage;
