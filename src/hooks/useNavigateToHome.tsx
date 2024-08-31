import { useNavigate } from 'react-router-dom';

export const useNavigateToHome = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return { goToHome };
};