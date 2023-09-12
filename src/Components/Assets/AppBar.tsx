import React from 'react';
import Link from '@mui/material/Link/Link';
import { Box, Toolbar, MenuItem, Avatar } from '@mui/material';
import logo1 from '../../Img/logo1.png';
//import logo2 from '../../Img/logo2.png';

interface linkBarProp {
  title: string;
  dominion: string;
}
const linkBar:linkBarProp[] = [ 
  { title:'Exámenes internacionales', dominion: 'aboutme' }, 
  { title: 'Cursos de Inglés', dominion: 'technologies' }, 
  { title: 'Coworking', dominion: 'experience' }, 
  { title: 'Sobre Nosotros', dominion: 'projects' },
  { title: 'Contacto', dominion: 'projects' }
];

const renderOptionBar = (
  linkBar.map( links => (
    <MenuItem key={links.title}>
      <Link 
        sx={{ 
          textDecoration: 'none', color: '#1F1855',
          fontSize: { md: '22px', sm: '15px', xs: '13px' },
          ml: { md: 0, xs: -2.3} 
        }} 
        href={ `${links.dominion}` }
      >
        {links.title}
      </Link>
    </MenuItem>
  ))
);

export const AppBar: React.FC = () => {
  return (
    <Box>
      <Toolbar 
        sx={{ 
          display: 'flex', justifyContent: { sm: 'flex-end', xs: 'center' }, alignItems: 'center',
          position: 'fixed', backgroundColor: '#FFA500', minWidth: '98vw', boxShadow: '0px 5px 35px rgba(0, 0, 0, 0.5)', zIndex: 1
        }}
      >
        <Avatar 
          sx={{
            position: 'absolute',
            width: { xl: '160px', md: '130px', xs: '105px' },
            height: { xl: '160px', md: '130px', xs: '105px' },
            border: '2px solid #171624',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            mr: { lg: '85%', md: '83%', sm: '82%' }, mt: { lg: '6%', sm: '8%', xs: '39%' }
          }}
          alt="Imagen Perfil" 
          src={logo1} 
        />
        { renderOptionBar }
      </Toolbar>
    </Box>
  )
}