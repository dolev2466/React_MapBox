interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => (
  <header className='main-header'>{name}</header>
);

export default Header;
