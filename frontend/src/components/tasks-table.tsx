import Edit from "../assets/edit-icon";
import "../styles/tasks-table.scss";
interface TableProps {
  head: string[];
  body: any;
  elementTypes: any;
  handelButtonDelete: any;
  handelButtonUpdate: any;
}

const TasksTable = (props: TableProps) => {
  return (
    <table className="table">
      {/* Create table header content*/}
      <thead>
        <tr className="table-head-row">
          <th className="table-th-empty"></th>
          <th className="table-th-empty"></th>
          {props.head
            .slice(0)
            .reverse()
            .map((element: string, index: number) => {
              return (
                <th className="table-th" key={index}>
                  {element}
                </th>
              );
            })}

        </tr>
      </thead>

      {/* Create table body content */}
      <tbody>
        {props.body.map((element: any, index: number) => {
          return (
            <tr className="table-body-row" key={index}>
              <td>
                <button
                  className="table-row-delete"
                  onClick={() => {
                    props.handelButtonDelete(index);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="table-row-update"
                  onClick={() => {
                    props.handelButtonUpdate(element,index);
                  }}
                >
                  {" "}
                  <Edit />
                </button>
              </td>
              {props.elementTypes
                .slice(0)
                .reverse()
                .map((type: any, index: number) => {
                  return (
                    <td className="table-body-td" key={index}>
                      {element[type]}
                    </td>
                  );
                })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TasksTable;
