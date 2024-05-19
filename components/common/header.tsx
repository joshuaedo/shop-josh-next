interface HeaderProps {
  title?: string;
  description?: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <header className='text-center border-b border-black py-6 md:py-8 lg:py-10 xl:py-12'>
      <h2 className='text-xl '>{title}</h2>
      {description && (
        <p className='text-sm text-muted-foreground'>{description}</p>
      )}
    </header>
  );
};
