import Sidebar from '../components/Sidebar';

export function Home(){
    return(
        <>
        <Sidebar />
        </>
    )
}
import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="app">
      {/* Texto */}
      <div className="text32">Texto 32</div>
      <div className="text33">Texto 33</div>
      <div className="text34">Texto 34</div>
      <div className="text35">Texto 35</div>
      <div className="text36">Texto 36</div>
      <div className="text37">Texto 37</div>
      <div className="text38">Texto 38</div>
      <div className="text39">Texto 39</div>
      <div className="text40">Texto 40</div>
      <div className="text41">Texto 41</div>
      <div className="text42">Texto 42</div>
      <div className="text43">Texto 43</div>
      <div className="text44">Texto 44</div>
      <div className="text45">Texto 45</div>
      <div className="text46">Texto 46</div>
      <div className="text47">Texto 47</div>
      <div className="text48">Texto 48</div>
      <div className="text49">Texto 49</div>

      {/* Navegação */}
      <img className="next-page" src="/path/to/next-icon.png" alt="Próxima Página" />
      <img className="back-to" src="/path/to/back-icon.png" alt="Voltar" />

      {/* Títulos */}
      <div className="semestre-atual2">Semestre Atual</div>
      <div className="portal-do-aluno">Portal do Aluno</div>
      <div className="ol-apelido-o-que-temos-por-hoje">O que temos por hoje?</div>

      {/* Pesquisa */}
      <div className="pesquisa">
        <div className="rectangle-6"></div>
        <div className="pesquisar">Pesquisar</div>
        <img className="search" src="/path/to/search-icon.png" alt="Pesquisar" />
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-div">
          <img className="icons-8" src="/path/to/icons-8.png" alt="Ícone 8" />
          <img className="check-mark" src="/path/to/check-mark.png" alt="Check Mark" />
          <img className="google-alerts" src="/path/to/google-alerts.png" alt="Google Alerts" />
          <img className="settings" src="/path/to/settings.png" alt="Configurações" />
          <img className="logout" src="/path/to/logout.png" alt="Sair" />
        </div>
      </div>

      {/* Logo */}
      <img className="logoquadroyellownew-1" src="/path/to/logo.png" alt="Logo Quadro" />
    </div>
  );
}

export default App;
