

const Paginar = ({currentPage, totalPages, handlePageChange }) => {
    return (
      <div className="d-flex justify-content-between align-content-center " id="paginar">
          <h3 className="titulo2 p-2">
            Pagina ({currentPage} de {totalPages})
          </h3>
          <nav aria-label="...">
              <ul className="pagination pagination-sm">
              <li className="page-item">
                  <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  >
                  Anterior
                  </a>
              </li>
              <li className="page-item active">
                  <a className="page-link" href="#">
                  {currentPage}
                  </a>
              </li>
              <li className="page-item">
                  <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                  >
                  Siguiente
                  </a>
              </li>
              </ul>
          </nav>
    </div>
    )
  }
  
  export default Paginar