import React from "react";

function Search(props) {
  
  return (
    <form className="row g-3" onSubmit={props.onSubmit}>
      <div className="col-9">
        <input type="text" value={props.search} onChange={props.onChange} className="form-control w-100" placeholder="Enter domain name... (e.g. msn.com)" />
      </div>
      <div className="col-3">
        <button type="submit" className="btn btn-primary mb-3 w-100">Parse</button>
      </div>
    </form>
  );

}


export default Search;