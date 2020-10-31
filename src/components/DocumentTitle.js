import { useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import projects from '../config/projects';
import strings from '../config/strings';

function DocumentTitle() {
  const history = useHistory();
  const location = useLocation();

  const setDocumentTitle = useCallback((location) => {
    try {
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
          if (location.pathname.includes('/art-details/')) {
            const slug = location.pathname.replace('/art-details/', '');
            const project = projects?.find((project) => project.slug === slug);
            if (!!project) {
              document.title = `Dante Livingston - ${strings[project.type]} - ${project.title}`;
            }
          } else {
            document.title = 'Dante Livingston';
          }
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setDocumentTitle(location);
  }, [location, setDocumentTitle]);

  history.listen(setDocumentTitle);
  return null;
}

export default DocumentTitle;
