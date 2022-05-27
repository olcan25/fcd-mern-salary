import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableView = (props) => {
  const { headers, data, navRouter } = props;
  return (
    <table className="table table-border table-hover table-bordered">
      <TableHeader headers={headers} />
      {data.map((row, index) => {
        return (
          <TableBody
            key={row._id}
            headers={headers}
            row={row}
            index={index}
            navRouter={navRouter}
          />
        );
      })}
    </table>
  );
};

export default TableView;
