export function FormGroup({ children }) {
  return (
    <div className="form-group ">
      {children}
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />
      <div className="error-message">Required</div>
    </div>
  );
}
