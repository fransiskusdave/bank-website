import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} flex-col md:flex-row w-full mb-8`}>
      <div className="flex-1 flex flex-col mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex flex-[1.5] w-full justify-between flex-wrap mt-10 md:mt-0">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="flex flex-col my-4 ss:my-0 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="flex flex-col gap-y-4 list-none mt-4">
              {footerLink.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leadiing-[27px] text-white">
        2024 Fransiskus Dave. All Rights Reserved
      </p>
      <div className="flex mt-6 md:mt-0 gap-x-6">
        {socialMedia.map((social) => (
          <img
            src={social.icon}
            alt={social.id}
            key={social.id}
            className="w-[21px] h-[21px] object-contain cursor-pointer"
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
