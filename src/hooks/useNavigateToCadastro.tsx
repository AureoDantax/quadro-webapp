import { useNavigate } from 'react-router-dom';

export const useNavigateToCadastro = () => {
  const navigate = useNavigate();

  const goToCadastro = () => {
    navigate('/cadastro');
  };

  return { goToCadastro };
};