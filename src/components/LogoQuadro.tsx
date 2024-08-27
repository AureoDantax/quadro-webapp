import styled from 'styled-components';
import logoLogin from '../assets/logo-login.png';

const LogoImage = styled.img`
  width: 327px;
  height: auto;
  display: block;
  margin: 0 auto;
  padding-bottom: 60px;
`;

const Logologin: React.FC = () => {
    return (
        <>
            <LogoImage src={logoLogin} alt="Logo do Login" />
        </>
    );
}

export default Logologin;
