

const MainInicio = () => {
  return (
    <div className="container">
      <h2 className="text-center py-4">Curso de Rect</h2>
      <h4 className="text-center py-4">Bootstrap / react-router-dom / useState useEffect / useParams </h4>
      <div className="row">
        <div className="col-md-8 ">
          <ul>
            <li><b>React Bootstrap: </b>Es una biblioteca que proporciona componentes de interfaz de usuario predefinidos para construir aplicaciones web responsivas y compatibles con dispositivos móviles utilizando React. Permite a los desarrolladores incorporar fácilmente los estilos CSS y los componentes JavaScript de Bootstrap en sus proyectos de React, lo que facilita la creación de interfaces de usuario visualmente atractivas y consistentes.</li>
            <li><b>react-router-dom:</b> Es una biblioteca que proporciona capacidades de enrutamiento para aplicaciones React. Permite a los desarrolladores definir diferentes rutas y asignarlas a componentes específicos, lo que permite la navegación entre diferentes páginas o vistas dentro de una aplicación de una sola página. Proporciona componentes como BrowserRouter, Route, Link y useParams que facilitan la implementación de enrutamiento del lado del cliente en React.</li>
            <li><b>useState:</b> Es un hook proporcionado por React que permite a los componentes funcionales tener estado. Devuelve un valor de estado y una función para actualizar ese valor. Al utilizar useState, puedes administrar y actualizar el estado de tu componente sin necesidad de convertirlo en un componente de clase. Se utiliza comúnmente para almacenar y actualizar datos que pueden cambiar con el tiempo, como entradas de formularios, interruptores o datos de API.</li>
            <li><b>useEffect:</b> Es otro hook proporcionado por React que te permite realizar efectos secundarios en componentes funcionales. useEffect toma una función como primer argumento, que se ejecutará después de que el componente se haya renderizado. Se puede utilizar para obtener datos, suscribirse a eventos o realizar cualquier otro efecto secundario. El segundo argumento de useEffect es un array de dependencias, y el efecto solo se volverá a ejecutar si alguna de las dependencias cambia.</li>
            <li><b>useParams:</b> Es un hook proporcionado por react-router-dom que te permite acceder a los parámetros de la URL de la ruta actual. Devuelve un objeto que contiene pares clave-valor de los parámetros de URL definidos en la ruta. Se utiliza comúnmente cuando tienes rutas dinámicas con marcadores de posición, como /usuarios/:id, y quieres acceder al parámetro id en tu componente.</li>
          </ul>
          <p><b>Estas bibliotecas y hooks se utilizan comúnmente en el desarrollo de React para mejorar la funcionalidad y la experiencia del usuario de las aplicaciones web.</b></p>
        </div>
        <div className="col-md-4">
          <img src="nosotros.jpg" alt="" className="img-fluid mb-4" />
          <img src="nosotros2.jpg" alt="" className="img-fluid" />
        </div>
      </div>
      <div>
        <h5>7 Componets</h5>
        <p>Card.jsx / Footer.jsx / Header.jsx / MainContactos.jsx / MainInicio.jsx / MainPeliculas.jsx / Paginar.jsx</p>
        <h5>3 Paginas</h5>
        <p>Inicio.jsx / Contactos.jsx / Peliculas.jsx </p>
      </div>


  </div>
  )
}

export default MainInicio