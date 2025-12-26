export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Suchitra Kumar Sahoo. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion and code
          </p>
        </div>
      </div>
    </footer>
  );
};
