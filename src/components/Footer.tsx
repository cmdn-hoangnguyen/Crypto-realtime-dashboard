import Container from './Container';
import { LogoText } from './LogoText';
import { footerLinks } from '../constants/data';

export const Footer = () => {
  return (
    <footer className="footer mt-12 border-t border-solid border-[var(--border-default)] ">
      <Container>
        <div className="footer-top grid grid-cols-12">
          <div className="xl:col-span-4 col-span-12 flex flex-col gap-2 xl:pr-2 mb-8">
            <LogoText isHeader={false} />

            <p className="md:text-lg text-sm text-[var(--text-secondary)] ">
              LegitCrypto offers essential crypto market insights by tracking prices, volumes,
              market cap, community growth, open-source activity, major events, and on-chain
              metrics.
            </p>
          </div>

          {footerLinks?.map((item, index) => (
            <div className="xl:col-span-2 md:col-span-3 col-span-6 xl:px-2 pr-2 mb-8" key={index}>
              <h3 className="text-[var(--text-primary)] font-semibold mb-4">{item?.title}</h3>

              <ul className="flex flex-col gap-2">
                {item?.data?.map((link, linkIndex) => (
                  <li className="text-[var(--text-secondary)] md:text-lg text-sm" key={linkIndex}>
                    <a href={link?.href}>{link?.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="text-[var(--text-secondary)] text-center md:text-lg text-sm border-t border-solid border-[var(--border-default)] py-4">
        © All rights reserved - CMDN-HoangNguyen
      </div>
    </footer>
  );
};
