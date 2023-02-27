interface TableProps {
  head: string[];
  body: any;
  elementTypes: any;
}

const TasksTable = (props: TableProps) => {
  return (
    <table className="table">
      {/* Create table header content*/}
      <thead>
        <tr className="table-head-row">
          {props.head.map((element: string, index: number) => {
            return (
              <th className="table-th" key={index}>
                {element}
              </th>
              
            );
          })}
          <th className="table-th-empty"></th>
          <th className="table-th-empty"></th>
        </tr>
      </thead>

      {/* Create table body content */}
      <tbody>
        {props.body.map((element: any, index: number) => {
          return (
            <tr className="table-body-row" key={index}>

              {props.elementTypes.map((type: any, index: number) => {
                return <td className="table-body-td" key={index}>{element[type]}</td>;
              })}
              
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TasksTable;