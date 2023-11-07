import { Link } from 'react-router-dom'


const Wellcome = () => {
  return (
    <div>
        <Link to="/login">Deseja fazer login? Clique aqui!</Link>
        <Link to="/register">Deseja fazer cadastro? Clique aqui!</Link>
    </div>
  )
}

export default Wellcome