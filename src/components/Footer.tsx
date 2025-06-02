import { footerLinks } from '../constants/data';
import Container from './Container';
import { LogoText } from './LogoText';

export const Footer = () => {
  return (
    <footer className="footer mt-12 border-t border-solid border-[var(--border-default)] ">
      <Container>
        <div className="footer-top grid grid-cols-12">
          <div className="col-span-4 flex flex-col gap-2 pr-2">
            <LogoText isHeader={false} />

            <p className="text-[var(--color-muted)] w-96 max-w-full">
              LegitCrypto offers essential crypto market insights by tracking prices, volumes,
              market cap, community growth, open-source activity, major events, and on-chain
              metrics.
            </p>
          </div>

          {footerLinks?.map((item, index) => (
            <div className="col-span-2 px-2" key={index}>
              <h3 className="font-semibold mb-4">{item?.title}</h3>

              <ul className="flex flex-col gap-2">
                {item?.data?.map((link, linkIndex) => (
                  <li className="text-[var(--color-muted)]" key={linkIndex}>
                    <a href={link?.href}>{link?.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-solid border-[var(--border-default)] text-center py-4">
        © All rights reserved - CMDN-HoangNguyen
      </div>
    </footer>
  );
};
