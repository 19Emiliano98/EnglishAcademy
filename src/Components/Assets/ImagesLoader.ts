import BrazilLogo from '../../Img/Languages/brazil.png';
import ItalyLogo from '../../Img/Languages/italy.png';
import UKLogo from '../../Img/Languages/unitedKingdom.png';
import Presenciales from '../../Img/Courses/Presenciales.png';
import Virtuales from '../../Img/Courses/Virtuales.png';
import Viajeros from '../../Img/Courses/Viajeros.png';
import Facebook from '../../Img/Socials/facebook.png';
import Instagram from '../../Img/Socials/instagram.png';

interface arrayProps{
  src: string;
  alt: string;
}

export const languagesLogos:arrayProps[] = [ 
  { src: UKLogo, alt: 'Inglés'},
  { src: ItalyLogo, alt: 'Italiano' },
  { src: BrazilLogo, alt: 'Portugues' }
];

export const CursosImages:arrayProps[] = [ 
  { src: Presenciales, alt: 'Clases Presenciales'},
  { src: Virtuales, alt: 'Clases Virtuales' },
  { src: Viajeros, alt: 'Viajeros' }
];

export const LogosSocial:arrayProps[] = [ 
  { src: Instagram, alt: 'Instagram' },
  { src: Facebook, alt: 'Facebook'}
];