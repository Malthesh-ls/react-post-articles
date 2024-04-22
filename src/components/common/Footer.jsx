function Footer() {
  const currentDate = new Date();

  return (
    <div className="footer">
      &copy;
      {currentDate.getFullYear()}
      {' '}
      - React Post Articles
    </div>
  );
}

export default Footer;
