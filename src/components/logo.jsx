import PropTypes from 'prop-types';
import { useRouter } from 'next-nprogress-bar';
import 'src/app/main.css';
import Image from 'next/image'
import tttlogo from '../../public/images/logo1.png';
// mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Logo = () => {
  const theme = useTheme();
  const { push } = useRouter();
  return (
    <Box
      onClick={() => push('/')}
    >
      <h1 className='logo' style={{width:'240', height:'45', color:'#c21d5f', fontSize:'38px', objectFit:"cover", cursor:"pointer"}}>FemmeFlair</h1>

      {/* <Image src={tttlogo} width={240}   alt='FemmeFlair'  objectFit="cover" style={{objectFit:"cover", cursor:"pointer"}}/> */}
      
    </Box>
  );
};

Logo.propTypes = {
  sx: PropTypes.object,
  isMobile: PropTypes.bool
};
export default Logo;
