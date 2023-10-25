import { useParams } from "react-router-dom"
import MainPeliculas from "../componenets/MainPeliculas"
const Peliculas = () => {
  const params = useParams()
  console.log(params.id)
  return (
    <>
      <MainPeliculas id={params.id} />
    </>
  )
}
export default Peliculas