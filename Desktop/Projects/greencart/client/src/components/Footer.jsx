import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-gradient-to-t from-gray-100 via-white to-gray-200">
      {/* Footer Top Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12 p-20 border-b border-gray-300 shadow-sm">
        <div>
          <img className="w-36 md:w-32" src={assets.logo} alt="logo" />
          <p className="max-w-[410px] mt-6 text-gray-600">
            We deliver fresh groceries and snacks straight to your door. Trusted
            by thousands, we aim to make your shopping experience simple and
            affordable.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-8">
          {footerLinks.map((section, index) => (
            <div key={index} className="group">
              <h3 className="font-semibold text-base text-gray-800 mb-4">
                {section.title}
              </h3>
              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="group-hover:text-primary transition-all"
                  >
                    <a href={link.url} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <p className="py-6 text-center text-sm md:text-base text-gray-500/80">
        Copyright ©2025 DevarshiAPatel. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
