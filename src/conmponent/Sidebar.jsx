const Sidebar=({selectedTAb,setselectedTAb})=>{
  const handelONslectedTab=(tabName)=>{
    setselectedTAb(tabName);
  }
  return <>
   <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={()=>{handelONslectedTab("Home")}}>
          <a href="#" className={`nav-link ${selectedTAb=="Home" && "active"}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
        onClick={()=>{handelONslectedTab("Creat Post")}}
        >
          <a href="#" className={`nav-link ${selectedTAb=="Creat Post" && "active"}`}>
            <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Creat Post
          </a>
        </li>
      </ul>
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
       
      </div>
    </div>
  </>
}
export default Sidebar;
