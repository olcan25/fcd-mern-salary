import { useNavigate } from "react-router-dom";

const TableBody = (props) => {
  const navigate = useNavigate();
  const { headers, row, index, navRouter } = props;

  const onDelete = (data) => {
    navigate(`/${navRouter}/delete`, { state: data });
  };

  const onEdit = (data) => {
    navigate(`/${navRouter}/edit`, { state: data });
  };
  return (
    <tbody>
      <tr>
        <td>{index + 1}</td>
        {Object.keys(headers).map((header) => {
          return <td key={header}>{row[header]}</td>;
        })}
        <td>
          <button className="btn btn-primary" onClick={() => onEdit(row)}>
            Düzenle
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(row)}>
            Sil
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
