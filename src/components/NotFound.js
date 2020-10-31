import { Link } from 'react-router-dom';
import strings from '../config/strings';

function NotFound() {
  return (
    <div className='text-center'>
      <div className='display-1'>{strings.pageNotFoundTitle}</div>
      <h1>{strings.pageNotFoundDescription}</h1>
      <Link to='/'>{strings.pageNotFoundGoHome}</Link>
    </div>
  );
}

export default NotFound;
