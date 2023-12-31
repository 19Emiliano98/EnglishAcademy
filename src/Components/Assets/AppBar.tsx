import React from 'react';
import { Navbar, LinkNavbar } from './Styles';
import Link from '@mui/material/Link/Link';
import { Box, Toolbar, MenuItem, CardMedia } from '@mui/material';
import logo1 from '../../Img/logos/logo1.png';
//import logo2 from '../../Img/logo2.png';

interface linkBarProp {
  title: string;
  dominion: string;
  border: string;
}
const linkBar:linkBarProp[] = [ 
  { title:'Exámenes internacionales', dominion: 'aboutme', border: '1px' }, 
  { title: 'Cursos de Inglés', dominion: 'technologies', border: '1px' }, 
  { title: 'Coworking', dominion: 'experience', border: '1px' }, 
  { title: 'Sobre Nosotros', dominion: 'projects', border: '1px' },
  { title: 'Contacto', dominion: 'projects', border: '0px' }
];

const renderOptionBar = (
  linkBar.map( links => (
    <MenuItem key={links.title}>
      <Link 
        sx={{ ...LinkNavbar, borderRight: `${links.border} solid black` }} 
        href={ `${links.dominion}` }
      >
        {links.title}
      </Link>
    </MenuItem>
  ))
);

const AppBar: React.FC = () => {
  return (
    <Toolbar sx={{ ...Navbar }}>
      <CardMedia
        sx={{
          width: '197px',
          height: '109px',
          borderRadius: '25px',
          mr: '32%'
        }}
        component="img"
        image={logo1} 
        alt="Access Idiomas"
      />
      <Box sx={{ display: 'flex', mr: 13}}>
        { renderOptionBar }
      </Box>
    </Toolbar>
  )
}

export default AppBar;