import { Error } from './components/Error';
import { ERROR_TYPE } from '../../../../constants/enum';

const ErrorSection = () => {
  return (
    <main className="min-h-[100vh]">
      <Error
        message="The page you're looking for doesn't exist or may have been moved. Please check the URL or return to the homepage."
        errorType={ERROR_TYPE.PAGE}
      />
    </main>
  );
};

export default ErrorSection;
