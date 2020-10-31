import { Link } from 'react-router-dom';
import strings from '../config/strings';

function NotFound({ is404 }) {
  return (
    <div className='text-center'>
      <div className='display-1'>{strings.errorTitle}</div>
      <h1>{is404 ? strings.errorNotFound : strings.errorGeneric}</h1>
      <Link to='/'>{strings.errorGoHome}</Link>
    </div>
  );
}

export default NotFound;
