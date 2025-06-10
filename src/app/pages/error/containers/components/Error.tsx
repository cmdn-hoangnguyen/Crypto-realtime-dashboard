import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../../components/Button';
import { errorData } from '../../../../../constants/data';
import { BUTTON_VARIANT, type ERROR_TYPE } from '../../../../../constants/enum';

interface Props {
  message: string;
  errorType?: ERROR_TYPE;
}

export const Error = ({ message, errorType }: Props) => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)] px-4 py-8">
      <div className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 items-center text-center">
        {errorType && (
          <div className="w-full">
            <img
              className="mx-auto h-auto max-w-full"
              src={errorData?.[errorType]?.image?.url}
              alt={errorData?.[errorType]?.image?.alt}
            />
          </div>
        )}

        <div
          className={clsx(
            'flex flex-col items-center justify-center w-full',
            errorType ? '' : 'md:col-span-2'
          )}
        >
          <div className="mb-6">
            <span className="text-6xl font-bold text-[var(--text-primary)]">404</span>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--text-secondary)]">
              OOPS! {errorType} NOT FOUND
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-base text-[var(--text-primary)]">{message}</p>

            <Button
              variant={BUTTON_VARIANT.DEFAULT}
              label="Back to Homepage"
              onClick={() => navigate('/')}
              ariaLabel="Back to Homepage button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
