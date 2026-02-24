import React from "react";

function Footer() {
  return (
    <footer className="bg-transparent border-t border-gray-200/20 dark:border-gray-700/30 py-5 px-6 backdrop-blur-sm">
      <div className="">
        <div className="text-end">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-700">Sumit Kumar</span> All rights
            reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Crafted with passion and precision
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
