
const TableHeader = (props) => {
  return (
    <thead className="table table-primary">
      <tr>
        <th>#</th>
        {Object.values(props.headers).map((header) => {
          return <th key={header}>{header}</th>;
        })}
        <th>İşlemler</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
