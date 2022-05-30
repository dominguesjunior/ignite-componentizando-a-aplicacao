import { useCallback, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleClick = useCallback(setSelectedGenreId, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} handleClick={handleClick} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}