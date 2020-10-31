import { useHistory } from 'react-router-dom';

function DocumentTitle() {
  const history = useHistory();
  history.listen((location) => {
    switch (location.pathname) {
      case '/about':
        document.title = 'Dante Livingston - About';
        break;
      case '/digital-art':
        document.title = 'Dante Livingston - Digital Art';
        break;
      case '/traditional-art':
        document.title = 'Dante Livingston - Traditional Art';
        break;
      case '/art-details/tools':
        document.title = 'Dante Livingston - Tools';
        break;
      default:
        if (location.pathname.includes('art-details')) {
          console.log('foo');
        } else {
          document.title = 'Dante Livingston';
        }
        break;
    }
  });
  return null;
}

export default DocumentTitle;
