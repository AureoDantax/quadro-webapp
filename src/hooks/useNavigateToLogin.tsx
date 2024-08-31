import { useNavigate } from 'react-router-dom';

export const useNavigateToLogin = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/');
  };

  return { goToLogin };
};