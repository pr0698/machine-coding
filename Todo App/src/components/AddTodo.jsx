function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter a to do"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
