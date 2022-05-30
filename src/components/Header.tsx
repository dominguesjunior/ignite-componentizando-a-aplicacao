import { memo } from "react";

interface HeaderProps {
    title: string;
}

function HeaderComponent(props: HeaderProps) {
    return (
        <header>
          <span className="category">Categoria:<span> {props.title}</span></span>
        </header>
    );
}

export const Header = memo(HeaderComponent, (prevProps, nextProps) => {
    return prevProps.title === nextProps.title;
});