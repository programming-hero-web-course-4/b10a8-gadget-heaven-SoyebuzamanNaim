const Footer = () => {
  return (
    <footer className="bg-white p-10">
      <div className="container mx-auto text-center">
        <h2 className="text-black text-2xl font-bold mb-4">Gadget Heaven</h2>
        <p className="text-gray-500 pb-5 border-b border-gray-400">
          Leading the way in cutting-edge technology and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <nav>
            <h6 className=" text-black font-extrabold mb-4">
              Services
            </h6>
            <ul className="space-y-2">
              <li>
                <a className="link link-hover text-gray-600">Product Support</a>
              </li>
              <li>
                <a className="link link-hover text-gray-600">Order Tracking</a>
              </li>
              <li>
                <a className="link link-hover text-gray-600">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a className="link link-hover text-gray-600">Returns</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className=" text-black font-extrabold mb-4">
              Company
            </h6>
            <ul className="space-y-2">
              <li>
                <a className="link link-hover text-gray-600">About Us</a>
              </li>
              <li>
                <a className="link link-hover text-gray-600">Careers</a>
              </li>
              <li>
                <a className="link link-hover text-gray-600">Contact</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className=" text-black font-extrabold mb-4">
              Legal
            </h6>
            <ul className="space-y-2">
              <li>
                <a className="link link-hover text-gray-600">Terms of Use</a>
              </li>
              <li>
                <a className="link link-hover text-gray-600">Privacy Policy</a>
              </li>
              <li>
                <a className="link link-hover text-gray-600">Cookie Policy</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
